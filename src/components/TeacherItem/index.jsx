import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem({ teacherData }) {
  return (
    <article className="teacher-item">
      <header>
        <img src={teacherData.avatar} alt={teacherData.name}/>
        <div>
          <strong>{teacherData.name}</strong>
          <span>{teacherData.subject}</span>
        </div>
      </header>

      <p>{teacherData.bio}</p>

      <footer>
        <p>
          Price/hour
          <strong>${teacherData.cost}</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Get in touch
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;
