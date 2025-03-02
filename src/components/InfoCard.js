const InfoCard = (props) => {
  const { image, title, price, rating, category, description } = props;
  return (
    <>
      <div className="infoCard">
        <div className="productImg">
          <img src={image} />
        </div>
        <div className="cardInfoData">
          <h3>Title:{title}</h3>
          <h3>Price:{price}</h3>
          <h4>Rating:{rating}</h4>
          <h4>Category:{category}</h4>
          <h4>Description:{description}</h4>
        </div>
      </div>
    </>
  );
};
export default InfoCard;
