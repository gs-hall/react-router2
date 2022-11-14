import { useState, useEffect } from 'react';
import { getList } from '../services/postAPI';

export default function useFetch(url, opts) {
  const [data, setData] = useState(opts?.initData);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isUpdateRequired, setIsUpdateRequired] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      if (!isUpdateRequired) return;
      setLoading(true);
      setData([]);
      try {
        const response = await getList(url);
        if (response.status !== 200) { throw new Error("Status is " + response.status); }
        const data = response.data;
        setData(data);
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
        setIsUpdateRequired(false);
    }};
    fetchData();
 }, [url, isUpdateRequired]);

  return { data, isLoading, error, setIsUpdateRequired };
};