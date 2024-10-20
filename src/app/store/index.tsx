import { configureStore, createSlice, createStore } from "@reduxjs/toolkit";

const initialState = {
    isMobileNavOpen: false
}
const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggle: (state) => {
            state.isMobileNavOpen = !state.isMobileNavOpen
        }
    }
})


// const store = createStore(appSlice.reducer);
const store = configureStore({
    reducer: {
        app: appSlice.reducer
    }
});

export const appActions = appSlice.actions

export default store;
// TypeScript types
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;