import { useEffect, useRef, useState } from 'react';

const useFetch = (query = 'funnels', fetchApi, refetch = null) => {
  let cancelrequest = false;
  const cache = useRef<any>({ invalidateQuery: 0 }); //TODO: when required, get cached query from REDUX store
  const [data, setData] = useState<any>([]);
  const [status, setStatus] = useState<string>('idle');

  useEffect(() => {
    const cached = cache.current[query];
    // const invalidate = cache.current.invalidateQuery

    if (!query) return;

    const fetchData = async () => {
      setStatus('fetching');
      if (refetch || query) {
        try {
          const res = await fetchApi();
          if (cancelrequest) return;
          setStatus('fetched');

          cache.current[query] = res;
          // cache.current.invalidateQuery += 1
          setData(res);
        } catch (err) {
          if (cancelrequest) return;
          setStatus('failed');
        }
      } else {
        setData(cached);
        setStatus('fetched');
      }
    };
    fetchData();
    return function cleanUp() {
      cancelrequest = true;
    };
  }, [query, refetch]);

  return { data, isFetching: status === 'fetching' };
};

export default useFetch;
