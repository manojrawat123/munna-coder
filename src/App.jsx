import { Route, Routes, useNavigate } from "react-router-dom";
import MyLogin from "./pages/auth/LoginPage/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage/RegisterPage";
import MyNavbar from "./component/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import ProtectedRoute from "./component/ProtectedRoutes/ProtectedRoute";
import { useEffect } from "react";
import UploadTopicForm from "./pages/ContentUploadForm/UploadTopicForm/UploadTopicForm";
import uploadDigitalNotes from "./pages/ContentUploadForm/UploadDigitalNotes/UploadDigitalNotes";
import ChatBot from "./pages/HomePage/HomeSection/ChatBot";
import DisplayContent from "./pages/DisplayContent/DisplayContent";
import DisplayTopicDetails from "./pages/DisplayTopicDetails/DisplayTopicDetails";
import 'react-quill/dist/quill.snow.css';
import QuestionUploadForm from "./pages/ContentUploadForm/QuestionUploadForm/QuestionUploadForm";
function App() {
  return (
    <>
      <div className="grid grid-cols-4">
        <div className="col-span-4">
          <MyNavbar />
        </div>
        <div className="mt-[4rem] overflow-y-auto col-span-4 " style={{
          height: "calc(100vh - 4rem)"
        }}>
          <div className="">
            <ChatBot />
          </div>
          <Routes>
            <Route path="" Component={ProtectedRoute}>
              <Route path="" Component={HomePage} />
            </Route>
            <Route path="" Component={ProtectedRoute}>
              <Route path="/notes_upload" Component={UploadTopicForm} />
            </Route>
            <Route path="" Component={ProtectedRoute}>
              <Route path="/digital_notes" Component={uploadDigitalNotes} />
            </Route>
            <Route path="" Component={ProtectedRoute}>
              <Route path="/upload_question" Component={QuestionUploadForm} />
            </Route>
            <Route path="" Component={ProtectedRoute}>
              <Route path="/search/:s_categories/:search_id" Component={DisplayContent} />
            </Route>

            {/* Content Route Management */}
            <Route path="" Component={ProtectedRoute}>
              <Route path='/topic-search/:topic_name/:categoery_id/:search_id' Component={DisplayTopicDetails} />
            </Route>
            {/* Content Route Management End */}
            <Route path="/login" Component={MyLogin} />
            <Route path="/register" Component={RegisterPage} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
