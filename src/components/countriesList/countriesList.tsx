import React, { Component} from "react";
import AllCountriesService from "../../core/services/rest-country.service";
import { NavLink } from "react-router-dom";
import { ApplicationDto } from "../../interfaces/dtos/application.dto";
import CountryCard from "../countryCard/countryCard";
import "./countriesList.scss";

type Props = {};

type State = {
  countries: Array<ApplicationDto>;
  selectedCountry: ApplicationDto | null,
  selectedIndex: number,
};

export default class CountriesList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.retrieveCountries = this.retrieveCountries.bind(this);
    this.openSelectedCountry = this.openSelectedCountry.bind(this)
    this.state = {
      countries: [],
      selectedCountry: null,
      selectedIndex: -1,
    };
  }
  componentDidMount() {
    this.retrieveCountries();
  }
  retrieveCountries() {
    AllCountriesService.getAll()
      .then((response) => {
        this.setState({
          countries: response.data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  openSelectedCountry(country: ApplicationDto, index: number) {
    this.setState({
      selectedCountry: country,
      selectedIndex: index
    });
  }

  render() {
    const { countries, selectedCountry, selectedIndex} = this.state;
    return (<div className="list_group">
      <div className="container-fluid">
        <div className="row">
          
            {countries &&
              countries.map((country: ApplicationDto, index: number) => (
                <div 
                  className="col-12 col-md-4 col-lg-3" 
                  onClick={() => this.openSelectedCountry(country, index)}
                  key={index}>
                  <CountryCard
                    name={country.name}
                    capital={country.capital}
                    region={country.region}
                    population={country.population}
                    flag={country.flag}
                    alpha3Code={country.alpha3Code}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}
