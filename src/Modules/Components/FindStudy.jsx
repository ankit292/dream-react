import React from 'react'

export default function FindStudy() {
  return (
    <>
        <section className="py-5 bg-blue">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="findDiv pt-md-5">
                            <div className="row align-items-center">
                                <div className="col-md-4 mb-md-4 pe-lg-4">
                                    <div className="findImg d-md-block d-none">
                                        <img src="./images/Icon_Location.png" className="img-fluid" alt='Icon_Location' />
                                    </div>
                                </div>
                                <div className="col-md-8 mb-4 ps-lg-4">
                                    <div className="findCnt">
                                        <div className="findImgCnt mb-4">
                                            <div className="findImg d-md-none d-block">
                                              <img src="./images/Icon_Location.png" className="img-fluid" alt='Icon_Location' />
                                            </div>
                                            <h2 className="cl-fff f36 fw800 mb-0 med-f36">Find a study site.</h2>
                                        </div>
                                        <p className="cl-fff f18 mb-4">Enter your city or zip code to see all study sites that are close to you.</p>
                                        <form>
                                            <input type="text" placeholder="city, state or zip code" className="mb-4 findInput w-100" />
                                        </form>
                                        <button className="btn bg-green cl-fff f20 fw700 bgFFF">Submit</button>
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
