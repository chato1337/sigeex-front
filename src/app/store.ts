import { configureStore } from '@reduxjs/toolkit'
import generalModalReducer from '../redux/modalSlice'
import themeReducer from '../redux/themeSlice'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        generalModal: generalModalReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch