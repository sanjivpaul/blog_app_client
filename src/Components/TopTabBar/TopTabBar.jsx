// import { useState } from "react";
// import "./TopTabBar.css";

// const tabs = [
//   "For You",
//   "Following",
//   "Featured",
//   "Self Improvement",
//   "Tech",
//   "Current Affairs",
//   "Business",
//   "Health",
//   "Science",
//   "Education",
//   "Entertainment",
//   "Travel",
//   "Finance",
//   "Sports",
//   "Culture",
// ];

// function TopTabBar() {
//   const [selectedTab, setSelectedTab] = useState("For You");

//   return (
//     <>
//       <div className="tabBarContainer">
//         <div className="tabBar">
//           {tabs.map((tab) => (
//             <div
//               key={tab}
//               className={`tabItem ${selectedTab === tab ? "activeTab" : ""}`}
//               onClick={() => setSelectedTab(tab)}
//             >
//               {tab}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Render content based on selected tab */}
//       <div className="tabContent">
//         <h2>{selectedTab}</h2>
//         <p>This is content for the "{selectedTab}" tab.</p>
//       </div>
//     </>
//   );
// }

// export default TopTabBar;

import { useEffect, useRef, useState } from "react";
import "./TopTabBar.css";

const tabs = [
  "For You",
  "Following",
  "Featured",
  "Self Improvement",
  "Tech",
  "Current Affairs",
  "Business",
  "Health",
  "Science",
  "Education",
  "Entertainment",
  "Travel",
  "Finance",
  "Sports",
  "Culture",
];

function TopTabBar() {
  const [selectedTab, setSelectedTab] = useState("For You");
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const tabRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = tabRef.current;
      setShowLeftArrow(scrollLeft > 5);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 5);
    };

    const ref = tabRef.current;
    if (ref) {
      handleScroll();
      ref.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (ref) ref.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scroll = (direction) => {
    if (tabRef.current) {
      const scrollAmount = 150;
      tabRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="tabBarWrapper">
        {showLeftArrow && (
          <button className="scrollArrow left" onClick={() => scroll("left")}>
            ◀
          </button>
        )}

        <div className="tabBarContainer" ref={tabRef}>
          <div className="tabBar">
            {tabs.map((tab) => (
              <div
                key={tab}
                className={`tabItem ${selectedTab === tab ? "activeTab" : ""}`}
                onClick={() => setSelectedTab(tab)}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>

        {showRightArrow && (
          <button className="scrollArrow right" onClick={() => scroll("right")}>
            ▶
          </button>
        )}
      </div>

      {/* <div className="tabContent">
        <h2>{selectedTab}</h2>
        <p>This is content for the "{selectedTab}" tab.</p>
      </div> */}
    </>
  );
}

export default TopTabBar;
