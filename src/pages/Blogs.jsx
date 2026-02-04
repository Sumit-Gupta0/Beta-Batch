import React from 'react'
import { Route, Routes } from 'react-router-dom'

function Blogs() {
  return (
    <>
    <h1>Blogs Page</h1>
    <Routes>
      <Route path="blog01" element={<div>Blog 01 Content</div>} />
      <Route path="blog02" element={<div>Blog 02 Content</div>} />
      <Route path="blog03" element={<div>Blog 03 Content</div>} />
    </Routes>
    </>
  )
}

export default Blogs