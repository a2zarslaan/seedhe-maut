import { createContext } from 'react';

// actual value we want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// export function UserProvider({ children }) {
//   const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

//   const value = { currentUser, setCurrentUser };

//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// }
