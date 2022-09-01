import { useState } from "react";
import "./App.css";

// 4 - custom hook
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

function App() {
  // const [products, setProducts] = useState([]);

  // 4 - custom hook e 5 - refactor post
  const { data: items, httpConfig, loading, error } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 1 - resgatando dados
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);

  //     const data = await res.json();

  //     setProducts(data);
  //   }

  //   fetchData();
  // }, []);

  // 2 - add product
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

    // const addedProduct = await res.json();

    // 3 - carregamento dinâmico
    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    // 5 - refatorar post
    httpConfig(product, "POST");

    setName("");
    setPrice("");
  };

  // 8 - DELETE
const handleDelete = async (id) => {
console.log(id);
  httpConfig(id, "DELETE");
}

  return (
    <div className="App">
      <h1>Lista de produto</h1>
      {/* 6-loading */}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {items.length === 0 && <p>Não há itens na lista</p>}
      {!error && (
        <ul>
          {items && items.map((product) => (
            <li key={product.id}>
              {product.name} - R$: {product.price}
              <button onClick={() => handleDelete(product.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </label>
          {/* 7- state de loading no post */}
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
