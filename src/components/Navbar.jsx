import React from "react"
import { Link } from "gatsby"


class Navlink extends React.Component {
    render() {
        return (
            <Link to={this.props.link} className={this.props.className}> {this.props.text} </Link>
        )
    }
}


export default class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.links = [
            {
                text: 'Home',
                link: '/',
                className: "nav-link"
            }
        ]
    }
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="ms-5 container-fluid">
                        <ul className="navbar-nav">
                        {this.links.map(link => (
                        <li className="nav-item">
                            <Navlink {...link}/>
                        </li>
                        ))}
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}