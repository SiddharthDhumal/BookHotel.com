import { Link, NavLink, useNavigate } from 'react-router-dom';
import styles from  './Login.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { LoginUser } from '../AccountSlice';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function Login(){

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginuser,setLoginUser] = useState('');
  const [loginPassword,setLoginPassword] = useState('');

  const accountInfo = JSON.parse(localStorage.getItem('signupAccount'));
   
  

  
  // console.log(accountInfo);
  // console.log(accountInfo.username);
  // console.log(accountInfo.password);

  // console.log("reloaded");

  function handleLogin(){
    // if(!loginuser || !loginPassword) return;

    if(!loginuser || !loginPassword){
 
      toast.warn("please fill required fields!!", {
         autoClose: 7000 ,
         position: toast.POSITION.BOTTOM_LEFT
       });
     }
     else if(loginuser===accountInfo.username && loginPassword === accountInfo.password){
      dispatch(LoginUser(loginuser,loginPassword));
    
      // alert("Logged In Succefully");
      toast.success("Signed Up Sucessfully!!", {
        position: toast.POSITION.BOTTOM_LEFT
      });
      setTimeout(()=>{navigate('/')},3000);
    }else{
      // alert("Please enter correct username & password");
      toast.error("Please enter correct username & password !", {
        position: toast.POSITION.BOTTOM_LEFT
      });
    }
   
  }

  // if(username==)
   
    return(
        <>
        <NavLink to="/" className={styles.dashboard}>&larr; Go to DashBoard</NavLink>
        <section className={styles.login}>
        <form className={styles.form}>
           <h3 className={styles.h3Login}>Log In</h3>
           <p className={styles.pSignup} >New User? <Link className={styles.signup} to="/signup">Sign Up</Link></p>
           <input className={styles.input} type="text" value={loginuser} onChange={(e)=>setLoginUser(e.target.value)}  placeholder="UserName"/>
           <input className={styles.input} type="text" value={loginPassword} onChange={(e)=>setLoginPassword(e.target.value)} placeholder="Password"/>
           {/* <input type="submit" value="Submit" className="submit-btn"/> */}
           <div className={styles.checkbox}>
           <input style={{cursor:"pointer"}} required type="checkbox"/>
           <label className={styles.checkboxlabel}>Agreed Terms & Conditions</label>
           </div>
           <button className={styles.button} type="button" onClick={handleLogin}>Log In</button>
        </form>
        <ToastContainer autoClose={3000}/>
      </section>
        </>
    )
}


export default Login;