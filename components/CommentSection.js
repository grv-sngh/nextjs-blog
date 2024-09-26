import { useState } from "react";
import styles from "../styles/CommentSection.module.css";
const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div className={styles.commentSection}>
      <h2>Comments</h2>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Leave a comment..."
          required
          className={styles.commentInput}
        />
        <button type="submit" className={styles.commentButton}>
          Submit
        </button>
      </form>
      <div className={styles.commentList}>
        {comments.map((c, index) => (
          <div key={index} className={styles.comment}>
            {c}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
