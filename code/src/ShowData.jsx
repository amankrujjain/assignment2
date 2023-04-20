import React ,{useContext , useState} from 'react'
import FormContextProvider from './FormStore/FormContextProvider'
import { parseISO, eachDayOfInterval, isSunday } from "date-fns";

function ShowData() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [numSundays, setNumSundays] = useState(0);
  const {userDetails} = useContext(FormContextProvider)

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleCalculateClick = () => {
    const start = parseISO(startDate);
    const end = parseISO(endDate);
    const days = eachDayOfInterval({ start, end });
    const numSundays = days.filter((day) => isSunday(day)).length;
    setNumSundays(numSundays);
  };

  return (
    <div className='container-fluid'>
        <h1> Calculate the number of Sundays </h1>
    <form className='mt-4 ' >
      <label  className="form-label">
        Start Date:
        <input className="form-control" type="date" value={startDate} onChange={handleStartDateChange} />
      </label>
      <label className="form-label mx-3">
        End Date:
        <input className="form-control" type="date" value={endDate} onChange={handleEndDateChange} />
      </label>
      <button className="btn btn-primary" type="button" onClick={handleCalculateClick}>
        Calculate
      </button>
      {numSundays > 0 && <p>Number of Sundays: {numSundays}</p>}
    </form>
    <h1 className='mt-4'>The data are as follows</h1>
            <p>
                Name : {userDetails.name}
            </p>
            <p>
                Email : {userDetails.email}
            </p>
            <p>
                Phone : {userDetails.phone}
            </p>
            <p>
                Gender : {userDetails.gender}
            </p>
            <p>
                DOB : {userDetails.dob}
            </p>
        </div>
  );
}

export default ShowData;