import { createSlice } from "@reduxjs/toolkit";

interface PurchaseState {
  purchaseFlowState: string;
}

const initialState: PurchaseState = {
  purchaseFlowState: "seating",
};

const purchaseSlice = createSlice({
  name: "purchase",
  initialState,
  reducers: {
    setProcessing: (state) => {
      console.log("setting processing");

      state.purchaseFlowState = "processing";
    },
    setPayment: (state) => {
      console.log("setting form");

      state.purchaseFlowState = "form";
    },
    setComplete: (state) => {
      console.log("setting completed");

      state.purchaseFlowState = "completed";
    },
    setSeating: (state) => {
      console.log("setting seating");
      state.purchaseFlowState = "seating";
    },
  },
});

export const { setProcessing, setComplete, setPayment, setSeating } =
  purchaseSlice.actions;
export default purchaseSlice.reducer;
