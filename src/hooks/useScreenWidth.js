import { useMediaQuery } from 'react-responsive';

export const useScreenWidth = () => {
	const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });
	const isMediumScreen = useMediaQuery({ query: '(max-width: 1440px)' });
	const isLargeScreen = useMediaQuery({ query: '(min-width: 1441px)' });

	return { isSmallScreen, isMediumScreen, isLargeScreen };
};
