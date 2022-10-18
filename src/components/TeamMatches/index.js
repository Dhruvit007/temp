import {Component} from 'react'
import './index.css'

class TeamMatches extends Component {
  render() {
    const a = 1 + 1
    return (
      <div className="team-matches-bg-color">
        <div className="team-matches-details-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/kkr-team-img.png"
            className="banner-image"
            alt="iii"
          />
          <p className="team-matches-details-title">Latest Matches</p>
        </div>
      </div>
    )
  }
}

export default TeamMatches
