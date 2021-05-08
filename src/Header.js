import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import ArroBackIosIcon from "@material-ui/icons/ArrowBackIos";
import IconButton from "@material-ui/core/IconButton";
function Header({ backButton }) {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArroBackIosIcon className="header_icon" fontsize="large" />
        </IconButton>
      ) : (
        <IconButton >
          <PersonIcon className="header_icon" fontsize="large" />
        </IconButton>
      )}
      <Link to="/">
        <IconButton>
          <img
            className="tinderlogo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtzKwDXZ4lGpls4ocmtvJO-QQ7bCYFRSIzr59eGLZfmY-9T0nr1sM0rCe6s440A-661I4&usqp=CAU"
            alt="tinder logo"
          />
        </IconButton>
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header_icon" fontsize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
