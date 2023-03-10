import { useCallback } from "react";

const useFetch = () => {
  const sendPostRequest = useCallback(
    async (endpoint, reqBody, get = () => {}) => {
      const url = "http://localhost:5000";
      try {
        const response = await fetch(`${url}${endpoint}`, {
          method: "POST",
          body: JSON.stringify(reqBody),
          headers: { "Content-Type": "application/json" },
        });
        if (response.status !== 200) {
          throw response.json();
        }
        const data = await response.json();
        get(data.results, data.message);
      } catch (err) {
        get(null, true);
        console.error(err.message);
      }
    },
    []
  );
  const sendGetRequest = useCallback(async (endpoint, get = () => {}) => {
    const url = "http://localhost:5000";
    try {
      const response = await fetch(`${url}${endpoint}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (response.status !== 200) {
        console.log(await response.json());
      }
      const data = await response.json();
      get(data.results);
    } catch (err) {
      get(null, true);
      console.error(err.message);
    }
  }, []);

  return { sendPostRequest, sendGetRequest };
};
export default useFetch;
