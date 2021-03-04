import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './GratitudeWriter.styles';

class GratitudeWriter extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('GratitudeWriter will mount');
  }

  componentDidMount = () => {
    console.log('GratitudeWriter mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('GratitudeWriter will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('GratitudeWriter will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('GratitudeWriter did update');
  }

  componentWillUnmount = () => {
    console.log('GratitudeWriter will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="GratitudeWriterWrapper">
        Test content
      </div>
    );
  }
}

GratitudeWriter.propTypes = {
  // bla: PropTypes.string,
};

GratitudeWriter.defaultProps = {
  // bla: 'test',
};

export default GratitudeWriter;
