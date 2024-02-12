import { useDispatch } from "react-redux";
import ProductSection from "../productSection/ProductSection"
import { AppDispatch, useAppSelector } from "../../utils/store";
import { useEffect } from "react";
import { fetchproducts, product } from "../../utils/Redux/getProducts";


const ProductSections = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading, isError } = useAppSelector(state => state.products);
  let topproducts : product[] = [];
  let topRanking : product[] = [];
  let savingSpotlight : product[] = [];
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${year}-${month}-${day}`;

  useEffect(() => {
    dispatch(fetchproducts());
  }, [dispatch,fetchproducts]);

  topproducts = (data as product[]).filter((item) => item.dateAdded === currentDate);
  topRanking = (data as product[]).filter((item) => item.ratings.average === 5);

  return (
    <div className="row">
    <div className="col">
      <ProductSection title="New arrivals" products={topproducts}/>
    </div>
    <div className="col">
      <ProductSection  title="Top Ranking" products={topRanking}/>
    </div>
    <div className="col">
      {/* <ProductSection /> */}
    </div>
  </div>
  );
};

export default ProductSections;