import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faCodePullRequest,faShip } from '@fortawesome/free-solid-svg-icons';
import  Option  from './option';
import { CSSProperties } from 'react';

const OptionsList = () => {
  const style: CSSProperties = {
    position: "relative",
    top: "-33px",
  };

  return (
    <>
        <div className="card" style={style}>
          <div className="row">
            <Option title="Request for Quotation" description="One request, multiple quotes" >
                <FontAwesomeIcon icon={faTruckFast} />
            </Option>
            <Option title="Ready to Ship" description="Order directly with fast dispatch" >
                <FontAwesomeIcon icon={faCodePullRequest} />
            </Option>
            <Option title="Logistics services" description="One request, multiple quotes" >
                <FontAwesomeIcon icon={faShip} />
            </Option>
          </div>      
        </div>
    </>
  );
};

export default OptionsList;