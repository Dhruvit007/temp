import './index.css'

const MatchCard = () => {
  const d = 1 + 1
  return (
    <div className="match-small-card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/rcb-logo-img.png"
        alt="ooo"
        className="opponent-logo-image"
      />
      <h1>SunRiser Hyderabad</h1>
      <p>Sunrisers Hyderabad won by 69 runs</p>
      <p>Lost</p>
    </div>
  )
}

export default MatchCard
