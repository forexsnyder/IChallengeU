import React from 'react';
import "./Homepage.css"

function Homepage() {
  return (
    <div>
      <div className="big-div">
        <a>Do you adult?</a>
      </div>
      <div rules-div>
        <a>Rules:</a><br></br>
        <a>1. Pick a challenge.  For example "Walk 30 minutes a day."  If you do not see a challege you want to participate in,
            create your own, and invite your friends. </a><br></br>
        <a>2. Compete with the other players by finishing the daily challenge</a><br></br>
        <a>3. Log in and mark the challenge as completed for the day.</a> <br></br>
        <a>4. Be the last-person-standing...players get bumped off as they do not complete the challenge for the day.
            No do-over's no take-backs!</a><br></br>
        <a>5. Get on the wagon and play again.</a>
      </div>
    </div>
  );
}

export default Homepage;