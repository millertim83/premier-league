import ScoringLeadersTable from "../ScoringLeadersTable.js";

function ScoringLeaders() {
    const scoringLeaders = {
        "scorers": [
            {
                "playerName": "Son Heung-Min",
                "goals": 23,
                "penalties": 0
            },
            {
                "playerName": "Mohamed Salah",
                "goals": 22,
                "penalties": 5
            },
            {
                "playerName": "Cristiano Ronaldo",
                "goals": 18,
                "penalties": 3
            },
            {
                "playerName": "Harry Kane",
                "goals": 17,
                "penalties": 4
            },
            {
                "playerName": "Diogo Jota",
                "goals": 15,
                "penalties": 0
            }
        ]
    }
    return (
        <div>
            <h1 className="text-uppercase">Scoring Leaders</h1>
            <div className="container-sm scorers-table">
                <ScoringLeadersTable scoringLeaders={scoringLeaders} />
            </div>
        </div>
    )
}

export default ScoringLeaders;