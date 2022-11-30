import React from 'react'

export default function CompleteForm() {
  return (
    <>
        <section className="py-5 mt-md-5 scd">
            <div className="container">
                <h2 className="f36 fw800 mb-4 med-f36">Please complete the form below and we will contact you with more information.</h2>
                <p className="f18 mb-md-5 mb-4 med-f18">Your answers will not be stored or shared.</p>
                <form>
                    <div className="infoCheck mb-md-5 py-4">
                        <h4 className="f28 fw700 mb-4">Do you have a confirmed diagnosis of sickle cell disease (SCD)?<span className="star">*</span></h4>
                        <div className="infoCheckBox d-flex align-items-center">
                            <div className="form-check me-5">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label className="form-check-label" for="flexRadioDefault2">
                                Yes
                            </label>
                            </div>
                            <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" for="flexRadioDefault1">
                                No
                            </label>
                            </div>
                        </div>
                    </div> 
                    <div className="infoCheck mb-md-5 py-4">
                        <h4 className="f28 fw700 mb-4">Are you 18 years old or older?<span className="star">*</span></h4>
                        <div className="infoCheckBox d-flex align-items-center">
                            <div className="form-check me-5">
                            <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault3" checked />
                            <label className="form-check-label" for="flexRadioDefault3">
                                Yes
                            </label>
                            </div>
                            <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault4" />
                            <label className="form-check-label" for="flexRadioDefault4">
                                No
                            </label>
                            </div>
                        </div>
                    </div>
                    <div className="infoCheck mb-md-5 py-4">
                        <h4 className="f28 fw700 mb-4">Have you experienced between 2 and 10 vaso-occlusive crises (VOCs) within the past 12 months?<span className="star">*</span></h4>
                        <div className="infoCheckBox d-flex align-items-center">
                            <div className="form-check me-5">
                            <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault6" checked />
                            <label className="form-check-label" for="flexRadioDefault6">
                                Yes
                            </label>
                            </div>
                            <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault5" />
                            <label className="form-check-label" for="flexRadioDefault5">
                                No
                            </label>
                            </div>
                        </div>
                    </div>
                    <div className="infoCheck mb-md-5 py-4">
                        <h4 className="f28 fw700 mb-4">Are you receiving regularly scheduled red blood cell (RBC) transfusion therapy (also termed chronic, prophylactic, or preventative transfusion)?<span className="star">*</span></h4>
                        <div className="infoCheckBox d-flex align-items-center">
                            <div className="form-check me-5">
                            <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault7" />
                            <label className="form-check-label" for="flexRadioDefault7">
                                Yes
                            </label>
                            </div>
                            <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault8" checked />
                            <label className="form-check-label" for="flexRadioDefault8">
                                No
                            </label>
                            </div>
                        </div>
                    </div>
                    <div className="infoCheck mb-md-5 py-4">
                        <h4 className="f28 fw700 mb-4">Are you taking or have you received ADAKVEO® (crizanlizumab) within past 90 days?<span className="star">*</span></h4>
                        <div className="infoCheckBox d-flex align-items-center">
                            <div className="form-check me-5">
                            <input className="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault9" />
                            <label className="form-check-label" for="flexRadioDefault9">
                                Yes
                            </label>
                            </div>
                            <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault10" checked />
                            <label className="form-check-label" for="flexRadioDefault10">
                                No
                            </label>
                            </div>
                        </div>
                    </div>
                    <button className="btn bg-green cl-fff f20 fw700 mt-2" type="Submit">Submit</button>
                </form>
            </div>
        </section>
    </>
  )
}
