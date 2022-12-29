import './App.css'
import {Provider} from 'react-redux'
import {store} from './store'
import Main from './pages/Main'
import RandomSelectionCard from './pages/RandomSelectionCard'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import RestaurantList from './pages/RestaurantList'
import RestaurantInfo from './pages/RestaurantInfo'
import GlobalLayout from "./components/GlobalLayout";


function App() {
  return (
    <Provider store={store}>
        <GlobalLayout>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/random-selection-card" element={<RandomSelectionCard />} />
                    <Route path="/restaurant/list" element={<RestaurantList />} />
                    <Route path="/restaurant/:id" element={<RestaurantInfo />} />
                </Routes>
            </BrowserRouter>
    </GlobalLayout>
    </Provider>
  )
}

export default App
