import { useEffect, useState } from 'react';

const useData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./data.json')
      .then(res => res.json())
      .then(result => setData(result))
      .catch(err => console.error(err));
  }, []);

  return data;
};

export default useData;
