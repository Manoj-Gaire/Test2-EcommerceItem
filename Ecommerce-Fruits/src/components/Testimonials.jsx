const reviews = [
  {
    name: 'Sarah Johnson',
    role: 'Fitness Coach',
    text: 'The best organic fruits I have ever tasted! The quality is consistently amazing and delivery is always on time.',
    rating: 5,
    avatar: 'S',
  },
  {
    name: 'Michael Chen',
    role: 'Chef',
    text: 'As a chef, I demand the highest quality produce. Safira never disappoints. Their mangoes are absolutely divine!',
    rating: 5,
    avatar: 'M',
  },
  {
    name: 'Emma Williams',
    role: 'Nutritionist',
    text: 'I recommend Safira to all my clients. The freshness and variety they offer is unmatched in the market.',
    rating: 4,
    avatar: 'E',
  },
]

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Testimonials</span>
          <h2>What Our <span className="highlight">Customers</span> Say</h2>
        </div>
        <div className="testimonials-grid">
          {reviews.map((r, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-stars">
                {Array(r.rating).fill(0).map((_, j) => (
                  <i key={j} className="fa fa-star"></i>
                ))}
              </div>
              <p>{r.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{r.avatar}</div>
                <div>
                  <strong>{r.name}</strong>
                  <span>{r.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
