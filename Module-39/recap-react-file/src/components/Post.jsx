import "../index.css";
const Post = ({ post }) => {
  const { title, userId, id, body } = post;
  return (
    <div className="postStyle">
      <h3>Title : {title} </h3>
      <p>
        <small>User Id : {userId}</small>
      </p>
      <p>
        <small>Id : {id} </small>
      </p>
      <p>{body}</p>
    </div>
  );
};

export default Post;
