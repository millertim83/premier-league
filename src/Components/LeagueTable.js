//import { useState } from "react";

function LeagueTable({ leagueTable }) {
    const tableRow = leagueTable.map(club => {
        return (
            <tr key={club.team}>
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

/*

<button type="button" onClick={() => setSortedField("team")}></button>
<button type="button" onClick={() => setSortedField("played")}></button>
<button type="button" onClick={() => setSortedField("win")}></button>
<button type="button" onClick={() => setSortedField("draw")}></button>
<button type="button" onClick={() => setSortedField("loss")}></button>
<button type="button" onClick={() => setSortedField("goalsFor")}></button>
<button type="button" onClick={() => setSortedField("goalsAgainst")}></button>
<button type="button" onClick={() => setSortedField("points")}></button>

*/