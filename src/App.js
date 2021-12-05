import './App.css'
import HomePage from './pages/home-page/homepage'
import Timeline from './components/timeline/timeline'
import Services from './components/services/services'
import Headers from './components/header/header'

function App () {
  return (
    <div className='App'>
      <Headers />
      <HomePage />
      <Services />
      <Timeline />
    </div>
  )
}

export default App
