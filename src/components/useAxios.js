import { useState, useEffect } from "react";
import axios from "axios";

function useAxios() {
  let url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // setting a 2 seconds delay for loading
        setTimeout(async () => {
          const axiosResponse = await axios.get(url);
          setData(axiosResponse.data);
          setLoading(false);
        }, 2000);

        // console.log("Axios data", axiosResponse.data);
      } catch (error) {
        setError(error.message);
        console.error("Axios Error", error.message);
      }
    };
    fetchData();
  }, [url]);
  console.log(data, loading, error);
  return (
    { data, loading, error }
    
  );
}
export default useAxios;
