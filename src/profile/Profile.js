import React from 'react'

function Profile(props) {

    let {fullname,bio,profession}=props;    
  
  return (
    <divs style={{display: "flex" ,margin:"60px" }}>

          <div style= {{display: "flex",flexDirection: "column"}}>
            <h1 style={{color: "#9013fe"}}> {props.fullname}</h1>
            <h2>  {bio} </h2>
            <h2 style={{color: "#9013fe"}}> {profession} </h2>
          </div> 
          <div>
            {props.children}
          </div>
    </divs>
  )
}

export default Profile