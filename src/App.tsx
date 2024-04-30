import { Router } from 'route/Router';
import { useMediaQuery } from 'react-responsive';
import { ResponsivePage } from 'pages/ResponsivePage';

export const App = () => {

  const isSmallScreen = useMediaQuery({ maxWidth: 1023 });
  
  return (
    <>
      {!isSmallScreen ? <Router /> : <ResponsivePage />}
    </>
  );
}
