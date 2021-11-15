import React from 'react';
import { Link } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle.hook';

/**
 * @description Show a 500 page
 * @constructor
 */
function Unknown() {
  useDocumentTitle({ title: '500' });
  return (
    <div className="container">
      <h1 className="title">Sorry, unknown error</h1>
      <h3 className="subtitle">
        <ul>
          <li>
            <Link to="/" className="fg-slate">
              Go to home page
            </Link>
          </li>
        </ul>
      </h3>
    </div>
  );
}

export default Unknown;
