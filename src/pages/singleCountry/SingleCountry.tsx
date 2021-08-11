import React, { Component } from "react";
import AllCountriesService from "../../core/services/rest-country.service";
import { ApplicationDto } from "../../interfaces/dtos/application.dto";
import { SingleCountryDto } from "../../interfaces/dtos/singlecountry.dto";
import { RouteComponentProps } from "react-router-dom";
import "./SingleCountry.scss";

interface RouterProps {
  alpha3Code: string;
}
type Props = RouteComponentProps<RouterProps>;

type State = {
  selectedCountry: SingleCountryDto;
};

export default class SingleCountry extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.getSelectedCountry = this.getSelectedCountry.bind(this);

    this.state = {
      selectedCountry: {
        name: '',
        nativeName: '',
        population: 0,
        region: '',
        subregion: '',
        capital: '',
        currencies: {},
        topLevelDomain: [],
        languages: [],
        borders: [],
      },
    };
  }
  componentDidMount() {
    this.getSelectedCountry(this.props.match.params.alpha3Code);
  }
  getSelectedCountry(alpha3Code: string) {
    AllCountriesService.getSingle(alpha3Code)
      .then((response) => {
        this.setState({
          selectedCountry: response.data,
        });
        console.log(this.state.selectedCountry);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { selectedCountry } = this.state;
    return (
      <div className="single_country">
        <p>{selectedCountry.name}</p>
        <p><span>Native Name: </span>{selectedCountry.nativeName}</p>
        <p><span>Population: </span>{selectedCountry.population}</p>
        <p><span>Region: </span>{selectedCountry.region}</p>
        <p><span>Sub Region: </span>{selectedCountry.subregion}</p>
        <p><span>Capital: </span>{selectedCountry.capital}</p>
        <p><span>Top Level Domain: </span>{selectedCountry.topLevelDomain}</p>
        {/* <p><span>Currencies: </span>{selectedCountry.currencies}</p> */}
        {/* <p><span>Languages: </span>{selectedCountry.languages}</p>
        <p><span>Border Countries: </span>{selectedCountry.borders}</p> */}

      </div>
    );
  }
}
