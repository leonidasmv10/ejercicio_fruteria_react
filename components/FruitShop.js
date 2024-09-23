import { useEffect, useState } from 'react';
import Product from "@/components/Product";
import ProductShop from '@/components/ProductShop';
import Ticket from '@/components/Ticket';

const productes = [
  {
    "id": 1,
    "nom": "Plàtan",
    "preu": 0.5
  },
  {
    "id": 2,
    "nom": "Poma",
    "preu": 0.8
  },
  {
    "id": 3,
    "nom": "Pinya",
    "preu": 5
  },
  {
    "id": 4,
    "nom": "Meló",
    "preu": 6
  },
];

const FruitShop = () => {

  const [shop, setShop] = useState([]);
  const [total, setTotal] = useState(0);

  function calculateTotal() {
    let c = 0;
    console.log(shop);
    shop.map((p) =>
      c += p.count * p.price
    );
    setTotal(c);
  }

  function addProduct(id, name, price) {
    setShop((prevShop) => {
      const exists = prevShop.find((p) => p.id === id);
      if (exists) {
        return prevShop.map((p) =>
          p.id === id ? { ...p, count: p.count + 1 } : p
        );
      } else {
        return [...prevShop, { name: name, price: price, count: 1, id: id }];
      }
    });
  };

  function deleteProduct(id) {
    setShop((prevShop) => {
      return prevShop.filter(prevShop => prevShop.id !== id);
    });
  };

  useEffect(() => {
    calculateTotal();
  }, [shop]);


  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '50px', fontFamily: 'Arial' }}>
      <div>
        <h1>Fruiteria</h1>
        {productes.map((product) => (
          <Product
            key={product.id}
            name={product.nom}
            price={product.preu}
            onAddProductShop={() => addProduct(product.id, product.nom, product.preu)}
          />
        ))}
      </div>

      <div>
        {shop.map((product) => (
          <ProductShop
            key={product.id}
            name={product.name}
            count={product.count}
            price={product.price}
            onDelete={() => deleteProduct(product.id)}
          />
        ))}

        <Ticket total={total}></Ticket>

      </div>
    </div >
  );
};

export default FruitShop;