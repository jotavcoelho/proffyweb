import React, { useState } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';

function TeacherList() {
  const [subject, setSubject] = useState('');
  const [weekday, setWeekday] = useState('');
  const [time, setTime] = useState('');

  function searchTeachers(e) {
    e.preventDefault();
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="These are the available proffys.">
        <form id="search-teachers" onSubmit={searchTeachers} >
          <Select 
            name="subject" 
            label="Subject" 
            value={subject}
            onChange={e => setSubject(e.target.value)}
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
          <Select 
            name="weekday" 
            label="Weekday" 
            value={weekday}
            onChange={e => setWeekday(e.target.value)}
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
            name="time" 
            label="Time" 
            type="time" 
            value={time}
            onChange={e => setTime(e.target.value)}
          />

          <button type="submit">
            Search
          </button>
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  )
}

export default TeacherList;
