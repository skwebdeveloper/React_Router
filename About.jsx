import React, { useState, useEffect } from 'react';
import './index.css'
const About = (props) =>{
const [ one, updated] = useState('')   
const [two, updating] = useState()

const something = (event) =>{
    event.preventDefault()
    updated(event.target.value)
}

const actual = () =>{
    updating("Hye," + one + ".I am Saurabh Kumar, a full web enthusiastic guy, I have been working on the web since 2017 so, till now I learned a lot about WEB I have a very keen interest in Javascript, NodeJS, HTML5, CSS3, Jquery, Python and CPP. Till now I have done 10+ projects out of which 5 are currently running on the web. I am well-versed in RESTfull APIs and CRUD operation. I also like to share my knowledge via the DEV community, GitHub, and via Blogspot. I am also interested in UI/UX development. Other than this I am a sports person by heart and love to play badminton and Football I also used to do doodle, Adobe Illustrations, painting, and reading blogs. (Smashing Magazine) .")
    updated(' ')
} 


return(
    <React.Fragment>
    <h1>{props.name} Page</h1>
    {/* <img style={{ borderRadius:"50%", height:"300px", width:"300px", display:"flex" }} src="https://images.unsplash.com/photo-1592875011345-b2c99700c009?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" /> */}
    <input style={{ margin:"20px 5px 5px -60px" ,height:"50px" }} type="text"
     placeholder="Enter your name"
     onChange={something}
      />
    <button style={{ margin:"5px" }} onClick={actual} type="submit">Hit</button>
    <h2 style={{ color:"white", display:"flex",alignItems:"left", justifyContent:"left" ,fontSize:"16px" }}>{two}</h2>
    </React.Fragment>
)
}

export default About;