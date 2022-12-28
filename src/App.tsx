import './App.css'
import { Provider } from 'react-redux'
import { store } from './store'
import Main from './pages/Main'
import RandomSelectionCard from './pages/RandomSelectionCard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter
      // basename={process.env.PUBLIC_URL}
      >
        <Routes>
          <Route path="/" element={<RandomSelectionCard />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
