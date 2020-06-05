import React from 'react';
import { FreelancerListItem } from './FreelancerListItem';
import axios from 'axios';


class FreelancersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            freelancers: [],
        };
    }

    componentDidMount () {
      const url = 'http://localhost:3002/all-freelancers/';
      console.log(url);
      axios.get(
        url
        ).then(response => {
          this.setState({ freelancers: response.data })
        }).catch(error => {
          console.log(error.data);
          console.log("Error", error);
        });
    }

    render() {
        return (
          <div className="FreelancerList">
            <div className="container">
              <h1>Freelancers</h1>
              <div className="row">
                  {this.state.freelancers.map((freelancer, i) => {
                  return (
                    <div className="col-md-6" key={i}>
                      <FreelancerListItem freelancer={ freelancer } />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      }
    }

export default FreelancersList;