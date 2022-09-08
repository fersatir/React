import React from 'react'

const Style2 = () => {

  const styleTitle = {
    fontSize:"2rem",
    color:"green",
    fontWeight:"bold",
    textAlign:"center",
  };

 
  return (
    <>
      <h2 style={styleTitle}>React Loops</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
        asperiores fuga sequi reiciendis veritatis velit suscipit pariatur
        blanditiis esse consectetur deserunt nulla voluptate nostrum, sunt
        maxime fugiat illo similique! Necessitatibus.
      </p>
      <h2 style={{...styleTitle,color:"blue"}}>React Hooks</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum quam
        animi, voluptas corporis quibusdam quae tempora doloremque possimus
        molestiae sed officiis expedita deserunt rerum enim culpa molestias
        voluptatum ratione quaerat?
      </p>
    </>
  );
}

export default Style2