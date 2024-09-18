import { Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import SearchBreaches from './SearchBreaches.tsx'

function AppRoutes() {
    return(
        <Routes>
            <Route path='/' element={ <App/> }/>
            <Route path='/search' element={ <SearchBreaches/> }/>
            {/** Your Routes come here */}
        </Routes>
    )
}

export default AppRoutes