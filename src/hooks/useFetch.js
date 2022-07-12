import { useState, useEffect } from 'react';

export const useFetch = (url) => {

  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setErrror] = useState(null)

  useEffect(() => {

    const fetchData = async () => {
      
      setLoading(true)

      try {
        
        const response = await fetch(url)
        const responseJSON = await response.json()
        setData(responseJSON)

      } catch (error) {
        
        console.log(error.message)
        setErrror("Ocorreu um erro ao carregar os dados, tente novamente mais tarde")

      }

      setLoading(false)

    };

    fetchData()

  }, [url]);

  return {data, loading, error}

};