import React from "react";
import { NavLink } from "react-router-dom";
import { ApplicationDto } from "../../interfaces/dtos/application.dto";
import "./countryCard.scss";
export const CountryCard = (props: ApplicationDto) => {
  return (
    <NavLink to={`/countries/${props.alpha3Code}`}>
      <div className="country_card">
        <img className="flag" src={props.flag} alt="flag" />
        <div className="country_desc">
          <p className={"country_name"}>{props.name}</p>
          <p className="country_info">
            <span className="api_title">Population: </span>
            {props.population}
          </p>
          <p className="country_info">
            <span className="api_title">Region: </span>
            {props.region}
          </p>
          <p className="country_info">
            <span className="api_title">Capital: </span>
            {props.capital}
          </p>
        </div>
      </div>
    </NavLink>
  );
};

export default CountryCard;
