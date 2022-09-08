import React from 'react'

const Jsx2 = () => {

 const user = {
  isim:"Ali Gel",
  email:"ali@gmail.com",
  occupation:"developer"
 }

  return (
    <React.Fragment>
      <div>Jsx2</div>
      <div>{user.isim} {user.email}</div>
      <div>Occupation: {user.occupation}</div>
    </React.Fragment>
  );
}

export default Jsx2
