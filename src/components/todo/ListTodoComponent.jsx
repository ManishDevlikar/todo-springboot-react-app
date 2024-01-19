import { useState, useEffect } from "react";
import { retriveAllPostByUser, deleteTodoById } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContex";
import { useNavigate } from "react-router-dom";

export default function ListTodoComponent() {
  // const today = new Date();
  // const targetDate = new Date(
  //   today.getFullYear() + 12,
  //   today.getMonth(),
  //   today.getDate()
  // );
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();
  const authContex = useAuth();
  const username = authContex?.user;

  useEffect(() => {
    getAllTodos();
  }, []);

  const getAllTodos = () => {
    retriveAllPostByUser(username).then((res) => setTodos(res?.data));
  };

  const deleteTodo = (id) => {
    deleteTodoById(username, id).then(() => {
      // display msg
      setMessage(`todo with id ${id} deleted succsessfully`);
      // updating todos list
      getAllTodos();
    });
  };

  const updateTodo = (id) => {
    console.log("updated", typeof id);
    navigate(`/todo/${id}`);
  };
  const addTodo = () => {
    navigate("/todo/-1");
  };
  // const todos = [
  //   {
  //     id: 1,
  //     description: "learn java",
  //     done: false,
  //     targetDate: targetDate,
  //   },
  //   {
  //     id: 2,
  //     description: "learn javascript",
  //     done: false,
  //     targetDate: targetDate,
  //   },
  //   {
  //     id: 3,
  //     description: "learn springboot",
  //     done: false,
  //     targetDate: targetDate,
  //   },
  //   {
  //     id: 4,
  //     description: "learn react",
  //     done: false,
  //     targetDate: targetDate,
  //   },
  //   {
  //     id: 5,
  //     description: "learn mongodb",
  //     done: false,
  //     targetDate: targetDate,
  //   },
  // ];
  return (
    <div className="container">
      <h1>Your List Todo</h1>
      {message && <div className="alert alert-warning">{message}</div>}

      <div>
        <table border={"1px"} width={"50%"} className="table">
          <thead>
            <tr>
              <th>Description</th>
              <th>isDone</th>
              <th>TargetDate</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.description}</td>
                <td>{todo.done.toString()}</td>
                <td>{todo.targetDate}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => updateTodo(todo.id)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <button className="btn btn-primary" onClick={addTodo}>
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
}
