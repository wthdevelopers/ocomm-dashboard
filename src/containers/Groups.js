import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import GroupCard from "../components/GroupCard";
import "./Groups.css";
import groupData from "../mockdata/groupData"

export default function Groups(){

  const [listOfGroups, setListOfGroups] = useState([]);
  const [filteredListOfGroups, setFilteredListOfGroups] = useState([]);


  useEffect(() => {
    setListOfGroups(groupData.groups);
    setFilteredListOfGroups(groupData.groups);
  }, []);

  function filterSearch(e) {
    if (e.target.value !== "") {
      let filtered = listOfGroups.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()));
      setFilteredListOfGroups(filtered);
    } else {
      setFilteredListOfGroups(listOfGroups);
    }
  }

  return (
    <div className="Groups">
      <div className="header"><h1>Groups</h1></div>
      <div className="button-container">
        <Button>Create Group</Button>
      </div>
      <div className="search-container">
        <input type="text" className="search" onChange={filterSearch} placeholder="Search..."/>
      </div>
      <div className="result-container">
        {filteredListOfGroups.map((p) => 
          <GroupCard key={p.name} item={p} />
        )}
      </div>
    </div>
  )
}