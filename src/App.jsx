import { useState } from 'react';
import './css/App.css';
import welcome from './components/section/HeroBanner';
// import discover from './components/Home';
// import build_and_belong from './components/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <welcome />
    </>
  )
}

export default App