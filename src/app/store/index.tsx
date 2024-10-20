import { configureStore, createSlice, createStore } from "@reduxjs/toolkit";
import { UISlice } from "./ui-slice";



// const store = createStore(appSlice.reducer);
const store = configureStore({
    reducer: {
        UI: UISlice.reducer
    }
});

export default store;
// TypeScript types
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;