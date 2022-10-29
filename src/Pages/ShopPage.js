import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Banner from "../Components/ShopPage/Banner";
import ProductList from "../Components/ShopPage/ProductList";

const ShopPage = (props) => {
    return (
        <div>
            <Navbar />
            <Banner />
            <ProductList />
            <Footer />
           
        </div>
    )
}
export default ShopPage
