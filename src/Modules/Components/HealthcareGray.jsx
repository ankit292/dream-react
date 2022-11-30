import React from 'react'

export default function HealthcareGray() {
  return (
    <>
        <section className="py-5 study">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="findDiv pt-md-5">
                            <div className="row align-items-center">
                                <div className="col-md-4 mb-md-4 pe-lg-4">
                                    <div className="findImg d-md-block d-none text-center">
                                        <img src="./images/Icon_DoctorBlue.png" className="img-fluid" alt='Icon_DoctorBlue' />
                                    </div>
                                </div>
                                <div className="col-md-8 mb-4 ps-lg-4">
                                    <div className="findCnt">
                                        <div className="findImgCnt mb-4">
                                            <div className="findImg d-md-none d-block">
                                                <img src="./images/Icon_DoctorBlue.png" className="img-fluid" alt='Icon_DoctorBlue' />
                                            </div>
                                            <h2 className="cl-32 f36 fw800 mb-0">Are you a Health Care Provider?</h2>
                                        </div>
                                        <p className="cl-32 f18 mb-4">Find out more about DREAM and if your patients are eligible.</p>
                                        <button className="btn bg-green cl-fff f20 fw700 bgFFF">Read more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
