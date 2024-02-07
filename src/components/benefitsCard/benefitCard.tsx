import { FC } from 'react';

interface Props {
  description: string;
  imageUrl: string
}

const Card:FC<Props> = ({ description, imageUrl }) => {

  return (
    <>
    <div className="card mb-4">
        <div className="row">
            <div className="col-md-8">
                <div className="card-body">
                <div className="row">
                    <div className="d-flex align-items-center">
                        <div className="des px-2">
                            <p className='m-0'>{description}</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card-body d-flex justify-content-end px-0">
                    <img srcSet={imageUrl} className="d-block w-100" alt="https://placehold.co/400"/>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Card;