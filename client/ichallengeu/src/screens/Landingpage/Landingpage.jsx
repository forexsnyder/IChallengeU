import React from 'react';
import "./Landingpage.css"

import Leaderboards from '../../components/leaderboards'
import Competitions from '../../components/competitions'
import Comments from '../../components/comments'
import CurrentComp from '../CurrentComp/CurrentComp'


function Landingpage() {
  return (
    <div>
      <Leaderboards />
      <Competitions />
      <Comments />
      <CurrentComp />
      <button className="new-comp-button">Create a New Competition</button>

    </div>
  );
}

export default Landingpage;