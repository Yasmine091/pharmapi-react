import React, { Component } from 'react';
import './footer.css'


class PharmAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <footer className="P-footer">
                <div class="spacing">
                <h4>© Copyright PharmAPI ~ Tous les droits réservés</h4>
                </div>
            </footer>
        )
    }
}


export default PharmAPI;