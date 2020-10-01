import React from 'react';

import api from '../../services/api';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem({ teacherData }) {
  
  function handleConnect(user_id) {
    api.post('/connections', {
      user_id
    });
  }

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
        <a 
          href={`https://wa.me/${teacherData.whatsapp}`} 
          target="_blank"
          onClick={() => handleConnect(teacherData.id)} >
          <img src={whatsappIcon} alt="Whatsapp"/>
          Get in touch
        </a>
      </footer>
    </article>
  )
}

export default TeacherItem;
