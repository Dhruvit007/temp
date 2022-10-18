import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {matchDetailsList: {}}

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({matchDetailsList: updatedData})
  }

  render() {
    const {matchDetailsList} = this.state
    const {teamBannerUrl, latestMatchDetails} = matchDetailsList
    return (
      <div className="team-matches-bg-color">
        <div className="team-matches-details-container">
          <img src={teamBannerUrl} className="banner-image" alt="iii" />
          <p className="team-matches-details-title">Latest Matches</p>
          <LatestMatch
            key={latestMatchDetails.id}
            latestMatchDetails={latestMatchDetails}
          />
          <ul className="match-cards-name-container">
            <MatchCard />
            <MatchCard />
            <MatchCard />
            <MatchCard />
            <MatchCard />
            <MatchCard />
          </ul>
        </div>
      </div>
    )
  }
}

export default TeamMatches
