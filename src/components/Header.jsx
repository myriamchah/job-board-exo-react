import Title from "./Title";

const Header = (props) => {
  return (
    <header>
      <div>
        <Title title={props.title} />
      </div>
    </header>
  );
};

export default Header;
