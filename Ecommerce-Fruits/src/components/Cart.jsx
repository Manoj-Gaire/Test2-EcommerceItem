function Cart({ items, onClose, onRemove, onUpdateQty }) {
  const total = items.reduce((sum, item) => {
    const price = item.discount > 0
      ? item.price * (1 - item.discount / 100)
      : item.price
    return sum + price * item.qty
  }, 0)

  return (
    <div className={`cart-sidebar ${items.length > 0 || onClose ? 'open' : ''}`}>
      <div className="cart-overlay" onClick={onClose}></div>
      <div className="cart-panel">
        <div className="cart-header">
          <h3><i className="fa fa-shopping-cart"></i> Your Cart</h3>
          <button className="cart-close" onClick={onClose}>
            <i className="fa fa-times"></i>
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <span className="cart-empty-icon">&#128722;</span>
            <p>Your cart is empty</p>
            <button className="btn btn-primary" onClick={onClose}>Continue Shopping</button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map(item => {
                const price = item.discount > 0
                  ? item.price * (1 - item.discount / 100)
                  : item.price
                return (
                  <div key={item.id} className="cart-item">
                    <span className="cart-item-emoji" dangerouslySetInnerHTML={{ __html: item.emoji }} />
                    <div className="cart-item-info">
                      <h4>{item.name}</h4>
                      <span className="cart-item-price">${price.toFixed(2)}</span>
                    </div>
                    <div className="cart-item-qty">
                      <button onClick={() => onUpdateQty(item.id, item.qty - 1)}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => onUpdateQty(item.id, item.qty + 1)}>+</button>
                    </div>
                    <button className="cart-item-remove" onClick={() => onRemove(item.id)}>
                      <i className="fa fa-trash"></i>
                    </button>
                  </div>
                )
              })}
            </div>
            <div className="cart-footer">
              <div className="cart-total">
                <span>Total:</span>
                <strong>${total.toFixed(2)}</strong>
              </div>
              <button className="btn btn-primary btn-full">Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart
