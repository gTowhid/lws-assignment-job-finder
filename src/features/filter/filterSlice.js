const { createSlice } = require('@reduxjs/toolkit');

// initial state
const initialState = {
  filter: '',
  sort: '',
  searchTerm: '',
};

// create slice
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterSelected: (state, action) => {
        state.filter = action.payload;
    },
    searched: (state, action) => {
        state.searchTerm = action.payload;
    },
    sorted: (state, action) => {
        state.sort = action.payload;
    }
  }
 
});

export default filterSlice.reducer;
export const {filterSelected, searched, sorted} = filterSlice.actions;
