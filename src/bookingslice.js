import { createSlice } from "@reduxjs/toolkit";
import hotelsData from './data';
// import { hotelOne } from './Pages/Card';

const initialState = {
    hotel:{},
    searchValue:hotelsData,
    room:0,
    fromDate:new Date(),
    toDate:new Date(),
    guests:0,
    avgPrice:0,
    totalCosts: 0
}

// const fromDate = new Date("2023-10-25");
// const toDate = new Date("2023-10-30");

// console.log(fromDate);
// console.log(toDate);
// console.log( toDate.getDate() - fromDate.getDate() );


const BookingSlice = createSlice({
    name:"booking",
    initialState,
    reducers:{
        hotelbook:{
            prepare(hotel,searchValue,room,fromDate,toDate,avgPrice,totalCosts){
                return {
                    payload:{hotel,searchValue,room,fromDate,toDate,avgPrice,totalCosts}
                }
            },

            reducer(state,action){
                 state.hotel = action.payload.hotel;
                //  state.searchValue = action.payload.searchValue;
                 state.room = action.payload.room;
                 state.fromDate = action.payload.fromDate;
                 state.toDate = action.payload.toDate;
                 state.guests = action.payload.guests;
                 state.avgPrice = action.payload.avgPrice;
                //  state.totalCosts = action.payload.totalCosts;
                state.totalCosts = action.payload.room * action.payload.guests * 
                action.payload.avgPrice * (new Date(Date.parse(action.payload.toDate)).getDate() - new Date(Date.parse(action.payload.fromDate)).getDate())
            }
        },

        searchhotel:{
            prepare(searchValue){
               return {
                payload:{searchValue}
            }
            },
            reducer(state,action){
            state.searchValue = action.payload.searchValue;
        }
    }

    }
});


// export default function BookingReducer(state = initialStateBooking,action){
//     switch(action.type){
//         case "booking/hotelbook":
//             return{
//                 ...state,
//                 hotel:action.payload.hotel,
//                 room:action.payload.room,
//                 fromDate:action.payload.fromDate,
//                 toDate:action.payload.toDate,
//                 guests:action.payload.guests,
//                 avgPrice:action.payload.avgPrice,
//                 totalCosts:action.payload.guests * action.payload.avgPrice * action.payload.room
//             }
        
//         default:
//             return state;
//     }
// }


// console.log(BookingSlice);

export const { hotelbook } = BookingSlice.actions;

export function BookingHotel(hotel,room,fromDate,toDate,guests,avgPrice){
    // console.log(fromDate);
    // console.log(toDate);
    // console.log(new Date(Date.parse(fromDate)).getDate());
    // console.log(new Date(Date.parse(toDate)).getDate());
    // console.log( new Date(Date.parse(toDate)).getDate() - new Date(Date.parse(fromDate)).getDate() );
    return {type:"booking/hotelbook",payload:{hotel,room,fromDate,toDate,guests,avgPrice}}
}


export function SearchHotel(searchValue){
    return {type:"booking/searchhotel",payload:{searchValue}}
}

export default BookingSlice.reducer;
