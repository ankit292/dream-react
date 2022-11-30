import React from 'react'

export default function ClinicCenter() {
  return (
    <>
        <section className="pt-5 pb-md-5 bg-gray ctCenterSec">
            <div className="container mt-md-5 mb-4">
                <div className="row">
                    <div className="col-lg-6 mb-4">
                        <div className="ctCenter text-center"> 
                            <h2 className="f36 fw800 mb-4 med-f36">Contact the Clinical Trial Information Center</h2>
                            <p className="f18 mb-2 med-f18">Would you like to know more? <br className="d-block d-md-none" /> Contact us at
                            <a href="/" className="fw700 cl-green">DREAMstudy@gbt.com</a> </p>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="ctCenter text-center two">
                            <h2 className="f36 fw800 mb-4 med-f36">Find out if the DREAM study is right for you</h2>
                            <button className="btn bg-trans bdr-green bdr-w3 cl-green f20 fw700">Am I eligible?</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
