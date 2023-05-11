import Header from "../../Components/Header/Header";
import Posts from "../../Components/Posts/Posts";
import SideBar from "../../Components/SideBar/SideBar";

function HomePage() {
  return (
    <>
      <div className="homePage">
        <Header />
        <div className="home">
          <Posts />
          <SideBar />
        </div>
      </div>
    </>
  );
}
export default HomePage;
