import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Loader from '../../components/Loader';
import ErrorNotification from '../../components/ErrorNotification';

function DefaultLayout({ children, footer }) {
  const { loading } = useSelector(({ application }) => application);
  return (
    <>
      {loading && <Loader />}
      <section className="hero is-fullheight is-bold is-light">
        <div className="hero-head">
          <Navbar />
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <ErrorNotification />
            {children}
          </div>
        </div>
        <div className="hero-foot">
          <div className="container has-text-centered">{footer}</div>
        </div>
      </section>
    </>
  );
}

DefaultLayout.defaultProps = {
  children: null,
  footer: null,
};
DefaultLayout.propTypes = {
  children: PropTypes.node,
  footer: PropTypes.node,
};
export default DefaultLayout;
