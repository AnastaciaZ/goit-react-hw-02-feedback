import React from 'react';
import s from '../Notification/Notification.module.css';

class Notification extends React.Component { 
    state = {
        showMessage: true,
    };

    toggle = () => {
        this.setState((prevState)=>({
            showMessage: !prevState.showMessage,
        }));
    };

    renderMessage = () => { 
        if (this.showMessage) { }
        return 
    }

    render() { 
        return (
            <div>
            {
                this.state.showMessage && (
                        <p className={ s.notification}>No feedback given</p>
                    )} 
                   </div>
    );
    };
    
};


export default Notification;
