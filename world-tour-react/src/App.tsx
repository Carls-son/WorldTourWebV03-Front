
import { useState } from 'react';
import './App.css'
import StatsForm from './StatsForm';
import StatsSummary from './StatsSummary';

type FormData = {
  stadium: string;
  class: string;
  placement: string;
  elims: string;
  assists: string;
  deaths: string;
  revives: string;
};

function App() {
  const [formData, setFormData] = useState<FormData | null>(null);

  return (
    <div className="app-container">
      <div className="main-container">
        <div className="title-container">
          <h1>WORLD TOUR REACT</h1>
        </div>
        <div className="content-container">
          <StatsForm onSubmit={setFormData} />
          {formData && <StatsSummary formData={formData} />}
        </div>
      </div>
    </div>
  )
}

export default App
