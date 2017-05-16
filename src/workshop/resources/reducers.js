import { 
    REQUEST_RESOURCES, 
    RECEIVE_RESOURCES,
} from './actions'


const defaultState = {
    fetching: true, 
    resources: [],
}


const RESOURCES = [
    {title: 'Resource title',
    description: "Resource link about the topic of this workshop"},
    {title: 'Resource title',
    description: "Resource link about the topic of this workshop"},
    {title: 'Resource title',
    description: "Resource link about the topic of this workshop"},
    {title: 'Resource title',
    description: "Resource link about the topic of this workshop"},
    {title: 'Resource title',
    description: "Resource link about the topic of this workshop"},
    {title: 'Resource title',
    description: "Resource link about the topic of this workshop"},
    {title: 'Resource title',
    description: "Resource link about the topic of this workshop"},
    {title: 'Resource title',
    description: "Resource link about the topic of this workshop"},
    {title: 'Resource title',
    description: "Resource link about the topic of this workshop"},
    {title: 'Resource title',
    description: "Resource link about the topic of this workshop"},
    {title: 'Resource title',
    description: "Resource link about the topic of this workshop"},
    {title: 'Resource title',
    description: "Resource link about the topic of this workshop"},
    {title: 'Resource title',
    description: "Resource link about the topic of this workshop"},
    {title: 'Resource title',
    description: "Resource link about the topic of this workshop"},
    {title: 'Resource title',
    description: "Resource link about the topic of this workshop"},
    {title: 'Resource title',
    description: "Resource link about the topic of this workshop"},
    {title: 'Resource title',
    description: "Resource link about the topic of this workshop"},
    {title: 'Resource title',
    description: "Resource link about the topic of this workshop"},
    {title: 'Resource title',
    description: "Resource link about the topic of this workshop"},
    {title: 'Resource title',
    description: "Resource link about the topic of this workshop"},
    {title: 'Resource title',
    description: "Resource link about the topic of this workshop"},
    {title: 'Resource title',
    description: "Resource link about the topic of this workshop"}
]


export default (state = defaultState, action) => {

  switch (action.type) {

    case REQUEST_RESOURCES:
      return {
        ...state,
        fetching: true,
      }

    case RECEIVE_RESOURCES:
      return {
        ...state,
        fetching: false,
        resources: RESOURCES
      }

    default:
      return state

  }

}
