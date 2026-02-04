import { createContext } from 'react';

const UserContext = createContext({
    username: 'Arin',
    password: 'Arin*123',
    courses: [
    {id: 1, name: 'ReactJS'},
    {id: 2, name: 'VueJS'},
    {id: 3, name: 'AngularJS'},
    {id: 4, name: 'ThreeJS'},
  ]
  });

export default UserContext;