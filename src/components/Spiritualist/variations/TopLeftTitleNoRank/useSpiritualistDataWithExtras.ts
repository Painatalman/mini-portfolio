import axios from 'axios';
import { useState, useEffect } from 'react';

type SpiritualistData = {
  name: string;
  description: string;
  titles: string[];
};

const apiUrl = process.env.NEXT_PUBLIC_API_HOST;

function useSpiritualistDataWithExtras(): [boolean, SpiritualistData | null] {
  const [error, setError] = useState<boolean>(false);
  const [spiritualist, setSpiritualist] = useState<SpiritualistData | null>(
    null
  );

  useEffect(function loadData() {
    const source = axios.CancelToken.source();
    let name: string;

    axios
      .get(`${apiUrl}name`)
      .then(({ data }) => {
        name = data;
        return Promise.all([
          axios.get(`${apiUrl}description`, {
            params: {
              name,
            },
          }),
          axios.get(`${apiUrl}title?quantity=3`),
        ]);
      })
      .then(([{ data: description }, { data: titles }]) => {
        setSpiritualist({
          name,
          description,
          titles,
        });
      })
      .catch(() => {
        setError(true);
        source.cancel();
      });

    return () => {
      source.cancel();
    };
  }, []);

  return [error, spiritualist];
}

export default useSpiritualistDataWithExtras;
