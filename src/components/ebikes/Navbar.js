import Basket from './Basket'
import {StyleNavbar, NavWrapper} from './Navbar.styles';

const Navbar = ({ basketItems, addCat, subCat }) => {
    return (
    
    <StyleNavbar>
      <NavWrapper>
        <Basket 
          basketItems={basketItems}
          addCat={addCat}
          subCat={subCat}/>
      </NavWrapper>
    </StyleNavbar > 
  );
};

export default Navbar;