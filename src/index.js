/* eslint-disable simple-import-sort/sort */
// TODO: fix simple sort
import React from 'react'
import ReactDOM from 'react-dom'
import RikuKallio from './RikuKallio'
// import reportWebVitals from './reportWebVitals'

// styles
import './assets/styles/tailwind.css'
import './assets/styles/index.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

ReactDOM.render(
  <React.StrictMode>
    <RikuKallio />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
