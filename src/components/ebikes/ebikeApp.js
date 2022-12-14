import React, { useState } from "react";
import { useCatAPI } from "./useCatAPI";
import { ProductCard } from "./productCard";
import Navbar from "./Navbar";
import { BodyWrapper } from "./productCard.styles";

function EbikeApp() {
  const catResults = useCatAPI();

  const [basketItems, setBasketItems] = useState([]);

  const addCat = (pro) => {
    const hold = basketItems.find((i) => i.id === pro.id);
    if (hold) {
      setBasketItems(
        basketItems.map((i) =>
          i.id === pro.id ? { ...hold, quantity: hold.quantity + 1 } : i
        )
      );
    } else {
      setBasketItems([...basketItems, { ...pro, quantity: 1 }]);
    }
  };

  const subCat = (pro) => {
    const hold = basketItems.find((i) => i.id === pro.id);
    if (hold.quantity === 1) {
      setBasketItems(basketItems.filter((i) => i.id !== pro.id));
    } else {
      setBasketItems(
        basketItems.map((i) =>
          i.id === pro.id ? { ...hold, quantity: hold.quantity - 1 } : i
        )
      );
    }
  };

  const catItems = (catResults || []).map((result, index) => (
    <ProductCard key={index} {...result} addCat={addCat} />
  ));

  return (
    <div className="App">
      <header>
        <Navbar basketItems={basketItems} addCat={addCat} subCat={subCat} />
      </header>

      <BodyWrapper>
        {catItems}
      </BodyWrapper>
    </div>
  );
}
export default EbikeApp;
