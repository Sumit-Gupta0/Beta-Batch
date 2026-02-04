import React, {useEffect, useRef, useState} from 'react'

function Home() {
  const [count, setCount] = useState(0);

  const inputRef = useRef(null);
  
  return (
    <div>

      <input type="text" placeholder='Focus me' ref={inputRef} />

      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
      
      
    </div>
  )
}

export default Home