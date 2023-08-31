import useFetch from "../hooks/useFetch";
import Pokemon from "../interfaces/Pokemon.interface";
import { createContext, ReactNode, useState } from "react";

// Define la interfaz para el contexto
interface PokemonContextType {
  data: Pokemon[];
  loading: boolean;
  error: any;
}

// Crea el contexto
export const PokemonContext = createContext<PokemonContextType | undefined>(
  undefined
);

interface PokemonProviderProps {
  children: ReactNode;
}

// Proporciona un componente que envuelva a tu aplicación y utilice el hook useFetch
export const PokemonProvider = ({ children }: PokemonProviderProps) => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const { data, loading, error } = useFetch(
    "https://pokeapi.co/api/v2/pokemon?limit=151"
  );

  return (
    <PokemonContext.Provider value={{ data, loading, error }}>
      {children}
    </PokemonContext.Provider>
  );
};
