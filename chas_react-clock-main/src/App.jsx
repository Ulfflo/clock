import Timer from "./Timer";
import Clock from "./Clock";
import "./App.css";

export default function App() {


  return (
    <>
      <div className="clock">
        <Clock city="New York" timeZone="America/New_York" />
        <Clock city="London" timeZone="Europe/London" />
        <Clock city="Stockholm" timeZone="Europe/Stockholm" />
        <Clock city="Tokyo" timeZone="Asia/Tokyo" />
      </div>
      <div className="timer">
        <div className="timer1">
          <Timer initialCounter={600} />
        </div>
        <div className="timer2">
          <Timer initialCounter={100} />
        </div>
        <div className="timer3">
          <Timer initialCounter={20} />
        </div>
      </div>
    </>
  );
}


