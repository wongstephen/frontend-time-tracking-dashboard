import "./App.css";
import Profile from "./components/Profile";
import Card from "./components/Card";
import data from "./data.json";
import { useState } from "react";

function App() {
  const [timeFrame, setTimeFrame] = useState("daily");
  function cardData(el, idx) {
    let cardColor = "";
    let imageSrc = "";
    switch (el.title) {
      case "Work":
        cardColor = "bg-light-red-work";
        imageSrc = "work.svg";
        break;
      case "Play":
        cardColor = "bg-soft-blue-play";
        imageSrc = "play.svg";
        break;
      case "Study":
        cardColor = "bg-light-red-study";
        imageSrc = "study.svg";
        break;
      case "Exercise":
        cardColor = "bg-lime-green-exercise";
        imageSrc = "exercise.svg";
        break;
      case "Social":
        cardColor = "bg-violet-social";
        imageSrc = "social.svg";
        break;
      case "Self Care":
        cardColor = "bg-soft-orange-self-care";
        imageSrc = "self-care.svg";
        break;
    }
    const cardData = { ...el, color: cardColor, imageSrc: imageSrc };
    return <Card data={cardData} key={el.title + idx} timeFrame={timeFrame} />;
  }
  return (
    <main className="min-w-full min-h-screen bg-very-dark-blue lg:flex lg:justify-center lg:items-center">
      <div className="p-6 grid gap-8 sm:grid-cols-2 max-w-sm sm:max-w-xl mx-auto lg:max-w-6xl lg:grid-cols-4 min-w-[320px]">
        <Profile setTimeFrame={setTimeFrame} timeFrame={timeFrame} />
        {data.map((el) => {
          return cardData(el);
        })}
      </div>
    </main>
  );
}

export default App;
