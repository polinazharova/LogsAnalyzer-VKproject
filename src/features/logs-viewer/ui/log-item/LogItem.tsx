import "./LogItem.styles.scss";
import fileIcon from "../../../../assets/file-icon-black.png";

interface LogItemProps {
  fileName: string;
  date: string;
  message: string;
}

const LogItem: React.FC<LogItemProps> = ({ fileName, date, message }) => {
  const parsedDate: Date = new Date(date);

  if (!isNaN(parsedDate.getTime())) {
    date = new Intl.DateTimeFormat("ru-RU", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }).format(parsedDate);
  }

  return (
    <div className="main__log-viewer-item">
      <img
        className="main__log-viewer-item-file-icon"
        src={fileIcon}
        alt="file icon from flaticon.com"
      />
      <span className="main__log-viewer-item-filename">{fileName}</span>
      <span className="main__log-viewer-item-log-date">{date}</span>
      <span className="main__log-viewer-item-log-message">{message}</span>
    </div>
  );
};

export default LogItem;
