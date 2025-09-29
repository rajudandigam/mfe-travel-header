import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	const [tripCount, setTripCount] = useState<number>(0);

	useEffect(() => {
		function onIncrement(e: Event) {
			const delta = Math.max(1, Number((e as CustomEvent).detail?.delta ?? 1));
			setTripCount((c) => Math.max(0, c + delta));
		}

		window.addEventListener('trips:increment', onIncrement as EventListener);

		return () => {
			window.removeEventListener('trips:increment', onIncrement as EventListener);
		};
	}, [tripCount]);

	return (
		<header style={headerStyle}>
			<div style={brandStyle}>✈️ Travel Portal</div>

			<nav style={navStyle}>
				<Link to="/" style={{ ...menuItem, ...(true && activeItem) }}>Home</Link>

				<button style={{ ...menuItem }} title="Coming soon">Drafts
					<span style={badgeStyle}>
						{tripCount}
					</span>
				</button>

				<Link to="/trips" style={menuItem}>
					<span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
						Trips
					</span>
				</Link>

				<button style={{ ...menuItem, ...disabledItem }} title="Coming soon">Profile</button>
				<button style={{ ...menuItem, ...disabledItem }} title="Coming soon">Help</button>
			</nav>

			<div style={{ width: 100 }}></div>
		</header>
	);
}

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
	color: '#fff',
};

const activeItem: React.CSSProperties = {
	background: 'rgba(255,255,255,0.2)',
};

const disabledItem: React.CSSProperties = {
	opacity: 0.45,
	cursor: 'not-allowed',
};

const badgeStyle: React.CSSProperties = {
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	marginLeft: 8,
	minWidth: 22,
	height: 22,
	padding: '0 6px',
	borderRadius: 999,
	background: '#ef4444',
	color: '#fff',
	fontWeight: 800,
	fontSize: 12,
	boxShadow: '0 1px 4px rgba(0,0,0,0.25)',
};
