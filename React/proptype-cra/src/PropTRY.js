import PropTypes from 'prop-types'
import React from 'react'


function PropTRY(props){
  return (
    <div>Hy!! {props.name}</div>
  )
}

PropTRY.propTypes = {
  name: PropTypes.string
};

export default PropTRY


