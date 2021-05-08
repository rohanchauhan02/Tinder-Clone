import { React, useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import database from "./firebase";
function TinderCards() {
  const [people, setPeople] = useState([]);
  //     {
  //       name: "Steve jobs",
  //       url:
  //         "https://www.washingtonian.com/wp-content/uploads/2015/09/stevejobs1.jpg",
  //     },
  //     {
  //       name: "Mark Zukarberg",
  //       url:
  //         "https://www.biography.com/.image/t_share/MTQyMDA0NDYzNDQyMzM4ODc4/gettyimages-512304736jpg.jpg",
  //     },
  //     {
  //       name: "Elon Musk",
  //       url:
  //         "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg",
  //     },
  //     {
  //       name: "Jeff Bezos",
  //       url:
  //         "https://media.vanityfair.com/photos/5f08c6fc345d8ab7a6f2b0e3/2:3/w_757,h_1136,c_limit/jeff-bezos.jpg",
  //     },
  //   ]);
    
  //piece of code which runs on a condition
  useEffect(() => {
    //this is where code runs
    const unsubscribe = database
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );
      return () => {
        //this is the cleanup...
      unsubscribe();
    };

    //this will run once when components loads never again
  }, []);

  //Bad
  // const people[];
  // people.push('sonny', 'quazi')

  //Good(push to an array in react)
  // setPeople([...people,'sonny','quazi'])

  return (
    <div>
      <div className="tindercards_cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
