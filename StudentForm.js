import { getDefaultNormalizer } from '@testing-library/react';
import React, { useState,useEffect } from 'react';
import './StudentForm.css'


function isvalidname(name){
	let n=name.length;
	let nums=['0','1','2','3','4','5','6','7','8','9']
	for(let i=0;i<n;i++){
		let t=name[i];
		if(nums.includes(t)){
			return false;
		}
	}
	return true;
}

function isemailValid(email){
	let number_of_times_at=0;
	// let dot_count=0;
	let startposition=email[0];
	let nums=['0','1','2','3','4','5','6','7','8','9']
	if(startposition==='@'||nums.includes(startposition)){
		return false;
	}
	else{
		for(let i=0;i<email.length;i++){
			let g=email[i];
			if(g==='@'){
				number_of_times_at++;
			}
			// if(g==='.'){
			// 	dot_count++;
			// }
		}
		if(number_of_times_at>1||number_of_times_at<1){
			return false;
		}

	}
	return true;
}


function isPhoneNumberVallid(phone){
	let phone_digs=['0','1','2','3','4','5','6','7','8','9','+'];
	console.log("phone",phone)
	for(let i=0;i<phone.length;i++){
		let t=phone[i];
		if(phone_digs.includes(t)){
			continue;
		}
		else{
			return false;
		}
	}
	return true;

}

function StudentForm(props) {
	console.log("inside student form",props)
	const [id,setId] =useState(props.info.id);
	React.useEffect(() => {
		setId(props.info.id);
	},[ props.info.id])
	const [Name, setName] = useState(props.info.Name);
	React.useEffect(() => {
		setName(props.info.Name);
	},[ props.info.Name])
  
	const [isnameValid,setIsNameValid] = useState(true);
	const [EmailId, setEmailId] = useState(props.info.EmailId);


	React.useEffect(()=>{
		setEmailId(props.info.EmailId)
	},[props.info.EmailId])

	const [isEmailValid,setIsEMailValid] = useState(true);
	const [Phone, setPhone] = useState('');

	React.useEffect(()=>{
		setPhone(props.info.Phone)
	},[props.info.Phone])

	const [isPhoneValid,setIsPhoneValid] = useState(true);
	const [Street, setStreet] = useState('');

	React.useEffect(()=>{
		setStreet(props.info.Street)
	},[props.info.Street])
	
	const [City, setCity] = useState('');

	React.useEffect(()=>{
		setCity(props.info.City)
	},[props.info.City])

	const [State, setState] = useState('');

	React.useEffect(()=>{
		setState(props.info.State)
	},[props.info.State])

	const [Country, setCountry] = useState('');

	React.useEffect(()=>{
		setCountry(props.info.Country)
	},[props.info.Country])
	const [Postalcode, setPostalcode] = useState('');

	React.useEffect(()=>{
		setPostalcode(props.info.Postalcode)
	},[props.info.Postalcode])
	const [buttonName,setButtonName] = useState('Add');
	const changeName= (event) => {
		setName(event.target.value);
	};
	const changeEmailId = (event) => {
		setEmailId(event.target.value);
	};
	const changePhone = (event) => {
		setPhone(event.target.value);
	};
	const changeStreet = (event) => {
		setStreet(event.target.value);
	};
	const changeCity = (event) => {
		setCity(event.target.value);
	};
	const changeState = (event) => {
		setState(event.target.value);
	};
	const changeCountry = (event) => {
		setCountry(event.target.value);
	};
	const changePostalcode = (event) => {
		setPostalcode(event.target.value);
	};


	const transferValue = (event) => {
		event.preventDefault();
		const val = {
			id,
			Name,
			EmailId,
			Phone,
			Street,
			City,
			State,
			Country,
			Postalcode,
		};

		if(isvalidname(Name)){
			console.log("Valid Name")
			setIsNameValid(true)
		}
		else{
			setIsNameValid(false)
			console.log("Invalid Name")
			return;
		}

		if(isemailValid(EmailId)){
			setIsEMailValid(true)
			console.log("Valid EMail")
		}
		else{
			setIsEMailValid(false)
			console.log("Invalid EMail")
			return;
		}

		if(isPhoneNumberVallid(Phone)){
			console.log("Phone number valid")
			setIsPhoneValid(true)
		}

		else{
			setIsPhoneValid(false)
			console.log("Invalid Phone Number")
			return;
		}
		
		props.func(val);
		clearState();
	};

	const clearState = () => {
		setName('');
		setEmailId('');
		setPhone('');
		setStreet('');
		setCity('');
		setState('');
		setCountry('');
		setPostalcode('');
	};

	console.log("Printing props",props)

	return (
		<div className="container">
			<div className="head">FORM VALIDATION</div><br></br>
			<div class="flex">
				<div class="row gy-5">
						<div id='ipf' >
						<label>Name</label>
						<input type="text" class="ipn" id="ip" value={Name} placeholder="Your name.." onChange={changeName} />
						{isnameValid?null:<p>Invalid Username</p>}
						<label>Email Id</label>
						<input type="text" class="ipe" id="ip" value={EmailId} placeholder="Your EmailId." onChange={changeEmailId} />
						{isEmailValid?null:<p>Invalid Email</p>}</div>
						<div id='ipf'><label>Phone</label>
						<input type="text" class="ipp" id="ip" value={Phone} placeholder="Your Phone number." onChange={changePhone} />
						{isPhoneValid?null:<p>Invalid Phone</p>}
						<label>Street</label>
						<input type="text" class="ips" id="ip" value={Street} placeholder="Your Street name." onChange={changeStreet} /></div>
						<div id='ipf'><label>City</label>
						<input type="text" class="ipc" id="ip" value={City} placeholder="Your City." onChange={changeCity} />
						<label>State</label>
						<input type="text" class="ipst" id="ip" value={State} placeholder="Your State." onChange={changeState} /></div>
						<div id='ipf'><label>Country</label>
						<input type="text" class="ipcou" id="ip" value={Country} placeholder="Your Country." onChange={changeCountry} />
						<label>Postalcode</label>
						<input type="text" class="ippc" id="ip" value={Postalcode} placeholder="Your Postalcode." onChange={changePostalcode} /></div>
				
					
				</div>
				<br></br><button id="ad" type="Add" onClick={transferValue}>{props.isUpdate?'Update':'Add'} </button>
			</div>
		</div>
	);
}

export default StudentForm;