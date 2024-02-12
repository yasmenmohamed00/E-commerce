import OptionsList from '../components/options/optionList';
import Carousel from '../components/carousel/carousel';
import Benefit from '../components/benefitsCard/benefit';
import NavBar from '../components/header/navBar';
import ImgeHeader from '../components/header/imgHeader'
import SideMenu from '../components/sideMenu/sideMenu';
import ProductList from '../components/products/productsList';
import productSection from '../components/productSection/ProductSection'
import Footer from '../components/fonter/footer';
import ProductSections from '../components/productsections/ProductSections';

const Home = () => {

  return (
    <>
      <NavBar />
      <ImgeHeader imgUrl='https://placehold.co/400'/>
      <div className="container">
        <OptionsList />
          <div className="card p-4 mb-4">
            <div className="row">
              <div className="col-md-3">
                <SideMenu />
              </div>
              <div className="col-md-6">
                  <Carousel />
              </div>
              <div className="col-md-3">
                  <Benefit />
              </div>
            </div>
          </div>
          <ProductSections />
          <ProductList />
      </div>
      <Footer />
    </>
  );
};

export default Home;