import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchcatogries = createAsyncThunk("fetchcatogries", async () => {
    const res = await fetch(`http://localhost:3001/categories`);
    return res?.json();
});

const catogriesSlice = createSlice({
    name: "catogries",
    initialState: {
        isLoading: false,
        data: [],
        isError: false
    },
    reducers: {
        // Define synchronous reducers here if you have any.
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchcatogries.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchcatogries.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchcatogries.rejected, (state, action) => {
            state.isError = true;
        })
    }
});

export default catogriesSlice.reducer; 