import React from 'react'
import ReactDOM from 'react-dom/client'
import RikuKallio from './RikuKallio'
// styles
import './assets/styles/tailwindoutput.css'
import './assets/styles/index.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RikuKallio />
  </React.StrictMode>,
)
