import {useEffect, useState} from 'react'
import { useMyContext } from "../../MyContext";
import styles from "./header.module.css";

const Header = () => {
  const { filter, products } = useMyContext();
  const {filterProductsByCategory} = filter
  const {productsData} = products
const [categories, setcategories] = useState([])

  useEffect(() => {
    
  const categories = productsData
  .map((p) => p.category)
  .filter((value, index, array) => array.indexOf(value) === index);

  setcategories(categories)
    return () => {
      
    }
  }, [productsData])
  
  return (
    <div>
      <h1>Shimon Shopping Site</h1>
      <header className={styles["product-filter"]}>
        <div className={styles["sort"]}>
          <div className={styles["collection-sort"]}>
            <label>Filter by:</label>
            <select onChange={(e) => filterProductsByCategory(e.target.value)}>
              <option value="/">All Products</option>
              {categories &&
                categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
            </select>
          </div>

          <div className={styles["collection-sort"]}>
            <label>Sort by:</label>
            <select>
              <option value="1">Featured</option>
              <option value="2">Best Selling</option>
              <option value="3">Alphabetically, A-Z</option>
              <option value="4">Alphabetically, Z-A</option>
              <option value="/">Price, low to high</option>
              <option value="/">Price, high to low</option>
              <option value="/">Date, new to old</option>
              <option value="/">Date, old to new</option>
            </select>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
