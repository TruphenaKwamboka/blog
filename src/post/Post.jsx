import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/7879791/pexels-photo-7879791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="" 
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
      <hr/>
      <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repellendus atque illo excepturi modi at, non nulla quos aliquam porro deserunt perspiciatis corporis molestias sint blanditiis. Eum fugit magni sequi.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repellendus atque illo excepturi modi at, non nulla quos aliquam porro deserunt perspiciatis corporis molestias sint blanditiis. Eum fugit magni sequi.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repellendus atque illo excepturi modi at, non nulla quos aliquam porro deserunt perspiciatis corporis molestias sint blanditiis. Eum fugit magni sequi.</p>
    </div>
  );
}
