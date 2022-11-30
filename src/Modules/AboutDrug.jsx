import React from 'react';
import Eligible from './Components/Eligible';
import TBD from './Components/TBD';
import FDA from './Components/FDA';
import ClinicCenter from './Components/ClinicCenter';
import HealthCare from './Components/HealthCare';

export default function AboutDrug() {
  return (
    <>
        <section className="gradiant py-5">
            <div className="container">
                <h1 className="f55 fw800 cl-blue my-md-4">About Study Drug</h1>
            </div>
        </section>
        <div className="bnrBtm"></div>
        <section className="pt-5 pb-md-5 contentSec mt-md-5 medCntSec">
            <div className="container">
                <h2 className="f36 fw800 mb-4 med-f36">Who is eligible?</h2>
                <div className="row mb-md-5 mb-4">
                    <Eligible />
                    <Eligible />
                    <Eligible />
                    <Eligible />
                </div>
                <div className="summery mb-md-4 pb-4">
                    <h2 className="f36 fw800 mb-4 med-f36">Why use TBD?</h2>
                    <div className="row">
                        <TBD />
                        <TBD />
                        <div className="col-lg-5 mb-4">
                            <p className="f18 fw700 mb-0 med-f18">Lorem ipsum dolor sit amet</p>
                            <p className="f18 mb-0 med-f18">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="bnrBtm"></div>
        <FDA />
        <ClinicCenter />
        <HealthCare />
    </>
  )
}
