const initialState = {
    title: "Taylor Swift Quotes",
    isFetching: false,
    quote: "",
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCHING_START":
            return{
                ...state,
                isFetching: true
            }
        case "FETCHING_QUOTE_SUCCESS":
            return{
                ...state,
                isFetching: false,
                error: "",
                quote: action.payload
            }
        case "FETCHING_QUOTE_ERROR":
             return{
                ...state,
                isFetching: false,
                error: action.payload
                }
        default:
            return state;
    }
}