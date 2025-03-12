import { useState, useEffect } from "react";
import axios from "axios";


const useApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 

  
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(url);
      setData(response.data); 
    } catch (err) {
      setError(err.message); 
    } finally {
      setLoading(false);
    }
  };

  const createData = async (newData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(url, newData);
      setData((prevData) => [...prevData, response.data]); // Yangi ma'lumotni qo'shish
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateData = async (id, updatedData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.put(`${url}/${id}`, updatedData);
      setData((prevData) =>
        prevData.map((item) =>
          item.id === id ? { ...item, ...response.data } : item
        )
      ); 
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteData = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await axios.delete(`${url}/${id}`);
      setData((prevData) => prevData.filter((item) => item.id !== id)); // Ma'lumotni o'chirish
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); 
  }, [url]);

  return { data, loading, error, createData, updateData, deleteData };
};

export default useApi;
