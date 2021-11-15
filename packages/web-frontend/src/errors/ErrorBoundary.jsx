import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error);
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    const { hasError, error, errorInfo } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <section className="hero is-danger is-medium is-fullheight">
          <div className="hero-body">
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
              <details style={{ whiteSpace: 'pre-wrap' }}>
                {error && String(error)}
                <br />
                {errorInfo && errorInfo.componentStack}
              </details>
            </div>
          </div>
        </section>
      );
    }
    return children;
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ErrorBoundary;
