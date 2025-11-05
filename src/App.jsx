import { useState } from 'react';

function App() {
  const [color, setColor] = useState('gray');

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Hello, I'm Akhil!</h1>
      <p>This is my first React app (now with Vite!).</p>
      <button
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: color,
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
        onClick={() => setColor(color === 'gray' ? 'blue' : 'gray')}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;