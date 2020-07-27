import React from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../store/actions/books.action';

export default connect(null, {fetchBooks})((props) => 
    <div className="dispatchers">
        <button 
            className="dispatch-button"
            onClick={() => props.fetchBooks('')}
        >
            <i className="fa fa-rocket" />
        </button>
        <button className="dispatch-button">
            <i className="fa fa-undo" />
        </button>
    </div>
);