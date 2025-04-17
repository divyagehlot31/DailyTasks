import React from 'react';
// import './App.css';
import UserCard from './components/UserCard';
import Try from './components/try';
const App = () => {

  const users = [
    {
      name: 'User1',
      age: 22,
      isActive: true,
      hobbies: ['Reading', 'Traveling', 'Cooking'],
      address: { city: 'Vadodara', state: 'Gujarat' },
      status: 'Done',
      
    },
    {
      name: 'User2',
      age: 28,
      isActive: false,
      hobbies: ['Gaming', 'Music'],
      address: { city: 'Ahmedabad', state: 'Gujarat' },
      status: 'Rejected',
    },
    {
      name: 'User3',
      age: 25,
      isActive: true,
      hobbies: ['Drawing', 'Reading'],
      address: { city: 'Surat', state: 'Gujarat' },
      status: 'pending',
    },
    {
      name: 'User4',
      age: 'name',
      isActive: true,
      hobbies: ['Drawing', 'Reading'],
      address: { city: 'Surat', state: 'Gujarat' },
      status: 'pending',
    },
  ];

  return (
    <div>
      {users.map((user, index) => (
        <UserCard key={index} {...user} />
      ))}

      <Try/>
    </div>
  );
};

export default App;
