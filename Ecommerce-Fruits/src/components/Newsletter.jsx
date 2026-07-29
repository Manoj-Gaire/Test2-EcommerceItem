import { useState } from 'react'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section className="newsletter">
      <div className="container newsletter-inner">
        <div className="newsletter-text">
          <h2>Get <span className="highlight">20% Off</span> Your First Order</h2>
          <p>Subscribe to our newsletter and receive exclusive deals and health tips.</p>
        </div>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary">
            {submitted ? 'Subscribed!' : 'Subscribe'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
