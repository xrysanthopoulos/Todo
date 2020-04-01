import React from 'react';
import RemoveBtn from './RemoveBtn';
import CheckBtn from './CheckBtn';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.colorChange = this.colorChange.bind(this);
        this.onRemove = this.onRemove.bind(this);
    }

    colorChange = (index) => {
        console.log(this.props.items)
        let items = this.props.items;
        items = items[index].pressed = !items[index].pressed
        this.setState({items: items });
    }

    onRemove = (id) => {
        console.log(id);
        let items = this.props.items;
        console.log(items);
        items.map((item, index) => {
            if (id === item.id) { return items.splice(index, 1) }
        })
        this.setState({ items: items });
        this.props.re_renderBack();
    }

    render() {
        return (
            <ul>
                {this.props.items.map((item, index) => (
                    <div>
                        {console.log(item.pressed)}
                        <li style={item.pressed ? { color: "green" } : { color: "#000" }} key={item.id}> <CheckBtn pressed={item.pressed} colorChange={() => { this.colorChange(index) }} /> {item.text} <RemoveBtn onRemove={() => { this.onRemove(item.id) }} /> </li>
                    </div>
                ))}
            </ul>
        );
    }
}
export default TodoList;