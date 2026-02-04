import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function MyCourse() {
    
    const user = useContext(UserContext);
    const courses = user.courses;

  return (
    <div>
        <h2>{user.username} Courses</h2>

        <ul>
            {courses.map((course) => (
                <li key={course.id}>{course.name}</li>
            ))}
        </ul>

    </div>
  )
}

export default MyCourse