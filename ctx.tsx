import { useContext, createContext, type PropsWithChildren } from 'react';
import { useStorageState } from './useStorageState';

const AuthContext = createContext<{
  signIn: (email?: any, password?: any) => boolean;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}>({
  signIn: (email?: any, password?: any) => true,
  signOut: () => null,
  session: null,
  isLoading: false,
});

export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('session');

  return (
    <AuthContext.Provider
      value={{
        signIn: (email?: any, password?: any) => {
          
          const admin = 'admin@example.org';
          const pass = '1234';

          if (
            email !== admin || 
            password !== pass)
          {
            return false;
          }
          setSession('user');
          return true;
        },
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
