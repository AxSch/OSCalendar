import React from 'react'
import Calendar from './Components/Calendar'
import winxp from './assets/images/winxp.jpg'

function App() {
  return (
    <div className="relative flex justify-center h-screen" style={{ 
        background: `url(${winxp}) no-repeat center center fixed`,
        backgroundSize: 'cover'
      }}>
      <Calendar />
    </div>
  );
}

export default App;
