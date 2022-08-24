import React, { useState } from "react";
import Items from "./Items";
import {
  BasketWrapper,
  ModalOff,
  BottomWrapper,
  ModalBackground,
  Position,
} from "./Basket.styles";

const Basket = ({ basketItems, addCat, subCat }) => {
  const [modalShow, setModalShow] = useState(false);
  const modalOn = () => {
    setModalShow(!modalShow);
  };

  const modalOff = () => {
    setModalShow(false);
  };

  const totalPrice = basketItems.reduce(
    (a, current) => a + current.quantity * current.price, 0);

  return (
    <div>
      <Position>
        <button onClick={modalOn}>🧺</button>
      </Position>

      {modalShow ? (
        <ModalBackground>
          <BasketWrapper>
            <ModalOff>
              <button onClick={modalOff}>X</button>
            </ModalOff>
            <h2>Your Basket</h2>
            <Items basketItems={basketItems} subCat={subCat} addCat={addCat} />

            {basketItems.length === 0 && (
              <div>
                <p>You have no items</p>
              </div>
            )}

            {basketItems.length !== 0 && (
              <BottomWrapper>
                <hr></hr>
                <strong>Total Price:</strong>
                <br />
                <strong>£{totalPrice}</strong>
                <hr></hr>

                <button
                  onClick={() =>
                    alert(
                      `You're on the highway to sell! Thank you for using Metabikes`
                    )
                  }
                >
                  <strong>Checkout?</strong>
                </button>
              </BottomWrapper>
            )}
          </BasketWrapper>
        </ModalBackground>
      ) : null}
    </div>
  );
};

export default Basket;
