// NavigationContext.js
import { createContext, useContext, useReducer } from 'react';

const NavigationContext = createContext();

const NAV_ACTIONS = {
  TOGGLE: 'TOGGLE_NAV'
};

const navReducer = (state, action) => {
  switch (action.type) {
    case NAV_ACTIONS.TOGGLE:
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
};

const initialState = {
  isOpen: false
};

export const NavigationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(navReducer, initialState);

  const toggleNav = () => dispatch({ type: NAV_ACTIONS.TOGGLE });

  const value = {
    isOpen: state.isOpen,
    toggleNav
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};