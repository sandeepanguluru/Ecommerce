const SwiggyCard = (props) => {
  const { image, title, rating, minutes, category, location,cuisines,price } = props;
  return (
    <>
      <div className="swiggyCard">
        <img src={image} alt="restCard" />
        <div className="restData">
          <h2 style={{fontSize:'18px'}}> {title}</h2>
          <h2 style={{fontSize:'16px'}}> {price}</h2>
          {/* <h2 style={{fontSize:'14px',overflow:"hidden",textOverflow: "ellipsis"}}> {cuisines}</h2> */}
          <h3 style={{fontSize:'14px'}}>
            {rating} 
            <span style={{paddingLeft:'8px'}}>{minutes}</span>
          </h3>
          <p>
            <b>{category}</b>
          </p>
          <p>
            <b>{location}</b>
          </p>
        </div>
      </div>
    </>
  );
};
export default SwiggyCard;
