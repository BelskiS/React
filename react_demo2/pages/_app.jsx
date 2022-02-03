import { useState, useEffect } from 'react';

import "@styles/font_ico_style.scss";

import "@styles/main.scss";
import "@styles/options_components.scss";


export default function MyApp({ Component, pageProps }) {
    //Постоянно смотрим за разрешением 
	const useDeviceSize = () => {
		const [widthDevice, setWidthDevice] = useState(1360);

		const handleWindowSize = () => {
			setWidthDevice(window.innerWidth);
		}

		useEffect(() => {
			handleWindowSize();
			window.addEventListener('resize', handleWindowSize);
			return () => window.removeEventListener('resize', handleWindowSize);		
		}, []);
		return widthDevice;
	}
	const widthDevice = useDeviceSize();

    return (
        <Component 
            {...pageProps}
            widthDevice={ widthDevice }
        />
     )
}