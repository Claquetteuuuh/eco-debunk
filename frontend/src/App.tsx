import './assets/scss/style.scss';
import { Contexts } from './components/contexts';
import { Router } from './router';

const App = (): JSX.Element => {

  document.title = 'Eco-Debunk - Eco learning'

  return (
    <Contexts>
      <Router />
    </Contexts>
  )
}

export default App
