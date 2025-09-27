import React from 'react';

export default function Header() {
	return (
		<header style={headerStyle}>
			<div style={brandStyle}>✈️ Travel Portal</div>

			<nav style={navStyle}>
				<button style={{ ...menuItem, ...(true && activeItem) }}>Home</button>
				<button style={menuItem}>Trips</button>
				<button style={{ ...menuItem, ...disabledItem }}>Profile</button>
				<button style={{ ...menuItem, ...disabledItem }}>Help</button>
			</nav>

			<div style={{ width: 100 }}></div>
		</header>
	);
}

/* —— Styles —— */
const fontStack =
	`Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial`;

const headerStyle: React.CSSProperties = {
	display: 'grid',
	gridTemplateColumns: '200px 1fr 100px',
	alignItems: 'center',
	height: 80,
	padding: '0 24px',
	background: '#1d4ed8',
	color: '#fff',
	fontFamily: fontStack,
	boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
	position: 'sticky',
	top: 0,
	zIndex: 50,
};

const brandStyle: React.CSSProperties = {
	fontWeight: 800,
	fontSize: 20,
	letterSpacing: '-0.01em',
};

const navStyle: React.CSSProperties = {
	display: 'flex',
	justifyContent: 'center',
	gap: 24,
};

const menuItem: React.CSSProperties = {
	all: 'unset',
	fontSize: 16,
	fontWeight: 600,
	padding: '8px 14px',
	borderRadius: 10,
	cursor: 'pointer',
	transition: 'background 0.2s, color 0.2s',
};

const activeItem: React.CSSProperties = {
	background: 'rgba(255,255,255,0.2)',
};

const disabledItem: React.CSSProperties = {
	opacity: 0.4,
	cursor: 'not-allowed',
};
