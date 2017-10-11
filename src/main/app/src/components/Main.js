import React, { Component } from 'react';
import SearchCriteria from "./search/SearchCriteria";

class Main extends Component {
  render() {
    return (
        <div className="App">
          <div className="container">
              <div className="section">
                  <div className="row">
                      <div className="col s12 m12">
                          <SearchCriteria label={"qsfdqsdf"}/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}


export default Main;
