import { useState } from "react";

const XLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "user" && password === "password") {
      setSuccess(true);
    } else {
      setSuccess(false);
      setError(!true);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>XLogin</h1>
      <br />
      {success ? (
        <h1>Welcome, user!</h1>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Username: </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="border-4 border-purple-500 rounded-2xl"
          />
          <br />
          <br />
          <label>Password: </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="border-4 border-purple-500 rounded-2xl"
          />
          <br />
          <br />
          <button className="bg-purple-500 text-3xl py-4 px-6 rounded-2xl">
            Submit
          </button>
        </form>
      )}
      {error ? (
        <div className=" border-4 border-purple-300 px-12 py-6 text-3xl rounded-xl mt-10">
          <p>Username or Password is wrong!</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default XLogin;
