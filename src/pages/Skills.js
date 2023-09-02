import { useState, useEffect } from "react";
import { Skill } from "../components/Skill/Skill";

function Skills(props) {
  // create state to hold projects
  const [skills, setSkills] = useState(null);

  //create function to make api call
  const getSkillsData = async () => {

		//make api call and get response
    const response = await fetch("./skills.json");

		// turn response into javascript object
    const data = await response.json();

		// set the projects state to the data
    setSkills(data);

  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {getSkillsData()}, []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return skills.map((skill) => (
      <Skill name={skill.name} logo={skill.logo}/>
    ));
  };

  return skills ? loaded() : <h1>Loading...</h1>;
}

export default Skills;