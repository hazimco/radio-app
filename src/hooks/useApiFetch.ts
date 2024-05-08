import { useEffect, useState } from "react";

const useApiFetch = (requestFunction) => {
  const [data, setData] = useState();

  useEffect(() => {
    let shouldSetState = true;
    requestFunction()
      .then((data) => {
        if (shouldSetState) {
          setData(data);
        }
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      shouldSetState = false;
    };
  }, [requestFunction]);

  return data;
};

export default useApiFetch;
