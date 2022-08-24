import LeftNav from "../components/5-left-nav";
import Footer from "../components/9-contact-footer";
// import Basket from "../components/ebikes/Basket";
import EbikeApp from "../components/ebikes/ebikeApp";
// import Items from "../components/ebikes/Items";
// import { ProductCard } from "../components/ebikes/productCard";

const Ebike = () => {
  // const style = {
  //   marginLeft: "200px",
  // };
    return (
    <div>
        <LeftNav />
        <EbikeApp />
        <Footer/>
        {/* <Basket/> */}
        {/* <Items/> */}
        {/* <ProductCard/> */}

      {/* <h3>hello</h3> */}
    </div>
  );
};

export default Ebike;
