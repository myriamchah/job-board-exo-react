const Job = (props) => {
  return (
    <>
      <div className="job-card">
        <p>{props.title}</p>
        <span>
          {props.contractType} - {props.country} - {props.city}
        </span>
      </div>
    </>
  );
};

export default Job;
