import { useContext, useEffect, useState } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';

function Comments(props) {
  const { eventId } = props;

  const notificationCtx = useContext();

  const [comments, setComments] = useState();
  const [showComments, setShowComments] = useState(false);
  const [isFetchingComments, setIsFetchingComments] = useState(false);
  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }
  useEffect(() => {
    if (showComments) {
      setIsFetchingComments(true);
      fetch('/api/comments/' + eventId)
        .then((res) => res.json())
        .then((data) => {
          setComments(data.comments);
          setIsFetchingComments(false);
        });
    }
  }, [showComments]);
  function addCommentHandler(commentData) {
    notificationCtx.showNotification({
      title: 'Sending comment...',
      message: 'Storing comment',
      status: 'pending',
    });
    fetch('/api/comments/' + eventId, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        res.json().then((data) => {
          throw new Error(data.message || 'Something went wrong');
        });
      })
      .then((data) => {
        notificationCtx.showNotification({
          title: 'Success',
          message: 'Saved',
          status: 'success',
        });
      })
      .catch((err) => {
        notificationCtx.showNotification({
          title: 'Error',
          message: 'Error',
          status: 'error',
        });
      });
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}

      {showComments && !isFetchingComments && <CommentList items={comments} />}
      {showComments && isFetchingComments && <p>Loading</p>}
    </section>
  );
}

export default Comments;
