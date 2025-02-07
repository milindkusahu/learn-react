import React, { useState, FormEvent } from 'react';

interface TodoFormProps {
  onSubmit: (text: string) => void;
}

function TodoForm({ onSubmit }: TodoFormProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSubmit(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a todo..."
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm; 