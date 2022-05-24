import React, { useState } from 'react';
import axios from 'axios';

const Login = (props) => {
	
	const [usdPriceData, setUsdPriceData] = useState(0);
	const [gbpPriceData, setGbpPriceData] = useState(0);
	const [gender, setGender] = useState("");
	const [age, setAge] = useState(0);
	const [name, setName] = useState("");

	const fetchData = async () => {
		const {data} = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
		const usdPrice = data.bpi.USD.rate;
		console.log(usdPrice);

		const bigData = await axios.all([
			axios.get('https://api.coindesk.com/v1/bpi/currentprice.json'),
			axios.get('https://api.coindesk.com/v1/bpi/currentprice.json'),
			axios.get('https://api.agify.io?name=alex'),
			axios.get('https://api.genderize.io?name=alex')
		])

		const price = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
		const gbpPrice = price.data.bpi.GBP.rate;

		setGender(bigData[3].data.gender);
		setAge(bigData[2].data.age);
		setName(bigData[2].data.name);

		setUsdPriceData(usdPrice);
		setGbpPriceData(gbpPrice);
	}

	return (
		<div>
			<p>Normal text here</p>
			<p>{props.data}</p>
			<button onClick={fetchData}>Click this please!</button>
			<p>Bitcoin price in USD below:</p>
			<p>{usdPriceData}</p>
			<p>Bitcoin price in GBP below:</p>
			<p>{gbpPriceData}</p>
			<p>Big Data below</p>
			<p>{name}</p>
			<p>{age}</p>
			<p>{gender}</p>
		</div>
	)
}

export default Login