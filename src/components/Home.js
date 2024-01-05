import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { increment, decrement } from '../actions'
import { useOktaAuth } from '@okta/okta-react'
import DisLike from '../icons/DisLike'
import Like from '../icons/Like'
import { incrementAsync, decrementAsync } from '../actions'

const Home = ({ value, incrementAsync, decrementAsync }) => {
  // const { authState, authService } = useOktaAuth();
  // const login = async () => {
  //   await authService.login('/');
  // };

  // const logout = async () => {
  //   await authService.logout('/');
  // };

  return (
    <>
      <h2>Home</h2>

      <div>
        <p>Count: {value}</p>
        <button onClick={() => incrementAsync()}>
          <Like />
        </button>
        <button onClick={() => decrementAsync()}>
          <DisLike />
        </button>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    value: state.example.value,
  }
}
Home.propTypes = {
  value: PropTypes.number.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrementAsync: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, { incrementAsync, decrementAsync })(
  Home,
)
