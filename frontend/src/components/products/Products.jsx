import {useEffect, useState} from 'react'
import { useMyContext } from "../../MyContext";
import styles from "./products.module.css";
import Product from "./Product";
import { Bars } from "react-loader-spinner";

const Products = () => {
  const { products, loadingState, filter, inCart } = useMyContext()
  const {addToCart} = inCart
  
  const { productsData } = products;
  const [productsFromFetch, setProductsFromFetch] = useState([])
  const { loading } = loadingState;
  const { filteredProducts } = filter
  

  useEffect(() => {
    const customList = filteredProducts?.length > 0 ? filteredProducts : productsData;
  
    const productsList = customList?.map((element, index) => {
      const { id, title, price, image} = element
      return <Product key={index} id={id} title={title} price={price} image={image} addToCartFunc={() => addToCart(element)}/>;
    },[]);

    setProductsFromFetch(productsList)

  }, [productsData, filteredProducts, addToCart])
  


  return (
    <div>
      {loading && (
        <Bars
          height="200"
          width="200"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass={styles.loader}
        />
      )}
      {
        <div key={productsFromFetch.id} className={styles.products}>
          {productsFromFetch}
        </div>
      }
    </div>
  );
};

export default Products;
