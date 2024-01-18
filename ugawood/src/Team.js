import React from "react";
import "./Team.css";

function Team() {
  return (
    <div className="team">
      <div className="Text">
        <h2>Our Team</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla.
        </p>
      </div>
      <div className="employee">
        <div className="people">
          <div className="empcard">
            <div className="img">
              <img src="./Residential.png" alt="res" width={400} height={250} />
            </div>
            <div className="text">
              <h2>Full name</h2>
              <p>Job title</p>
            </div>
          </div>

          <div className="img">
            <img src="./Residential.png" alt="res" width={400} height={250} />
          </div>
          <div className="text">
            <h2>Full name</h2>
            <p>Job title</p>
          </div>
        </div>

        <div>
          <div className="img">
            <img src="./Residential.png" alt="res" width={400} height={250} />
          </div>
          <div className="text">
            <h2>Residential</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </p>
          </div>
          <div className="img">
            <img src="./Residential.png" alt="res" width={400} height={250} />
          </div>
          <div className="text">
            <h2>Full name</h2>
            <p>Job title</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
