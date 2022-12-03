import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { NewQuestion } from './NewQuestion'
import CountDownMain from './CountDownMain'

function App() {
    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route path='/' element={<CountDownMain />} />
                    <Route path='/newquestion' element={<NewQuestion />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App