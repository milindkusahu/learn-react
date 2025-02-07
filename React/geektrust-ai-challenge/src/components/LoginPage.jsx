import { useState } from "react";

const LoginPage = () => {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();

    if (input === "user" && password === "password") {
      setSuccess(true);
    } else {
      setErrorMsg(true);
    }
  };

  return (
    <div className="main-container">
      <h2>Login Page</h2>
      <div>
        {success ? (
          <h1>Form Submission Successful!</h1>
        ) : (
          <div>
            <form onSubmit={handleForm}>
              <div>
                <label htmlFor="Username">Username: </label>
                <input
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                  type="text"
                  required
                />
              </div>
              <br />
              <div>
                <label htmlFor="Password">Password: </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  required
                />
              </div>
              <br />
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        )}
      </div>
      {errorMsg ? <p>Username or Password is Incorrect!</p> : ""}
    </div>
  );
};

export default LoginPage;
