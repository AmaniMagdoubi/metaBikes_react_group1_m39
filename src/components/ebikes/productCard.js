import {Button, CardWrapper, CardTextWrapper, ImgWrapper} from "./productCard.styles";

export const ProductCard = (props) => {
    return (

        <CardWrapper>
            <ImgWrapper>
            <img src={props.url} alt={props.id}/>
            </ImgWrapper>
                <div className='card'>
                    <CardTextWrapper>
                        <strong>Vehicle: {props.vehicle}<br/></strong>
                        Description: {props.description}<b/>
                        {/* Model: {props.account}<b/> */}
                        VIN: {props.vin}<b/>
                        Model: {props.job}<b/>
                        Cost: £{props.price}
                    </CardTextWrapper>
                    <Button onClick={() => props.addCat(props)}>Add To Cart</Button>
            </div>
        </CardWrapper>
    );
};