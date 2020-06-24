import React from 'react'

const SearchResult = (props) =>{
const image = `https://source.unsplash.com/700x400/?${props.name}`;
    return(
    <React.Fragment>
    <img src={image} alt="Images"/>
    </React.Fragment>
)
}

export default SearchResult;

