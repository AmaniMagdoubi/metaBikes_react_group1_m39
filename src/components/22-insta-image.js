const CatCard = ({ addToBasket, cat, setCat, imgURL, img, index }) => {

    return (<div className='cat-container' >
        <button onClick={()=>addToBasket(cat)}>
            <img index={index} src={imgURL}  alt="catImages"></img>
            <div>{cat.age}</div>
            <div>{cat.breed}</div>
            <div>{cat.name}</div>
            <div>£{cat.price}</div>
        </button>
    </div>);
};



export default CatCard;