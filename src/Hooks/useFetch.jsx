import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getQuote = (url) => {
    setLoading(true);
    setError(false);
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        res.data.content && setData(res.data.content);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
  };

  useEffect(() => {
    getQuote(url);
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
