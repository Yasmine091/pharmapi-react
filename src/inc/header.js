import React, { Component } from 'react';
import './header.css'


class Head extends Component {

    render() {
        return (
            <header className="P-header">
                <div class="spacing">
                <h1>PharmAPI</h1>
                <hr></hr>
                <h3 id="page-title"></h3>
                </div>
            </header>
        )
    }
}


export default Head;