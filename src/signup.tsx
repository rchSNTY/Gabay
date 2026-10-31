import { useState, type FormEvent } from 'react'
import backgroundImage from './assets/background.png'
import gabayLogo from './assets/gabay.png'
import qcuLogo from './assets/qcu-logo.png'
import schoolLogo from './assets/student-affairs.png'
import './signup.css'

type SignupProps = {
  onBackToLogin: () => void
}

function Signup({ onBackToLogin }: SignupProps) {
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <main className="signup-page">
      <section className="signup-visual" aria-label="Students collaborating">
        <img src={backgroundImage} alt="Students collaborating in a classroom" />
      </section>
      <section className="signup-card" aria-labelledby="signup-heading">
        <div className="signup-brand-logos">
          <img src={schoolLogo} alt="Quezon City University" />
          <img className="signup-gabay-logo" src={gabayLogo} alt="Gabay" />
          <img src={qcuLogo} alt="University seal" />
        </div>
        <h1 id="signup-heading">Sign up</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="signup-name">Name</label>
          <input id="signup-name" name="name" type="text" autoComplete="name" required />
          <label htmlFor="signup-email">Email</label>
          <input id="signup-email" name="email" type="email" autoComplete="email" required />
          <label htmlFor="signup-password">Password</label>
          <div className="password-field">
            <input id="signup-password" name="password" type={showPassword ? 'text' : 'password'} autoComplete="new-password" minLength={8} required />
            <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <button className="signup-primary-button" type="submit">Sign Up</button>
        </form>
        <span className="signup-or">or</span>
        <button className="signup-google-button" type="button">
          <span className="signup-google-icon" aria-hidden="true">G</span>
          Sign in with Google
        </button>
        <p className="signup-switch-text">
          Already have an account?{' '}
          <button type="button" className="signup-text-button" onClick={onBackToLogin}>
            Log In
          </button>
        </p>
      </section>
    </main>
  )
}

export default Signup
