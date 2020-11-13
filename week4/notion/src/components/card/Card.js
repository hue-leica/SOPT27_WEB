import './Card.scss';
import { DeleteOutlined, FileImageOutlined } from '@ant-design/icons';

function Card({ route, memberData, onRemoveCard }) {
    return (
        <div className="card" onClick={() => route.history.push(`${route.match.path}/${memberData.id}`)} draggable >
            <div className="remove-button" onClick={onRemoveCard}>
                <DeleteOutlined style={{ fontSize: "16px"}}/>
            </div>
            <div className="image-area">
                { memberData.profileUrl !== '' ? <img src={memberData.profileUrl} alt="profile"></img> : <FileImageOutlined style={{fontSize: "40px"}}/> }
            </div>
            <div className="card__content card__text name">{memberData.name}</div>
            <div className="card__content card__text instagram">{memberData.instagram}</div>
            <div className="card__content card__text introduction">{memberData.introduction}</div>
            <span className="card__content card__text mbti">{memberData.mbti}</span>
        </div>
    );
}

export default Card;