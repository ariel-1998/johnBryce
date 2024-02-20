import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { MeetingModel } from '../../../models/MeetingModel';
import meetingsService from '../../../services/meetingsService';
import './AddMeeting.css'


function AddMeetings() {

  const { teamId } = useParams()
  const { register, handleSubmit } = useForm<MeetingModel>()
  const navigate = useNavigate()

  function setMeeting(meeting: MeetingModel) {
    meeting.teamId = teamId ? +teamId : 0;
    meetingsService.addMeetingToTeam(meeting)
      .then(res => {
        alert('success')
        navigate('/');
      })
      .catch(e => (alert('something went wrong')))
  }

  return (
<>
    <form onSubmit={handleSubmit(setMeeting)}>
      <label>startTime</label>
      <input type="date" placeholder="startTime" {...register("startTime", { required: true })} />
      <label>endTime</label>
      <input type="date" placeholder="endTime" {...register("endTime", { required: true })} />
      <label>description</label>
      <input type="text" placeholder="description" {...register("description", { required: true })} />
      <label>place</label>
      <input type="text" placeholder="place" {...register("place", { required: true })} />
      <div className='btns'>
        <button type='submit' >
          SUBMIT
        </button>
        <button type='reset'>
          reset
        </button>
      </div>
    </form>
    </>
  );
}

export default AddMeetings;