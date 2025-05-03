import { useState } from "react";
import axios from "axios";
// import { Context } from "../../context/Context";
import { useSelector } from "react-redux";

export default function WritePage() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [categories, setCategories] = useState([]);
  const [file, setFile] = useState(null);
  // const { user } = useContext(Context);
  const user = useSelector((state) => state.auth.user);
  console.log(user._id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      userId: user._id,
      title,
      desc,
      categories,
    };
    // console.log(newPost)
    // handle image
    if (file) {
      const data = new FormData();
      // creating file name
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("http://localhost:5000/api/upload", data);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    try {
      const res = await axios.post("http://localhost:5000/api/posts", newPost);
      // console.log(res.data.savedPost._id);
      window.location.replace("/post/" + res.data.savedPost._id);
    } catch (error) {
      console.log(error);
    }
    // console.log(file);
  };
  return (
    <>
      <div className="writePage">
        {file && (
          <img
            className="writePageImg"
            // "https://source.unsplash.com/1600x900/?coffe"
            // its basically crete a url of this file
            src={URL.createObjectURL(file)}
            alt="coffe"
          />
        )}
        <form className="writePageForm" onSubmit={handleSubmit}>
          <div className="writePageFormGroup">
            <label htmlFor="fileInput">
              <i className="writePageIcon fa-solid fa-plus"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              // we are uploading single file so we use index [0]
              onChange={(e) => setFile(e.target.files[0])}
            />
            <input
              type="text"
              placeholder="Title"
              className="writePageInput"
              autoFocus={true}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <input
            type="text"
            placeholder="Categories separated with commas!"
            className="writePageCategories"
            autoFocus={true}
            onChange={(e) => setCategories(e.target.value.split(","))}
          />
          <div className="writePageFormGroup">
            <textarea
              placeholder="Tell your story..."
              type="text"
              className="writePageInput writePageText"
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>

          <button className="writePageSubmit" type="submit">
            Publish
          </button>
        </form>
      </div>
    </>
  );
}
