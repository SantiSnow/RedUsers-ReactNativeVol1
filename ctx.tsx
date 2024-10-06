import { useContext, createContext, type PropsWithChildren } from 'react';
import { useStorageState } from './useStorageState';

const AuthContext = createContext<{
  signIn: (email?: string, password?: string) => boolean;
  signOut: () => void;
  register: (name?: any, email?: any, password?: any) => boolean;
  session?: string | null;
  isLoading: boolean;
}>({
  signIn: (email?: string, password?: string) => true,
  signOut: () => null,
  register: (name?: string, email?: string, password?: string) => true,
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
        register: (name?: any, email?: any, password?: any) => {
          //Agregar logica para registrar
          console.log(`registered with: ${name} ${email} and ${password}`);
          setSession('user');
          return true;
        },
        session,
        isLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
