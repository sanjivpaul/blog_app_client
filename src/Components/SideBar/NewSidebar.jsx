import { useEffect, useState } from "react";
import "./NewSidebar.css"; // Optional: your styles here

function NewSidebar() {
  const [topics, setTopics] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Mock data - replace with your API calls
    setTopics([
      "React Tips",
      "JavaScript Patterns",
      "Web Development",
      "CSS Tricks",
    ]);
    setUsers([
      { id: 1, name: "Jane Doe", avatar: "https://i.pravatar.cc/40?img=1" },
      { id: 2, name: "John Smith", avatar: "https://i.pravatar.cc/40?img=2" },
    ]);
  }, []);

  return (
    <div className="newSidebar">
      {/* Message Dialog */}
      <div className="sidebarSection messageDialog">
        <h3>Start Writing</h3>
        <p>Share your thoughts with the world. Start your first post now!</p>
        <button className="startWritingBtn">Write Now</button>
      </div>

      {/* Recommendation Title - Topics */}
      <div className="sidebarSection">
        <h3>Recommended Topics</h3>
        <ul className="topicList">
          {topics.map((topic, index) => (
            <li key={index} className="topicItem">
              {topic}
            </li>
          ))}
        </ul>
      </div>

      {/* User Follow Recommendations */}
      <div className="sidebarSection">
        <h3>Who to Follow</h3>
        <ul className="userList">
          {users.map((user) => (
            <li key={user.id} className="userItem">
              <img src={user.avatar} alt={user.name} className="userAvatar" />
              <span className="userName">{user.name}</span>
              <button className="followBtn">Follow</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NewSidebar;
