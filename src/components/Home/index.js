import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamData: []}

  componentDidMount() {
    this.getIplTeams()
  }

  getIplTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedTeam = teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamData: updatedTeam})
  }

  render() {
    const {teamData} = this.state
    return (
      <div className="home-container">
        <div className="home-contain-container">
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
            <h1 className="home-page-heading">IPL Dashboard</h1>
          </div>
          <ul className="home-ipl-team-card-container">
            {teamData.map(eachIplTeam => (
              <TeamCard key={eachIplTeam.id} eachIplTeam={eachIplTeam} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
