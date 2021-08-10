import React, { Component, ChangeEvent } from "react";
import AllCountriesService from "../../core/services/rest-country.service";
import { Link } from "react-router-dom";
import { ApplicationDto } from "../../interfaces/dtos/application.dto";
import CountryCard from "../countryCard/countryCard";
import "./countriesList.scss";

type Props = {};

type State = {
  countries: Array<ApplicationDto>;
};

export default class CountriesList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.retrieveCountries = this.retrieveCountries.bind(this);
    this.state = {
      countries: [],
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
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { countries } = this.state;
    console.log(countries);
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="list_group">
            {countries &&
              countries.map((country: ApplicationDto) => (
                <div className="col-12 col-md-4 col-lg-3">
                  <CountryCard
                    name={country.name}
                    capital={country.capital}
                    region={country.region}
                    population={country.population}
                    flag={country.flag}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}
