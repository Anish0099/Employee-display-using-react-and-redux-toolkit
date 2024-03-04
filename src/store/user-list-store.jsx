// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from './userReducer';

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";

// const userStore = configureStore({
//     reducer: {
//         users: userReducer
//     }
// })
// export default userStore;






























const userStore = configureStore({
    reducer: {
        users: userReducer
    }

})

export default userStore;