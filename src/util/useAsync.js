import { useState, useEffect } from "react";

const useAsync = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const execute = async () => {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const response = await fetch(
        `${"https://bootcamp-api.codeit.kr/api/" + url}`
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    execute();
  }, [url]);

  return { loading, error, data };
};

export default useAsync;
