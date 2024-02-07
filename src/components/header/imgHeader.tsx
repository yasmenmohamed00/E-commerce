import  { FC } from 'react';
import { CSSProperties } from 'react';

interface Props {
  imgUrl: string;
}

const ImgeHeader: FC<Props> = ({ imgUrl }) => {
    const style: CSSProperties = {
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        height: "180px"
      };
  return (
    <>
      <div className="imgheader" style={style}>
        
      </div>
    </>
  );
};

export default ImgeHeader;