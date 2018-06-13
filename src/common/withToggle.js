import React, { Component } from 'react';

const withToggle = (initialState = {}) => (BaseComponent) => {
    class WithHandlers extends Component {
        constructor(props) {
            super(props);

            const initialStateKeys = Object.keys(initialState);
            if (initialStateKeys.length) {
                this.stateUpdaters = initialStateKeys.reduce((acc, value) => {
                    acc[`${value}Updater`] = () => (this.setState({ [value]: !this.state[value]}))
                    return acc;
                }, {});
            }

            this.state = {
                ...initialState
            }
        }
        render() {
            return <BaseComponent {...this.props} {...this.state} {...this.stateUpdaters} />
        
        } 

    }

    return WithHandlers;
}

export default withToggle;
