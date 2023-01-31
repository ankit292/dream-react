import React, { useState } from "react";

export default function FormDream() {
	const [userData, setUserData] = useState({
		fname: '',
		lname: '',
		email: '',
		phone: '',
		state: '',
		zip: ''
	})

	const getUserData = (e)=>{
		let name = e.target.name;
		let value = e.target.value;
		setUserData({
			...userData,
			[name]: value
		});
	}
	const postData = async(e)=>{
		e.preventDefault();
		const {fname,lname,email,phone,state,zip} = userData;
		if(fname && lname && email && phone && state && zip){
			const res = await fetch('https://eligibilityform-6f9b3-default-rtdb.firebaseio.com/EligibilityForm.json',
		{
			method:'POST',
			headers:{
				'Content-Type':'application/json'
			},
			body: JSON.stringify({
				fname,
				lname,
				email,
				phone,
				state,
				zip
			}),
		}
	  );
	  if(res){
		setUserData({
			fname: '',
			lname: '',
			email: '',
			phone: '',
			state: '',
			zip: ''
		})
		alert('Your Data Store Successfully')
	  }
		}else{
			alert('Please fill All data')
		}
		

	}
  return (
    <>
      <form className="row g-3 needs-validation" noValidate method="POST">
        <div className="col-md-6 mb-md-4">
          <label htmlFor="validationCustom01" className="form-label">
            First name<span className="star">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            value={userData.fname}
			onChange={getUserData}
            required
            placeholder="Please enter your name"
			name="fname"
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-6 mb-md-4">
          <label htmlFor="validationCustom02" className="form-label">
            Last name<span className="star">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom02"
            value={userData.lname}
			onChange={getUserData}
            required
            placeholder="Please enter your name"
			name="lname"
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-6 mb-md-4">
          <label htmlFor="validationCustomUsername" className="form-label">
            Email Address<span className="star">*</span>
          </label>
          <div className="input-group has-validation">
            <input
              type="Email"
              className="form-control"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              required
              placeholder="Emailaddress@domain.com"
			  value={userData.email}
			  onChange={getUserData}
			  name="email"
            />
            <div className="invalid-feedback">Please choose a Email.</div>
          </div>
        </div>
        <div className="col-md-6 mb-md-4">
          <label htmlFor="validationCustom03" className="form-label">
            Phone Number
          </label>
          <input
            type="number"
            className="form-control"
            id="validationCustom03"
            placeholder="(000) 000-0000"
			value={userData.phone}
			onChange={getUserData}
			name="phone"
          />
          <div className="invalid-feedback">
            Please provide a valid Phone Number.
          </div>
        </div>
        <div className="col-md-6 mb-md-4 selectDiv">
          <label htmlFor="validationCustom04" className="form-label">
            State
          </label>
          <select
            className="form-select findInput"
            aria-label="Default select example"
            id="validationCustom04"
			value={userData.state}
			onChange={getUserData}
			name="state"
          >
            <option selected>All distances</option>
            <option value="Delhi">Delhi</option>
            <option value="Gurugram">Gurugram</option>
            <option value="Pune">Pune</option>
          </select>
        </div>
        <div className="col-md-6 mb-4">
          <label htmlFor="validationCustom05" className="form-label">
            Zip
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom05"
            placeholder="00000"
			value={userData.zip}
			onChange={getUserData}
			name="zip"
          />
        </div>
        <div className="col-12">
          <button className="btn bg-green cl-fff f20 fw700 mt-2" type="Submit" onClick={postData}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
