import React, {Component} from 'react';
import axios from 'axios';
import './RestCountries.css';
import List from '../../components/List/List';
import Country from '../../components/Country/Country';


class RestCountries extends Component {

    state = {
        countries: [],
        selectedCountry: null,
        borders: []
    };

    getAll = () => {
        axios.get('all').then(response => {
            const requests = response.data.map(country => {
                return {
                    key: country.alpha3Code,
                    name: country.name
                };
            });
            return Promise.all(requests);})
            .then(countries => {this.setState({countries});})
            .catch(error => {console.log(error);});
    };

    getInfo = (code) => {
        axios.get('alpha/' + code).then(response => {
            const borders = response.data.borders.map(element => {
                return axios.get('alpha/' + element).then(response => {
                    return response.data;
                });
            });
            return Promise.all(borders)
                .then(neighbour => this.setState({
                    selectedCountry: response.data,
                    borders: [...neighbour]
                }));
        })
    };

    componentDidMount() {
        this.getAll();
    }

    render() {
        return (
            <div className={'RestCountries'}>
                <List
                    list={this.state.countries}
                    click={this.getInfo}
                />
                <Country
                    info={this.state.selectedCountry}
                    borders={this.state.borders}
                    click={this.getInfo}
                />
            </div>
        );
    }
}

export default RestCountries;