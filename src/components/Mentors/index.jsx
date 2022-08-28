import React from 'react';

export const Mentors = ({ imageURL, role, title }) => {
  return (
    <div>
      <img src={imageURL} alt="mentorAvatar" width={50} className="mentorAvatar" />
      <div>
        <h3>{role}</h3>
        <h4>{title}</h4>
      </div>
    </div>
  );
};
