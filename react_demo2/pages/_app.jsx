import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import "@styles/font_ico_style.scss";

import "@styles/main.scss";
import "@styles/options_components.scss";

import Layout from '@components/Layouts/layout';
import InnerLayout from '@components/Layouts/InnerLayout';


export default function MyApp({ Component, pageProps }) {
	const router = useRouter();

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
		return widthDevice;
	}
	const widthDevice = useDeviceSize();

    return (
		<Layout
			widthDevice={ widthDevice }
		>
			{router.pathname == "/" ? 
				<Component 
					{...pageProps}
					widthDevice={ widthDevice }
				/>
			: 
				<InnerLayout>
					<Component 
						{...pageProps}
						widthDevice={ widthDevice }
					/>
				</InnerLayout>
			}

		</Layout>
     )
}