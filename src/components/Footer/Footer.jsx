import React from 'react'
import "./Footer.css";
import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
	 <footer className="footer">
		<a className = "footer_button" href='https://github.com/AnnaKondrDeveloper/ShopNook'> 
			<div className = "footer_button_text"><AiFillGithub /> View on GitHub</div>
		</a>
	 	<p className = "footer_text">Made with coding 🖤</p>
	 </footer>
  )
}
