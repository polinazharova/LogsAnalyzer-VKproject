import RunningStringPattern from "../../assets/running_string_pattern.svg";
import "./RunningString.styles.scss";

interface RunningStringProps {
  children: React.ReactNode;
}

const RunningString: React.FC<RunningStringProps> = ({ children }) => {
  return (
    <div className="main__running-string">
      <div className="main__running-string-content">
        <img
          className="main__running-string-pattern"
          src={RunningStringPattern}
          alt="Running string background image"
        />
        <span className="main__running-string-text">{children}</span>
        <img
          className="main__running-string-pattern"
          src={RunningStringPattern}
          alt="Running string background image"
        />
      </div>
      <div className="main__running-string-content">
        <img
          className="main__running-string-pattern"
          src={RunningStringPattern}
          alt="Running string background image"
        />
        <span className="main__running-string-text">{children}</span>
        <img
          className="main__running-string-pattern"
          src={RunningStringPattern}
          alt="Running string background image"
        />
      </div>
    </div>
  );
};

export default RunningString;
