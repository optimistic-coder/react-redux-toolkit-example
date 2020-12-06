import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const initialState = {
  loading: true,
  hasErrors: false,
  repos: []
};

const ApiSlice = createSlice({
  name: "repos",
  initialState,
  reducers: {
    
    getReposSucess: (state, { payload }) => {
        console.log(payload)
      state.repos = payload;
      state.loading = false;
      state.hasErrors = false;
    },
   
  }
});

export const { getRepos, getReposSucess, getReposFailure } = ApiSlice.actions;

// The reducer
export default ApiSlice.reducer;

