import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication()

const useFirebase = () => {
const [name, setname] = useState('');
const [user, setUser] = useState({});
const [error, setError] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [isLogin, setIsLogin] = useState(false);
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();


    // google handler
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
       
        // .catch(error => {
        //    setError(error.message); 
        // })
    }
    //register handling
    const  registerNewUser = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
            verifyEmail();
            setUserName();
            
        })
        .catch(error => {
           setError(error.message); 
        })
    }
    //handle login
    const processLogin= (email, password) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
        })
        .catch(error => {
           setError(error.message); 
        })
    }
    const handleNameChange = e => {
        setname(e.target.value)
        console.log(e.target.value)
    }
    const handleEmailChange = e => {
        setEmail(e.target.value)
        console.log(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    //handle registration
    const handleRegistration = e => {
       e.preventDefault();
        if(password.length < 6){
            setError('Password Must Be at Least 6 Charecters')
            return;
        }
         if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError('Password Must contain 2 upper case');
      return;
    }
        //console.log(email, password)
        if(isLogin){
            processLogin(email, password);
        }
        else{
            registerNewUser(email, password);
        }
       return;  
    }
    
    //handle toogle
    const toggleLogin =(e) => {
    setIsLogin(e.target.checked)
}
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
        .then(result => {
            console.log(result);
        })
    }
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
        .then(result => {
            console.log(result);
        })
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, {displayName:name})
        .then(result => {
            console.log(result);
        })
    }
    //Log out handler
    const logOut =() => {
        signOut(auth)
        .then(() => {
        setUser({});
        })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            }
        })
    }, [])
    return {user, error,name, email, password, signInUsingGoogle, logOut, handleRegistration, handleNameChange, handleEmailChange, handlePasswordChange, isLogin, toggleLogin, handleResetPassword}
}
export default useFirebase;