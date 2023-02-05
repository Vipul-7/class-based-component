import UserFinder from "./components/UserFinder";
import UsersContext from "./store/users-context";

const DUMMY_USERS = [
  { id: "u1", name: "Vipul" },
  { id: "u2", name: "Vishal" },
  { id: "u3", name: "Varun" },
  { id: "u4", name: "Bharat" },
  { id: "u5", name: "Arati" },
  { id: "u6", name: "Amit" },
];

function App() {
  const usersContext = {
    users: DUMMY_USERS,
  };

  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
