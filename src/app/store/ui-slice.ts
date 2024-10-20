import { createSlice } from "@reduxjs/toolkit"

const initialUIState = {
    isMobileNavOpen: false
}
export const UISlice = createSlice({
    name: 'UI',
    initialState: initialUIState,
    reducers: {
        toggle: (state) => {
            state.isMobileNavOpen = !state.isMobileNavOpen
        }
    }
})

export const UIActions = UISlice.actions
