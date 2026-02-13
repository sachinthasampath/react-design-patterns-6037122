import React, { useEffect, useState } from "react";

export const DataLoader = ({ getData = () => { }, children, resourceName }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const newData = await getData();
      setData(newData);
    })();
  }, []);

  return data && React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { [resourceName]: data });
    }
    return child;
  });
}