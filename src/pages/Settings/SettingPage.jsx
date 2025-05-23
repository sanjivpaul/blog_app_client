import { useState } from "react";
// import { Context } from "../../context/Context";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import { useLocation } from "react-router-dom";
import "./TopBar.css";
export default function SettingPage() {
  // const { user, dispatch } = useContext(Context);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("home");
  const [editProfile, setEditProfile] = useState(false);

  // const [postUsername, setPostUsername] = useState("");
  const [success, setSuccess] = useState(false);
  const publicFolder = "http://localhost:5001/images/";

  // const allPost = `http://localhost:5001/api/posts/usernameupdate/${path}`;

  // const postUser = axios.put("http://localhost:5001/api/users/" + user._id);
  // console.log("userAllPost",postUser)
  // const allPost = `http://localhost:3000/?user=${username}`
  // const getAllPostbyId = async ()=>{
  //   // e.preventDefault();
  //   const resAllPost = await axios.get(allPost);
  //   console.log(resAllPost)
  // }
  // getAllPostbyId()

  // const location = useLocation();
  // const path = location.pathname.split("/")[2];
  console.log(user._id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // at the begining dispacth
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };

    // post username update
    // const updatedPostUsername = () => {
    //   const postId = path
    //   console.log(postId)
    // }

    // useEffect(() => {
    //   updatedPostUsername();
    // }, [path]);

    // handle image
    if (file) {
      const data = new FormData();
      // creating file name
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("http://localhost:5001/api/upload", data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    }
    // update other details
    try {
      const res = await axios.put(
        "http://localhost:5001/api/users/" + user._id,
        updatedUser
      );
      setSuccess(true);
      // at success update
      // console.log(res.data);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data.updatedUser });

      // update username code
    } catch (error) {
      // at failure update
      dispatch({ type: "UPDATE_FAILURE" });
    }
    // console.log(updatedUser);
  };

  return (
    <>
      <div className="settings">
        <div className="settingsWrapper">
          <div className="userDetailsBanner">
            <h2 style={{ fontSize: 35, fontFamily: "sans-serif" }}>
              {user.username}
            </h2>
          </div>

          {editProfile ? (
            <div className="tab-bar">
              <div
                className={`tab ${activeTab === "account" ? "active" : ""}`}
                onClick={() => setActiveTab("account")}
              >
                Account
              </div>
              {/* <div
            className={`tab ${activeTab === "profile" ? "active" : ""}`}
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </div> */}
            </div>
          ) : (
            <div className="tab-bar">
              <div
                className={`tab ${activeTab === "home" ? "active" : ""}`}
                onClick={() => setActiveTab("home")}
              >
                Home
              </div>
              <div
                className={`tab ${activeTab === "profile" ? "active" : ""}`}
                onClick={() => setActiveTab("profile")}
              >
                Profile
              </div>
            </div>
          )}

          {activeTab === "home" && (
            <div
              style={{ width: "70%", height: 100, background: "teal" }}
            ></div>
          )}
          {activeTab === "profile" && (
            <div
              style={{
                width: "70%",
                height: 100,
                background: "#CCC",
                margin: 30,

                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",

                padding: 50,
              }}
            >
              <h3>Tell the worl more about you</h3>
              pHere’s where you can share more about yourself: your history,
              work experience, accomplishments, interests, dreams, and more. You
              can even add images and use rich text to personalize your bio.
            </div>
          )}

          {activeTab === "account" && (
            <>
              <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
              </div>
              <form className="settingsForm" onSubmit={handleSubmit}>
                <label>Profile Picture</label>

                <div className="settingsPP">
                  <img
                    src={
                      file
                        ? URL.createObjectURL(file)
                        : publicFolder + user.profilePic
                    }
                    alt=""
                  />

                  <label htmlFor="fileInput">
                    <i className="settingsPPIcon fa-regular fa-user"></i>
                  </label>
                  <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
                <div className="settingsAllInputs">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder={user.username}
                    onChange={(e) => setUsername(e.target.value)}
                    autoComplete="username"
                  />
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder={user.email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                  />
                  <label>Password</label>
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                  />
                  <button className="settingsSubmit" type="submit">
                    Update
                  </button>
                </div>
                {success && (
                  <span className="success-msg">
                    Profile updated successfully
                  </span>
                )}
              </form>
            </>
          )}
        </div>

        <div className="customSidebar">
          <img
            src={publicFolder + user.profilePic}
            alt="Profile"
            className="sidebarProfilePic"
          />
          <h3 className="sidebarUsername">{user.username}</h3>
          <button
            onClick={() => {
              setEditProfile(true);
              setActiveTab("account");
            }}
            className="editProfileBtn"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </>
  );
}
