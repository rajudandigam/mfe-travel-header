import React from 'react';


export default function Header() {
	
return (
	<header style={{display:'flex',alignItems:'center',gap:20,padding:12,background:'#0d47a1',color:'#fff'}}>
		<strong>✈️ Travel Portal</strong>
		<nav style={{display:'flex',gap:12}}>
				<a href="#" style={{color:'#fff'}}>Home</a>
				<a href="#" style={{color:'#fff'}}>Bookings</a>
				<a href="#" style={{color:'#fff'}}>Profile</a>
		</nav>
	</header>
);
}