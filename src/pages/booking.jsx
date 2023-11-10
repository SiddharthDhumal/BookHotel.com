import { useDispatch, useSelector } from 'react-redux';
import styles from './Booking.module.css';
import { useState } from 'react';
import {BookingHotel} from '../BookingSlice';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// import 'font-awesome/css/font-awesome.min.css';

function Booking(){
    
    const [room,setRoom] = useState();
    const [fromDate,setFromDate] = useState();
    const [toDate,setToDate] = useState();
    const [guests,setGuests] = useState();
    const [requiredField,setRequiredFiled] = useState(false);
    const totalCosts = useSelector(state=>state.booking.totalCosts);
    const avgPrice = useSelector(state=>state.booking.avgPrice);
    const guestcheck = useSelector(state=>state.booking.guests);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const hotel = JSON.parse(localStorage.getItem('hotelInfo'));
    // const hotel = localStorage.getItem('hotelInfo');
    const avgPrices = hotel.rates_from;
   //  const hotelTotalCosts = avgPrices * guests * room ;
   //  const trialCosts = avgPrices * guests * room * (new Date(Date.parse(toDate)).getDate() - new Date(Date.parse(fromDate)).getDate() );
    
   
   function handleBookNow(e) {
      e.preventDefault();

        if(!hotel || !room || !fromDate || !toDate || !guests || !avgPrices){
 
         toast.warn("please fill required fields!!", {
            autoClose: 7000 ,
            position: toast.POSITION.BOTTOM_LEFT
          });
        }else if(totalCosts === 0 || totalCosts < 0){
       
         toast.error("Please fill required fields appropriately!", {
            position: toast.POSITION.BOTTOM_LEFT
          });
        }else{
         toast.success("Booking successfully!!", {
            position: toast.POSITION.BOTTOM_LEFT
          });
          setTimeout(()=>{navigate('/confrimation')},3000);

         // navigate('/confrimation');
        }
    }

    dispatch(BookingHotel(hotel,room,fromDate,toDate,guests,avgPrices));
   //  console.log(dispatch(BookingHotel(hotel,room,fromDate,toDate,guests,avgPrices)));

    return(
        <>
         <NavLink to="/" className={styles.backBtn}>&larr;Back button</NavLink>
         <section className={styles.bookingsection}>
           <form className={styles.bookingForm} required>
            <h1 className={styles.hotelBooking}>Hotel Booking</h1>
             <div className={styles.formRows}>
                <label className={styles.label}>Number Of Rooms Required:</label>
                {/* <input className={styles.input} value={room} onChange={(e)=>setRoom(e.target.value)} type="number"/> */}
                <select defaultValue={'0'} className={styles.input} value={room} onChange={(e)=>setRoom(e.target.value)}>
                  <option value="0" selected>0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
             </div>
             <div className={styles.formRows}>
                <label className={styles.label}>From when you want to stay:</label>
                <input className={styles.input} value={fromDate} onChange={(e)=>{
                  // console.log(typeof e.target.value);
                  // * (new Date(Date.parse(toDate)).getDate() - new Date(Date.parse(fromDate)).getDate())
                  setFromDate(e.target.value)}} type="date"/>
             </div>
             <div className={styles.formRows}>
                <label className={styles.label}>When you want checkout:</label>
                <input className={styles.input} min={fromDate} value={toDate} onChange={(e)=>{
                  // console.log(typeof Date.parse(e.target.value));
                  setToDate(e.target.value)}} type="date"/>
             </div>
             <div className={styles.formRows}>
                <label className={styles.label}>How many people are going to stay:</label>
                {/* <input className={styles.input} value={guests} onChange={(e)=>setGuests(e.target.value)} type="number"/> */}
                <select className={styles.input} value={guests} 
                onChange={(e)=>setGuests(e.target.value)}>
                  <option value="0" selected>0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
             </div>
             <div className={styles.formRows}>
                <label className={styles.label}>Price per room</label>
                <span className={styles.avgPrice}>$ {avgPrice}</span>
             </div>
             {
              !isNaN(totalCosts) &&  <div className={styles.formRows}>
                   <p className={styles.label}>Your total Costs is: $ {totalCosts}</p>
                </div>
             }
             
             <button className={styles.bookingbtn} onClick={(e)=>handleBookNow(e)}>
               ✔ Book Now
             </button>
        </form>
           {/* <button className={styles.backBtn}  onClick={()=>navigate('/')}>Back button</button> */}
           <ToastContainer autoClose={5000}/>
           </section>
        </>
    )
}

export default Booking;