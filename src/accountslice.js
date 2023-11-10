import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    username:'',
    password:'',
    mobileNumber:0,
    email:'',
};


const accountSlice = createSlice({
    name:"account",
    initialState,
    reducers:{
        signup:{
            prepare(username,password,mobileNumber,email){
                return{
                    payload:{username,password,mobileNumber,email}
                }
            },
    
            reducer(state,action){
               state.username = action.payload.username;
               state.password = action.payload.password;
               state.mobileNumber = action.payload.mobileNumber;
               state.email = action.payload.email;
            }
        },
        
        login:{
            prepare(username,password){
                return{
                    payload:{username,password}
                }
            },
    
            reducer(state,action){
                 state.username = action.payload.username;
                 state.password = action.payload.password;
            }
        }
    }
   
    
})

// export default function AccountReducer(state=initialStateUser,action){
//     switch(action.type){
//             case "account/signup":
//             //    if(action.payload.username !== username || action.payload.password !== password 
//             //      || action.payload.mobileNumber !== mobileNumber || action.paylod.email !== email
//             //     ){
//                     return{
//                          ...state,
//                          username:action.payload.username,
//                          password:action.payload.password,
//                          mobileNumber:action.payload.mobileNumber,
//                          email:action.payload.email
//                     }
//                 // }
//             case "account/login":
//                 // if(action.payload.username === username || action.payload.password === password){
//                     return{
//                         // ...state,
//                         username:action.payload.username,
//                         password:action.payload.password
//                     }
//                 // }
//             default:
//                return state;
//     }
// }

// console.log(accountSlice);

export const { signup,login } = accountSlice.actions;

export function SignUp(username,email,mobileNumber,password){
    return {type:"account/signup",payload:{username,email,mobileNumber,password}}
}

export function LoginUser(username,password){
    return {type:"account/login",payload:{username,password}}
}

export default accountSlice.reducer;