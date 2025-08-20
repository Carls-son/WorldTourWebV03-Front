import './App.css'
import Select from 'react-select';
import { useState } from 'react';

function App() {

  const stadiums = [
    { value: 'bernal', label: 'Bernal' },
  ];

  const classes = [
    { value: 'light', label: 'Light' },
    { value: 'medium', label: 'Medium' },
    { value: 'heavy', label: 'Heavy' }
  ];

  const placement = [
    { value: 'first', label: '1ST' },
    { value: 'second', label: '2ND' },
    { value: 'third', label: '3RD' },
    { value: 'fourth', label: '4TH' },
    { value: 'fifth', label: '5TH' },
    { value: 'sixth', label: '6TH' },
    { value: 'seventh', label: '7TH' },
    { value: 'eighth', label: '8TH' }
  ];

  const [elims, setElims] = useState(0);
  const [assists, setAssists] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [revives, setRevives] = useState(0);

  return (
    <div className="app-container">
      <div className="main-container">
        <div className="title-container">
          <h1>WORLD TOUR REACT</h1>
        </div>
        <div className="content-container">
          <div className="form-container">
            <h2>MATCH STATS</h2>
            <div className="select-container">
              <Select options={stadiums} classNamePrefix="select" placeholder="Stadium" components={{DropdownIndicator: () => null, IndicatorSeparator: () => null }}/>
              <Select options={classes} classNamePrefix="select" placeholder="Class" components={{DropdownIndicator: () => null, IndicatorSeparator: () => null }}/>
              <Select options={placement} classNamePrefix="select" placeholder="Placement" components={{DropdownIndicator: () => null, IndicatorSeparator: () => null }}/>
            </div>
            
            <div className="input-container">
              <input type="number" value={elims} onChange={e => setElims(Number(e.target.value))} />
              <input type="number" value={assists} onChange={e => setAssists(Number(e.target.value))} />
              <input type="number" value={deaths} onChange={e => setDeaths(Number(e.target.value))} />
              <input type="number" value={revives} onChange={e => setRevives(Number(e.target.value))} />
            </div>


            <button type="submit">Submit</button>
          </div>
          <div className="summary-container">
            <h2>SUMMARY</h2>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default App
