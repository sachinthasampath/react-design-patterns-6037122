import { useEffect, useState } from "react";

export const useResource = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("Loading data from ", url);
    const loadedData = { id: '123', name: 'John Doe', age: 30, hairColor: 'brown', hobbies: ['reading', 'writing'] }
    setData(loadedData);
    setIsLoading(false);
  }, [url])

  return { isLoading, data };
}