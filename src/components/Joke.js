import React, { useEffect, useState } from "react";
import EntryService from "../services/EntryService";

const Joke = () => {
  const [loading, setLoading] = useState(true);
  const [joke, setJoke] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EntryService.getJoke();
        setJoke(response.data.setup + " " + response.data.punchline);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="inline">
      <p className="mb-4">heres a joke to brighten your mood!</p>
      <div>
        <p>{joke}</p>
      </div>
    </div>
  );
};

export default Joke;
