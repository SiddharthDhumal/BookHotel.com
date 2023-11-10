import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './ConfirmationTicket.module.css';




function ConfirmationTicket(){
 
  const navigate = useNavigate();

  // const room =  useSelector(state=>state.booking.room);
  const hotelInfo = useSelector(state=>state.booking.hotel);
  console.log(hotelInfo);
  const fromDate = useSelector(state=>state.booking.fromDate);
  // const toDate  = useSelector(state=>state.booking.toDate);
  // const guests = useSelector(state=>state.booking.guests);
  // const totalCosts = useSelector(state=>state.booking.totalCosts);
  const username = useSelector(state=>state.account.username);
  console.log(username);


  const accountInfo = JSON.parse(localStorage.getItem('signupAccount'));

  const user = accountInfo.username;


  function printTicket(){
        // printWindow.document.open();
        window.print();
        navigate('/');
  }

   return(
    <>
    <form className={styles.confirmation}>
      <div>
      <h1 className={styles.bookingDetails}>Booking Details</h1>
        <div className={styles.confirmationDiv}>
          <label className={styles.label}>Name:</label>
          <p className={styles.userdetails}>{user}</p>
        </div>
        <div className={styles.confirmationDiv}>
          <label className={styles.label}>Hotel:</label>
          <p className={styles.userdetails}>{hotelInfo.hotel_name}</p>
        </div>
        <div className={styles.confirmationDiv}>
          <label className={styles.label}>Destination:</label>
          <p className={styles.userdetails}>{hotelInfo.city} &nbsp; {hotelInfo.country}</p>
        </div>
        <div className={styles.confirmationDiv}>
          <label className={styles.label}>Address:</label>
          <p className={styles.userdetails}><span>{hotelInfo.addressline1} {hotelInfo.addressline2}</span></p>
        </div>
        <div className={styles.confirmationDiv}>
          <label className={styles.label}>Date of Travel:</label>
          <p className={styles.userdetails}>{fromDate}</p>
        </div>
        <div  className={styles.confirmationDiv}>
          <label  className={styles.label}>Check IN Time:</label>
          <p className={styles.userdetails}>{hotelInfo.checkin}</p>
        </div>
        <div  className={styles.confirmationDiv}>
          <label  className={styles.label}>Check OUT Time:</label>
          <p className={styles.userdetails}>{hotelInfo.checkout}</p>
        </div>
        </div>
        {/* <p>Booking Date is from {fromDate}</p>
        <p>Booking Date is to {toDate}</p>
        <p>Number of rooms {room}</p>
        <p>Number of guests are {guests}</p>
        <p>Total Costs {totalCosts}</p>
        <p>Happy Journey</p> */}
        <button className={styles.printBtn} onClick={printTicket}>Print Ticket</button>
    </form>
    {/* <button onClick={()=>navigate('/')}>Book Again</button> */}
    {/* <button onClick={printTicket}>Print Ticket</button> */}
    </>
   )
}

export default ConfirmationTicket;