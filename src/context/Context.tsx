import React, { ReactNode, createContext, useEffect, useReducer } from 'react';
import useFetch from '../hooks/useFetch';

type Pokemon = {
   name: string;
   url: string
}

type State = {
  pokemons: Pokemon[];
};

type Action = {
  type: string;
  payload?: any;
};

type Dispatch = (action: Action) => void;

const initialState: State = {
  pokemons: [],
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_POKEMON':
        return {
        ...state,
        pokemons: [...state.pokemons, action.payload]
        };
    case 'UPDATE_POKEMON':
          const updatedPokemons = state.pokemons.map(pokemon => {
            if (pokemon.url === action.payload.url) {
              return {
                ...pokemon,
                name: action.payload.newName,
                // Puedes actualizar otros campos aquí
              };
            }
            return pokemon;
          });
          return {
            ...state,
            pokemons: updatedPokemons,
          };
        case 'DELETE_POKEMON':
          const filteredPokemons = state.pokemons.filter(pokemon => pokemon.url !== action.payload.url);
          return {
            ...state,
            pokemons: filteredPokemons,
          };
        default:
          return state;
      }
};

export const AppContext = createContext<{ state: State; dispatch: Dispatch }>({
  state: initialState,
  dispatch: () => {},
});

interface ContextProviderProps {
  children: ReactNode; // Aquí especificamos el tipo de children
}

export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const { data, loading, error } = useFetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  

  useEffect(() => {
    if (!loading && !error && data) {
      dispatch({ type: 'ADD_POKEMON', payload: data.results });
    }
  }, [loading, error, data]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};