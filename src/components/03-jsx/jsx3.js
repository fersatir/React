import React from 'react'

const Jsx3 = () => {
 //

 const isAdmin =false;
  return (
    <>
    {/* Ternary ile conditional statement yazılabilir. */}
      {isAdmin ? (
        <>
          <h2>Admin Menu</h2>
          <ul>
            <li>Create User</li>
            <li>Update User</li>
            <li>Delete User</li>
          </ul>
        </>
      ) : (
        <>
          <h2>User Menu</h2>
          <ul>
            <li>Login User</li>
            <li>Register User</li>
          </ul>
        </>
      )}
    </>
  );
};

export default Jsx3