export default function WritePage() {
  return (
    <>
      <div className="writePage">
        <img
          className="writePageImg"
          src="https://source.unsplash.com/1600x900/?coffe"
          alt="coffe"
        />
        <form className="writePageForm">
          <div className="writePageFormGroup">
            <label htmlFor="fileInput">
              <i class="writePageIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
            <input
              type="text"
              placeholder="Title"
              className="writePageInput"
              autoFocus={true}
            />
          </div>
          <div className="writePageFormGroup">
            <textarea
              placeholder="Tell your story..."
              type="text"
              className="writePageInput writePageText"
            ></textarea>
          </div>
          <button className="writePageSubmit">Publish</button>
        </form>
      </div>
    </>
  );
}
