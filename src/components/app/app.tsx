import MainScreen from '../../pages/main-screen/main-screen';
import { MainScreenProps } from '../../pages/main-screen/main-screen';

function App({placesCount}: MainScreenProps): JSX.Element {
  return (
    <MainScreen placesCount={placesCount}/>
  );
}

export default App;
