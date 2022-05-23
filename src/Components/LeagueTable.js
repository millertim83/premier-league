function LeagueTable({ leagueTable }) {
    const tableRow = leagueTable.records.map(club => {
        return (
            <tr>
                <td>{club.team}</td>
                <td>{club.played}</td>
                <td>{club.win}</td>
                <td>{club.draw}</td>
                <td>{club.loss}</td>
                <td>{club.goalsFor}</td>
                <td>{club.goalsAgainst}</td>
                <td>{club.points}</td>
            </tr>
        )
    })
    
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Team</th>
                        <th>Played</th>
                        <th>Wins</th>
                        <th>Draws</th>
                        <th>Losses</th>
                        <th>Goals For</th>
                        <th>Goals Against</th>
                        <th>Points</th>
                    </tr>
                </thead>
                {<tbody>{tableRow}</tbody>}
            </table>

        </div>
    )
}

export default LeagueTable;