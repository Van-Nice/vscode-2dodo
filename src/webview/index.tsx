import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

const App = () => {
  const [todo, setTodo] = React.useState('');
  const [todos, setTodos] = React.useState<string[]>([]);

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo('');
  };

  return (
    <div>
      <h1>Todo List</h1>
    </div>
  );
};

// Attempt to get the element with ID 'root'
const rootElement = document.getElementById('root');

if (rootElement) {
  // If the element exists, create the root and render the App component
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  // If the element does not exist, log an error or handle appropriately
  console.error("Failed to find the root element");
}