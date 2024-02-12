import ProductCard from "../cards/productCard";
import {  product } from "../../utils/Redux/getProducts";
interface ProductSectionProps {
    title: string;
    products: product[];
    displayCount?: number;
  }
  
const ProductSection: React.FC<ProductSectionProps> = ({ title, products, displayCount = 3 }) => {
  let productThree : product[] = [];
  productThree = products.slice(0, 3);
  console.log(title)
  return (
    <div className="card border-0">
        <div className="card-body">
        <h6>{title}</h6>
            <div className="row">
            {productThree.map((ProductItem) => (
                <div className="col">
                    <ProductCard key={ProductItem.id} price={ProductItem.price} imageUrl="ProductItem.images" classNameCardType="card-body" width="7rem" borderClass="border-0">
                        {title === "Top Ranking" && <p>Popularity score: {ProductItem.ratings.average} </p>}
                        {title === "New arrivals" && <p> {ProductItem.availability} </p>}

                    </ProductCard>
                </div>
            ))}
            </div>
        </div>
            
    </div>
  );
};

export default ProductSection;