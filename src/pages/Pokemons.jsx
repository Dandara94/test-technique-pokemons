import { useState, useEffect } from "react";

import axios from "axios";

const Pokemons = () => {
  const [data, setData] = useState();
  const [pokePic, setPokePic] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co//api/v2/pokemon/");

        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const fetchImage = async (url) => {
    try {
      // console.log(url);
      const { data } = await axios.get(url);
      
      setPokePic(data.sprites.front_default);
      
    } catch (error) {
      console.log(error);
    }
  };
  

  // useEffect(() => {
  //   const fetchPicture = async () => {
  //     try {
  //       const images = await Promise.all(
  //         data.results.map(async (elem) => {
  //           const { data } = await axios.get(elem.url);
  //           return data.sprites.front_default;
  //         })
  //       );
  //       setPokePic(images);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   if (!isLoading && data) {
  //     fetchPicture();
  //   }
  // }, [data, isLoading]);
  return (
    <>
      {isLoading ? (
        <div>Chargement ...</div>
      ) : (
        <div>
          {data.results.map((elem,index) => {
            console.log(elem);
            return (
              <div key={elem.name} className={fetchImage(elem.url[index])}>
                {" "}
                {elem.name} 
                
                <img src={pokePic} alt={elem.name} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Pokemons;
