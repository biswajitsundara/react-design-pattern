import SplitScreen from "./components/SplitScreen/SplitScreen";

const LeftHandComponent = ({ name }) => {
  return (
    <h1 style={{ backgroundColor: "green" }}>Left Hand Component {name}</h1>
  );
};

const RightHandComponent = ({ message }) => {
  return <h1>Right Hand Component {message}</h1>;
};

function App() {
  return (
    <>
      {/* <SplitScreen left={LeftHandComponent} right={RightHandComponent} leftWeight={1} rightWeight={3}/> */}

      <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftHandComponent name="Biswajit" />
        <RightHandComponent message="Hello" />
      </SplitScreen>
    </>
  );
}

export default App;
