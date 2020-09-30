import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

function PageHeader(props) {
  return (
    <header className="page-header">
        <div className="top-bar-container">
          <Link to="/" >
            <img src={backIcon} alt="Go back"/>
          </Link>
          <img src={logoImg} alt="Proffy"/>
        </div>

        <div className="header-content">
          <strong>{props.title}</strong>
          {props.description && <p>{props.description}</p>}

          {props.children}
        </div>
      </header>
  )
}

export default PageHeader;
