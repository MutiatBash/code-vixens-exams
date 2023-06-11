import { useState, useEffect } from "react";
import axios from "axios";

function useAxios(url, method, headers = {}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = { url, method, headers };
        const axiosResponse = await axios.request(options);
        setData(axiosResponse.data);

        // setting a 2 seconds delay for loading
        // setTimeout(async () => {
        //   const axiosResponse = await axios.request(options);
        //   setData(axiosResponse.data);
        //   setLoading(false);
        // }, 2000);
      } catch (error) {
        setError(error.message);
        // setLoading(false);
        console.error("Axios Error", error.message);
      } finally {
        setLoading(false);
      }
      //   } finally {
      //     setLoading(false);
      //   }
    };
    fetchData();
  }, [url, method, headers]);
  console.log(data, loading, error);
  return { data, loading, error };
}
export default useAxios;
