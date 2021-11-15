import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import classNames from 'classnames';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import postLogout from '../../../services/http/post-logout';

const StyledWrapper = styled.nav`
  .navbar-item.is-active {
    font-weight: bold;
    background-color: transparent;
  }
`;

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const authentication = useSelector((state) => state.authentication);
  const dispatch = useDispatch();
  const history = useHistory();
  async function onLogout() {
    try {
      dispatch({ type: 'SET_LOADING', value: true });
      dispatch({ type: 'LOGOUT' });
      await postLogout();
      // Redirect to home
      history.push('/');
    } finally {
      dispatch({ type: 'SET_LOADING', value: false });
    }
  }

  return (
    <StyledWrapper className="navbar">
      <div className="container is-fluid">
        <div className="navbar-brand">
          <NavLink to="/" className="navbar-item" data-testid="home-navlink" role="menuitem" tabIndex={0}>
            Trivia Game
          </NavLink>
          <span
            className={classNames('navbar-burger', isMenuOpen && 'is-active')}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            role="menuitem"
            tabIndex={-1}
          >
            <span />
            <span />
            <span />
          </span>
        </div>
        <div className={classNames('navbar-menu', isMenuOpen && 'is-active')}>
          <div className="navbar-start">
            <NavLink
              to="/hall-of-fame"
              className="navbar-item"
              activeClassName="is-active"
              data-testid="halloffame-navlink"
              role="menuitem"
              tabIndex={-1}
            >
              Hall of Fame
            </NavLink>
          </div>
          {authentication.userName && (
            <div className="navbar-end">
              <span className="navbar-item" data-testid="username">
                {authentication.userName}
              </span>
              <div className="buttons">
                <button
                  type="button"
                  className="button is-light"
                  onClick={onLogout}
                  data-testid="logout-button"
                  tabIndex={-1}
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </StyledWrapper>
  );
}

Navbar.defaultProps = {};
Navbar.propTypes = {};
export default Navbar;
