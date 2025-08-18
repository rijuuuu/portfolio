import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';


document.body.style.backgroundColor = "#F6F1EC";
document.body.style.color = "#2C2C2C";
// document.body.style.color = "#000000";

document.body.style.margin = 0;
document.body.style.fontFamily = "Poppins";
document.body.style.fontSize = "12px"; 
document.body.style.fontWeight = 500; 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
