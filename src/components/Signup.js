import React from 'react';
import { useSelector } from 'react-redux'
import FormUserSignup from './FormUserSignup'; // load component
import FormUserPrivacy from './FormUserPrivacy'; // load component
import FormUserCompleted from './FormUserResult'; // load component
import FormUserDetails from './FormUserDetails';
import { Step, StepLabel, Stepper } from "@mui/material";
import "../assets/style.css";


const Signup = () => {

  const pageStage = useSelector(state => state.FormStage)
  //const stateAll = useSelector(state => state)
  //console.log(`output: ${JSON.stringify(stateAll, null, 2)}`) // output results to console.log

  return (

   <>
        <h1 className="text-center">
          Signup Form
        </h1>
    <div className='mystep'>
          <Stepper activeStep={pageStage - 1}>
            <Step>
              <StepLabel>User Form</StepLabel>
            </Step>
            <Step>
              <StepLabel>Address Form</StepLabel>
            </Step>
            <Step>
              <StepLabel>DOB</StepLabel>
            </Step>
          </Stepper>
        </div>
        
            {(pageStage === 1) && 
              // Signup Page
                  <FormUserSignup 
                    pageTitle={'User Form:'} // form page stage title
                    submitButtonText={'Next'} // submit next button display text
                    previousButton={false} // show/hide previous button
                  /
            }

            {(pageStage === 2) && 
              // Signup Page
             
                
                  <FormUserDetails 
                    pageTitle={'Adress:'} // form page stage title
                    submitButtonText={'Next'} // submit next button display text
                    previousButton={true} // show/hide previous button
                  />
              
              
            }

            {(pageStage === 3) && 
              // Privacy Page
              
                
                  <FormUserPrivacy
                    pageTitle={'Privacy Form:'} // form page stage title
                    submitButtonText={'Submit'} // submit next button display text
                    previousButton={true} // show/hide previous button
                  />
               
              
            }

            {(pageStage === 4) && 
              // Completion Page
              
               
                  <FormUserCompleted 
                    pageTitle={'Success!'} // form page stage title
                    successMessage={'Please verify your email address, you should have recieved an email from us already!'} // page success message
                  />
               
              
            }

</>


  );

};

export default Signup;
