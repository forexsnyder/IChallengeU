import React from 'react';
import "./Landingpage.css"

import Leaderboards from '../../components/leaderboards'
import Competitions from '../../components/competitions'
import Comments from '../../components/comments'
import CurrentComp from '../CurrentComp/CurrentComp'


function Landingpage() {
  return (
    <div>
      <div>
      <Comments />
      </div>
      <div>
      <Leaderboards />
      </div>
      <div>
      <CurrentComp />
      </div>
      <button className="new-comp-button">Create a New Competition</button>
      <div>
      <Competitions />
      </div>

    </div>
  );
}

export default Landingpage;