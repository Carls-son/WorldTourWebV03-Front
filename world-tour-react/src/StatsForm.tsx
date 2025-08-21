import './StatsForm.css'
import Select from "react-select";
import { useState } from "react";

function StatsForm() {
    const stadiums = [
    { value: 'nozomi/citadel', label: 'NOZOMI/CITADEL' },
    { value: 'las vegas stadium', label: 'Las Vegas Stadium' },
    { value: 'bernal', label: 'Bernal' },
    { value: 'fortune stadium', label: 'Fortune Stadium' },
    { value: 'kyoto', label: 'Kyoto' },
    { value: 'sys$horizon', label: 'SYS$HORIZON' },
    { value: 'las vegas', label: 'Las Vegas' },
    { value: 'skyway stadium', label: 'Skyway Stadium' },
    { value: 'seoul', label: 'Seoul' },
    { value: 'monaco', label: 'Monaco' },
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

    const [elims, setElims] = useState<string>("");
    const [assists, setAssists] = useState<string>("");
    const [deaths, setDeaths] = useState<string>("");
    const [revives, setRevives] = useState<string>("");
    
    return (
        <div className="form-container">
            <h2>ADD MATCH STATS</h2>
            <div className="select-container">
              <Select options={stadiums} classNamePrefix="select" placeholder="Stadium" components={{DropdownIndicator: () => null, IndicatorSeparator: () => null }}/>
              <Select options={classes} classNamePrefix="select" placeholder="Class" components={{DropdownIndicator: () => null, IndicatorSeparator: () => null }}/>
              <Select options={placement} classNamePrefix="select" placeholder="Placement" components={{DropdownIndicator: () => null, IndicatorSeparator: () => null }}/>
            </div>
            
            <div className="input-container">
                <label htmlFor="elims">Eliminations</label>
                <input type="number" value={elims} onChange={e => setElims(e.target.value)} />
                <label htmlFor="assists">Assists</label>
                <input type="number" value={assists} onChange={e => setAssists(e.target.value)} />
                <label htmlFor="deaths">Deaths</label>
                <input type="number" value={deaths} onChange={e => setDeaths(e.target.value)} />
                <label htmlFor="revives">Revives</label>
                <input type="number" value={revives} onChange={e => setRevives(e.target.value)} />
            </div>

            <button type="submit">Submit</button>
          </div>
    )   
}

export default StatsForm;