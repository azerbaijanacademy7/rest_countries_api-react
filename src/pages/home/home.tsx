import { inject, observer } from "mobx-react";
import React from "react";
import http from "../../core/services/http";
import "./home.scss";
import AppStore from "../../Store";
import CountriesList from "../../components/countriesList/countriesList";
@inject("appStore")
@observer
export default class HomePage extends React.Component<{
  appStore: AppStore;
}> {
  componentDidMount() {
    http
      .get("/user?ID=12345")
      .then(function (response: any) {
        // handle success
        console.log(response);
      })
      .catch(function (error: any) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  render() {
    return (
      <div>
        {/* <div className="input">
          <input type="text" placeholder="Search for a country..."/>
        </div> */}
        <CountriesList />
      </div>
    );
  }
}

// private applicationService:
// ApplicationService = new ApplicationService();
// import { inject, observer } from "mobx-react";
// import React from "react";
// import http from "../../core/services/http";
// import "./home.scss";
// import AppStore from "../../Store";
// import {AxiosResponse} from "axios";
// import { ApplicationDto} from '../../interfaces/dtos/application.dto';
// // @inject("appStore")
// // @observer
// export default class ApplicationService{
//   async getAllAplications():Promise<ApplicationDto[]>{
//     try{
//       const response: AxiosResponse = await http.get(${process.env.REACT_APP_API}/all);
//         return response.data;
//     }catch (error) {
//       throw error;
//     }
//   }
// }
