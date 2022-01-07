import React, { createContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AppSection from "./AppSection";
import Test from "./Test";
import Sorting from "./Sorting";
import Pagination from "./Pagination";
import Axios from "axios";

const obj = {
  ProductID: 1,
  Product_name: "Product 1",
  image: "product-1.jpg",
  Price: 100,
};
console.log(obj);
// var result;
// Axios.get('http://localhost:5000/shivam').then(
//     (response) => {
//         result = response.data;
//         console.log(result);
//     },
//     (error) => {
//         console.log(error);
//     }
// );
const objData = createContext();

const App = () => {
  // Here is our method
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/shivam")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Data is loading...</p>;
  }

  return (
    <div>
      <objData.Provider value={data}>
        <Navbar />
        <Sorting />
        {/* {data.map((item) => (
        // <li key={item.id}>{item.name}</li>
        <AppSection data={item} />
      ))} */}
        <Test/>
        <Pagination />
        <Footer />
      </objData.Provider>
    </div>
  );
  // here is end of our method
  // return (
  //     <div>
  //         <Navbar/>
  //         {result.map(item => <AppSection data={item.id} />)}
  //         <Footer/>
  //     </div>
  // );
};

export default App;
export {objData};