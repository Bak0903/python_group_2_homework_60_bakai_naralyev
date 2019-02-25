import React, {Component} from 'react';
import './List.css';

class List extends Component {
    render() {
        return (
            <div className={"List"}>
                {Object.values(this.props.list).map((country) => {return (
                    <span
                        key={country.key}
                        onClick={() => this.props.click(country.key)}
                        className={"country"}
                    >{country.name}</span>)
                })}
            </div>
        );
    }
}

export default List;