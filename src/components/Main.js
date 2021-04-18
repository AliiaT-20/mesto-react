import React from 'react';
import Api from '../utils/api';
import Card from './Card';
import editIcon from '../images/edit-icon.svg'

function Main(props) {
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);
    React.useEffect(() => {
        function renderInfo(name, description, avatar) {
            setUserName(name)
            setUserDescription(description)
            setUserAvatar(avatar)
        }
        Api.getProfileInfo()
        .then((info) => {
            renderInfo(info.name, info.about, info.avatar)
        })
        .catch(err => console.log(err));
        Api.getInitialCards()
        .then((data) => {
            setCards(data)
        })
        .catch(err => console.log(err));
    }, [])
    return (
        <main className="content">
                <section className="profile">
                    <div className="profile__info">
                        <div className="profile__avatar-block">
                            <div className="avatar" style={{ backgroundImage: `url(${userAvatar})` }}></div>
                            <div className="profile__wrap-edit" onClick = {props.onEditAvatar}>
                                <img src={editIcon} alt="Редактирование" className="profile__icon" />
                            </div>
                        </div>
                        <div>
                            <div className="profile__text-info">
                                <h1 className="profile__name">{userName}</h1>
                                <button className="profile__edit-button" type="button" onClick = {props.onEditProfile}></button>
                            </div>
                            <p className="profile__about">{userDescription}</p>
                        </div>
                    </div>
                    <button className="profile__add-button" type="button" onClick = {props.onAddPlace}></button>
                </section>
                <section className="elements">
                {cards.map((card) => {
                        return (
                            <Card card = {card} onCardClick = {props.onCardClick} key={card._id} />
                        )
                    })}
                </section>
            </main>
    );
  }
  
  export default Main;
  