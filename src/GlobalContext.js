import React , {createContext} from 'react'
import usePost from './API/PostApi';
import useUserApi from './API/UserApi';
import useCommentApi from './API/CommentApi'
import useAlbumApi from './API/AlbumApi';
import usePhotoApi from './API/PhotoApi';
import useTodoApi from './API/TodoApi'

export const GlobalContext = createContext();

function DataProvider(props) {
    const data ={
        postApi: usePost(),
        userApi: useUserApi(),
        commentApi: useCommentApi(),
        albumApi: useAlbumApi(),
        photoApi: usePhotoApi(),
        todoApi: useTodoApi()
    }
 return (
    <GlobalContext.Provider value={data}>
        {props.children}
    </GlobalContext.Provider>
 )
}

export default DataProvider