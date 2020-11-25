import './Card.scss';
import { DeleteOutlined, FileImageOutlined } from '@ant-design/icons';
import {withRouter} from 'react-router-dom';
import {removeMember} from '../../lib/api/memberAPI';

function Card({ history, match, memberData, onRemoveCard }) {

    const onClickRemove = async (evt) => {
        /* 버블링을 막아서 클릭 이벤트 전파를 막아야 상위 요소 클릭이 눌리지 않는다 */
        evt.stopPropagation();
        try{
            await removeMember(memberData.id);
            onRemoveCard(memberData.id);
        }catch(e){
            // 오류 처리
            console.log(e);
        }
    }
    return (
        <div className="card" onClick={() => history.push(`${match.path}/${memberData.id}`)} draggable >
            <div className="remove-button" onClick={onClickRemove}>
                <DeleteOutlined style={{ fontSize: "16px"}}/>
            </div>
            <div className="image-area">
                { memberData.profileUrl !== '' ? <img src={memberData.profileUrl} alt="profile"></img> : <FileImageOutlined style={{fontSize: "40px"}}/> }
            </div>
            <div className="card__content card__text name">{memberData.name}</div>
            <div className="card__content card__text instagram">{memberData.instagram}</div>
            <div className="card__content card__text introduction">{memberData.introduction}</div>
            {
                memberData.mbti &&
                <span className="card__content card__text mbti">{memberData.mbti}</span>
            }
        </div>
    );
}

export default withRouter(Card);