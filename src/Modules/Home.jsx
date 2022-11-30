import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Overview from './Components/Overview';
import FindStudy from './Components/FindStudy';
import DreamStudy from './Components/DreamStudy';
import TestMonial from './Components/TestMonial';
import Accordion from './Components/Accordion';
import HealthCare from './Components/HealthCare';
import ClinicCenter from './Components/ClinicCenter';
import HomeBanner from './Banner/HomeBanner';


export default function Home() {
  const [data,setdata]=useState("")
  const id=useParams();
  useEffect(()=>{
    if(id.id ==="home"){
    setdata("The DREAM trial is a clinical research study evaluating the safety and efficacy of GBT021601, an investigational study drug for the potential treatment related to sickle cell disease.")
    }
  })
  console.log(id);
  return (
    <>
      <HomeBanner data={data}/>
      <Overview />
      <FindStudy />
      <DreamStudy />
      <TestMonial />
      <Accordion />
      <HealthCare />
      <ClinicCenter />
    </>
  )
}
