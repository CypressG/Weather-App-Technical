import "./style.scss";

const DailyCard = (dailyCardData) => {
  const { dailyCardData: data } = dailyCardData;

  const date = new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(
    new Date(data.date)
  );
  return (
    <div className="daily-card">
      <div className="daily-card-top">
        <h1>{date}</h1>
      </div>
      <div className="daily-card-bottom">
        <h1 className="light">Min:</h1>
        <h1 className="bolded">{data.minTemp}</h1>
        <h1 className="light">Max:</h1>
        <h1 className="bolded">{data.maxTemp}</h1>
      </div>
    </div>
  );
};
export default DailyCard;
