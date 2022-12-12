// Пока несделанная панель с фильтрами для страницы Персоналии

import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";


const TypeBar = observer( () => {
    const {staff_store} = useContext(Context)
    return (
        <div style={{display:"block", margin: "0 1%", justifyContent: "left"}}>
            {staff_store.posts.map(post =>
                <div
                    style={{cursor: "pointer", borderColor: "lightgray"}}
                    key={post}
                    active={post === staff_store.selectedPost}
                    onClick={() => staff_store.setSelectedPost(post)}
                >
                    {post}
                </div>
            )}
            {staff_store.posts.map(post =>
                <div
                    style={{cursor: "pointer", borderColor: "lightgray"}}
                    key={post}
                    active={post === staff_store.selectedPost}
                    onClick={() => staff_store.setSelectedPost(post)}
                >
                    {post}
                </div>
            )}
            {staff_store.posts.map(post =>
                <div
                    style={{cursor: "pointer", borderColor: "lightgray"}}
                    key={post}
                    active={post === staff_store.selectedPost}
                    onClick={() => staff_store.setSelectedPost(post)}
                >
                    {post}
                </div>
            )}
        </div>
    );
})

export default TypeBar;
