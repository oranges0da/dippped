import React from 'react'
import { useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Schedule: React.FC = () => {
  const [startDate, setStartDate] = useState<any>(new Date())

  return (
    <div className=''>
      <h1>Please pick a date for delivery.</h1>
      <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
    </div>
  )
}

export default Schedule
