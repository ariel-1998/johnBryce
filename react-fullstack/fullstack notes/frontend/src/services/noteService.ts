import axios from "axios";
import { NoteModel } from "../models/NoteModel";
import apiconfig from "../utils/config";

class NoteService {
    async getAllNotes(): Promise<NoteModel[]> {
            const { data } = await axios.get(apiconfig.API_URL + '/notes')
            return data;
    }

    async addNote(note: NoteModel):Promise<NoteModel> {
        const { data } = await axios.post(apiconfig.API_URL + '/notes', note);
        return data;
    }


    async deleteNote(id: number) {
        await axios.delete(apiconfig.API_URL + `/notes/${id}`);
    }


    async updateNote(note: NoteModel) {
            const { data } = await axios.put(apiconfig.API_URL + `/notes/update/${note.id}`, note);
            return data;
    }
}

const noteService = new NoteService();
export default noteService;
