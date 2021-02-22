import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
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
        ...props
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
        <Tooltip
          title={<span style={{fontSize: 13, fontFamily: "garamond"}}>Bookmark</span>}
        >
          <IconButton
            onClick={() => handleBookmark()}
            className="icon-button"
          >
            {bookmarked
              ? <BookmarkIcon fontSize="large" />
              : <BookmarkBorderIcon fontSize="large" />
            }
          </IconButton>
        </Tooltip>
      </div>
      <div>
        <h2><a href={props.companyWebsiteUrl} target="_blank" rel="noopener noreferrer">{props.companyName}</a> - <span style={{color:"gray", fontStyle:"italic"}}>{props.commitment}</span></h2>
      </div>
      <div className="subheader-container">
        <h3>-{props.cities.join('/')}{countries}</h3>
        <a href={props.applyUrl} target="_blank" rel="noopener noreferrer"><button >Apply</button></a>
      </div>
      <ReactMarkdown source={props.description} />
    </div>
  );
}

export default Details;
