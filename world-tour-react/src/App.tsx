
import './App.css'
import StatsForm from './StatsForm';
import StatsSummary from './StatsSummary';


function App() {
  return (
    <div className="app-container">
      <div className="main-container">
        <div className="title-container">
          <h1>WORLD TOUR REACT</h1>
        </div>
        <div className="content-container">
          <StatsForm />
          <StatsSummary />
        </div>
      </div>
    </div>
  )
}

export default App
