const SmallPersonList = ({ person }) => {
  const { name, age } = person;

  return (
    <>
      <p>
        Name: {name} & Age: {age}
      </p>
    </>
  );
};

export default SmallPersonList;
