import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './index.css'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Login from './components/login'
import SignUp from './components/signup'
import Home from './components/home'
import Dashboard from './components/dashboard'

function App() {
  return (
    <body className='App-header'>
      <img src={"logo.ico"} className="App-logo" alt="logo" />
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand navbar-dark fixed-top">
          <div className="container">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/signup'}>
                    Sign up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/home'}>
                    Home
                  </Link>
                </li>
              </ul>
            </div>
          {/* </div> */}
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/home" element={<Home />} />
              <Route exact path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
        </div>
    </Router>
    </body>
  )
}
export default App


