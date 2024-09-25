import React from "react"

function Footer() {
	return (
		<footer className='p-3  text-center fw-bold border border-primary border-4 mt-5'>
			<div className='footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className=''>Laissez-nous votre mail :</div>
			<input type="email" placeholder='Entrez votre mail'/>
		</footer>
	)
}

export default Footer