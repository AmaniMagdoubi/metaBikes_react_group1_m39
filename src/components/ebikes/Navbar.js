import React from "react";
import Basket from './Basket'

const Navbar = ({ basketItems, addCat, subCat }) => {
    return (<div>
        <Basket 
          basketItems={basketItems}
          addCat={addCat}
          subCat={subCat}/>
          </div>
  );
};

export default Navbar;