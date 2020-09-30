import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

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
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" />
          <Textarea name="bio" label="Bio" />
        </fieldset>

        <fieldset>
          <legend>About your classes</legend>

          <Select 
            name="subject" 
            label="Subject" 
            options={[
              { value: 'Art', label: 'Art' },
              { value: 'Biology', label: 'Biology' },
              { value: 'Physics', label: 'Physics' },
              { value: 'Geography', label: 'Geography' },
              { value: 'Enlgish', label: 'Enlgish' },
              { value: 'Spanish', label: 'Spanish' },
              { value: 'Chemistry', label: 'Chemistry' },
              { value: 'Philosophy', label: 'Philosophy' },
            ]}
          />
          <Input name="cost" label="Cost per hour of class" />
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Important warning"/>
            Important! <br/>
            Fill all fields
          </p>
          <button type="button">
            Save
          </button>
        </footer>
      </main>
    </div>
  )
}

export default TeacherForm;
