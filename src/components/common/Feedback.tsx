import React, { useState } from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const LikeDislikeIcons = () => {
  const [feedback, setFeedback] = useState(false);
  const [likeHovered, setLikeHovered] = useState(false);
  const [dislikeHovered, setDislikeHovered] = useState(false);

  const iconStyle: React.CSSProperties = {
    marginRight: '10px', // Adjust spacing
    cursor: 'pointer', // Show pointer cursor on hover
  };

  const hoveredIconStyle: React.CSSProperties = {
    ...iconStyle,
    color: 'green', // Color when hovered
  };

  const disLikeHoveredIconStyle: React.CSSProperties = {
    ...iconStyle,
    color: 'red', // Color when hovered
  };

  const question = {
    fontSize: "16px",
    paddingRight: "20px"
  };

  const feedbackWrapper  = {
    display: "flex",
    justifyContent: "center",
    padding: "20px"
  }

  const feedbackContainer = {
    display: "flex",
    alignItems: "center"
  }

  return (
    <div style={feedbackWrapper}>
    {feedback ? (
      <div> Thank you for your feedback! </div>
    ) : (
    <div style={feedbackContainer}>
      <p style={question}>Is this conversation helpful so far?</p>
      <FaThumbsUp
        style={likeHovered ? hoveredIconStyle : iconStyle}
        onMouseEnter={() => setLikeHovered(true)}
        onMouseLeave={() => setLikeHovered(false)}
        onClick={() => setFeedback(true)}
      />
      <FaThumbsDown
        style={dislikeHovered ? disLikeHoveredIconStyle : iconStyle}
        onMouseEnter={() => setDislikeHovered(true)}
        onMouseLeave={() => setDislikeHovered(false)}
        onClick={() => setFeedback(true)}
      />
    </div>
    )}
    </div>
  );
};

export default LikeDislikeIcons;