import React, { useState } from 'react'
import './index'
import SearchResult from './SearchResult'



const Search = (props) =>{
 const[ actual, setState ] = useState(); 
 const take = (event) =>{
    setState(event.target.value)
 }



return(
    <React.Fragment>
    <h1>{props.name} Page</h1>
    <input style={{ margin:"10px 5px 15px -60px" ,height:"50px" }} type="text"
     placeholder="Search"
     onChange={take}
     value={actual}
      />
     <SearchResult name={actual} />
    </React.Fragment>
)
}


export default Search;