import styles from './SearchBar.module.css';
import { useEffect, useState } from 'react';
import hotelsData from '../data';
// import { hotelOne } from '../Pages/Card';
import { useDispatch } from 'react-redux';
import { SearchHotel } from '../BookingSlice';

function Searchbar(){

   const [search,setSearch] = useState('');
   const dispatch = useDispatch()
//    const [searchedValue,setSearchedValue] = useState([]);

//  console.log(search);

  

  // function handleSearch(){
  //   // // console.log('clicked');
  //   // // useEffect(function(){
  //   //  let filteredHotel =  hotelsData.filter(hotel=>{
  //   //       if(hotel.hotel_name.toLowerCase()===search.toLowerCase() || 
  //   //       hotel.city.toLowerCase() === search.toLowerCase()
  //   //       ){ 
  //   //         console.log('clicked1');
  //   //         console.log(hotel);
  //   //         return hotel;
  //   //       }
  //   // })
  //   // console.log(filteredHotel);  
  //   // // },[search])

  //   const filteredHotel = hotelOne.filter(hotel=>{
  //     // console.log(hotel.hotel_name.toLowerCase());
  //     // console.log('search', search.toLowerCase());
  //     if(hotel.hotel_name.toLowerCase().trim().includes(search.toLowerCase().trim()) || 
  //      hotel.city.toLowerCase().trim().includes(search.toLowerCase().trim()) || 
  //      hotel.state.toLowerCase().trim().includes(search.toLowerCase().trim())
  //     ){
  //       return hotel;
  //     }
  //   })

    
  //   setSearch('');
  //   console.log(filteredHotel);

  //   dispatch(SearchHotel(filteredHotel));

  // }


  function handleClose(){
    setSearch('');
  }


  useEffect(function(){
     
    const filteredHotel = hotelsData.filter(hotel=>{
      // console.log(hotel.hotel_name.toLowerCase());
      // console.log('search', search.toLowerCase());
      if(hotel.hotel_name.toLowerCase().trim().includes(search.toLowerCase().trim()) || 
       hotel.city.toLowerCase().trim().includes(search.toLowerCase().trim()) || 
       hotel.state.toLowerCase().trim().includes(search.toLowerCase().trim())
      ){
        return hotel;
      }
    })

    
    // setSearch('');
    // console.log(filteredHotel);

    dispatch(SearchHotel(filteredHotel));
  },[search])
   


    return(
        <div className={styles.searchbar}>
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} className={styles.input} placeholder="search for hotels"/>
            <button className={styles.button} onClick={handleClose}>X</button>
        </div>
    )
}

export default Searchbar;