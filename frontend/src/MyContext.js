import { createContext, useContext, useState, useEffect } from "react";

const MyContext = createContext({});

export const useMyContext = () => useContext(MyContext);

const MyContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [productsData, setProductsData] = useState([]);
  const [editProductsData, setEditProductsData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);


  const filterProductsByCategory = (category) => {
    if (category === "/") {
      setFilteredProducts(productsData);
      return;
    }
    const filteredItems = productsData.filter(
      (product) => product.category === category
    );
    setFilteredProducts(filteredItems);
  };


  // Add to cart

  const addToCart = (product) => {
    const productsInCart = cart.findIndex((item) => item.id === product.id);
    
    if (productsInCart === -1) {
      const newProductToCart = { ...product, amount: 1 };
      setCart((prev) => [...prev, newProductToCart]);
    } else {
      const newCart = [...cart];
      newCart[productsInCart].amount++;
      setCart(newCart);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://gocode-bituach-yashir.glitch.me/products"
      );
      const data = await res.json();
      setProductsData(data);
      setLoading(false);
    };

    fetchData();
  }, []);
 
  // useEffect(() => {

  // },[])
  const editProducts = (editRow) => {
    console.log(editRow);
    setProductsData(prev => []);
  }
  // editProducts()

  return (
    <MyContext.Provider
      value={{
        products: { productsData, editProducts },
        loadingState: { loading, setLoading },
        filter: {filteredProducts, filterProductsByCategory },
        inCart: {cart, addToCart}
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
