export const createProject = (project) => {
    return (dispatch, getState) => {
        //make an async call 
        dispatch({type: 'CREATE_PROJECT', project})
    };
};