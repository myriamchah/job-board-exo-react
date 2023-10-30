import { faker } from "@faker-js/faker";
import Job from "./Job";

const Jobs = (props) => {
  return (
    <>
      <div className={props.layout}>
        <Job
          color="purple"
          title={faker.person.jobTitle()}
          contractType="CDI"
          country={faker.location.country()}
          city={faker.location.city()}
        />
        <Job
          color="pink"
          title={faker.person.jobTitle()}
          contractType="CDI"
          country={faker.location.country()}
          city={faker.location.city()}
        />
        <Job
          color="green"
          title={faker.person.jobTitle()}
          contractType="CDD"
          country={faker.location.country()}
          city={faker.location.city()}
        />
        <Job
          color="pink"
          title={faker.person.jobTitle()}
          contractType="CDD"
          country={faker.location.country()}
          city={faker.location.city()}
        />
        <Job
          color="blue"
          title={faker.person.jobTitle()}
          contractType="CDI"
          country={faker.location.country()}
          city={faker.location.city()}
        />
        <Job
          color="cyan"
          title={faker.person.jobTitle()}
          contractType="CDI"
          country={faker.location.country()}
          city={faker.location.city()}
        />
        <Job
          color="pink"
          title={faker.person.jobTitle()}
          contractType="CDI"
          country={faker.location.country()}
          city={faker.location.city()}
        />
        <Job
          color="green"
          title={faker.person.jobTitle()}
          contractType="CDI"
          country={faker.location.country()}
          city={faker.location.city()}
        />
        <Job
          color="purple"
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
