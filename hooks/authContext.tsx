import { createContext, useContext, useEffect, useState } from "react";
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

const UserContext = createContext<{
  logIn: (email: string, password: string) => void;
  createUser: (email: string, password: string) => void;
  logOut: () => void;
  user: FirebaseAuthTypes.User | null;
  isLoading: boolean;
}>({
  logIn: () => null,
  createUser: () => null,
  logOut: () => null,
  user: null,
  isLoading: false,
});


export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [isLoading, setLoading] = useState(false);

  const logIn = async (email: string, password: string) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account is signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        if (error.code === 'auth/invalid-credential') {
          console.log('That email address or password is invalid!');
        }
      });
  };

  const logOut = async () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  const createUser = async (email: string, password: string) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created and sign in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
      });
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(userState => {
      setUser(userState);

      if (isLoading) {
        setLoading(false);
      }
    });
    return subscriber;
  }, []);



  return (
    <UserContext.Provider value={{ logIn, createUser, logOut, user, isLoading }}>
      {children}
    </UserContext.Provider>
  );
}

export const UserAuth = () => {
  return useContext(UserContext);
};