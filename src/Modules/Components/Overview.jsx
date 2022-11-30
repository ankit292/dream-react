import React from 'react'

export default function Overview() {
  return (
    <>
        <section className="overView py-md-5 my-5">
            <div className="container">
                <h2 className="f36 fw800 mb-4 text-center">Overview</h2>
                <div className="row">
                    <div className="col-4 mb-4">
                        <div className="ovrBox text-center">
                            <h4 className="f28 fw700 mb-4">Condition</h4>
                            <div className="ovrImg mb-4"><img src="./images/Icon_Condition.png" className="img-fluid" alt='Icon_Condition' /></div>
                            <p className="f18 mb-0">Sickle Cell Disease</p>
                        </div>
                    </div>
                    <div className="col-4 mb-4">
                        <div className="ovrBox text-center">
                            <h4 className="f28 fw700 mb-4">Age</h4>
                            <div className="ovrImg mb-4">
                                 {/* <img src="assets/images/18Plus.png" className="img-fluid" />  */}
                                <p className="Narrow cl-blue">18+</p>
                            </div>
                            <p className="f18 mb-0">18 and Older</p>
                        </div>
                    </div>
                    <div className="col-4 mb-4">
                        <div className="ovrBox text-center">
                            <h4 className="f28 fw700 mb-4">Status</h4>
                            <div className="ovrImg mb-4"><img src="./images/Icon_Recruiting.png" className="img-fluid" alt='Icon_Recruiting' /></div>
                            <p className="f18 mb-0">Actively Recruiting</p>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-2">
                    <button className="btn bg-green cl-fff f20 fw700">Learn More</button>
                </div>
            </div>
        </section>
    </>
  )
}
