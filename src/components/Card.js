function Card(props) {
    function handleClick() {
        props.onCardClick(props.card.link);
      }  
    return (
        <div className="element">
            <div className="element__photo" style = {{backgroundImage: `url(${props.card.link})`}} onClick = {handleClick}></div>
            <h2 className="element__title">{props.card.name}</h2>
            <div className="element__block-likes">
                <button className="element__button" type="button"></button>
                <p className="element__like-counter">{props.card.likes.length}</p>
            </div>
            <button className="element__button-trash" type="button"></button>
        </div>
    );
  }
  
  export default Card;
  