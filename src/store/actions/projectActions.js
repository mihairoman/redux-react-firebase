export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make an async call 
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'New',
            authorLastName: 'Author',
            authorId: Math.floor(Math.random() * Math.floor(10000)),
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_PROJECT', project});
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err});
        });
      
    };
};