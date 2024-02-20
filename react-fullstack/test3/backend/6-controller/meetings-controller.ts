import express from "express";
import { MeetingModel } from "../4-models/MeetingModel";
import { NullErrorModel } from "../4-models/NullErrorModel";
import { addNewMeeting, getMeetingsbyTeamId } from "../5-logic/meetings-logic";

export const meetingsRouter = express.Router();

meetingsRouter.post('/meetings', async (req, res, next) => {
    const meetingReq: MeetingModel = req.body
    const { startTime, endTime, place } = meetingReq
    if(!startTime || !endTime ||  !place) {
        next(new NullErrorModel());
        return;
    }
    const meeting = await addNewMeeting(meetingReq);
    res.status(200).json(meeting);
})

meetingsRouter.get('/meetings/:id', async(req, res) => {
    const { id } = req.params
    const meetings = await getMeetingsbyTeamId(+id);
    res.status(200).json(meetings);
});
