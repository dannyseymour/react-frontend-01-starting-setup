import React from 'react';

import UsersList from '../components/UsersList';
const Users = () => {
    const USERS = [{id: 'u1', name: 'Danny Seymour', image:"https://pure-tundra-13659.herokuapp.com/pics/market", places:3}];
    return <UsersList items={USERS} />;
};


export default Users;