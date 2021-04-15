import React from 'react'
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState()
    function handleEditAvatarClick() {
        setEditAvatarPopupOpen(true)
    }
    
    function handleEditProfileClick() {
        setEditProfilePopupOpen(true)
    }
    
    function handleAddPlaceClick() {
        setAddPlacePopupOpen(true)
    }

    function handleCardClick(card) {
        setSelectedCard(card)
    }
    function closeAllPopups () {
        document.querySelector(".popup").classList.remove('popup_opened')
        setEditProfilePopupOpen(false)
        setAddPlacePopupOpen(false)
        setEditAvatarPopupOpen(false)
        setSelectedCard(false)
    } 
  return (
    <>
    <div className="page">
        <Header />
        <Main onEditProfile = {handleEditProfileClick} onAddPlace = {handleAddPlaceClick} onEditAvatar = {handleEditAvatarClick} onCardClick = {handleCardClick} />
        <Footer />
        <PopupWithForm isOpen = {isEditProfilePopupOpen} name ="edit" title = "Редактировать профиль" onClose = {closeAllPopups}>
            <label className="popup__form-field">
                <input id="name-input" type="text" placeholder="Введите имя" name="name" className="popup__text popup__text_type_name" required minlength="2" maxlength="40"/>
                <span className="name-input-error popup__text-error"></span>
            </label>
            <label className="popup__form-field">
                <input id="user-about-input" type="text" placeholder="Введите профессию" name="about" className="popup__text popup__text_type_about" required minlength="2" maxlength="200" />
                <span className="user-about-input-error popup__text-error"></span>
            </label>
            <button type="submit" value="Сохранить" name="save" className="popup__submit-button">Сохранить</button>
        </PopupWithForm>
        <PopupWithForm isOpen = {isAddPlacePopupOpen} name ="add" title = "Новое место" onClose = {closeAllPopups}>
            <label className="popup__form-field">
                <input id="place-title-input" type="text" placeholder="Название" name="name" className="popup__text popup__text_type_title" required minlength="2" maxlength="30" />
                <span className="place-title-input-error popup__text-error"></span>
            </label>
            <label className="popup__form-field">
                <input id="place-link-input" type="url" placeholder="Ссылка на картинку" name="link" className="popup__text popup__text_type_link" required />
                <span className="place-link-input-error popup__text-error"></span>
            </label>
            <button type="submit" value="Создать" name="save" className="popup__submit-button">Создать</button>
        </PopupWithForm>
        <PopupWithForm isOpen = {isEditAvatarPopupOpen} name ="edit-profile" title = "Обновить аватар" onClose = {closeAllPopups}>
            <label className="popup__form-field">
                <input id="avatar-link-input" type="url" placeholder="Ссылка на картинку" name="link" className="popup__text popup__text_type_title" required minlength="2" maxlength="200" />
                <span className="avatar-link-input-error popup__text-error"></span>
            </label>
            <button type="submit" value="Сохранить" name="save" className="popup__submit-button">Сохранить</button>
        </PopupWithForm>
        <ImagePopup card = {selectedCard} onClose = {closeAllPopups} />
        </div>
        <template className="element-template card-template_type_photo">
              <div className="element">
                <img src="#" alt="картинка местности" className="element__photo" />
                <h2 className="element__title"> </h2>
                <div className="element__block-likes">
                  <button className="element__button" type="button"></button>
                  <p className="element__like-counter">0</p>
                </div>
                <button className="element__button-trash" type="button"></button>
              </div>
            </template>
        </>
  );
}

export default App;
