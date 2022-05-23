function WeeklyResultsTable({ week37Results }) {
    const tableRow = week37Results.matches.map(match => {
        return (
            <tr>
                <td>{match.when}</td>
                <td>{match.team1.teamName}</td>
                <td>{match.team2.teamName}</td>
                <td>{ `${match.team1.teamName} ${match.team1.teamScore} - ${match.team2.teamName} ${match.team2.teamScore}` }</td>
            </tr>
        )
    })
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Home Team</th>
                        <th>Away Team</th>
                        <th>Result</th>
                    </tr>
                </thead>
                {<tbody>{tableRow}</tbody>}
            </table>
        </div>
    )
}

export default WeeklyResultsTable;