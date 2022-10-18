import './index.css'

const MatchCard = props => {
  const {eachMatch} = props
  const updatedData = {
    logo: eachMatch.competing_team_logo,
    teamName: eachMatch.competing_team,
    result: eachMatch.result,
    status: eachMatch.match_status,
  }

  return (
    <div className="match-small-card-container">
      <img src={updatedData.logo} alt="ooo" className="opponent-logo-image" />
      <p>{updatedData.teamName}</p>
      <p>{updatedData.result}</p>
      <p>{updatedData.status}</p>
    </div>
  )
}

export default MatchCard
