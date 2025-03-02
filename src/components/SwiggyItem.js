const SwiggyItem = (props) => {
  const { name, cuisines, costForTwoMessage, categorieslist,ratings } = props;
  return (
    <div className="dataItem">
      <h1>{name}</h1>
      <h3>
        {cuisines} - {costForTwoMessage}
      </h3>
      <h3>{ratings}</h3>
      {/* <h2>Menu</h2> */}

      {/* <div className="category">
        <ul>
          <li>{categorieslist}</li>
        </ul>
      </div> */}
    </div>
  );
};
export default SwiggyItem;
