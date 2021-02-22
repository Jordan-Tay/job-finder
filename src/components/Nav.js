import React, { useState, useEffect } from 'react';
import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider, graphql } from 'react-apollo';
import Card from './Card';
import { observer } from 'mobx-react';
import './Nav.css';
import UseAnimations from 'react-useanimations';
import loading from 'react-useanimations/lib/loading';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

const GET_JOBS = gql`
  query getJobs($location: String!) {
    getJobs(location: $location) {
      id
      title
      commitment {
        title
      }
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
      isFeatured
      userEmail
      postedAt
    }
  }
`;

const Nav = props => {
  const [input, setInput] = useState("");
  const [jobs, setJobs] = useState(<></>);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (event, location) => {
    if (location == "") {
      event.preventDefault();
      return;
    }
    setIsLoading(true);
    client.query({
      query: GET_JOBS,
      variables: {
        location: location
      }
    }).then(res => {
      setIsLoading(false);
      var jobs = res.data.getJobs;
      setJobs(jobs.map(job => {
        return (
          <Card
            key={job.id}
            id={job.id}
            title={job.title}
            commitment={job.commitment.title}
            cities={job.cities == null ? [] : job.cities.map(city => city.name)}
            countries={job.cities == null ? [] : job.countries.map(country => country.name)}
            description={job.description == null ? "" : job.description}
            applyUrl={job.applyUrl == null ? "" : job.applyUrl}
            companyName={job.company.name == null ? "" : job.company.name}
            companyWebsiteUrl={job.company.websiteUrl == null ? "" : job.company.websiteUrl}
            companyLogoUrl={job.company.logoUrl == null ? "" : job.company.logoUrl}
            isFeatured={job.isFeatured == null ? false : job.isFeatured}
            userEmail={job.userEmail == null ? "" : job.userEmail}
            postedAt={job.postedAt}
            displayDetails={props.displayDetails}
            bookmarked={false}
          />
        )
      }));
    });
    event.preventDefault();
  }

  const showBookmarks = () => {
    console.log(props.bookmarks.bookmarks.size);
    setJobs(<></>);
    setJobs(Array.from(props.bookmarks.bookmarks.values()).map(bookmark => {
      var { cities, countries, ...other } = bookmark;
      return <Card
        {...other}
        cities={Array.from(cities.values())}
        countries={Array.from(countries.values())}
        displayDetails={props.displayDetails}
        bookmarked={true}
      />
    }));
  }

  return (
    <ApolloProvider client={client}>
      <div className="nav">
        <div>
          <form
            className="search-container"
            onSubmit={e => handleClick(e, input)}
          >
            <input
              className="search"
              type="text"
              placeholder="Location"
              onInput={e => setInput(e.target.value)}
            />
            {isLoading && <UseAnimations animation={loading} size={40} className="spinner" />}
            <input type="submit" value="Search" className="submit-button" />
          </form>
        </div>
        <div className="bookmarks-container">
          <span onClick={e => handleClick(e, input)}>Search Results</span>
          <span onClick={() => showBookmarks()}>Bookmarks</span>
        </div>
        {jobs}
      </div>
    </ApolloProvider>
  )
}

export default observer(Nav);
