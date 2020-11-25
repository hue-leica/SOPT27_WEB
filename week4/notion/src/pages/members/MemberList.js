import './MemberList.scss'
import Button from '../../components/button/Button';
import Card from '../../components/card/Card';
import { useEffect, useState } from 'react';
import Loading from '../../components/loading/Loading';
import { getMembers, createMember } from '../../lib/api/memberAPI';
import styled from 'styled-components';

const CardEmpty = styled.div`

    height: 280px;
    border: solid 1px #ddd;
    border-radius: 8px;
    margin: 8px;
    box-shadow: 1px 1px 5px #ddd;
    position: relative;
    z-index: 2;
    &:hover {
        cursor: pointer;
        background: rgba(0,0,0,0.05);
        .remove-button {
            opacity: 1;
        }
}
`;
const CardEmptyText = styled.div`
    width: 100%;
    height: 100%;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: gray;  
`;

function MemberList({ history, match }) {
    const [membersState, setMembersState] = useState({
        members: null,
        status: 'idle',
    });

    useEffect(() => {
        setMembersState({members: null, status: 'pending'});
        try{
            (async () => {
                const result = await getMembers();
                setTimeout(()=> setMembersState({members: result, status: 'resolved'}),800)
            })();
        }catch(e){
            setMembersState({members:null, status: 'rejected'});
        }
    }, []);

    const removeCard = (id) => {
        setMembersState({
            members: membersState.members.filter(mem => mem.id !== id),
            status: 'resolved'
        });
    };

    const onCreateCard = async () => {
        const object = {
            "name": "",
            "profileUrl": "",
            "introduction": "",
            "mbti": "",
            "instagram": ""
        };
        try{
            const result = await createMember(object);
            setMembersState({
                members: [...membersState.members, result],
                status: 'resolved'
            });
        }catch(e){
            setMembersState({members: membersState.members, status: 'rejected'});
        }
    }

    switch (membersState.status) {
        case 'pending':
            return <Loading />;
        case 'rejected':
            return <div>데이터 로드 실패!</div>
        case 'resolved':
            return (
                <>
                    <div className="member-list">
                        <div className="member-list__title">⭐️ 파트원 소개 *</div>
                        <div className="member-list__header member-list-header">
                            <div className="member-list-header__nav">
                                Gallery View
                                </div>
                            <div className="member-list-header__empty"></div>
                            <Button text="Properties" textColor="#777"></Button>
                            <Button text="Filter" textColor="#777"></Button>
                            <Button text="Sort" textColor="#777"></Button>
                            <Button text="Search" textColor="#777" icon="search"></Button>
                            <Button text="..." textColor="#777"></Button>
                        </div>
                        <hr />
                        <div className="member-list-content-wrapper">
                            {membersState.members.map((member, i) =>
                                <Card key={"card-" + i} 
                                    memberData={member} onRemoveCard={removeCard} />)}
                            <CardEmpty onClick={onCreateCard}>
                                <CardEmptyText>+ New</CardEmptyText>
                            </CardEmpty>
                        </div>
                    </div>
                </>
            );
        case 'idle':
        default :
            return <div>idle 입니다</div>
    }
}

export default MemberList;