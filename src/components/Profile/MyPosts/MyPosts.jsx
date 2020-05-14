import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { reduxForm, Field } from "redux-form";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};


const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={"Enter your message"} name={"newPostText"} component={"textarea"} />
        </div>
        <div>
          <button>Add Post</button>
        </div>
    </form>
  )
};

const AddNewPostFormRedux = reduxForm({
  form: "ProfileAddPostForm",
})(AddNewPostForm);


export default MyPosts;
