function ScoringLeadersTable({ scoringLeaders }) {
    const tableRow = scoringLeaders.scorers.map(player => {
        return (
            <tr>
                <td>{player.playerName}</td>
                <td>{player.goals}</td>
                <td>{player.penalties}</td>
            </tr>
        )
    })
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Goals</th>
                        <th>Penalties</th>
                    </tr>
                </thead>
                {<tbody>{tableRow}</tbody>}
            </table>

        </div>
    )
}

export default ScoringLeadersTable;