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

function StatsSummary({ formData }: SummaryProps) {
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
        </div>
    )
}

export default StatsSummary;
