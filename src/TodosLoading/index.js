import './TodosLoading.css';

function TodosLoading() {
  return (
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-completeIcon"></span>
      <p className="LoadingTodo-text">Loading TODOS...</p>
      <span className="LoadingTodo-deleteIcon"></span>
    </div>             
  );
}

export { TodosLoading };              