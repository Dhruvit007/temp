import {Component} from 'react'
import './index.css'

class TeamCard extends Component {
  render() {
    console.log(this.props)
    const {eachIplTeam} = this.props
    const {name, teamImageUrl} = eachIplTeam
    return (
      <li className="home-ipl-team-card">
        <img src={teamImageUrl} alt={name} className="home-team-card-image" />
        <p className="home-team-card-heading">{name}</p>
      </li>
    )
  }
}

export default TeamCard
