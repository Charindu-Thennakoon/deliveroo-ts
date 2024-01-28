import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// Define the type for your items
// Modify this according to your actual data structure
type Item = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  kal: number;
};

// Define the state type
interface ItemsState {
  items: Item[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export const fetchItems = createAsyncThunk<Item[]>(
  "items/fetchItems",
  async () => {
    const response = await fetch("data/data2.json");
    // Assuming the JSON structure matches your Item[] type
    return (await response.json()) as Item[];
  }
);

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  } as ItemsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchItems.fulfilled, (state, action: PayloadAction<Item[]>) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export default itemsSlice.reducer;
