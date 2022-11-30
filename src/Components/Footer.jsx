import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="py-5">
        <div className="container">
          <div className="row align-items-baseline">
            <div className="col-md-6 mb-4">
              <div className="ftrLogo">
                <img src="./images/gbt.png" className="img-fluid" alt='gbt'/>
                <p className="f16 py-3">© 2022 Global Blood Therapeutics, Inc.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="ftrLinks">
                <ul> 
                  <li> 
                    <a href="/" className="ftrItem">Privacy Policy</a>
                  </li>
                  <li> 
                    <a href="/" className="ftrItem">Cookie Preferences</a>
                  </li>
                  <li> 
                    <a href="/" className="ftrItem">Terms of Use</a>
                  </li>
                  <li>  
                    <a href="/" className="ftrItem">Site Map</a>
                  </li>
                  <li> 
                    <a href="/" className="ftrItem">Accessibility</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="ftrTop" id="ftrTop">
          <div className="container">
              <div className="d-flex align-items-center justify-content-between">
                  <p className="ftrTopPara mb-0">This site uses cookies to give you the best online experience. Learn more, including how to disable certain cookies on our <a href="/">Privacy Page</a>.</p>
                  <button className="btn bg-green cl-fff f20 fw700 accept">Accept</button>
              </div>
          </div>
      </div>
    </>
  )
}
