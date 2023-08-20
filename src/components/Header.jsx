import React from 'react'

export default function Header() {
  return (
	 <header className = "header">
		<div className="header_menu">		
			<h2 className="header_logo">Shop Nook</h2> 
			<ul className="menu">
				<li>About us</li>
				<li>Collection</li>
				<li>Contacts</li>
			</ul>
		</div>
		<div className="main-background">
			<h1 className="header_title">Serenity in Simplicity</h1>
			<h2 className="header_subtitle">Explore Our Minimalist Furniture Collection</h2>
		</div>
	 </header>
  )
}
