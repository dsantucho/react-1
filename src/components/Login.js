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
    <div className='flex justify-center'>
        <div className='inline-flex w-2/4 flex-col items-center  my-11 border-2 rounded border-orange'>
            <div className="flex  flex-col items-center justify-center">
                <Link to='/' style={{textDecoration: 'none'}}>
                    <StoreIcon  style={{ fontSize: '6rem' }} className=" mx-3 text-orange"  />
                    <h2 className="font-bold  mr-3 flex justify-center">eShop</h2>
                </Link>
            </div>
            <div className='flex flex-col my-3'>
                <h2 className='text-2xl'>Sign In</h2>
                <form className='flex flex-col p-1'>
                    <h3 className='text-lg my-2'>Email</h3>
                    <input type='text' value={email} onChange={e=>setEmail(e.target.value)} className='p-1'/>

                    <h3 className='text-lg my-2'>Password</h3>
                    <input type='password' value={password} onChange={e=>setPassword(e.target.value)} className='p-1'/>

                    <button type='submit' onClick={signIn} className='my-2 bg-orange-light p-1'>Sign In</button>
                </form>
            </div>
            <div>
                <button onClick={register} className='my-2 bg-greyDarker p-1'>Create your eShop account</button>
            </div>    
        </div>
    </div>
  )
}

export default Login