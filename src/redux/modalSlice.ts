import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GeneralModalState {
    modalTitle: string,
    modalState: boolean,
    renderContent: any,
    actionCallback: () => void,
}

const initialState: GeneralModalState = {
    modalTitle: "empty",
    modalState: false,
    renderContent: () => null,
    actionCallback: () => null
}

export const generalModalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setModalTitle: (state, action: PayloadAction<string>) => {
            state.modalTitle = action.payload
        },
        setModalState: (state, action: PayloadAction<boolean>) => {
            state.modalState = action.payload
        },
        setRenderContent: (state, action: PayloadAction<any>) => {
            state.renderContent = action.payload
        },
        setActionCallback: (state, action: PayloadAction<any>) => {
            state.actionCallback = action.payload
        }
    }
})

export const { setModalTitle, setModalState, setRenderContent, setActionCallback } = generalModalSlice.actions

export default generalModalSlice.reducer