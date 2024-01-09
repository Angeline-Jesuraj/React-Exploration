import React from 'react';
// import { connect } from 'react-redux';
// import { increment, decrement } from '../actions';
// // import { useOktaAuth } from '@okta/okta-react';
// import DisLike from '../icons/DisLike';
// import Like from '../icons/Like';
// import PropTypes from 'prop-types';
// const Home = ({ value, increment, decrement }) => {
  const Home=()=>{
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
    
        {/* <div>
          <p>Count: {value}</p>
          <button onClick={increment}><Like/></button>
          <button onClick={decrement}><DisLike/></button>
        </div> */}

    </>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     value: state.example.value,
//   };
// };


// Home.propTypes = {
//   value: PropTypes.number.isRequired,
//   increment: PropTypes.func.isRequired,
//   decrement: PropTypes.func.isRequired,
// };
// export default connect(mapStateToProps, { increment, decrement })(Home);

export default (Home)
