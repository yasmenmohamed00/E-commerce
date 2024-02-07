import React, { FC } from 'react';

interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
}

const Option: FC<Props> = ({ title, description, children }) => {

  return (
    <>
      <div className="col-md-4">
        <div className="card-body">
          <div className="row">
            <div className="d-flex align-items-center">
            {children || <p>no icon</p>}
            <div className="des px-2">
              <h6 className='text-left m-0'>{title}</h6>
              <p className='m-0'>{description}</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Option;