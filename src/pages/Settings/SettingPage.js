import SideBar from "../../Components/SideBar/SideBar";
export default function SettingPage() {
  return (
    <>
      <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
          </div>
          <form lassName="settingsForm">
            <label>Profile Picture</label>

            <div className="settingsPP">
              <img src="https://source.unsplash.com/1600x900/?cats" alt="" />
              <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-regular fa-user"></i>
              </label>
              <input type="file" id="fileInput" style={{ display: "none" }} />
            </div>
            <div className="settingsAllInputs">
              <label>Username</label>
              <input type="text" placeholder="Sanjiv" />
              <label>Email</label>
              <input type="email" placeholder="sanjiv@gmail.com" />
              <label>Password</label>
              <input type="password" />
              <button className="settingsSubmit">Update</button>
            </div>
          </form>
        </div>
        <SideBar />
      </div>
    </>
  );
}
