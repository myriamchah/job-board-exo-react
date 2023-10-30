import { faker } from "@faker-js/faker";
import Job from "./Job";

const Jobs = (props) => {
  return (
    <>
      <div className={props.className}>
        <Job
          className={props.className}
          title={faker.person.jobTitle()}
          contractType="CDI"
          country={faker.location.country()}
          city={faker.location.city()}
        />
        <Job
          className={props.className}
          title={faker.person.jobTitle()}
          contractType="CDI"
          country={faker.location.country()}
          city={faker.location.city()}
        />
        <Job
          className={props.className}
          title={faker.person.jobTitle()}
          contractType="CDD"
          country={faker.location.country()}
          city={faker.location.city()}
        />
        <Job
          className={props.className}
          title={faker.person.jobTitle()}
          contractType="CDD"
          country={faker.location.country()}
          city={faker.location.city()}
        />
        <Job
          className={props.className}
          title={faker.person.jobTitle()}
          contractType="CDI"
          country={faker.location.country()}
          city={faker.location.city()}
        />
        <Job
          className={props.className}
          title={faker.person.jobTitle()}
          contractType="CDI"
          country={faker.location.country()}
          city={faker.location.city()}
        />
        <Job
          className={props.className}
          title={faker.person.jobTitle()}
          contractType="CDI"
          country={faker.location.country()}
          city={faker.location.city()}
        />
        <Job
          className={props.className}
          title={faker.person.jobTitle()}
          contractType="CDI"
          country={faker.location.country()}
          city={faker.location.city()}
        />
        <Job
          className={props.className}
          title={faker.person.jobTitle()}
          contractType="CDD"
          country={faker.location.country()}
          city={faker.location.city()}
        />
      </div>
    </>
  );
};

export default Jobs;
