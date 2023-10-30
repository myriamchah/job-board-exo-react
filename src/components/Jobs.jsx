import { faker } from "@faker-js/faker";
import Job from "./Job";

const color = () => {
  const colors = ["purple", "pink", "green", "blue", "yellow"];
  return colors[Math.floor(Math.random() * 5)];
};

const Jobs = (props) => {
  return (
    <>
      <div className={props.layout}>
        <Job
          color={color()}
          title={faker.person.jobTitle()}
          contractType="CDI"
          country={faker.location.country()}
          city={faker.location.city()}
        />
        <Job
          color={color()}
          title={faker.person.jobTitle()}
          contractType="CDI"
          country={faker.location.country()}
          city={faker.location.city()}
        />
        <Job
          color={color()}
          title={faker.person.jobTitle()}
          contractType="CDD"
          country={faker.location.country()}
          city={faker.location.city()}
        />
        <Job
          color={color()}
          title={faker.person.jobTitle()}
          contractType="CDD"
          country={faker.location.country()}
          city={faker.location.city()}
        />
        <Job
          color={color()}
          title={faker.person.jobTitle()}
          contractType="CDI"
          country={faker.location.country()}
          city={faker.location.city()}
        />
        <Job
          color={color()}
          title={faker.person.jobTitle()}
          contractType="CDI"
          country={faker.location.country()}
          city={faker.location.city()}
        />
        <Job
          color={color()}
          title={faker.person.jobTitle()}
          contractType="CDI"
          country={faker.location.country()}
          city={faker.location.city()}
        />
        <Job
          color={color()}
          title={faker.person.jobTitle()}
          contractType="CDI"
          country={faker.location.country()}
          city={faker.location.city()}
        />
        <Job
          color={color()}
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
