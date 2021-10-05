import {
  flightSchedulesInterface,
  FlightType,
} from "../../../interfaces/interface";

interface frInt {
  flightSchedules: flightSchedulesInterface;
}

const FlightResult: React.FC<frInt> = ({ flightSchedules }) => {
  return (
    <>
      {flightSchedules.data.ScheduleResource.Schedule.map((x) =>
        (x.Flight as FlightType[]).length > 1 ? (
          (x.Flight as FlightType[]).map((y, i) => (
            <>
              <h1 key={i}>{y.Departure.AirportCode}</h1>
              <h1 key={i + 1}>{y.Departure.ScheduledTimeLocal.DateTime}</h1>
              <h1 key={i + 2}>{y.Arrival.AirportCode}</h1>
              <h1 key={i + 3}>{y.Arrival.ScheduledTimeLocal.DateTime}</h1>
              {i === (x.Flight as FlightType[]).length - 1 && (
                <p style={{ color: "blue" }}>--------</p>
              )}
            </>
          ))
        ) : (
          <>
            <h1>{(x.Flight as FlightType).Departure.AirportCode}</h1>
            <h1>
              {(x.Flight as FlightType).Departure.ScheduledTimeLocal.DateTime}
            </h1>
            <h1>{(x.Flight as FlightType).Arrival.AirportCode}</h1>
            <h1>
              {(x.Flight as FlightType).Arrival.ScheduledTimeLocal.DateTime}
            </h1>
            <p style={{ color: "blue" }}>--------</p>
          </>
        )
      )}
    </>
  );
};
export default FlightResult;
