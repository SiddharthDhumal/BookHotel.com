import { Link, NavLink, useNavigate } from 'react-router-dom';
import styles from './Signup.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { SignUp } from '../AccountSlice';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function Signup(){

  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [mobileNumber,setMobileNumber] = useState();
  const [password,setPassword] = useState('');
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const loggedUser = JSON.parse(localStorage.getItem('signupAccount'));
  
  console.log(loggedUser);

  function handleSignUp(){

      // if(!username || !email || !mobileNumber || !password) return;
      if(!username || !email || !mobileNumber || !password){
 
        toast.warn("please fill required fields!!", {
           autoClose: 7000 ,
           position: toast.POSITION.BOTTOM_LEFT
         });
       }
      
      else if(loggedUser.username !== username && loggedUser.email !== email && loggedUser.mobileNumber !== mobileNumber && loggedUser.password !== password){
       
        dispatch(SignUp(username,email,mobileNumber,password));

        toast.success("Signed Up Sucessfully!!", {
          position: toast.POSITION.BOTTOM_LEFT
        });
      
        if(dispatch(SignUp(username,email,mobileNumber,password))){
        localStorage.setItem('signupAccount',JSON.stringify({username,email,mobileNumber,password}));
       }

      setTimeout(()=>{navigate('/login')},3000);  
      }else{
        toast.error("User Already Exists !!", {
          position: toast.POSITION.BOTTOM_LEFT
        });
      }


      // console.log(dispatch(SignUp(username,email,mobileNumber,password)));
   
      // console.log(localStorage.getItem('signupAccount'));
      // alert('Signed Up Sucessfully!!');
   
   
  }


    return(
      <>
       <NavLink to="/" className={styles.dashboard}>&larr; Go to DashBoard</NavLink>
        <section className={styles.signup}>

          <form className={styles.form}>
             <h3 className={styles.h3Signup}>Create Account</h3>
             <p className={styles.pLogin}>Already have account? <Link className={styles.login} to="/login">LogIn</Link></p>
             <input className={styles.input} type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="UserName"/>
             <input className={styles.input} type="Email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
             <input className={styles.input} type="tel" value={mobileNumber} onChange={(e)=>setMobileNumber(e.target.value)} placeholder="Mobile Number"/>
             <input className={styles.input} type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
             {/* <input type="submit" value="Submit" className="submit-btn"/> */}
             <button className={styles.button} type="button" onClick={handleSignUp}>Sign Up</button>
          </form>
          <ToastContainer  autoClose={3000} />
        </section>
      </>
    )
}


export default Signup;