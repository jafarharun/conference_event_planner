import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [

    {
      img: "https://images.pexels.com/photos/28228012/pexels-photo-28228012/free-photo-of-a-desk-with-a-laptop-controller-and-a-projector.jpeg",
      name: "Projectors",
      cost: 200,
      quantity: 0,
  },
  {
      img: "https://images.pexels.com/photos/2651794/pexels-photo-2651794.jpeg",
      name: "Speaker",
      cost: 35,
      quantity: 0,
  },
  {
      img: "https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg",
      name: "Microphones",
      cost: 45,
      quantity: 0,
  },
  {
      img: "https://images.pexels.com/photos/1181397/pexels-photo-1181397.jpeg",
      name: "Whiteboards",
      cost: 80,
      quantity: 0,
  },
  {
      img: "https://images.pexels.com/photos/788662/pexels-photo-788662.jpeg",
      name: "Signage",
      cost: 80,
      quantity: 0,
  },
    
  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
      const item = state[action.payload];
    if (item) {
        item.quantity++;
    }
      
    },
    decrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item && item.quantity > 0) {
          item.quantity--;
      }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
