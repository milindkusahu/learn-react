// import { useState } from "react";
// import Countries from "./components/Countries";
// import Product from "./components/Product";
// import Stopwatch from "./components/Stopwatch";

import StopwatchNew from "./components/StopwatchNew";

// import LoginPage from "./components/LoginPage";

const App = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const handleForm = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div>
      {/* <Stopwatch /> */}
      {/* <Countries /> */}
      {/* <Product /> */}
      {/* <LoginPage /> */}
      <StopwatchNew />
    </div>
    // <div className="container" style={{ background: isOpen ? "#808080" : "" }}>
    //   <h1>User Details Modal</h1>
    //   <div className="button-container">
    //     <button onClick={() => setIsOpen(!isOpen)}>Open Form</button>
    //   </div>
    //   {isOpen ? (
    //     <div className="modal">
    //       <div className="close">
    //         <button onClick={() => setIsOpen(!isOpen)}>X</button>
    //       </div>
    //       <h2>Fill Details</h2>
    //       <form onChange={handleForm}>
    //         <div className="form-group">
    //           <label htmlFor="username">Username:</label>
    //           <input type="text" id="username" />
    //         </div>

    //         <div className="form-group">
    //           <label htmlFor="email">Email Address:</label>
    //           <input type="email" id="email" />
    //         </div>

    //         <div className="form-group">
    //           <label htmlFor="phone">Phone Number:</label>
    //           <input type="tel" id="phone" />
    //         </div>

    //         <div className="form-group">
    //           <label htmlFor="dob">Date of Birth:</label>
    //           <input type="date" id="dob" />
    //         </div>

    //         <div className="button-container">
    //           <button type="submit" className="submit-button">
    //             Submit
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //   ) : (
    //     ""
    //   )}
    // </div>
  );
};

export default App;
