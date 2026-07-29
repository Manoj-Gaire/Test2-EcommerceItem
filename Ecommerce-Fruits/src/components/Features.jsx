function Features() {
  const features = [
    {
      icon: 'fa-truck',
      title: 'Free Delivery',
      description: 'Free shipping on orders over $50. Fast and reliable delivery to your doorstep.',
    },
    {
      icon: 'fa-leaf',
      title: '100% Organic',
      description: 'All our fruits are certified organic, grown without harmful pesticides.',
    },
    {
      icon: 'fa-shield',
      title: 'Secure Payment',
      description: 'Your payment information is safe with our encrypted checkout process.',
    },
    {
      icon: 'fa-headphones',
      title: '24/7 Support',
      description: 'Our team is always available to help you with any questions or concerns.',
    },
  ]

  return (
    <section className="features" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Why Choose Us</span>
          <h2>Best <span className="highlight">Features</span></h2>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon">
                <i className={`fa ${f.icon}`}></i>
              </div>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
