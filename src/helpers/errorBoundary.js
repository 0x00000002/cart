import React, { Component } from 'react'
import displayError from './errorHandling'

export default class ErrorBoundary extends Component {
  constructor (props) {
    super(props)
    this.state = {
      error: null,
      details: null
    }
  }

  componentDidCatch (error, details) {
    this.setState({error, details})
  }

  render () {
    const reason = this.props && this.props.reason

    if (this.state.error) {
      return (
        <div id='errorBlock'>
          <h2>Oh-no! Something went wrong</h2>
          { reason && <h3>{displayError(reason)} </h3> }
          <section>
            <h4>{this.state.error && this.state.error.toString()} stack</h4>
            <pre><code>
              {this.state.details.componentStack}
            </code></pre>
          </section>
        </div>
      )
    }
    return this.props.children
  }
}
