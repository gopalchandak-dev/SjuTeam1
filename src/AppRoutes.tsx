import { Routes, Route } from 'react-router-dom'
import App from './App.tsx'

function AppRoutes() {
    return(
        <Routes>
            <Route path='/' element={ <App/> }/>
            {/** Your Routes come here */}
        </Routes>
    )
}

export default AppRoutes