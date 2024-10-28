import PropTypes from "prop-types";
import { createContext, useContext, useReducer } from "react";

const NAV_ACTIONS = {
  TOGGLE: "TOGGLE_NAV",
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
  isOpen: false,
};

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(navReducer, initialState);

  const toggleNav = () => dispatch({ type: NAV_ACTIONS.TOGGLE });

  const value = {
    isOpen: state.isOpen,
    toggleNav,
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

export const UseNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};

NavigationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
