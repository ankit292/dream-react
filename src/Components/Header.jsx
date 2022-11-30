import React from 'react'
// import DREAM_Logo from './images/DREAM_Logo.svg';

export default function Header() {
  return (
    <>
        <header>
			<div className="container">
				<nav className="navbar navbar-expand-lg">
				<div className="logoDiv">
					<a className="navbar-brand" href="home">
						<img src="./images/DREAM_Logo.svg" alt='DREAM_Logo'/>
					</a>
				</div>
				
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<div className="socialIcon d-flex align-items-center mb-2">
							<p className="f14 cl-32 mb-0 fw400 me-3">SHARE:</p>
							<div className="socialIcons d-flex align-items-center">
								<a href="/" className="me-2"><i className="fa-brands fa-facebook-f"></i></a>
								<a href="/" className="me-2"><i className="fa-brands fa-twitter"></i></a>
								<a href="/" className="me-2"><i className="fa-brands fa-instagram"></i></a>
								<a href="/" className="me-2"><i className="fa-brands fa-aedin-in"></i></a>
							</div>
						</div>
					<ul className="navbar-nav">
						<li className="nav-item">
						<a className="nav-a" href="AboutDream">About DREAM</a>
						</li>
						<li className="nav-item">
						<a className="nav-a" href="EligibilityForm">Eligibility</a>
						</li>
						<li className="nav-item">
						<a className="nav-a" href="/">Find a Study Site</a>
						</li>
						<li className="nav-item">
						<a className="nav-a" href="AboutDrug">About Study Drug</a>
						</li>
						<li className="nav-item">
						<a className="nav-a" href="/">FAQs</a>
						</li>
						<li className="nav-item">
						<a className="nav-a" href="AboutDisease">About SCD</a>
						</li>
						<li className="nav-item">
						<a className="nav-a" href="/">For HCPS</a>
						</li>
					</ul>
					</div>
				</nav>
			</div>
			<div className="hdrBtm text-center">
				<div className="container">
					<p className="mb-0 cl-fff f20 fw700">Have questions? Contact the Clinical Trial Information Center at DREAMstudy@gbt.com</p>
				</div>
			</div>
		</header>
    </>
  )
}
