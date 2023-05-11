import SideBar from "../../Components/SideBar/SideBar";
import SinglePost from "../../Components/SinglePost/SinglePost";

export default function SinglePage() {
  return (
    <>
      <div className="singlePage">
        <SinglePost />
        <SideBar />
      </div>
    </>
  );
}
