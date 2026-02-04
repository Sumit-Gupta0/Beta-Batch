import React from 'react'

function ProctedRoute() {
   

    if (!canLogin){
       return <Login/>
    }

  return (
    <div>
        <dashBoadn/>
    </div>
  )
}

export default ProctedRoute