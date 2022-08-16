import { useEffect, useState } from 'react';

export const usePokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setStatus('loading');
        const response = await fetch(process.env.REACT_APP_POKEMON_API);
        const data = await response.json();
        const resp = await Promise.all(
          data.results.map((pokemon) => fetch(pokemon.url))
        );
        const info = await Promise.all(resp.map((i) => i.json()));
        setPokemons(info);
        setStatus('fulfilled');
      } catch (err) {
        setStatus('rejected');
      }
    };
    fetchPokemons();
  }, []);

  return { pokemons, status };
};
