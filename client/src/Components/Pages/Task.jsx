import React, { useEffect, useState } from "react";

//IMPORT COMPONENTS
import Home from "./Home";

function Task() {
  const [task, setTask] = useState([]);

  //FETCH ALL TASK
  useEffect(() => {
    const fetchDate = async () => {
      try {
        const response = await fetch(`http://localhost:7000/api/task`);
        const data = await response.json();
        if (response.status === 200) {
          setTask(data.results);
        } else {
          alert(data.message);
        }
      } catch (err) {
        console.log("Error:", err.message);
      }
    };
    fetchDate();
  }, []);
  return (
    <>
      <Home />
      <div>
        {task.map((e) => {
          return (
            <div key={e.id} className="border border-sky-500">
              <p>Task creator id: {e.userId}</p>
              <h3>Task creator name:</h3>
              <h2> Task description: {e.description}</h2>
              <p>Task details: {e.details}</p>
              <div>
                <button className="border-2 p-1 m-2">Update</button>
                <button className="border-2 p-1 m-2">Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Task;
