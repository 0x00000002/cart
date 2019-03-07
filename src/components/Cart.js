import React from 'react'
import PropTypes from 'prop-types'
import errors from '../helpers/errorHandling'
import ErrorBoundary from '../helpers/errorBoundary'

const options = {
  lineNumbers: true,
  mode: 'javascript'
}

const Code = ({ code, handler }) => {
  return (
    <ErrorBoundary reason={errors.codeMirror}>
    </ErrorBoundary>
  )
}

Code.propTypes = {
  code: PropTypes.string,
  handler: PropTypes.func.isRequired
}

export default Code
