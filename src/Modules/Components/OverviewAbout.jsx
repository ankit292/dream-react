import React from 'react'

export default function OverviewAbout() {
  return (
    <>
        <section className="overView abt py-md-5 py-4 my-5">
            <div className="container">
                <h2 className="f36 fw800 mb-4 med-f36">Who is eligible?</h2>
                <p className="f18 cl-32 mb-5 med-f18">To be eligible to participate in the DREAM study, the following qualifications must be met:</p>
                <div className="row">
                    <div className="col-md-4 col-6 mb-4">
                        <div className="ovrBox text-center d-block">
                            <div className="ovrImg mb-4"><img src="./images/Icon_Condition.png" className="img-fluid" alt='Icon_Condition' /></div>
                            <p className="f18 mb-0">A confirmed diagnosis of sickle cell disease (SCD)</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-6 mb-4">
                        <div className="ovrBox text-center d-block">
                            <div className="ovrImg mb-4">
                                <p className="Narrow cl-blue">18+</p>
                            </div>
                            <p className="f18 mb-0">18 and Older</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-6 mb-4">
                        <div className="ovrBox text-center d-block">
                            <div className="ovrImg mb-4"><img src="./images/Icon_VOCs.png" className="img-fluid" alt='Icon_VOCs' /></div>
                            <p className="f18 mb-0">Experienced between 2 and 10 vaso-occlusive crises (VOCs) within the past 12 months</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-6 mb-4">
                        <div className="ovrBox text-center d-block">
                            <div className="ovrImg mb-4"><img src="./images/Icon_NoTransfusion.png" className="img-fluid" alt='Icon_NoTransfusion' /></div>
                            <p className="f18 mb-0">Not receiving regularly scheduled red blood cell (RBC) transfusion therapy (also termed chronic, prophylactic, or preventative transfusion)</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-6 mb-4">
                        <div className="ovrBox text-center d-block">
                            <div className="ovrImg mb-4"><img src="./images/Icon_NoInfusion.png" className="img-fluid" alt='Icon_NoInfusion'/></div>
                            <p className="f18 mb-0">Not taking and not received ADAKVEO® (crizanlizumab) within the past 90 days</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-6 mb-4">
                        <div className="ovrBox text-center d-block">
                            <div className="ovrImg mb-4"><img src="./images/Icon_NoPill.png" className="img-fluid" alt='Icon_NoPill' /></div>
                            <p className="f18 mb-0">Not currently taking voxelotor or crizanlizumab</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
