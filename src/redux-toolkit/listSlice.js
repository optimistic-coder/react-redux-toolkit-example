import { createSlice, configureStore } from '@reduxjs/toolkit'
const listSlice = createSlice({
    name: 'todolist',
    initialState: [],
    reducers: {
        AddTodo: {
            reducer(state, action) {
                const text = action.payload
                state.push({ text })

            }
        },

    }
})


export default listSlice.reducer;


export const {
    AddTodo
} = listSlice.actions;

export const selectQuestions = (state) => state.todolist;