import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Header from './Components/Header';

import FooterHeader from "./Components/Footer/FooterHeader";

import AboutUs from './Components/Pages/AboutUs';
import Home from './Components/Pages/Home';
import Teams from './Components/Pages/Teams';

function App() {
	return (
		<>

			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/AboutUs" element={<AboutUs />} />
				<Route path="/Teams" element={<Teams />} />

			</Routes>


			<FooterHeader />

			{/* <Newsletter/> 
       <FooterSection/>
       <FooterCards/>   */}
		</>
	);
}

export default App;