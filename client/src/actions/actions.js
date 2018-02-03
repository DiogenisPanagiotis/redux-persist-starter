// import axios from 'axios';

import { ADD_PROJECT } from './types'

const actions = {

    increment: () => ({
        type: "INC"
    }),
    addProject: project => ({
        type: ADD_PROJECT,
        payload: project
    })

}

export default actions