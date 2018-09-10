import React from 'react';

// Functinal Component -- Access props via props.value instead of this.props.value
export default function Button(props) {
  return <button type="submit"> {props.text} </button>;
}
