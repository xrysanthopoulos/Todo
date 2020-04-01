import React from 'react';

let items;

class RemoveBtn extends React.Component {
    render() {
        return (
            <button onClick = {this.props.onRemove}>Remove</button>
        );
    }
}

export default RemoveBtn;