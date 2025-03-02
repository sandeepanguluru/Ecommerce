const Card = (props) => {
  const { image, title, price, description, rating,category } = props;

  return (
    <div className="card">
      <img src={image} />
      <div className="cardData">
        <h3>Title:{title}</h3>
        <h3>Price:{price}</h3>
        <h4>Rating:{rating}</h4>
        <h4>Category:{category}</h4>
        {/* <h4>Description:<span style={{fontSize:"12px"}}>{description}</span></h4> */}
      </div>
    </div>
  );
};
export default Card;
