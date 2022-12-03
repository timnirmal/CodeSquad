import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { NewQuestion } from './NewQuestion'
import { TheEnd } from './TheEnd'
import CountDownMain from './CountDownMain'
import NewQCountDownMain from './NewQCountDownMain'
import EndCountDownMain from './EndCountDownMain'
import { TheEndHighQ } from './TheEndHighQ'

function App() {
    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route path='/' element={<CountDownMain />} />
                    <Route path='/newq' element={<NewQCountDownMain />} />
                    <Route path='/newquestion' element={<NewQuestion />} />
                    <Route path='/end' element={<EndCountDownMain />} />
                    <Route path='/theend' element={<TheEnd />} />
                    <Route path='/theendhighq' element={<TheEndHighQ />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App