import { useState, useEffect } from 'react';

import "../styles/font_ico_style.scss";

import "../styles/main.scss";
import "../styles/options_components.scss";


export default function MyApp({ Component, pageProps }) {
    //Постоянно смотрим за разрешением 
	const useDeviceSize = () => {

		const [widthDevice, setWidthDevice] = useState(0)

		const handleWindowResize = () => {
			setWidthDevice(window.innerWidth);
		}

		useEffect(() => {
			handleWindowResize();
			window.addEventListener('resize', handleWindowResize);
			return () => window.removeEventListener('resize', handleWindowResize);
		}, []);
		return widthDevice

	}
	const widthDevice = useDeviceSize();

    return (
        <Component 
            {...pageProps}
            widthDevice={ widthDevice }
        />
     )
}