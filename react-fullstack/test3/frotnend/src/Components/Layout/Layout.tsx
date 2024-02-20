import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddMeetings from "../Content/AddMeeting/AddMeeting";
import Content from "../Content/Content";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
			<Header />
            <Routes>
                <Route path="/" element={<Content/>} />
                <Route path="/addmeeting/:teamId" element={<AddMeetings/>} />
                <Route path="/*" element={<p>not found</p>} />

            </Routes>
            <Footer />
            
        </div>
    );
}

export default Layout;
