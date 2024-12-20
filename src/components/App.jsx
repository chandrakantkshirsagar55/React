import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        imgsrc={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />

      <Card
        name={contacts[1].name}
        imgsrc={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />

      <Card
        name={contacts[1].name}
        imgsrc={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
    </div>
  );
}

export default App;
