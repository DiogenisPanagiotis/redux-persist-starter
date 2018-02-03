import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from '../actions/actions'

class App extends Component {
    render() {
        return (
            <div>
                Hello
            </div>
        )
    }
}

const mapStateToProps = ({ incrementReducer }) => ({
    incrementReducer
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ ...actions }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
