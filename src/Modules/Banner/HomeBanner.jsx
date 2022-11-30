import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';


 

export default function HomeBanner(props) {
  return (
    <>
        <section className="banner Home">
            <div className="mobImgBnr d-none">
            <img src="assets/images/bnrHomeMob.png" className="img-fluid" alt='Home-Banner' />
            </div>
            <div className="container">
            <div className="row justify-content-end">
                <div className="col-lg-6 col-md-8 col-sm-7 pb-5 pt-sm-5">
                <div className="bnrCnt">
                    <h1 className="fw800 f55 mb-4">The DREAM Trial</h1>
                    <p className="f22 fw700 mb-5">{props.data}</p>
                    <button className="btn bg-green cl-fff f20 fw700">Get Started</button>
                </div>
                </div>
            </div>
            </div>
        </section>
        <div className="bnrBtm"></div>
    </>
  )
}
