import React, { useState } from 'react';
import axios from 'axios';
function App() {
	const [data, setData] = useState({});
	const [location, setLocation] = useState('');
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=b1d871daba89b8b24c5f9c907650a05f`;
	// const [darkMode, setDarkMode] = useState(false);
	const searchLocation = (e) => {
		if (e.key === 'Enter') {
			axios.get(url).then((response) => {
				setData(response.data);
				console.log(response.data);
			});
			setLocation('');
		}
	};
	return (
		// <div className={darkMode ? 'dark-mode app' : 'light-mode app'}>
		<div className="app">
			<div className="search">
				{/* <div>
					<div className="containerr">
						<span style={{ color: darkMode ? 'grey' : 'yellow' }}>☀︎</span>

						<div className="switch-checkbox">
							<label className="switch">
								<input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
								<span className="slider round"></span>
							</label>
						</div>

						<span style={{ color: darkMode ? '#c96dfd' : 'grey' }}>☽</span>
					</div>
				</div> */}
				<input
					type="text"
					placeholder="Enter Location?"
					value={location}
					onChange={(e) => setLocation(e.target.value)}
					onKeyPress={searchLocation}
				/>
			</div>
			<div className="container">
				<div className="top">
					<div className="location"></div>
					<p>{data.name}</p>
					<div className="temp">{data.main ? <h1>{((data.main.temp - 32) / 1.8).toFixed()}&deg;C</h1> : null}</div>
					<div className="description">{data.main ? <p>{data.weather[0].main}</p> : ''}</div>
				</div>
				{data.main ? (
					<div className="bottom">
						<div className="feels">
							{data.main ? <p className="bold">{((data.main.feels_like - 32) / 1.8).toFixed()}&deg;C</p> : null}
							<p>Feels Likes</p>
						</div>
						<div className="humidity">
							{data.main ? <p className="bold">{data.main.humidity}</p> : null}
							<p>Humidity</p>
						</div>
						<div className="wind">
							{data.main ? <p className="bold">{data.wind.speed}</p> : null}
							<p>Wind Speed</p>
						</div>
					</div>
				) : (
					''
				)}
			</div>
		</div>
	);
}

export default App;
