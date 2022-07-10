import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dialogs from "../dialogs/Dialogs";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import Profile from "../profile/Profile";
import News from "../news/News";
import Music from "../music/Music";
import Settings from "../settings/Settings";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <Routes>
                    <Route path="/dialogs" element={<Dialogs />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
