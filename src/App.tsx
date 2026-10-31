import { useState, type FormEvent } from 'react'
import backgroundImage from './assets/background.png'
import gabayLogo from './assets/gabay.png'
import qcuLogo from './assets/qcu-logo.png'
import schoolLogo from './assets/student-affairs.png'
import Signup from './signup'
import './App.css'

function GoogleButton() {
  return (
    <button className="google-button" type="button">
      <span className="google-icon" aria-hidden="true">G</span>
      Sign in with Google
    </button>
  )
}

function Login() {
  const [showSignup, setShowSignup] = useState(false)

  if (showSignup) {
    return <Signup onBackToLogin={() => setShowSignup(false)} />
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <main className="auth-page">
      <section className="auth-visual" aria-label="Students collaborating">
        <img src={backgroundImage} alt="Students collaborating in a classroom" />
      </section>
      <section className="auth-card" aria-labelledby="login-heading">
        <div className="brand-logos">
          <img src={schoolLogo} alt="Quezon City University" />
          <img className="gabay-logo" src={gabayLogo} alt="Gabay" />
          <img src={qcuLogo} alt="University seal" />
        </div>
        <h1 id="login-heading">Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="login-email">Email</label>
          <input id="login-email" name="email" type="email" autoComplete="email" required />
          <label htmlFor="login-password">Password</label>
          <input id="login-password" name="password" type="password" autoComplete="current-password" required />
          <a className="forgot-link" href="#forgot-password">Forgot Password?</a>
          <button className="primary-button" type="submit">Log In</button>
        </form>
        <div className="divider" />
        <GoogleButton />
        <p className="switch-text">
          Don&apos;t have an account yet?{' '}
          <button type="button" className="text-button" onClick={() => setShowSignup(true)}>
            Sign Up.
          </button>
        </p>
      </section>
    </main>
  )
}

function App() {
  return <Login />
}

export default App
