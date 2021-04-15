import React from 'react';
import api from '../utils/Api';
import Card from './Card';

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
        api.getProfileInfo()
        .then((info) => {
            renderInfo(info.name, info.about, info.avatar)
        })
        .catch(err => Promise.reject(err));
        api.getInitialCards()
        .then((data) => {
            setCards(data)
        })
    }, [])
    return (
        <main className="content">
                <section className="profile">
                    <div className="profile__info">
                        <div className="profile__avatar-block">
                            <div className="avatar" style={{ backgroundImage: `url(${userAvatar})` }}></div>
                            <div className="profile__wrap-edit" onClick = {props.onEditAvatar}>
                                <img src="../images/edit-icon.svg" alt="Редактирование" className="profile__icon" />
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
                        return <Card card = {card} onCardClick = {props.onCardClick} />
                    })}
                </section>
            </main>
    );
  }
  
  export default Main;

  /*{cards.forEach((card) => {
                        return <div className="element">
                        <div className="element__photo" style = {{backgroundImage: `url(${card.link})`}}></div>
                        <h2 className="element__title">{card.name}</h2>
                        <div className="element__block-likes">
                          <button className="element__button" type="button"></button>
                          <p className="element__like-counter">{card.likes.length}</p>
                        </div>
                        <button className="element__button-trash" type="button"></button>
                      </div>
                    })}*/
  