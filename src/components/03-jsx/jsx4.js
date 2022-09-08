import React from "react";

const Jsx4 = (props) => {
  const age = 16;
  //shortcut yöntemi ile konditional statement işlemi

  return (
    <>
      <div>
        {age >= 18 && <h1>The content for 18 or older</h1>}
        {age > 17 || <h1> The content for 17 or younger</h1>}
      </div>
    </>
  );
};

export default Jsx4;
