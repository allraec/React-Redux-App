import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { fetchQuote } from '../actions';

const Quote = ({title, quote, isFetching, error, fetchQuote}) => {
    useEffect(() => {
        fetchQuote();
    }, [fetchQuote]);

    return(
        <>
            <h1>{title}</h1>
                <img src='https://pbs.twimg.com/media/D8-U-w6UIAAHHzv?format=jpg&name=medium' width='500px' height='500px'/>
                <h2>Taylor says: {quote}</h2>
            <button onClick={fetchQuote}>Get new Taylor quote!</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
      quote: state.quote,
      title: state.title,
      isFetching: state.isFetching,
      error: state.error
    }
}

const mapDispatchToProps = { fetchQuote };

export default connect(mapStateToProps, mapDispatchToProps)(Quote);