import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class TeamCard extends Component {
  render() {
    const {eachIplTeam} = this.props
    const {id, name, teamImageUrl} = eachIplTeam
    return (
      <Link to={`/team-matches/${id}`} className="nav-team-list-link">
        <li className="home-ipl-team-card">
          <img src={teamImageUrl} alt={name} className="home-team-card-image" />
          <p className="home-team-card-heading">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
