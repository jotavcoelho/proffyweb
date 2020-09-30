import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import './styles.css';

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="It's amazing that you want to teach." 
        description="The first step is to fill this subscription form"
      />

      <main>
        <fieldset>
          <legend>Your data</legend>

          <Input name="name" label="Full name" />
          <Input name="avatar" label="avatar" />
          <Input name="whatsapp" label="Whatsapp" />
        </fieldset>

        <fieldset>
          <legend>About your classes</legend>

          <Input name="subject" label="Subject" />
          <Input name="cost" label="Cost per hour of class" />
        </fieldset>
      </main>
    </div>
  )
}

export default TeacherForm;
