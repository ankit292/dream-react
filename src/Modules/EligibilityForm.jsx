import React from 'react';
import CompleteForm from './Components/CompleteForm';
import FormDream from './Components/FormDream';

export default function EligibilityForm() {
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
                            <h1 className="fw800 f55 mb-4">Find Out More About the DREAM Study</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="bnrBtm"></div>
        <CompleteForm />
        <section className="py-3 bg-blue mt-md-5">
            <div className="container">
                <h4 className="cl-fff f20 fw700 mb-0 text-center">Thank you for completing the form.<br /> Please submit your contact details below for information about joining the study.</h4>
            </div>
        </section>
        <section className="py-5 mb-md-5 mt-md-5">
            <div className="container">
                <FormDream />
            </div>
        </section>
    </>
  )
}
