import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { MdBookmarkBorder } from 'react-icons/md'
import UseAnimations from 'react-useanimations';
import bookmark from 'react-useanimations/lib/bookmark';
import './Details.css';

const Details = props => {
  const [bookmarked, setBookmarked] = useState(props.bookmarked);

  useEffect(() => {
    if (props.bookmarks.has(props.id)) {
      setBookmarked(true);
    } else {
      setBookmarked(false);
    }
  }, [props.id])

  const handleBookmark = () => {
    if (props.bookmarks.has(props.id)) {
      props.bookmarks.delete(props.id);
      setBookmarked(false);
    } else {
      props.bookmarks.put({
        id: props.id,
        title: props.title,
        cities: props.cities,
        countries: props.countries,
        description: props.description == null ? "" : props.description,
        applyUrl: props.applyUrl == null ? "" : props.applyUrl,
        companyName: props.companyName == null ? "" : props.companyName,
        companyWebsiteUrl: props.companyWebsiteUrl == null ? "" : props.companyWebsiteUrl,
        companyLogoUrl: props.companyLogoUrl == null ? "" : props.companyLogoUrl,
        userEmail: props.userEmail == null ? "" : props.userEmail,
        postedAt: props.postedAt, 
      });
      setBookmarked(true);
    }
  }

  var countries = "";
  if (props.countries.length != 0) {
    countries = ", " + props.countries.join('/');
  }

  return (
    <div className="details">
      <div className="header-container">
        <h1>{props.title}</h1>
        <MdBookmarkBorder onClick={() => handleBookmark()} style={bookmarked ? { color: "red" } : {color: "black"}} className="bookmark-icon" />
        {/* <UseAnimations size={50} backgroundColor="blue" animation={bookmark} onClick={() => handleBookmark()} reverse={bookmarked} className="bookmark-icon" /> */}
      </div>
      <h2><a href={props.companyWebsiteUrl} target="_blank" rel="noopener noreferrer">{props.companyName}</a></h2>
      <div className="subheader-container">
        <h3>-{props.cities.join('/')}{countries}</h3>
        <a href={props.applyUrl} target="_blank" rel="noopener noreferrer"><button >Apply</button></a>
      </div>
      <ReactMarkdown source={props.description} />
    </div>
  );
}

export default Details;
