import React from 'react'
import './MainHeader.scss';
import Button from '../button/Button';
import MenuIcon from '../../assets/icons/mdi_dehaze.svg';

function MainHeader({history}) {
    return (
        <header className="main-header">
            <img className="main-header__icon"/>
            <nav>
                <Button className="button" text="🕸&nbsp;&nbsp;[ON SOPT파트] Web Part" src={MenuIcon} onClickFunc={()=> history.push('/')}></Button>
                <Button className="button" text="⭐️&nbsp;&nbsp;파트원 소개" onClickFunc={()=> history.push('/members')}></Button>
            </nav>
            <div className="empty"></div>
            <div className="main-header__nav">
                <Button text="Share"></Button>
                <Button text="Updates"></Button>
                <Button text="Favorites"></Button>
                <Button text="…"></Button>
            </div>
        </header>
    )
}

export default MainHeader
