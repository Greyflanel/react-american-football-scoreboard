import React from "react";


const HomeTeam = (props) => {

  return (
    <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{props.score}</div>
          </div>
          
  );
};

export default HomeTeam;
