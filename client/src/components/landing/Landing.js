import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Header from 'components/landing/Header/Header'
import Benefits from 'components/landing/Benefits/Benefits'
import Features from 'components/landing/Features/Features';
import Goals from 'components/landing/Goals/Goals';
import Expenses from 'components/landing/Expenses/Expenses';
import SpendingLimit from 'components/landing/SpendingLimit/SpendingLimit';
import CallToAction from 'components/landing/CallToAction/CallToAction';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) return <Redirect to="/dashboard" />

  return (
    <Fragment>
      <Header />
      <Benefits />
      <Features />
      <Goals />
      <Expenses />
      <SpendingLimit />
      <CallToAction />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

export default connect(mapStateToProps)(Landing);
