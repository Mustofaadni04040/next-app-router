// "use client";

// import { useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  //   const [state, setState] = useState(0);

  //   function handleCountChange() {
  //     setState(state + 1);
  //   }
  return (
    <div>
      {/* <h1>Hello World</h1>
      <button onClick={handleCountChange}>Click Saya</button>
      <p>{state}</p> */}
      {children}
    </div>
  );
}
