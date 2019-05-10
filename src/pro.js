import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Appro extends React.Component {
   render() {
      return (
         <div>
            <h6>Array : {this.props.propArray}</h6>
            <h6>Bool: {this.props.propBool ? "True..." : "False..."}</h6>
            <h6>Func: {this.props.propFunc(3)}</h6>
            <h6>Number : {this.props.propNumber}</h6>
            <h6>String : {this.props.propString}</h6>
            <h6>Object : {this.props.propObject.objectName1}</h6>
            <h6>Object : {this.props.propObject.objectName2}</h6>
            <h6>Object : {this.props.propObject.objectName3}</h6>
         </div>
      );
   }
}

Appro.propTypes = {
   propArray: PropTypes.array.isRequired,
   propBool: PropTypes.bool.isRequired,
   propFunc: PropTypes.func,
   propNumber: PropTypes.number,
   propString: PropTypes.string,
   propObject: PropTypes.object
}

Appro.defaultProps = {
   propArray: [1,2,3,4,5],
   propBool: true,
   propFunc: function(e){return e},
   propNumber: 1,
   propString: "String value...",
   
   propObject: {
      objectName1:"objectValue1",
      objectName2: "objectValue2",
      objectName3: "objectValue3"
   }
}
export default Appro;