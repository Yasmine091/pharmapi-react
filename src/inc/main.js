import React, { Component } from 'react';
import './main.css'
import Get from '../pages/get';
import GetA from '../pages/getA';
import Put from '../pages/put';
import Post from '../pages/post';
import Del from '../pages/del';

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
                    <button class="b-get" onClick={() => this.setState({ page: 'getA' })}>Liste des pharmacies</button>
                    <button class="b-get" onClick={() => this.setState({ page: 'get' })}>Pharmacies de garde</button>
                    <button class="b-post" onClick={() => this.setState({ page: 'post' })}>Ajouter pharmacies</button>
                    <button class="b-put" onClick={() => this.setState({ page: 'put' })}>Modifier pharmacies</button>
                    <button class="b-del" onClick={() => this.setState({ page: 'del' })}>Supprimer pharmacies</button>
                </nav>

                <div id="contents">
                    <div class="spacing">

                {this.state.page === null &&

                    <GetA />
                }

                {this.state.page === 'getA' &&

                    <GetA />
                }

                {this.state.page === 'get' &&

                    <Get />

                }

                {this.state.page === 'post' &&

                    <Post />

                }
                {this.state.page === 'put' &&

                    <Put />

                }
                {this.state.page === 'del' &&

                    <Del />

                }
                    </div>
                </div>
            </main>

        )
    }
}


export default Main;