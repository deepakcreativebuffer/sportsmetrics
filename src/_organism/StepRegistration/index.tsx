import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SignupDialog from '../../_molecule/RegistrationDialog/SignupDialog';
import SelectSportDialog from '../../_molecule/RegistrationDialog/SelectSportDialog';
import FormDailog from "../../_molecule/RegistrationDialog/FormDialog"
import RegisterDialog from '../../_molecule/RegistrationDialog/RegisterDialog';

const StepRegistration = () => {
  const navigate  = useNavigate();
	const [isOpen, setIsOpenParentModal] = useState(true);
	const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];
	const [currentStep, setCurrentStep] = useState(0);


  const nextStep = () => {
		setCurrentStep(currentStep + 1);
	};

	const previousStep = () => {
		setCurrentStep(currentStep - 1);
	};

	const closeModal = () => {
		setIsOpenParentModal(false);
		// setIsOpen(true);
		navigate('/');
	};

  return (
    <>{steps[currentStep]=== 'Step 1' ? <SignupDialog />  : steps[currentStep]=== "Step 2" ? <SelectSportDialog /> : steps[currentStep]=== "Step 3" ?<FormDailog /> :<RegisterDialog /> }</>
  )

}

export default StepRegistration