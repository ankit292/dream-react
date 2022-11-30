import React from 'react';
import OverviewAbout from './Components/OverviewAbout';
import DreamStudyBlue from './Components/DreamStudyBlue';
import ContentSec from './Components/ContentSec';
import HealthcareGray from './Components/HealthcareGray';
import FindStudy from './Components/FindStudy';

export default function AboutDream() {
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
                            <h1 className="fw800 f55 mb-4">About DREAM</h1>
                            <p className="f22 fw700 mb-4">The purpose of this research study is to determine how safe, how well tolerated and how well each dose of the study drug (GBT021601) works in the treatment of people who are living with SCD.</p>
                            <p className="f18 cl-32 mb-0">Last updated: Month X, 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="bnrBtm"></div>
        <OverviewAbout />
        <DreamStudyBlue />
        <ContentSec />
        <FindStudy />
        <HealthcareGray />
    </>
  )
}
