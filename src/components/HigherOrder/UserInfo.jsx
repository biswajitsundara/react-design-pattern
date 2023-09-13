const UserInfo = ({ user }) => {

  //const { name, age, hair_color, hobbies } = user;

  return <h1>User Info</h1>

  return (
    <>
      <h1>{name}</h1>
      <p>{age}</p>
      <p>{hair_color}</p>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  ) 
  
};

export default UserInfo;
