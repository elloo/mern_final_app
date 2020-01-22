import {NEW_LISTING, SET_LISTINGS, DELETE_LISTING, SET_USER} from '../actions/types'; 

const initialState = {
    listings: [],
    user: {}
};

const reducer = (state = initialState, action) => {
    console.log("REDUCER", action.val)
     // copied state //
    let newState = {...state};
    let newListings = [...newState.listings]
    let userSet = {...newState.user}
    // new listing action //
        if (action.type === NEW_LISTING) {
            newListings.push(action.val)};
    // set listings action //
        if (action.type === SET_LISTINGS) {
            newListings = action.val};
    // delete listing action //
        if (action.type === DELETE_LISTING) {
            const index = newListings.findIndex(listing => listing._id === action.val);
            const listings = [...newListings]
            listings.splice(index, 1);
            newListings = listings;
        }
        if (action.type === SET_USER) {
            console.log('checking action.val', action.val)
            userSet = action.val
            }
        // setting new state after an action has occured //
        newState.listings = newListings;
        newState.user = userSet
        console.log('newstate---------', newState)

        return newState;
}

// const userReducer = (state = initialState, action) => {
//     let newState = {...state};
   
   
//         return newState
//     };

        export default reducer;
