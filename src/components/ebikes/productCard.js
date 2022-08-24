import {Button, CardWrapper, CardTextWrapper, ImgWrapper} from "./productCard.styles";

export const ProductCard = (props) => {
    return (

        <CardWrapper>
            <ImgWrapper>
            <img src="https://monochrome-watches.com/wp-content/uploads/2022/04/William-Wood-Watches-Saltire-Motorcycles-Always-Ready-Motorbike-Custom-Indian-Scout-4.jpg" alt="ebike"/>
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