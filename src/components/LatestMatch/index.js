import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const updatedDetails = {
    competingTeam: latestMatchDetails.competing_team,
    logo: latestMatchDetails.competing_team_logo,
    date: latestMatchDetails.date,
    firstInnings: latestMatchDetails.first_innings,
    mom: latestMatchDetails.man_of_the_match,
    result: latestMatchDetails.result,
    secondInnings: latestMatchDetails.second_innings,
    umpires: latestMatchDetails.umpires,
    venue: latestMatchDetails.venue,
  }
  return (
    <div className="latest-match-container">
      <div className="latest-matches-section-a">
        <div>
          <p>{updatedDetails.competingTeam}</p>
          <p>{updatedDetails.date}</p>
          <p>{updatedDetails.venue}</p>
          <p>{updatedDetails.result}</p>
        </div>
        <img
          src={updatedDetails.logo}
          alt={`competing team ${updatedDetails.competingTeam}`}
          className="vsteamLogo"
        />
      </div>
      <div>
        <h3>first Innings</h3>
        <p>{updatedDetails.firstInnings}</p>
        <h3>Second Innings</h3>
        <p>{updatedDetails.secondInnings}</p>
        <h3>Man Of The Match</h3>
        <p>{updatedDetails.mom}</p>
        <h3>Umpires</h3>
        <p>{updatedDetails.umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
