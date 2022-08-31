import { useState } from "react";
import "./App.css";

import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

function App() {
  // const [products, setProducts] = useState([]);

  // Custom hook
  const { data: items, httpConfig } = useFetch(url);



  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // resgatando dados
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);

  //     const data = await res.json();

  //     setProducts(data);
  //   }

  //   fetchData();
  // }, []);

  // add de produtos

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(product),
    // });

    // // Carregamento dinamico
    // const addedProduct = await res.json();

    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    //Refatorando post

    httpConfig(product, 'POST')

    setName("");
    setPrice("");
  };

  return (
    <div className="App">
      <h1>Lista de produto</h1>
      <ul>
        {items?.map((product) => (
          <li key={product.id}>
            {product.name} - R$: {product.price}
          </li>
        ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <input type="submit" value="Criar" />
        </form>
      </div>
    </div>
  );
}

export default App;
