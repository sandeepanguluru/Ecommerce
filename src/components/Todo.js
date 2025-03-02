import { useEffect, useState } from "react";
const Todo = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  // This useEffect runs whenever the 'todo' state changes
  useEffect(() => {
    console.log(todo);
  }, [todo]);

  const handleClick = () => {
    if (input === "") {
      alert("pls add data");
    } else {
      setTodo([input, ...todo]); // Adds input to the front of the list
      setInput("");
      console.log(todo, "todo");
    }
  };
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
      <div style={{ margin: "20px" }}>
        <ul>
          {todo.map((data, index) => (
            <>
              <li key={index}>{data}</li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Todo;
