import React, { Component } from 'react'

export default class ErrorBoundary extends Component {

  state = { hasError: false, error: '' };

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true, error })
  }

  render() {
    if (this.state.hasError) {
      return <h1>Has Error, {this.state.error}</h1>
    }
    return this.props.children
  }

}