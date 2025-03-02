import { useEffect, useState } from "react";
import Card from "./Card";
import { Image_CDN } from "../utils/Constants";
import { Link } from "react-router-dom";

const Body = () => {
  const [productData, setProductData] = useState([]);
  const [input, setInput] = useState("");
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    fetchApi();
  }, []);
  const fetchApi = async () => {
    const ApiData = await fetch("https://fakestoreapi.com/products");
    const json = await ApiData.json();
    console.log(json);
    setProductData(json);
    setProductsData(json);
  };
  const handleFilter = () => {
    const filterProduts = productData.filter((res) => res.rating.rate > 4);
    setProductsData(filterProduts);
    console.log(filterProduts, "clicked");
  };
  const handleSearch = (e) => {
    const searchFilter = productData.filter((res) =>
      res.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setProductsData(searchFilter);
  };
  // const handleSearch = (e) => {
  //   const searchFilter = productData.filter((res) =>
  //     res.title.toLowerCase().includes(e.target.value.toLowerCase())
  //   );
  //   setProductsData(searchFilter);

  // };
  // const filterClear = () => {
  //   setProductsData();
  //   setInput("");
  //   console.log(productData);
  // };

  const selectedProducts = (e) => {
    const selectedCategory = e.target.value;

    /* if Condition */

    // if(selectedCategory === "all"){
    //   setProductsData(productData)
    // }else{
    //   const selectedProduct = productsData.filter((res)=>res.category.toLowerCase().includes(selectedCategory.toLowerCase()))
    //   setProductsData(selectedProduct);
    // }

    /*Ternary Operator*/

    selectedCategory === "all"
      ? setProductsData(productData)
      : setProductsData(
          productData.filter((res) =>
            res.category.toLowerCase().includes(selectedCategory.toLowerCase())
          )
        );
  };

  return (
    <>
      <input
        type="text"
        // value={input}
        onChange={handleSearch}
      />

      <select onChange={selectedProducts}>
        <option value="all">All Categories</option>
        <option value="electronics">electronics</option>
        <option value="jewelery">jewelery</option>
        <option value="men's clothing">men's clothing</option>
        <option value="women's clothing">women's clothing</option>
      </select>

      {/* <button onClick={handleSearch}>Search</button> */}
      {/* <button className="filter-btn" onClick={handleFilter}>
        Filter Products
      </button> */}
      {/* <button className="filter-btn" onClick={filterClear}>
        Clear Filter
      </button> */}
      {productsData.length === 0 && <h1>No Products Matched</h1>}
      <div className="res-cards">
        {productsData.map((products) => {
          return (
            <>
              <Link key={products.id} to={"/productInfo/" + products.id}>
                <Card
                  image={products.image}
                  title={products.title}
                  price={products.price}
                  rating={products.rating.rate}
                  description={products.description}
                  category={products.category}
                />
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Body;
