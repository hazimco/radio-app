import { useEffect, useState } from "react";

interface CallbackFunction<T> {
  (): Promise<T>;
}

const useApiFetch = <T>(requestFunction: CallbackFunction<T>) => {
  const [data, setData] = useState<T>();

  useEffect(() => {
    let shouldSetState = true;
    requestFunction()
      .then((fetchedData) => {
        if (shouldSetState) {
          setData(fetchedData);
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
