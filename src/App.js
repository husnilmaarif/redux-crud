import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUsername } from "./features/Users";

function App() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");

  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  return (
    <>
      <div className="App">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 m-5 p-3 shadow ">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Name.."
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Username.."
                  className="form-control"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    dispatch(
                      addUser({
                        id: 0,
                        name,
                        username,
                      })
                    )
                  }
                >
                  Add User
                </button>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {userList.map((user) => {
              return (
                <div className="col-md-6 m-2 p-2 shadow">
                  <h1>{user.name}</h1>
                  <p>{user.username}</p>
                  <input
                    type="text"
                    placeholder="New Username.."
                    className="form-control mb-3"
                    onChange={(e) => setNewUsername(e.target.value)}
                  />
                  <button
                    className="btn btn-warning"
                    onClick={() =>
                      dispatch(
                        updateUsername({ id: user.id, username: newUsername })
                      )
                    }
                  >
                    Edit User
                  </button>
                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => dispatch(deleteUser({ id: user.id }))}
                  >
                    Delete User
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
