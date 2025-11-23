import './clock.scss'
const Clock = () => {
  return (
    <div className="clock-container-by-shadow">
    <div className="circle" style={{ "--clr": "#ff2972" }}>
      <svg>
        <circle cx="70" cy="70" r="70" id="hh"></circle>
      </svg>
      <div className="hours">
        00<span>Hours</span>
      </div>
    </div>
    </div>
  );
};

export default Clock;
