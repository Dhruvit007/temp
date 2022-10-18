import './index.css'

const LatestMatch = () => {
  const b = 1 + 1
  return (
    <div className="latest-match-container">
      <div className="latest-matches-section-a">
        <div>
          <h1>Delhi Capitals</h1>
          <p>2020-10-20</p>
          <p>At dubai international cricket stadium dubai</p>
          <p>kings xi punjab won by 5 wickets</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/srh-logo-img.png"
          alt="ccc"
          className="vsteamLogo"
        />
      </div>
      <div>
        <h3>first Innings</h3>
        <p>Delhi capitals</p>
        <h3>Second Innings</h3>
        <p>Kings XI Punjab</p>
        <h3>Man Of The Match</h3>
        <p> S Dhawan</p>
        <h3>Umpires</h3>
        <p>cshamshera, Rk patel</p>
      </div>
    </div>
  )
}

export default LatestMatch
