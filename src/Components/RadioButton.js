function RadioButton() {
    return (
        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" name="btnradio" id="league" autocomplete="off" checked></input>
            <label className="btn btn-outline-primary" for="league">League</label>

            <input type="radio" className="btn-check" name="btnradio" id="team" autocomplete="off"></input>
            <label class="btn btn-outline-primary" for="team">Team</label>  
        </div>
    )
}

export default RadioButton;

/*

   <h1 className="text-uppercase">Weekly Results</h1>
            <input 
                type="radio"
                name="team-or-league"
                value="league"
                checked={isRadioSelected("league")}
                onChange={handleRadioClick}
            />
            <input 
                type="radio"
                name="team-or-league"
                value="team"
                checked={isRadioSelected("team")}
                onChange={handleRadioClick}
            />

*/