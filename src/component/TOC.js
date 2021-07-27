import React, { Component } from 'react';
import '../public/css/Main.css'

class TOC extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showMenu: false,
            showMenu2: false,
            contents: [
                { id: 0, date: "2021.7.19" },
                { id: 1, date: "2021.7.20" },
                { id: 2, date: "2021.7.21" },
                { id: 3, date: "2021.7.22" },
                { id: 4, date: "2021.7.23" },
                { id: 5, date: "2021.7.24" }
            ]
        }
    }
    render() {
        var list = []
        var list2 = []
        var i = 0
        var j = 0

        function toggle(_state, showMenu, _props, list, i) {
            if (showMenu === true) {
                while (i < _state.contents.length) {
                    list.push(<li key={_state.contents[i].id}>
                        <a
                            href={"/content/" + _state.contents[i].id}
                            data-id={_state.contents[i].id}
                            onClick={function (e) {
                                e.preventDefault()
                                _props.onClick(e.target.dataset.id)
                            }}>{_state.contents[i].date}</a></li>)
                    i++
                }
            } else {
                list = []
            }
        }

        toggle(this.state, this.state.showMenu, this.props, list, i)
        toggle(this.state, this.state.showMenu2, this.props, list2, j)


        return (
            <nav>
                <a href="/nav/" className="active" onClick={function (e) {
                    e.preventDefault()
                    if (this.state.showMenu === false) {
                        this.setState({
                            showMenu: true
                        })
                    } else {
                        this.setState({
                            showMenu: false
                        })
                    }
                }.bind(this)}>2021 Hackathon</a>
                <ul id="list">{list}</ul>

                <a href="/nav/" className="active" onClick={function (e) {
                    e.preventDefault()
                    if (this.state.showMenu2 === false) {
                        this.setState({
                            showMenu2: true
                        })
                    } else {
                        this.setState({
                            showMenu2: false
                        })
                    }
                }.bind(this)}>2021 Busan</a>
                <ul id="list2">{list2}</ul>
            </nav>
        )
    }
}

export default TOC