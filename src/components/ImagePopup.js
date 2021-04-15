function ImagePopup(props) {
    return (
        <section className={props.card ? `popup popup_type_image popup_opened` : `popup popup_type_image`}>
            <div className="popup__image-box">
                <img src={props.card} alt="изображение" className="popup__image" />
                <h2 className="popup__image-title">Название</h2>
                <button className="popup__close-button popup__close-button_type_image" type="button" onClick = {props.onClose}></button>
            </div>
        </section>
    );
  }
  
  export default ImagePopup;
  