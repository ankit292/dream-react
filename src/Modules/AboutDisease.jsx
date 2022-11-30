import React from 'react';
import HealthCare from './Components/HealthCare';

export default function AboutDisease() {
  return (
    <>
        <section className="gradiant py-5">
            <div className="container">
                <h1 className="f55 fw800 cl-blue my-md-4">About Sickle Cell Disease</h1>
            </div>
        </section>
        <div className="bnrBtm"></div>
        <section className="contentSec py-5 mt-md-5">
            <div className="container">
                <h2 className="fw800 f36 cl-32 mb-4 med-f36">Overview</h2>
                <p className="f18 me-lg-5 pe-md-5 mb-5 med-f18">Sickle cell disease (SCD) is a group of red blood cell disorders, where the red blood cells can change shape—from healthy, round, bendable cells to stiff, sticky, crescent shaped cells that die early and can easily get stuck and block healthy blood flow in the body. Sickle cell disease is not contagious. It is a genetic condition that is present at birth and is passed down from both parents.</p>
                <h4 className="fw700 f28 mb-4">It is estimated that:</h4>
                <div className="row mb-md-5 mb-4">
                    <div className="col-lg-3 col-6 mb-4">
                        <div className="ovrBox text-center d-block px-0">
                            <div className="ovrImg mb-4">
                                <p className="Narrow cl-blue f70">100K</p>
                            </div>
                            <p className="f18 mb-0">Americans affected by SCD</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 mb-4">
                        <div className="ovrBox text-center d-block px-0">
                            <div className="ovrImg mb-4">
                                <p className="Narrow cl-blue f70">1 in 365</p>
                            </div>
                            <p className="f18 mb-0">Black or African-American babies are born with SCD</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 mb-4">
                        <div className="ovrBox text-center d-block px-0">
                            <div className="ovrImg mb-4">
                                <p className="Narrow cl-blue f70">1 in 16K</p>
                            </div>
                            <p className="f18 mb-0">Hispanic-American babies are born with SCD</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 mb-4">
                        <div className="ovrBox text-center d-block px-0">
                            <div className="ovrImg mb-4">
                                <p className="Narrow cl-blue f70">20%</p>
                            </div>
                            <p className="f18 mb-0">of people living with SCD usually receive their care in an emergency room</p>
                        </div>
                    </div>
                </div>
                <h4 className="fw700 f28 mb-4">Treatment can help, but this condition cannot be cured.</h4>
                <div className="row mb-4">
                    <div className="col-lg-3 col-6 mb-4">
                        <div className="ovrBox text-center d-block px-0">
                            <div className="ovrImg mb-4">
                                <img src="./images/Icon_Genetic.svg" className="img-fluid" alt='Icon_Genetic' />
                            </div>
                            <p className="f18 mb-0">SCD is a genetic, hereditary disease</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 mb-4">
                        <div className="ovrBox text-center d-block px-0">
                            <div className="ovrImg mb-4">
                                <img src="./images/Icon_Condition.svg" className="img-fluid" alt='Icon_Condition' />
                            </div>
                            <p className="f18 mb-0">Requires medical diagnosis</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 mb-4">
                        <div className="ovrBox text-center d-block px-0">
                            <div className="ovrImg mb-4">
                                <img src="./images/Icon_Testing.svg" className="img-fluid" alt='Icon_Testing' />
                            </div>
                            <p className="f18 mb-0">Lab tests or imaging always required</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 mb-4">
                        <div className="ovrBox text-center d-block px-0">
                            <div className="ovrImg mb-4">
                                <img src="./images/Icon_Gender.svg" className="img-fluid" alt='Icon_Gender' />
                            </div>
                            <p className="f18 mb-0">Chronic: lifelong</p>
                        </div>
                    </div>
                </div>
                <p className="f14 fw400 cl-32 mb-0">For informational purposes only. Consult your local medical authority for advice. <br />
                Content sources: <a href="/" className="fw700 cl-32"> National Center on Birth Defects and Developmental Disabilities, Centers for Disease Control and Prevention </a></p>
            </div>
        </section>
        <section className="py-5 bg-gray ctCenterSec">
            <div className="container mt-md-5 mb-4">
                <div className="row">
                    <div className="col-lg-6 mb-4">
                        <div className="inCnt">
                            <h2 className="f36 fw800 mb-4 med-f36">Symptoms</h2>
                            <p className="f18 fw400 cl-32 mb-2 med-f18"><span className="fw700 cl-32">Pain areas:</span> in the joints </p>
                            <p className="f18 fw400 cl-32 mb-2 med-f18"><span className="fw700 cl-32">Pain types:</span> can be sudden in the chest </p>
                            <p className="f18 fw400 cl-32 mb-2 med-f18"><span className="fw700 cl-32">Whole body:</span> dizziness, fatigue, low oxygen in the body, or malaise </p>
                            <p className="f18 fw400 cl-32 mb-2 med-f18"><span className="fw700 cl-32">Urinary:</span> inability to make concentrated or dilute urine or blood in urine </p>
                            <p className="f18 fw400 cl-32 mb-2 med-f18"><span className="fw700 cl-32">Also common:</span> abnormal breakdown of red blood cells, delayed development, inflamed fingers or toes, pallor, shortness of breath, or yellow skin and eyes </p>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="inCnt">
                            <h2 className="f36 fw800 mb-4 med-f36">Treatment</h2>
                            <p className="f18 fw400 cl-32 mb-2 med-f18">Management of sickle cell anemia is usually aimed at avoiding pain episodes, relieving symptoms and preventing complications. Treatments might include medications and blood transfusions. Vaccinations and penicillin can be used to help prevent life-threatening infections.</p>
                        </div>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-lg-6 mb-4">
                        <p className="f14 fw400 cl-32 mb-0">For informational purposes only. Consult your local medical authority for advice. <br className="d-md-none d-block" /> Content sources:  <a href="/" className="fw700 cl-32"> Mayo Clinic </a></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 mb-4">
                        <div className="ctCenter text-center"> 
                            <h2 className="f36 fw800 mb-4 med-f36">Contact the Clinical Trial Information Center</h2>
                            <p className="f18 mb-2 med-f18">Would you like to know more? Contact us at
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
        <HealthCare />
    </>
  )
}
