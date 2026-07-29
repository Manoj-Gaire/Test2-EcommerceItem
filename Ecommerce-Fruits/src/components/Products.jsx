import { useState } from 'react'

const products = [
  { id: 1, name: 'Apple China Imported', price: 100.00, rating: 4.5, image: 'http://wp.plazathemes.com/safira/wp-content/uploads/2020/04/17-400x400.jpg', category: 'green-vegetables', discount: 0, inStock: true },
  { id: 2, name: 'Apple Golden Local', price: 80.00, rating: 4.7, image: 'http://wp.plazathemes.com/safira/wp-content/uploads/2020/04/18-400x400.jpg', category: 'green-vegetables', discount: 0, inStock: true },
  { id: 3, name: 'Apple Gourd - 1 Kg', price: 70.00, rating: 4.3, image: 'http://wp.plazathemes.com/safira/wp-content/uploads/2020/04/13-400x400.jpg', category: 'cruciferous', discount: 0, inStock: true },
  { id: 4, name: 'Bathua Saag/Leaves', price: 115.00, rating: 3.0, image: 'http://wp.plazathemes.com/safira/wp-content/uploads/2020/04/3-400x400.jpg', category: 'allium', discount: 0, inStock: true },
  { id: 5, name: 'Bottol Gaurd (Lauki)', price: 85.00, rating: 4.2, image: 'http://wp.plazathemes.com/safira/wp-content/uploads/2020/04/9-400x400.jpg', category: 'broad-beans', discount: 0, inStock: true },
  { id: 6, name: 'Broccoli Local', price: 100.00, rating: 3.0, image: 'http://wp.plazathemes.com/safira/wp-content/uploads/2020/04/7-400x400.jpg', category: 'allium', discount: 0, inStock: true },
  { id: 7, name: 'Cabbage Band Gobhi', price: 95.00, rating: 4.0, image: 'http://wp.plazathemes.com/safira/wp-content/uploads/2020/04/2-400x400.jpg', category: 'allium', discount: 0, inStock: true },
  { id: 8, name: 'Coriander Leaves', price: 0, rating: 5.0, image: 'http://wp.plazathemes.com/safira/wp-content/uploads/2020/04/6-400x400.jpg', category: 'allium', discount: 0, inStock: true },
  { id: 9, name: 'European Lemon Zest', price: 80.00, rating: 4.6, image: 'http://wp.plazathemes.com/safira/wp-content/uploads/2020/04/1-400x400.jpg', category: 'allium', discount: 12, inStock: true },
  { id: 10, name: 'German Chilies Local', price: 95.00, rating: 4.4, image: 'http://wp.plazathemes.com/safira/wp-content/uploads/2020/04/11-400x400.jpg', category: 'green-peas', discount: 0, inStock: true },
  { id: 11, name: 'Grape Fruit Local', price: 115.00, rating: 5.0, image: 'http://wp.plazathemes.com/safira/wp-content/uploads/2020/04/5-400x400.jpg', category: 'allium', discount: 0, inStock: true },
  { id: 12, name: 'Green Matar-500gm', price: 78.00, rating: 4.0, image: 'http://wp.plazathemes.com/safira/wp-content/uploads/2020/04/8-400x400.jpg', category: 'allium', discount: 0, inStock: true },
]

const categoryList = [
  { name: 'Allium', slug: 'allium', count: 5 },
  { name: 'Dried beans', slug: 'dried-beans', count: 4 },
  { name: 'Marrow', slug: 'marrow', count: 3 },
  { name: 'Green vegetables', slug: 'green-vegetables', count: 2 },
  { name: 'Cruciferous', slug: 'cruciferous', count: 1 },
  { name: 'Chickpea', slug: 'chickpea', count: 1 },
  { name: 'Red foods', slug: 'red-foods', count: 1 },
  { name: 'Fresh beans', slug: 'fresh-beans', count: 1 },
  { name: 'Leafy green', slug: 'leafy-green', count: 1 },
]

const colors = [
  { name: 'Amber', count: 4 },
  { name: 'Beige', count: 4 },
  { name: 'Bronze', count: 4 },
  { name: 'Purple', count: 5 },
  { name: 'Green', count: 5 },
  { name: 'Red', count: 5 },
  { name: 'White', count: 4 },
]

function Products({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [sortBy, setSortBy] = useState('default')
  const [showCount, setShowCount] = useState(12)

  let filtered = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory)

  if (sortBy === 'low') filtered = [...filtered].sort((a, b) => a.price - b.price)
  if (sortBy === 'high') filtered = [...filtered].sort((a, b) => b.price - a.price)
  if (sortBy === 'rating') filtered = [...filtered].sort((a, b) => b.rating - a.rating)

  return (
    <section className="products" id="products">
      <div className="container">
        <div className="breadcrumb">
          <a href="#home">Home</a>
          <span>/</span>
          <span className="current">Products</span>
        </div>

        <div className="shop-layout">
          <aside className="sidebar">
            <div className="sidebar-widget">
              <h3 className="sidebar-title">Product Categories</h3>
              <ul className="woo-category-list">
                <li className={activeCategory === 'all' ? 'active' : ''}>
                  <button onClick={() => setActiveCategory('all')}>
                    All Products <span className="cat-count">({products.length})</span>
                  </button>
                </li>
                {categoryList.map(cat => (
                  <li key={cat.slug} className={activeCategory === cat.slug ? 'active' : ''}>
                    <button onClick={() => setActiveCategory(cat.slug)}>
                      {cat.name} <span className="cat-count">({cat.count})</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-widget">
              <h3 className="sidebar-title">Filter by Price</h3>
              <div className="price-filter">
                <div className="price-slider">
                  <div className="price-track"></div>
                  <div className="price-range" style={{left: '0%', width: '100%'}}></div>
                </div>
                <div className="price-labels">
                  <span>$0</span>
                  <span>$10</span>
                </div>
                <button className="price-filter-btn">Filter</button>
              </div>
            </div>

            <div className="sidebar-widget">
              <h3 className="sidebar-title">Sort By</h3>
              <ul className="woo-category-list">
                <li className={sortBy === 'default' ? 'active' : ''}>
                  <button onClick={() => setSortBy('default')}>Default sorting</button>
                </li>
                <li className={sortBy === 'low' ? 'active' : ''}>
                  <button onClick={() => setSortBy('low')}>Sort by price: low to high</button>
                </li>
                <li className={sortBy === 'high' ? 'active' : ''}>
                  <button onClick={() => setSortBy('high')}>Sort by price: high to low</button>
                </li>
                <li className={sortBy === 'rating' ? 'active' : ''}>
                  <button onClick={() => setSortBy('rating')}>Sort by average rating</button>
                </li>
              </ul>
            </div>

            <div className="sidebar-widget">
              <h3 className="sidebar-title">Color</h3>
              <ul className="woo-category-list">
                {colors.map(c => (
                  <li key={c.name}>
                    <button>
                      {c.name} <span className="cat-count">({c.count})</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-widget sidebar-banner">
              <div className="banner-content">
                <span className="banner-label">Fresh Deal</span>
                <h3>50% Off</h3>
                <p>On all organic fruits this week</p>
                <a href="#" className="banner-btn">Shop Now</a>
              </div>
            </div>
          </aside>

          <div className="shop-main">
            <div className="shop-toolbar">
              <p className="result-count">Showing 1&ndash;{Math.min(showCount, filtered.length)} of {filtered.length} results</p>
              <div className="shop-toolbar-right">
                <select className="sort-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="default">Default sorting</option>
                  <option value="low">Sort by price: low to high</option>
                  <option value="high">Sort by price: high to low</option>
                  <option value="rating">Sort by average rating</option>
                </select>
                <div className="shop-view">
                  <button className="view-btn active"><i className="fa fa-th"></i></button>
                  <button className="view-btn"><i className="fa fa-list"></i></button>
                </div>
              </div>
            </div>

            <div className="products-grid">
              {filtered.length === 0 ? (
                <div className="no-results">
                  <p>No products found matching your selection.</p>
                </div>
              ) : (
                filtered.map(product => {
                  const salePrice = product.discount > 0
                    ? (product.price * (1 - product.discount / 100)).toFixed(2)
                    : null

                  return (
                    <div key={product.id} className="product-card">
                      {product.discount > 0 && (
                        <span className="product-badge">Sale</span>
                      )}
                      {!product.inStock && (
                        <span className="product-badge out-of-stock">Out of Stock</span>
                      )}
                      <div className="product-image">
                        <img className="product-img" src={product.image} alt={product.name} />
                        <div className="product-actions">
                          <button className="action-btn" title="Add to wishlist"><i className="fa fa-heart-o"></i></button>
                          <button className="action-btn" title="Quick view"><i className="fa fa-eye"></i></button>
                          <button className="action-btn" title="Compare"><i className="fa fa-exchange"></i></button>
                        </div>
                        {product.inStock && (
                          <button className="add-to-cart-overlay" onClick={onAddToCart}>
                            <i className="fa fa-shopping-cart"></i> Add to cart
                          </button>
                        )}
                      </div>
                      <div className="product-info">
                        <span className="product-category">{product.category}</span>
                        <h3>{product.name}</h3>
                        <div className="product-rating">
                          {[1,2,3,4,5].map(s => (
                            <i key={s} className={`fa fa-star${s <= Math.floor(product.rating) ? '' : (s - 0.5 <= product.rating ? '-half-o' : '-o')}`}></i>
                          ))}
                          <span>({product.rating})</span>
                        </div>
                        <div className="product-footer">
                          <div className="product-price">
                            {salePrice ? (
                              <>
                                <span className="sale-price">${salePrice}</span>
                                <span className="old-price">${product.price.toFixed(2)}</span>
                              </>
                            ) : (
                              <span className="current-price">${product.price.toFixed(2)}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              )}
            </div>

            <div className="shop-pagination">
              <span className="page-link active">1</span>
              <a href="#" className="page-link">2</a>
              <a href="#" className="page-link"><i className="fa fa-angle-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
