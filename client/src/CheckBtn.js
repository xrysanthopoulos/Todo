import React from 'react';


class CheckBtn extends React.Component {
    render() {        
        return (
            <input checked={this.props.pressed} type='checkbox' onChange = {this.props.colorChange}/>
        );
    }
    
}
export default CheckBtn;