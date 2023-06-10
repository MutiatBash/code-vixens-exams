import { useState, useEffect } from "react";
import axios from "axios";

function useAxios(url) {
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
      } catch (error) {
        setLoading(false);
        setError(error.message);
        console.error("Axios Error", error.message);
      }
      //   } finally {
      //     setLoading(false);
      //   }
    };
    fetchData();
  }, [url]);
  console.log(data, loading, error);
  return { data, loading, error };
}
export default useAxios;
