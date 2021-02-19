import React, { useState } from 'react';
import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider, graphql } from 'react-apollo';
import Card from './Card';
import './Nav.css';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

const GET_JOBS = gql`
  query getJobs($location: String!) {
    getJobs(location: $location) {
      id
      title
      cities {
        name
      }
      countries {
        name
      }
      description
      applyUrl
      company {
        name
        websiteUrl
        logoUrl
      }
      userEmail
      postedAt
    }
  }
`;

const Nav = () => {
  const [input, setInput] = useState("");
  const [jobs, setJobs] = useState(<></>);

  const handleClick = (location) => {
    console.log(location); 
    client.query({
      query: GET_JOBS,
      variables: {
        location: location
      }
    }).then(res => {
      var jobs = res.data.getJobs;
      console.log(jobs);
      setJobs(jobs.map(job => {
        return (
          <Card 
            title={job.title} 
            cities={job.cities != null ? job.cities.map(city => city.name) : []} 
            countries={job.countries != null ? job.countries.map(country => country.name) : []}
            description={job.description}
            applyUrl={job.applyUrl}
            companyName={job.company.name}
            companyWebsiteUrl={job.company.websiteUrl}
            companyLogoUrl={job.company.logoUrl}
            userEmail={job.userEmail}
            postedAt={job.postedAt}
          />
        )
      }));
    });
  }

  return (
    <ApolloProvider client={client}>
      <div className="nav">
        <div className="search-container">
          <input 
            className="search"
            type="text"
            placeholder="Location"
            onInput={e => setInput(e.target.value)}
          />
          <button onClick = {() => handleClick(input)}>
            Search
          </button>
        </div>
        {jobs}
      </div>
    </ApolloProvider>
  )
}

export default Nav;
