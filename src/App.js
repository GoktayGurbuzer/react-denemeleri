import { useState } from 'react';

import Test from './Test';
import './output.css'

function App() {
  const [show, setShow] = useState()
  return (
    <>
    <button onClick={() => setShow(show => !show)}>
      {show ? 'Gizle' : 'Göster'}
    </button>
    {show && <Test />}
    </>
  )
}

export default App;
