import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);

  const getBlog = async () => {
    const { data } = await axios.get("http://localhost:3000/blogs");
    setData(data);
  };
  useEffect(() => {
    getBlog();
  }, []);
  return (
    <div>
      {data.map((ele) => (
        <div key={ele.id}>
          <img src={ele.image} width="200px" />
          <h3>{ele.headline}</h3>
        </div>
      ))}
    </div>
  );
};

export default Home;
