import React, {useState, useEffect} from 'react'
import { getMember, updateMember } from '../../lib/api/memberAPI';
import Button from '../../components/button/Button';
import Loading from '../../components/loading/Loading';
import { Input } from 'antd';
import { InstagramOutlined, AlignLeftOutlined, RadarChartOutlined } from '@ant-design/icons';
import './MemberDetail.scss'

function MemberDetail({match}) {
    const [ memberState, setMemberState ] = useState({
        status: 'idle',
        member: null
    });
    
    useEffect(() => {
        (async () => {
            try {
                setMemberState({ status: 'pending', member: null });
                const result = await getMember(match.params.id);
                //console.log(result);
                setTimeout(() => setMemberState({ status: 'resolved', member: result }), 800);
                
            } catch (e) {
                setMemberState({ status: 'rejected', member: null });
            }
        })();
    }, []);

const onChangeInputs = async (evt) =>{
    const {name, value} = evt.target;
    const result = await updateMember(match.params.id, {
        ...memberState.member,
        [name]: value
    });
    setMemberState({
        status: 'resolved',
        member: result
    });
    //console.log(result);
}

    switch (memberState.status) {
        case 'pending':
            return <Loading />;
        case 'rejected':
            return <div>데이터 로드 실패!</div>
        case 'resolved':
            return (
                <>
                    <div className="member-detail">
                        <div className="member-detail__button-area">
                            <Button text="Add icon"></Button>
                            <Button text="Add cover"></Button>
                        </div>
                            <Input className="member-detail__content name" bordered={false} name="name" value={memberState.member.name} onChange={onChangeInputs}/>
                        <hr style={{borderTop: "solid 1px #eee", marginBottom: "24px"}}/>
                        <div className="member-detail__content">
                            <div className="content-title"><InstagramOutlined />&nbsp; 인스타 아이디</div>
                            <Input className="content-input" bordered={false} name="instagram" value={memberState.member.instagram} onChange={onChangeInputs}/>
                        </div>
                        <div className="member-detail__content">
                            <div className="content-title"><AlignLeftOutlined />&nbsp; 한 줄 소개</div>
                            <Input className="content-input oneline" bordered={false} name="introduction" value={memberState.member.introduction} onChange={onChangeInputs}/>
                        </div>
                        <div className="member-detail__content">
                            <div className="content-title"><RadarChartOutlined />&nbsp; mbti</div>
                            <Input className="content-input" bordered={false} name="mbti" value={memberState.member.mbti} onChange={onChangeInputs}/>
                        </div>
                        <div className="member-detail__content">
                            { memberState.member.profileUrl !== '' ? <img className="content-image" src={memberState.member.profileUrl} alt={'profile url'} /> : '' }
                        </div>
                    </div>
                </>
            );
        case 'idle':
        default :
            return <div>idle 입니다</div>
    }
}

export default MemberDetail
