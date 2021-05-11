import { useState, useEffect } from "react";

const professions = ["data scientist", "music producer","full stack developer" ];

const UpdateProfessions = () => {
  const [profession, setProfession] = useState("full stack developer");
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((idx) => {
        setProfession(professions[idx%professions.length]);
        return idx + 1;
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);
  return <u><strong>{profession}</strong></u>;
};

export default UpdateProfessions;
