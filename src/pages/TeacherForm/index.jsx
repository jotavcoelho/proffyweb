import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import api from '../../services/api';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function TeacherForm() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');
  
  const [scheduleItems, setScheduleItems] = useState([
    { weekday: 0, from: "", to: "" },
  ]);

  function addNewScheduleItem(weekday, from, to) {
    setScheduleItems([...scheduleItems, {
      weekday,
      from,
      to
    }]);
  }

  function setScheduleItemValue(position, field, value) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if(index === position) 
        return { ...scheduleItem, [field]: value };

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }

  function handleCreateClass(e) {
    e.preventDefault();

    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }).then(() => {
      alert('Successfully signed up!');

      history.push('/');
    }).catch(() => {
      alert('Error when trying to sign up!');
    });
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="It's amazing that you want to teach." 
        description="The first step is to fill this subscription form"
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Your data</legend>

            <Input 
              name="name" 
              label="Full name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input 
              name="avatar" 
              label="Avatar" 
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
            <Input 
              name="whatsapp" 
              label="Whatsapp" 
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
            />
            <Textarea 
              name="bio" 
              label="Bio" 
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>About your classes</legend>

            <Select 
              name="subject" 
              label="Subject" 
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
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
            <Input 
              name="cost" 
              label="Cost per hour of class" 
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Available Schedules
              <button type="button" onClick={() => addNewScheduleItem(0, "", "")}>
                + New Schedule
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={index} className="schedule-item">
                  <Select 
                    name="weekday" 
                    label="Weekday" 
                    value={scheduleItem.weekday}
                    onChange={e => setScheduleItemValue(index, 'weekday', e.target.value)}
                    options={[
                      { value: '0', label: 'Sunday' },
                      { value: '1', label: 'Monday' },
                      { value: '2', label: 'Tuesday' },
                      { value: '3', label: 'Wednesday' },
                      { value: '4', label: 'Thursday' },
                      { value: '5', label: 'Friday' },
                      { value: '6', label: 'Saturday' },
                    ]}
                  />
                  <Input 
                    name="from" 
                    label="From" 
                    type="time" 
                    value={scheduleItem.from}
                    onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                  />
                  <Input 
                    name="to" 
                    label="To" 
                    type="time" 
                    value={scheduleItem.to}
                    onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                  />
                </div>
              );
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Important warning"/>
              Important! <br/>
              Fill all fields
            </p>
            <button type="submit">
              Save
            </button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default TeacherForm;
