import React from "react";
import useFetch from "../Hooks/useFetch";

const CompUseFetch = () => {
  const {
    data: quote,
    loading,
    error,
  } = useFetch("https://api.quotable.io/random");

  return (
    <div>
      {loading && <p>Loading...</p>}
      {quote && <p>{quote}</p>}
      {error && <p>Error...</p>}
    </div>
  );
};

export default CompUseFetch;
