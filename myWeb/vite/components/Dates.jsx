import React from 'react';
const today = new Date() ;

function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', {dateStyle : 'long' }).format(date) ;
}

export default function formatToday() {
    return (
        <div>
        <h1>Built in {formatDate(today)}</h1>
        </div>
    );
}