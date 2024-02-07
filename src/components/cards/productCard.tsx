import React, { FC } from 'react';
import './productCard.css';

interface Props {
  title?: string;
  description?: string;
  price:number;
  imageUrl: string;
  viewProduct?: () => void;
  children?: React.ReactNode;
  classNameCardType:string; //card-body or card-img-overlay
  width: string;
  borderClass: string ;
}

const ProductCard: FC<Props> = ({ title, description, price, children, imageUrl, viewProduct, classNameCardType, width, borderClass}) => {

  return (
    <>
    <div className={`card ${borderClass}`}  style={{width}}>
          <img srcSet='https://placehold.co/400' src={imageUrl} className="card-img-top" alt="..." />
            <div className={classNameCardType}>
              <h5 className="card-title">{title}</h5>
              <p className="card-text m-0">{description}</p>
              <p className="card-text price m-0">{price} $</p>
              {children || <a onClick={viewProduct} className="btn btn-primary">Go somewhere</a>}
          </div>
    </div>
    </>
  );
};

export default ProductCard;