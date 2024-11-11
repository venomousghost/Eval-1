import React, { useState, useEffect } from 'react';
import HeaderSection from './HeaderSection';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  const [valoQuantity, setValoQuantity] = useState(1);
  const [ctQuantity, setCtQuantity] = useState(1);
  const [subTotal, setSubTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  const [purchaseSummary, setPurchaseSummary] = useState(null);

  const VALO_PRICE = 1219;
  const CT_PRICE = 59;

  useEffect(() => {
    const valoTotal = valoQuantity * VALO_PRICE;
    const ctTotal = ctQuantity * CT_PRICE;
    const calculatedSubTotal = valoTotal + ctTotal;
    const calculatedTax = calculatedSubTotal * 0.1;
    const calculatedTotal = calculatedSubTotal + calculatedTax;

    setSubTotal(calculatedSubTotal);
    setTax(calculatedTax);
    setTotal(calculatedTotal);
  }, [valoQuantity, ctQuantity]);

  const handleQuantityChange = (product, isIncreasing) => {
    if (product === 'valo') {
      setValoQuantity(prev => (isIncreasing ? prev + 1 : Math.max(prev - 1, 0)));
    } else if (product === 'ct') {
      setCtQuantity(prev => (isIncreasing ? prev + 1 : Math.max(prev - 1, 0)));
    }
  };

  const handlePurchase = () => {
    setPurchaseSummary({
      valoTotal: valoQuantity * VALO_PRICE,
      ctTotal: ctQuantity * CT_PRICE,
      valoQuantity,
      ctQuantity,
    });
  };


  useEffect(() => {
    if (purchaseSummary) {
      const timer = setTimeout(() => {
        setPurchaseSummary(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [purchaseSummary]);

  return (
    <><HeaderSection/>
    <section className="cartz">
      <div className="containerz">
        <div className="boxz">
          <div className="redlinez"></div>
          <div className="cart-headz">
            <h1>CART</h1>
          </div>
          <div className="redlinez"></div>
        </div>
        <div className="main-box">
          <CartItem
            imgSrc="images/cart/valo.jpg"
            title="VALORANT"
            quantity={valoQuantity}
            onIncrease={() => handleQuantityChange('valo', true)}
            onDecrease={() => handleQuantityChange('valo', false)}
            total={valoQuantity * VALO_PRICE}
          />
          <CartItem
            imgSrc="images/cart/chained.jpg"
            title="CHAINED TOGETHER"
            quantity={ctQuantity}
            onIncrease={() => handleQuantityChange('ct', true)}
            onDecrease={() => handleQuantityChange('ct', false)}
            total={ctQuantity * CT_PRICE}
          />
        </div>
        <div className="lowerz">
          <div className="shipz">
            <h1>CALCULATE SHIPPING</h1>
            <p>Country<span>*</span>:</p>
            <select name="country" id="ct">
              <option value="1" selected>Select a Country...</option>
              <option value="2">India</option>
              <option value="3">Sri Lanka</option>
              <option value="4">Myanmar</option>
            </select>
            <div className="rowuprz">
              <div className="rowz">
                <p>State<span>*</span>:</p>
                <input className="text" type="text" required />
              </div>
              <div className="rowz">
                <p>Postcode / ZIP<span>*</span>:</p>
                <input className="text" type="text" required />
              </div>
            </div>
          </div>
          <div className="total2z">
            <h1>CART TOTALS</h1>
            <div className="threez">
              <div className="linez">
                <div className="boxxz">Subtotal: </div>
                <div className="boxx1z">
                  <h4>$<span id="sub-totalz">{subTotal}</span></h4>
                </div>
              </div>
              <div className="line2z">
                <div className="boxxz">Shipping Tax</div>
                <div className="boxx1z"><h4>$<span id="tax-amount">{tax}</span></h4></div>
              </div>
              <div className="linez">
                <div className="boxxz">Total</div>
                <div className="boxx1z">
                  <h4>$<span id="total-pricez">{total}</span></h4>
                </div>
              </div>
            </div>
            <div className="btn3z">
              <button onClick={handlePurchase} id="payBtn">Proceed to Checkout</button>
            </div>
            <div className='spacez'></div>
          </div>
          {purchaseSummary && (
            <div className="purchase-summaryz">
              <h2>Thank you for your purchase!</h2>
              <p>Your Total Bill is ${total}</p>
            </div>
          )}
        </div>
      </div>
    </section>
    </>
  );
};

const CartItem = ({ imgSrc, title, quantity, onIncrease, onDecrease, total }) => (
  <div className="item-boxz">
    <div className="img-box">
      <img src={imgSrc} alt={title} width="120px" height="150px" />
    </div>
    <div className="product">
      <h3>PRODUCT</h3>
      <h4>{title}</h4>
    </div>
    <div className="quantity">
      <h3>QUANTITY</h3>
      <button id="valo-minus" className="btn btn-defaultz" onClick={onDecrease}><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></button>
      <input id="valo-number" type="number" value={quantity} readOnly min="0" className="form-control text-center" />
      <button onClick={onIncrease} id="valo-plus" className="btn btn-defaultz"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
    </div>
    <div className="total">
      <h3>TOTAL</h3>
      <h4>${total}</h4>
    </div>
  </div>
);

export default Cart;
