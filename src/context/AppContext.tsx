// PokemonContext.tsx
import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import Pokemon from '../interfaces/Pokemon.interface';

// Define el tipo de estado de tu aplicación
type AppState = {
  pokemons: Pokemon[]; // Define el tipo Pokemon según tus necesidades
  // Otros campos de estado si es necesario
};

// Define las acciones que puedes realizar en tu aplicación
type AppAction =
  | { type: 'ADD_POKEMON'; payload: Pokemon }
  | { type: 'SET_POKEMONS'; payload: Pokemon[] };

// Define el tipo para el contexto
type AppContextType = {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
};

// Crea el contexto
const AppContext = createContext<AppContextType | undefined>(undefined);

// Define el proveedor del contexto
type AppProviderProps = {
  children: ReactNode;
};

// Define el inicializador de estado
const initialState: AppState = {
  pokemons: [],
};

// Define el reductor para manejar las acciones
function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'ADD_POKEMON':
      return { ...state, pokemons: [...state.pokemons, action.payload] };
      case 'SET_POKEMONS':
        return { ...state, pokemons: action.payload };
      default:
        return state;
  }
}

// Define el componente del proveedor del contexto
export function AppProvider({ children }: AppProviderProps) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
  );
}

// Define un gancho personalizado para acceder al contexto
export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext debe ser utilizado dentro de un AppProvider');
  }
  return context;
}
