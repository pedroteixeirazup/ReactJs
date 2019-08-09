import React, { Component } from 'react'
import Toolbar from '../Toolbar';
import Item from '../Item';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './style.css';

export default class ItemList extends Component {

    state = {
        items: {}
    };

    addItemHandler = itemName => {
        this.setState({
            items: {
                ...this.state.items,
                [+new Date()]: itemName
            }
        });
    };

    onDeleteHandler = itemKey => {
        let newStateItems = { ...this.state.items };

        delete newStateItems[itemKey];

        this.setState({
            items: {
                ...newStateItems
            }
        });
    };

    render() {

        const itemsList = Object.keys(this.state.items).map(itemKey => {
            return (
                <CSSTransition key={itemKey} timeout={500} classNames="move">
                    <Item 
                        key = {itemKey}
                        name= {this.state.items[itemKey]}
                        onDelete={() => {
                            this.onDeleteHandler(itemKey);
                        }}
                    />
                </CSSTransition>
            )
        });

        return (
           <div className="items-section">
                <Toolbar onAddHandler={this.addItemHandler} />
                <TransitionGroup className="items-section__list">
                      {itemsList}
                </TransitionGroup>
           </div>
        );
    }
}
