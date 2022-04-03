import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import TodoApp from "./components/TodoApp";
const App = () => {
  return (
    <div className="App">
      <h1>todo list App - Reza</h1>
      <TodoApp />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default App;
