import React, { useState } from 'react'
import { FaShoppingCart, FaBoxOpen } from "react-icons/fa"
import { Order } from './Order';

export default function Header(props) {

  const [cartOpen, setCartOpen] = useState(false);

  function showOrder() {
	return (
	props.orders.map ( order => {
		return <Order 
					key ={order.id}
					order = {order}
				/>
	})
	)
} 

  return (
	 <header className = "header">
		<div className="header_menu">		
			<h2 className="header_logo">Shop Nook</h2> 
			<ul className="menu">
				<li><FaShoppingCart 
					onClick = {() => setCartOpen(!cartOpen)} 
					className={`menu_cart_button ${cartOpen && "active"}`}
					/>
				</li>
				<li>About us</li>
				<li>Collection</li>
				<li>Contacts</li>
			</ul>
			{ cartOpen && (
				<div className="menu_cart">
				{props.orders.length > 0 ?
					showOrder() : (<div className="menu_cart_empty"> Cart is empty <FaBoxOpen /></div>) 
				}
				</div>
			)}
		</div>
		<div className="main-background">
			<h1 className="header_title">Serenity in Simplicity</h1>
			<h2 className="header_subtitle">Explore Our Minimalist Furniture Collection</h2>
		</div>
	 </header>
  )
}
