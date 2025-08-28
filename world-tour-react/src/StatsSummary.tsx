import { useEffect, useState } from 'react';
import './StatsSummary.css'

type SummaryProps = {
  formData: {
    stadium: string;
    class: string;
    placement: string;
    elims: string;
    assists: string;
    deaths: string;
    revives: string;
  };
};

type ServerSummary = {
  totalMatches: number;
  avgElims: number;
  avgAssists: number;
  avgDeaths: number;
  avgRevives: number;
};

function StatsSummary({ formData }: SummaryProps) {
  const [summary, setSummary] = useState<ServerSummary | null>(null);

  useEffect(() => {
    fetch("http://localhost:5298/api/stats/summary")
      .then(res => res.json())
      .then(data => setSummary(data));
  }, []);
  
    return (
        <div className="summary-container">
            <h2>SUMMARY</h2>
            <p><strong>Stadium:</strong> {formData.stadium}</p>
            <p><strong>Class:</strong> {formData.class}</p>
            <p><strong>Placement:</strong> {formData.placement}</p>
            <p><strong>Eliminations:</strong> {formData.elims}</p>
            <p><strong>Assists:</strong> {formData.assists}</p>
            <p><strong>Deaths:</strong> {formData.deaths}</p>
            <p><strong>Revives:</strong> {formData.revives}</p>

            <h2>SUMMARY FROM SERVER</h2>
            <p>
              <strong>Total Matches:</strong> {summary && summary.totalMatches}
            </p>
            <p>
              <strong>Average Eliminations:</strong> {summary && summary.avgElims.toFixed(2)}
            </p>
            <p>
              <strong>Average Assists:</strong> {summary && summary.avgAssists.toFixed(2)}
            </p>
            <p>
              <strong>Average Deaths:</strong> {summary && summary.avgDeaths.toFixed(2)}
            </p>
            <p>
              <strong>Average Revives:</strong> {summary && summary.avgRevives.toFixed(2)}
            </p>
              </div>
        
    )
}

export default StatsSummary;
