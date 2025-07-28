import React from "react";

function Navbar() {
  return(
    <div className="my-2 flex h-[60px] items-center justify-center gap-4 rounded-lg bg-white text-xl font-medium">
        <div className="flex">
            <img src="/logos_firebase.svg"/>
            <h1>Firebase Contact App</h1>
        </div>
    </div>
  );
}

export default Navbar;
