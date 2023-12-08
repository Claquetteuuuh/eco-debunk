import './assets/scss/style.scss';
import { Contexts } from './components/contexts';
import { Router } from './router';
import appIcon from './assets/images/icon.png';

const App = (): JSX.Element => {

  document.title = 'Eco-Debunk - Eco learning'

  return (
    <Contexts>
      <img src={ appIcon } alt="app icon" className="app-icon" />
      <Router />
    </Contexts>
  )
}

export default App
