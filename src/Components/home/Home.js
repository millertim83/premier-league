import { useEffect, useState } from "react";
import LeagueTable from "../LeagueTable";

function Home() {
    const [leagueTable, setLeagueTable] = useState([]);
    const premierLeagueTable = {
        "records": [
            {
                "team": "Manchester City",
                "played": 37,
                "win": 28,
                "draw": 6,
                "loss": 3,
                "goalsFor": 96,
                "goalsAgainst": 24,
                "points": 90
            },
            {
                "team": "Liverpool",
                "played": 36,
                "win": 26,
                "draw": 8,
                "loss": 2,
                "goalsFor": 89,
                "goalsAgainst": 24,
                "points": 86
            },
            {
                "team": "Chelsea",
                "played": 36,
                "win": 20,
                "draw": 10,
                "loss": 6,
                "goalsFor": 73,
                "goalsAgainst": 31,
                "points": 70
            },
            {
                "team": "Tottenham",
                "played": 37,
                "win": 21,
                "draw": 5,
                "loss": 11,
                "goalsFor": 64,
                "goalsAgainst": 40,
                "points": 68
            },
            {
                "team": "Arsenal",
                "played": 37,
                "win": 21,
                "draw": 3,
                "loss": 13,
                "goalsFor": 56,
                "goalsAgainst": 47,
                "points": 66
            },
            {
                "team": "Manchester United",
                "played": 37,
                "win": 16,
                "draw": 10,
                "loss": 11,
                "goalsFor": 57,
                "goalsAgainst": 56,
                "points": 58
            },
            {
                "team": "West Ham",
                "played": 37,
                "win": 16,
                "draw": 8,
                "loss": 13,
                "goalsFor": 59,
                "goalsAgainst": 48,
                "points": 56
            },
            {
                "team": "Wolverhampton Wanderers",
                "played": 37,
                "win": 15,
                "draw": 6,
                "loss": 16,
                "goalsFor": 37,
                "goalsAgainst": 40,
                "points": 51
            },
            {
                "team": "Leicester",
                "played": 36,
                "win": 13,
                "draw": 9,
                "loss": 14,
                "goalsFor": 57,
                "goalsAgainst": 57,
                "points": 48
            },
            {
                "team": "Brighton",
                "played": 37,
                "win": 11,
                "draw": 15,
                "loss": 11,
                "goalsFor": 39,
                "goalsAgainst": 43,
                "points": 48
            },
            {
                "team": "Brentford",
                "played": 37,
                "win": 13,
                "draw": 7,
                "loss": 17,
                "goalsFor": 47,
                "goalsAgainst": 54,
                "points": 46
            },
            {
                "team": "Newcastle United",
                "played": 37,
                "win": 12,
                "draw": 10,
                "loss": 15,
                "goalsFor": 42,
                "goalsAgainst": 61,
                "points": 46
            },
            {
                "team": "Crystal Palace",
                "played": 36,
                "win": 10,
                "draw": 15,
                "loss": 11,
                "goalsFor": 47,
                "goalsAgainst": 43,
                "points": 45
            },
            {
                "team": "Aston Villa",
                "played": 36,
                "win": 13,
                "draw": 5,
                "loss": 18,
                "goalsFor": 49,
                "goalsAgainst": 50,
                "points": 44
            },
            {
                "team": "Southampton",
                "played": 36,
                "win": 9,
                "draw": 13,
                "loss": 14,
                "goalsFor": 41,
                "goalsAgainst": 61,
                "points": 40
            },
            {
                "team": "Everton",
                "played": 36,
                "win": 10,
                "draw": 6,
                "loss": 20,
                "goalsFor": 39,
                "goalsAgainst": 59,
                "points": 36
            },
            {
                "team": "Leeds",
                "played": 37,
                "win": 8,
                "draw": 11,
                "loss": 18,
                "goalsFor": 40,
                "goalsAgainst": 78,
                "points": 35
            },
            {
                "team": "Burnley",
                "played": 36,
                "win": 7,
                "draw": 13,
                "loss": 16,
                "goalsFor": 32,
                "goalsAgainst": 50,
                "points": 34
            },
            {
                "team": "Watford",
                "played": 37,
                "win": 6,
                "draw": 5,
                "loss": 26,
                "goalsFor": 33,
                "goalsAgainst": 75,
                "points": 23
            },
            {
                "team": "Norwich",
                "played": 37,
                "win": 5,
                "draw": 7,
                "loss": 25,
                "goalsFor": 23,
                "goalsAgainst": 79,
                "points": 22
            }
        ]
    }

    //let leagueTable = premierLeagueTable.records;

    //let tableCopy = [...LeagueTable];
    //console.log(tableCopy);

    useEffect(() => {
        getLeagueTable()
    }, []);

    function getLeagueTable() {
        setLeagueTable(premierLeagueTable.records);
    }
    let sortedTable = [...leagueTable];

    /*function sortTable() {
        let sortedTable = leagueTable.sort((a,b) => a - b);
        console.log(`sorted table: ${sortedTable}`);
        //need to figure out how to pick which category to sort by
    */
      
    return (
        <div className="home-container">
            <h1 className="text-uppercase">Home Page</h1>
            <div className="container-sm league-table">
                <LeagueTable leagueTable={leagueTable} />
            </div>
            <div>

            </div>
        </div>

    );
}

export default Home;

/*
    <LeagueTable leagueTable={leagueTable} />
*/