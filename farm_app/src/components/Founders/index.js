import React, { Component } from 'react';
import './styles.css'

export default class Founders extends Component {
    state = {
        founders: ['Pedro Henrique Faria Teixeira',
                   'João Daniel de Aquino Rufino', 
                   'Matheus Silveira'],
        urlImages: ['./images/joao.jpg']
    }


    render() {
        const {id,founders,urlImages} = this.state;
        console.log(founders,urlImages,id);
        return (
        <div className="founders-list">
            {founders.map((founders) => (
                <div className="founder-layout"> 
                    <img></img>
                   <article>{founders}</article>
                </div>

            ))}
        </div>
        );
    }
}
