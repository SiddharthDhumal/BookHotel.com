// import { combineReducers, createStore } from "redux";
import {configureStore} from '@reduxjs/toolkit';
import BookingReducer from "./bookingslice";
import AccountReducer from "./accountslice";

// const rootReducer = combineReducers({account:AccountReducer,booking:BookingReducer});


const store = configureStore({
    reducer:{
        account:AccountReducer,
        booking:BookingReducer
    }
})

// const store = createStore(rootReducer);

// store.dispatch(SignUp("pravin","pravin@gmail.com",123123123,"aspdojsak@124123"));
// console.log(store.getState());

// store.dispatch(Login("pravin1","aspdojsak@1241235"));
// console.log(store.getState());

// store.dispatch(Booking({price:200,hotel_name:"tara"},2,12/4/2023, 15/5/2023, 4,200));
// console.log(store.getState());


export default store;