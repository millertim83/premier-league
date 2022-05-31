//import WeeklyResultsTable from "../WeeklyResultsTable.js";
import RadioButton from "../RadioButton.js";

function WeeklyResults() {
    const week37Results = 
    {
        "matches": [
            {
                "when": "Sunday, May 15 2022 14:00",
                "referee": "Tony Harrington",
                "weather": {
                    "description": "Moderate rain",
                    "temperature": 13,
                    "precip": 1.0,
                    "umidity": 93,
                    "pressure": 1016,
                    "visibility": 7,
                    "windSpeed": 22,
                    "windDir": "ENE"
                },
                "team1": {
                    "teamName": "Wolverhampton Wanderers",
                    "teamScore": 1,
                    "firstHalfScore": 0
                },
                "team2": {
                    "teamName": "Norwich",
                    "teamScore": 1,
                    "firstHalfScore": 1
                },
                "time": "FT",
                "venue": "Molineux Stadium",
                "attendance": "31.219"
            },
            {
                "when": "Sunday, May 15 2022 14:00",
                "referee": "Anthony Taylor",
                "weather": {
                    "description": "Sunny",
                    "temperature": 18,
                    "precip": 0.0,
                    "umidity": 69,
                    "pressure": 1015,
                    "visibility": 10,
                    "windSpeed": 15,
                    "windDir": "E"
                },
                "team1": {
                    "teamName": "West Ham",
                    "teamScore": 2,
                    "firstHalfScore": 2
                },
                "team2": {
                    "teamName": "Manchester City",
                    "teamScore": 2,
                    "firstHalfScore": 0
                },
                "time": "FT",
                "venue": "London Stadium",
                "attendance": "59.972"
            },
            {
                "when": "Sunday, May 15 2022 14:00",
                "referee": "Jarred Gillett",
                "weather": {
                    "description": "Patchy rain possible",
                    "temperature": 19,
                    "precip": 0.0,
                    "umidity": 72,
                    "pressure": 1015,
                    "visibility": 10,
                    "windSpeed": 19,
                    "windDir": "E"
                },
                "team1": {
                    "teamName": "Watford",
                    "teamScore": 1,
                    "firstHalfScore": 1
                },
                "team2": {
                    "teamName": "Leicester",
                    "teamScore": 5,
                    "firstHalfScore": 2
                },
                "time": "FT",
                "venue": "Vicarage Road",
                "attendance": "20.257"
            },
            {
                "when": "Sunday, May 15 2022 12:00",
                "referee": "Kevin Friend",
                "weather": {
                    "description": "Patchy rain possible",
                    "temperature": 18,
                    "precip": 0.0,
                    "umidity": 67,
                    "pressure": 1016,
                    "visibility": 10,
                    "windSpeed": 21,
                    "windDir": "E"
                },
                "team1": {
                    "teamName": "Tottenham",
                    "teamScore": 1,
                    "firstHalfScore": 1
                },
                "team2": {
                    "teamName": "Burnley",
                    "teamScore": 0,
                    "firstHalfScore": 0
                },
                "time": "FT",
                "venue": "Tottenham Hotspur Stadium"
            },
            {
                "when": "Tuesday, May 17 2022 19:45",
                "referee": "Martin Atkinson",
                "team1": {
                    "teamName": "Southampton",
                    "teamScore": 1,
                    "firstHalfScore": 1
                },
                "team2": {
                    "teamName": "Liverpool",
                    "teamScore": 2,
                    "firstHalfScore": 1
                },
                "time": "FT",
                "venue": "St Mary's Stadium"
            },
            {
                "when": "Monday, May 16 2022 20:00",
                "referee": "Darren England",
                "team1": {
                    "teamName": "Newcastle United",
                    "teamScore": 2,
                    "firstHalfScore": 0
                },
                "team2": {
                    "teamName": "Arsenal",
                    "teamScore": 0,
                    "firstHalfScore": 0
                },
                "time": "FT"
            },
            {
                "when": "Thursday, Apr 28 2022 19:45",
                "referee": "Mike Dean",
                "weather": {
                    "description": "Overcast",
                    "temperature": 8,
                    "precip": 0.0,
                    "umidity": 65,
                    "pressure": 1034,
                    "visibility": 10,
                    "windSpeed": 5,
                    "windDir": "E"
                },
                "team1": {
                    "teamName": "Manchester United",
                    "teamScore": 1,
                    "firstHalfScore": 0
                },
                "team2": {
                    "teamName": "Chelsea",
                    "teamScore": 1,
                    "firstHalfScore": 0
                },
                "time": "FT",
                "venue": "Old Trafford",
                "attendance": "73.564"
            },
            {
                "when": "Sunday, May 15 2022 14:00",
                "referee": "Mike Dean",
                "weather": {
                    "description": "Moderate rain",
                    "temperature": 12,
                    "precip": 1.1,
                    "umidity": 88,
                    "pressure": 1019,
                    "visibility": 8,
                    "windSpeed": 14,
                    "windDir": "E"
                },
                "team1": {
                    "teamName": "Leeds",
                    "teamScore": 1,
                    "firstHalfScore": 0
                },
                "team2": {
                    "teamName": "Brighton",
                    "teamScore": 1,
                    "firstHalfScore": 1
                },
                "time": "FT",
                "venue": "Elland Road",
                "attendance": "36.638"
            },
            {
                "when": "Sunday, May 15 2022 16:30",
                "referee": "Michael Oliver",
                "weather": {
                    "description": "Light rain",
                    "temperature": 12,
                    "precip": 0.6,
                    "umidity": 92,
                    "pressure": 1016,
                    "visibility": 9,
                    "windSpeed": 17,
                    "windDir": "E"
                },
                "team1": {
                    "teamName": "Everton",
                    "teamScore": 2,
                    "firstHalfScore": 2,
                    "redCards": 2
                },
                "team2": {
                    "teamName": "Brentford",
                    "teamScore": 3,
                    "firstHalfScore": 1
                },
                "time": "FT",
                "venue": "Goodison Park",
                "attendance": "38.819"
            },
            {
                "when": "Sunday, May 15 2022 14:00",
                "referee": "Chris Kavanagh",
                "weather": {
                    "description": "Light rain",
                    "temperature": 13,
                    "precip": 0.7,
                    "umidity": 93,
                    "pressure": 1016,
                    "visibility": 8,
                    "windSpeed": 18,
                    "windDir": "ENE"
                },
                "team1": {
                    "teamName": "Aston Villa",
                    "teamScore": 1,
                    "firstHalfScore": 0
                },
                "team2": {
                    "teamName": "Crystal Palace",
                    "teamScore": 1,
                    "firstHalfScore": 0
                },
                "time": "FT",
                "venue": "Villa Park",
                "attendance": "41.136"
            }
        ]
    }       

    return (
        <div>
            <div className="container-sm results-table">
                <RadioButton />
            </div>
         
        </div>
    )
}

export default WeeklyResults;

//<WeeklyResultsTable week37Results={week37Results} />

