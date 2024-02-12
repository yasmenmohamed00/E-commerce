import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchproducts = createAsyncThunk("fetchproducts", async () => {
    const res = await fetch(`http://localhost:3001/products`);
    return res?.json();
});
export interface product {
    id: number,
    categoryId: number,
    name: string,
    description: string,
    price: number,
    currency: string,
    availability: boolean,
    availabilityCount: number,
    ratings: {
      average: number,
      totalReviews: number
    },
    images: string,
    dateAdded: string
}

const productsSlice = createSlice({
    name: "products",
    initialState: {
        isLoading: false,
        data: [],
        isError: false
    },
    reducers: {
        // Define synchronous reducers here if you have any.
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchproducts.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchproducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchproducts.rejected, (state, action) => {
            state.isError = true;
        })
    }
});

export default productsSlice.reducer; 