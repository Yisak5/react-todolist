import { useState } from "react";

function App() {
  const [todo, setToDo] = useState("");
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setToDo("");
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value ={todo} type="text" placeholder="Write your to do..."/>
        <button>App To Do!</button>
      </form>
    </div>
  );
}

export default App;
