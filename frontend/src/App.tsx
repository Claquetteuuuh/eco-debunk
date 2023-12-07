import './assets/scss/style.scss';
import { Router } from './router';

const App = (): JSX.Element => {

  document.title = 'Eco-Debunk - Eco learning'

  return (
    <Router />
  )
}

export default App
