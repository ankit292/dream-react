import React from 'react';
import OverviewAbout from './Components/OverviewAbout';

export default function ForHCPs() {
  return (
    <>
        <section className="banner About">
            <div className="mobImgBnr d-none">
                <img src="assets/images/bnrHomeMob.png" className="img-fluid" alt='bnrHomeMob' />
            </div>
            <div className="container">
                <div className="row justify-content-start">
                    <div className="col-lg-6 col-md-8 col-sm-7 pb-5 pt-sm-5">
                        <div className="bnrCnt">
                            <h1 className="fw800 f55 mb-4">For Health Care Providers</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="bnrBtm"></div>
        <section className="pt-5 pb-md-5 mt-md-5">
            <div className="container">
                <article>
                    <h2 className="f36 fw800 mb-4 med-f36">Study design</h2>
                    <div className="row">
                        <div className="col-lg-6">
                            <p className="f18 mb-0 med-f18">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <br />
                            <p className="f18 mb-0 med-f18">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
                        </div>
                        <div className="col-lg-6">
                            <p className="f18 mb-0 med-f18">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <br />
                            <p className="f18 mb-0 med-f18">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> 
                        </div>
                    </div>
                </article>
                <div className="tile mt-5 py-4" id="tile-1">
                <h2 className="f28 fw700 cl-32 text-center d-block d-md-none">Phase</h2>
                <ul className="nav nav-tabs nav-justified" role="tablist">
                    <div className="slider"></div>
                    <li className="nav-item">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                            <h4 className="f28 fw700 cl-32 mb-4">Phase</h4>
                            <p className="Narrow">1</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">    <h4 className="f28 fw700 cl-32 mb-4">Phase</h4>
                            <p className="Narrow">2</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">
                            <h4 className="f28 fw700 cl-32 mb-4">Phase</h4>
                            <p className="Narrow">3</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="setting-tab" data-toggle="tab" href="#setting" role="tab" aria-controls="setting" aria-selected="false">
                            <h4 className="f28 fw700 cl-32 mb-4">Phase</h4>
                            <p className="Narrow">4</p>
                        </a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <p className="f18 cl-32 mb-0 med-f18"><span className="fw700">Phase 1:</span>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <p className="f18 cl-32 mb-0 med-f18"><span className="fw700">Phase 2:</span>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <p className="f18 cl-32 mb-0 med-f18"><span className="fw700">Phase 3:</span>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <div className="tab-pane fade" id="setting" role="tabpanel" aria-labelledby="setting-tab">
                        <p className="f18 cl-32 mb-0 med-f18"><span className="fw700">Phase 4:</span>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
        <OverviewAbout />
    </>
  )
}
