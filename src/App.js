import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';

import FooterHeader from "./Components/Footer/FooterHeader"

import Hero from './Components/Hero/Hero';
import Home from './Components/Pages/Home';
import AboutUs from './Components/Pages/AboutUs';
import Teams from './Components/Pages/Teams';

function App() {
	return (
		<>
		
		<Header/>
		<Hero/>
		<Routes>
		<Route path="/" element={<Home/>} />
			<Route path="/AboutUs" element={<AboutUs/>} />
			<Route path="/Teams" element={<Teams/>} />
			
		</Routes>

		
		 <FooterHeader/>  
		
		 {/* <Newsletter/> 
       <FooterSection/>
       <FooterCards/>   */}
		</>
	);
}

export default App;