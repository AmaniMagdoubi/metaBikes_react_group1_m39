import { useState, useEffect } from "react";
import * as faker from "faker";

export const useCatAPI = () => {
  const [results, setResults] = useState([]);

  const fetchData = async () => {
    const endpoint = "https://api.thecatapi.com/v1/images/search?limit=10";

    const handleResults = (data) => {
      const parsedResults = (data || []).map((results) => {
        const vehicle = faker.vehicle.vehicle();
        const vin = faker.vehicle.vin();
        const job = faker.name.jobType();
        const description = faker.commerce.productDescription();
        const price = faker.commerce.price();
        return {
          vin,
          vehicle,
          job,
          description,
          price,
        };
      });

      setResults([...parsedResults]);
    };

    const handleError = (error) => {
      alert(`error: ${error}`);
    };

    fetch(endpoint)
      .then((response) => response.clone().json())
      .then(handleResults)
      .catch(handleError);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [...results];
};
