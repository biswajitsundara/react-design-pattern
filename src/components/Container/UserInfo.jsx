const UserInfo = ({ user }) => {
  const { name, age, hair_color, hobbies } = user || {};

  return user ? (
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
  ) : (
    <p>Loading..</p>
  );
};

export default UserInfo;
