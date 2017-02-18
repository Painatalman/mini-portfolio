import SpiritualistData from '~/types/SpiritualistData';
import axios from 'axios';
import { useState, useEffect } from 'react';

const apiUrl = process.env.NEXT_PUBLIC_API_HOST;

function useSpiritualistData(): [boolean, SpiritualistData | null] {
  const [name, setName] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [spiritualist, setSpiritualist] = useState<SpiritualistData | null>(
    null
  );

  useEffect(function loadName() {
    const source = axios.CancelToken.source();
    axios
      .get(`${apiUrl}name`)
      .then(({ data }) => setName(data))
      .catch(() => {
        setError(true);
      });

    return () => {
      source.cancel();
    };
  }, []);

  useEffect(
    function loadDescription() {
      const source = axios.CancelToken.source();

      if (!name) return;
      axios
        .get(`${apiUrl}description`, {
          params: {
            name,
          },
        })
        .then(({ data }) => {
          setSpiritualist({
            name,
            description: data,
          });
        })
        .catch(() => {
          setError(true);
        });

      return () => {
        source.cancel();
      };
    },
    [name]
  );

  return [error, spiritualist];
}

export default useSpiritualistData;
