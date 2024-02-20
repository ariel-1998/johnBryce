import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MeetingModel } from "../../../models/MeetingModel";
import meetingsService from "../../../services/meetingsService";
import "./Meetings.css";

interface MeetingsProps {
    selected: number;
}

function Meetings({ selected }: MeetingsProps): JSX.Element {

    const [meetings, setMeetings] = useState<MeetingModel[]>();

    useEffect(() => {
        meetingsService.getMeetingsByTeamId(selected)
            .then(results => setMeetings(results))
            .catch(e => alert(e))
    }, [selected]);

    return (
        <div className="Meetings">
            <table className="meetingTable">
                <thead>
                    <tr>
                        <td>start time</td>
                        <td>ending time</td>
                        <td>location</td>
                        <td>subject</td>
                    </tr>
                    {meetings?.map(meet => (
                        <tr key={meet.meetingsId}>
                            <td>{meet.startTime.toString()}</td>
                            <td>{meet.endTime.toString().split('T').join(' ').split('Z')}</td>
                            <td>{meet.place}</td>
                            <td>{meet.description}</td>
                        </tr>
                    ))}
                    <tr>
                        <td><Link to={`/addmeeting/${selected}`}><button>hello</button></Link></td>
                    </tr>
                </thead>
            </table>
        </div>
    );
}

export default Meetings;
