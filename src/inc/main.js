import React, { Component } from 'react';
import './main.css'
import Get from '../pages/get';
import GetA from '../pages/getA';
import { render, screen } from '@testing-library/react';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: null
        };
    }

    render() {
        return (
            <main className="P-main">
                <nav className="P-nav">
                    <h1>Coucou! Voici ma 1ere page sur react!</h1>
                    <button onClick={() => this.setState({ page: 'getA' })}>Liste</button>
                    <button onClick={() => this.setState({ page: 'get' })}>Garde</button>
                    <button onClick={() => this.setState({ page: 'put' })}>Ajouter</button>
                    <button onClick={() => this.setState({ page: 'edit' })}>Modifier</button>
                    <button onClick={() => this.setState({ page: 'del' })}>Supprimer</button>
                </nav>

                {this.state.page === 'getA' &&

                    <GetA />
                }

                {this.state.page === 'get' &&

                    <Get />

                }

            {/*     {this.state.page === 'put' &&

                    <Put />

                }
                {this.state.page === 'edit' &&

                    <Edit />

                }

                {this.state.page === 'del' &&

                    <Del />

                } */}

            </main>

        )
    }
}


export default Main;