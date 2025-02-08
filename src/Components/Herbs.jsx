import { useState, useEffect } from "react";
import Herb from "./Herb";

import "../Styles/herbcardlayout.scss";

const API = import.meta.env.VITE_BASE_URL;

const Herbs = () => {
  const [herbs, setHerbs] = useState([]);

  useEffect(() => {
    fetch(`${API}/herbs`)
      .then((res) => res.json())
      .then((res) => {
        setHerbs(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <main className="container__content">
        <div className="herbs">
          {herbs.length > 0 ? (
            herbs.map((herb) => <Herb key={herb.id} herb={herb} />)
          ) : (
            <p>No herbs found in the database</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Herbs;
