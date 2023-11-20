import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { formStage, formDetails } from '../store/rootSlice'
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import '../assets/style.css'

function FormUserSignup({ pageTitle, submitButtonText, previousButton }) {

  // redux
  const dispatch = useDispatch();

  // get Redux store values for formUserSignup
  const currentStage = useSelector(state => state.FormStage) // for previous button
  const formstageStrret1 = useSelector(state => state.FormUserDetails.street1)
  const formstageStrret2 = useSelector(state => state.FormUserDetails.street2)
  const formstageCity = useSelector(state => state.FormUserDetails.city)
  const formstageState = useSelector(state => state.FormUserDetails.myState)
  const formstageCountry = useSelector(state => state.FormUserDetails.country)
  const formstagePin = useSelector(state => state.FormUserDetails.pin)

  // to show password in textfeild
  

  // form values initial state
  const [formData, setFormData] = useState({
    street1: formstageStrret1 || "",
    street2: formstageStrret2 || "",
    city: formstageCity || "",
    myState: formstageState || "",
    pin : formstagePin || "" ,
    country : formstageCountry || ""
  })

  // form values onchange
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
        ...formData, 
        [name]: value
    })
    
  }

  
  
  const [isSubmitted, setIsSubmitted] = useState(false) // state for sent status
  // onsubmit
  const handleSubmit = (e) => {
    e.preventDefault(); // stop form submission
    setIsSubmitted(true) // update submit status
    console.log(formData)
  }

  useEffect(() => {
    if ( isSubmitted) { // check if any form errors

        // update Redux Slice
        dispatch(
          formStage(3) // update formStage
        )
        dispatch(
          formDetails({ // update formSignup
            street1: formData.street1,
            street2: formData.street2,
            city: formData.city,
            myState: formData.myState,
            pin : formData.pin,
            country : formData.country
          })
        );
    }

  }, [formData, isSubmitted, dispatch])
  // console.log(errors, formData)

  return (

    <>
        <h2>{pageTitle || 'Signup'}</h2>
          
        <form 
          name="form-signup"
          id="form-signup"
          onSubmit={(e) => handleSubmit(e)}
        >
      
      <div className="my">
          
          <TextField 
              type="text"
              required
              name="street1"
              value={formData.street1}
              placeholder="Street Add 1"
              label = "Street Add 1"
              onChange={handleChange}
          />
        </div>
        <div className="my">
          <TextField 
              type="text"
              name="street2"
              value={formData.street2}
              placeholder="Street Add 2"
              label = "Street Add 2"
              onChange={handleChange}
          />
        </div>
        <div className="my2">
          
          <TextField 
              type="text"
              name="city"
              required
              value={formData.city}
              placeholder="City"
              label = "City"
              onChange={handleChange}
          />
        
          <TextField 
              type="text"
              name="myState"
              value={formData.myState}
              placeholder="State"
              label = "State"
              onChange={handleChange}
              
          />
          </div>
          <div className="my2">
          <TextField 
              type="text"
              name="country"
              value={formData.country}
              placeholder="Country"
              label = "Country"
              onChange={handleChange}
              
          />
          
          <TextField 
              type="number"
              required
              name="pin"
              value={formData.pin}
              placeholder="Pincode"
              label = "Pincode"
              onChange={handleChange}
              
          />
        </div>

        <p className="disclaimer-text"><span className="required-asterix">*</span> required fields</p>

        <div className="btn-array">
          {(previousButton) && 
           
              <Button 
                  type="submit" 
                  value={`Back`}
                  variant="contained"
                  onClick={() => dispatch(formStage(currentStage-1))}
                >{`Back`}</Button>
            
          }
         
            <Button 
              type="submit" 
              variant="contained"
              value={ submitButtonText || 'Submit' } 
            >{ submitButtonText || 'Submit' } </Button>
         
        </div>

      </form>
    
    </>

  );

}

export default FormUserSignup;
