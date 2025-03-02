import { useEffect, useState } from "react";
import InfoCard from "./InfoCard";
// import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ProductInfo = () => {
  const [products, setProduct] = useState(null);

  /* useParams */

  /*  const { productId } = useParams();
    console.log(productId, "prod"); */

  /* useLocation */
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  console.log(productId, "useLocation");

  useEffect(() => {
    fetchProductApi();
  }, []);
  const fetchProductApi = async () => {
    const apiUrl = await fetch(
      "https://fakestoreapi.com/products/" + productId
    );
    const apiData = await apiUrl.json();
    console.log(apiData, "api");
    setProduct(apiData);
  };
  console.log(products, "products");

  return products === null ? (
    <h2>No Data....</h2>
  ) : (
    <>
      <InfoCard
        key={products?.id}
        image={products?.image}
        title={products?.title}
        price={products?.price}
        rating={products?.rating?.rate}
        category={products?.category}
        description={products?.description}
      />
    </>
  );
};
export default ProductInfo;
