import { useState, useEffect } from 'react';

import "@styles/font_ico_style.scss";

import "@styles/main.scss";
import "@styles/options_components.scss";


export default function MyApp({ Component, pageProps }) {
    //Постоянно смотрим за разрешением 
	const useDeviceSize = () => {
		const [widthDevice, setWidthDevice] = useState(0);

		const handleWindowSize = () => {
			setWidthDevice(window.innerWidth);
		}

		useEffect(() => {
			handleWindowSize();
			window.addEventListener('resize', handleWindowSize);
			return () => window.removeEventListener('resize', handleWindowSize);		
		}, []);
		console.log(widthDevice)
		return widthDevice;
	}
	
	const widthDevice = useDeviceSize();
	console.log(widthDevice)

    return (
        <Component 
            {...pageProps}
            widthDevice={ widthDevice }
        />
     )
}