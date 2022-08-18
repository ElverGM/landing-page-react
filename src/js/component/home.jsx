import React from "react";

//include images into your bundle
import { NavBar } from "./NavBar.jsx";
import { Card } from "./Card.jsx";
import { Card2 } from "./Card2.jsx";
import { Card3 } from "./Card3.jsx";
import { Card4 } from "./Card4.jsx";

import { JumboTron } from "./JumboTron.jsx";
import { Footer } from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
				<NavBar/>
			<div className="header">
				<JumboTron/>
			</div>
			<div className="cajas-card">
				<Card/>
				<Card2/>
				<Card3/>
				<Card4/>
			</div>	
				<Footer/>
		</div>
	
	);
};

export default Home;
