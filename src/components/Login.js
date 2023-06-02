import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HeaderContext } from '../App';
import StoreIcon from '@mui/icons-material/Store';

//firebase auth
import { auth } from '../firebase/FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navitage = useNavigate();

    //login function
    const signIn = e =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed in
            navitage("/")
        })
        .catch((error) => {
            alert(error.message)
        });
    }

    const register = e =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
            if(auth){
                navitage("/");
            }
            
        })
        .catch((error) => {
            alert(error.message)
        });
    }
  return (
    <div>
        <Link to='/' style={{textDecoration: 'none'}}>
            <div className="flex items-center">
                <StoreIcon fontSize="large" className=" mx-3 text-orange" />
                <h2 className="font-bold  mr-3">eShop</h2>
            </div>
        </Link>
        <div>
            <h2>Sign In</h2>
        <form>
            <h3>Email</h3>
            <input type='text' value={email} onChange={e=>setEmail(e.target.value)}/>

            <h3>Password</h3>
            <input type='password' value={password} onChange={e=>setPassword(e.target.value)}/>

            <button type='submit' onClick={signIn}>Sign In</button>
        </form>
        </div>
        <div>
            <button onClick={register}>Create your eShop account</button>
        </div>
        
    </div>
  )
}

export default Login