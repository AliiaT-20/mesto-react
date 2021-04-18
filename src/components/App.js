import React from 'react'
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setIsSelectedCard] = React.useState([])
    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true)
    }
    
    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true)
    }
    
    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true)
    }

    function handleCardClick(card) {
        setIsSelectedCard(card)
    }
    function closeAllPopups () {
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setIsEditAvatarPopupOpen(false)
        setIsSelectedCard(false)
    } 
  return (
    <>
    <div className="page">
        <Header />
        <Main onEditProfile = {handleEditProfileClick} onAddPlace = {handleAddPlaceClick} onEditAvatar = {handleEditAvatarClick} onCardClick = {handleCardClick} />
        <Footer />
        <PopupWithForm isOpen = {isEditProfilePopupOpen} name ="edit" title = "Редактировать профиль" onClose = {closeAllPopups}>
            <label className="popup__form-field">
                <input id="name-input" type="text" placeholder="Введите имя" name="name" className="popup__text popup__text_type_name" required minLength="2" maxLength="40"/>
                <span className="name-input-error popup__text-error"></span>
            </label>
            <label className="popup__form-field">
                <input id="user-about-input" type="text" placeholder="Введите профессию" name="about" className="popup__text popup__text_type_about" required minLength="2" maxLength="200" />
                <span className="user-about-input-error popup__text-error"></span>
            </label>
            <button type="submit" value="Сохранить" name="save" className="popup__submit-button">Сохранить</button>
        </PopupWithForm>
        <PopupWithForm isOpen = {isAddPlacePopupOpen} name ="add" title = "Новое место" onClose = {closeAllPopups}>
            <label className="popup__form-field">
                <input id="place-title-input" type="text" placeholder="Название" name="name" className="popup__text popup__text_type_title" required minLength="2" maxLength="30" />
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
                <input id="avatar-link-input" type="url" placeholder="Ссылка на картинку" name="link" className="popup__text popup__text_type_title" required minLength="2" maxLength="200" />
                <span className="avatar-link-input-error popup__text-error"></span>
            </label>
            <button type="submit" value="Сохранить" name="save" className="popup__submit-button">Сохранить</button>
        </PopupWithForm>
        <ImagePopup card = {selectedCard} onClose = {closeAllPopups} />
        </div>
        </>
  );
}

export default App;
