import axios from 'axios';

const headers = {
    Accept: "application/json"
}

export const fetchQuote = () => (dispatch) => {

    console.log("test");
    dispatch({type: "FETCHING_START"});

    axios.get("https://api.taylor.rest/")
        .then(res => {
            dispatch({type: 'FETCHING_QUOTE_SUCCESS', payload: res.data.quote})
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })

}