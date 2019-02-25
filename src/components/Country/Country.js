import React, {Component} from 'react';
import './Country.css';

class Country extends Component {

    render() {
        console.log(this.props.borders);
        console.log(this.props.info);
        if (this.props.info) {
            return <div className={"Country"}>
                <h2>{this.props.info.name}</h2>
                <p>Capital: {this.props.info.capital}</p>
                <p>Population: {this.props.info.population}</p>
                <img src={this.props.info.flag} width="200px"/>
                <ul> Border countries:
                {
                    this.props.borders.map((country, i) => {return <li key={i} onClick={() => this.props.click(country.alpha3Code)}>{country.name}</li>})
                }
                </ul>
            </div>
            }
            else
               return <div className={"Country"}>
                   <h2>Empty</h2>
               </div>
    }
}

export default Country;