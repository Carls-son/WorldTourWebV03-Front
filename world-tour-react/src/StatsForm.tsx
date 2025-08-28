import './StatsForm.css'
import Select from "react-select";
import { useState } from "react";

type OptionType = { value: string; label: string };

type StatsFormProps = {
    onSubmit: (data: {
    stadium: string;
    class: string;
    placement: string;
    elims: string;
    assists: string;
    deaths: string;
    revives: string;
  }) => void;
};

function StatsForm({ onSubmit }: StatsFormProps) {
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

    

    const [selectedStadium, setSelectedStadium] = useState<OptionType | null>(null);
    const [selectedClass, setSelectedClass] = useState<OptionType | null>(null);
    const [selectedPlacement, setSelectedPlacement] = useState<OptionType | null>(null);

    const [elims, setElims] = useState<string>("");
    const [assists, setAssists] = useState<string>("");
    const [deaths, setDeaths] = useState<string>("");
    const [revives, setRevives] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        const formData = {
            stadium: selectedStadium?.value || "",
            class: selectedClass?.value || "",
            placement: selectedPlacement?.value || "",
            elims,
            assists,
            deaths,
            revives
        };

        // Send formdata here
        onSubmit(formData);
        await fetch("http://localhost:5298/api/stats", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        console.log(formData);

        setSelectedStadium(null);
        setSelectedClass(null);
        setSelectedPlacement(null);
        setElims("");
        setAssists("");
        setDeaths("");
        setRevives("");
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h2>ADD MATCH STATS</h2>
            <div className="select-container">
              <Select options={stadiums} value={selectedStadium} onChange={setSelectedStadium} isSearchable={false} className="select-stadium" classNamePrefix="select" placeholder="Stadium" components={{DropdownIndicator: () => null, IndicatorSeparator: () => null }} />
              <Select options={classes} value={selectedClass} onChange={setSelectedClass} isSearchable={false} className="select-class" classNamePrefix="select" placeholder="Class" components={{DropdownIndicator: () => null, IndicatorSeparator: () => null }} />
              <Select options={placement} value={selectedPlacement} onChange={setSelectedPlacement} isSearchable={false} className="select-placement" classNamePrefix="select" placeholder="Placement" components={{DropdownIndicator: () => null, IndicatorSeparator: () => null }} />
            </div>
            
            <div className="input-container">
                <div className="stats-container">
                    <label htmlFor="elims">Eliminations</label>
                    <input type="number" className="input" value={elims} onChange={e => setElims(e.target.value)} />
                </div>
                <div className="stats-container">
                    <label htmlFor="assists">Assists</label>
                    <input type="number" className="input" value={assists} onChange={e => setAssists(e.target.value)} />
                </div>
                <div className="stats-container">
                    <label htmlFor="deaths">Deaths</label>
                    <input type="number" className="input" value={deaths} onChange={e => setDeaths(e.target.value)} />
                </div>
                <div className="stats-container">
                    <label htmlFor="revives">Revives</label>
                    <input type="number" className="input" value={revives} onChange={e => setRevives(e.target.value)} />
                </div>
            </div>

            <div className="button-container">
                <button type="submit">
                    <h4>SUBMIT</h4>
                </button>
            </div>
          </form>
    )   
}

export default StatsForm;