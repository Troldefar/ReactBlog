import { useState, useEffect } from 'react';

const useFetch = url => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);
  useEffect(() => {
    /** Stop fetch request if component is unmounted */
    const stopRequest = new AbortController();
    /** Run fetch request */
    fetch(url, { signal: stopRequest.signal })
      .then(res => {
        if(!res.ok) {
          throw Error('Could not fetch data');
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch(error => {
        if(!error.name === 'AbortError') {
          setError(error.message)
          setIsPending(false);
        }
      });
      /** Stop fetch request if component is unmounted before request was finished */
      return () => stopRequest.abort();
  }, [url]);
  return {
    data,
    isPending,
    error
  }
}

export default useFetch;