import Header from "./HeaderPage/Header/Header";
import  Nav  from "./HeaderPage/Nav/Nav";
import UserPage from "./UserPage/UserPage";

export const App = () => {
  return (
    <div
   className="container"
    >
      <Nav />
      <Header />
      <UserPage/>
    </div>
  );
};
