import React from 'react'

export default function FormDream() {
  return (
    <>
        <form className="row g-3 needs-validation" noValidate>
		  <div className="col-md-6 mb-md-4">
		    <label for="validationCustom01" className="form-label">First name<span className="star">*</span></label>
		    <input type="text" className="form-control" id="validationCustom01" value="Mark" required placeholder="Please enter your name" />
		    <div className="valid-feedback">
		      Looks good!
		    </div>
		  </div>
		  <div className="col-md-6 mb-md-4">
		    <label for="validationCustom02" className="form-label">Last name<span className="star">*</span></label>
		    <input type="text" className="form-control" id="validationCustom02" value="Otto" required placeholder="Please enter your name" />
		    <div className="valid-feedback">
		      Looks good!
		    </div>
		  </div>
		  <div className="col-md-6 mb-md-4">
		    <label for="validationCustomUsername" className="form-label">Email Address<span className="star">*</span></label>
		    <div className="input-group has-validation">
		      <input type="Email" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required placeholder="Emailaddress@domain.com" /> 
		      <div className="invalid-feedback">
		        Please choose a Email.
		      </div>
		    </div>
		  </div>
		  <div className="col-md-6 mb-md-4">
		    <label for="validationCustom03" className="form-label">Phone Number</label>
		    <input type="number" className="form-control" id="validationCustom03" placeholder="(000) 000-0000" />
		    <div className="invalid-feedback">
		      Please provide a valid Phone Number.
		    </div>
		  </div>
		  <div className="col-md-6 mb-md-4 selectDiv">
		    <label for="validationCustom04" className="form-label">State</label>
		    <select className="form-select findInput" aria-label="Default select example" id="validationCustom04">
			  <option selected>All distances</option>
			  <option value="1">One</option>
			  <option value="2">Two</option>
			  <option value="3">Three</option>
			</select>
		  </div>
		  <div className="col-md-6 mb-4">
		    <label for="validationCustom05" className="form-label">Zip</label>
		    <input type="text" className="form-control" id="validationCustom05" placeholder="00000" />
		  </div>
		  <div className="col-12">
		    <button className="btn bg-green cl-fff f20 fw700 mt-2" type="Submit">Submit</button>
		  </div>
		</form>
    </>
  )
}
