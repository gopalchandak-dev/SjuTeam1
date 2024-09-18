import { Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import SearchBreaches from './SearchBreaches.tsx'
import BreachAnalysis from './BreachAnalysis.tsx'
import SearchDomains from './SearchDomains.tsx'

function AppRoutes() {
    return(
        <Routes>
            <Route path='/' element={ <App/> }/>
            <Route path='/SearchEmail' element={ <SearchBreaches/> }/>
            <Route path='/BreachAnalysis/:email' element={ <BreachAnalysis/> }/>
            <Route path='/SearchDomain' element={ <SearchDomains/>} />
            <Route path='/SearchPassword' element={ <SearchDomains/>} />
            
            {/** Your Routes come here */}
        </Routes>
    )
}

export default AppRoutes