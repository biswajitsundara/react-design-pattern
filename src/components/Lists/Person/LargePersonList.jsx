const LargePersonList = ({ person }) => {
    const { name, age, hair_color, hobbies } = person;
  
    return (
      <>
        <h1>{name}</h1>
        <p>{age}</p>
        <p>{hair_color}</p>
        <h3>Hobbies</h3>
        {hobbies.map((hobby)=> <li key={hobby}>{hobby}</li>)}
      </>
    );
  };
  
  export default LargePersonList;