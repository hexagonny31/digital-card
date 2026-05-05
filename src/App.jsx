import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider, Helmet } from 'react-helmet-async'; 
import ResetScroll from './component/ResetScroll.jsx'
import Init  from './component/pages/init.jsx'
import Page1 from './component/pages/home.jsx'

function App() {
    return (
        <>
            <Helmet>
                <link rel="icon" href="./sel5.ico?v=1" />
            </Helmet>
            <Router>
                <ResetScroll/>
                {/* "Routes" are basically multiple routes. it wraps all the individual routes. */}
                <Routes>
                    {/* "Route can be nested, it defines the path within the website by using the path prop." */}
                    <Route path="/" element={<Init/>}/>
                    <Route path="/home.jsx" element={<Page1/>}/>
                </Routes>
            </Router>
        </>
    );
}
export default App