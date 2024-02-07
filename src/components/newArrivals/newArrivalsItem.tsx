import ProductCard from "../cards/productCard";

const NewArrivalItem = () => {


  return (
    <div className="card border-0">
        <div className="card-body">
        <h6>New arrivals</h6>
            <div className="row">
                <div className="col">
                    <ProductCard price={12} imageUrl="https://placehold.co/400" classNameCardType="card-body" width="7rem" borderClass="border-0">
                        <p>2 pices</p>
                    </ProductCard>
                </div>
                <div className="col"> 
                    <ProductCard price={12} imageUrl="https://placehold.co/400" classNameCardType="card-body" width="7rem" borderClass="border-0">
                        <p>2 pices</p>
                    </ProductCard>
                </div>
                <div className="col"> 
                    <ProductCard price={12} imageUrl="https://placehold.co/400" classNameCardType="card-body" width="7rem" borderClass="border-0">
                        <p>2 pices</p>
                    </ProductCard>
                </div>
                </div>
        </div>
            
    </div>
  );
};

export default NewArrivalItem;