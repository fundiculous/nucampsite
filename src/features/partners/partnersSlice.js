import { createSlice} from '@reduxjs/toolkit';
import { PARTNERS } from '../../app/shared/oldData/PARTNERS';


const initialState = {
   partnersArray : PARTNERS
};

const partnersSlice = createSlice({
   name: 'partners',
   initialState
});

export const partnersReducer = partnersSlice.reducer;

 export const selectAllPartners = (state) => {
    return PARTNERS; 
 };

 export const selectFeaturedPartner = (state) => {
    return state.partners.partnersArray.find((partner) => partner.featured);
 };

 