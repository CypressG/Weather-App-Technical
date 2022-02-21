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
        <h1>Min</h1>
        <h1>{data.minTemp}</h1>
        <h1>max</h1>
        <h1>{data.maxTemp}</h1>
      </div>
    </div>
  );
};
export default DailyCard;
