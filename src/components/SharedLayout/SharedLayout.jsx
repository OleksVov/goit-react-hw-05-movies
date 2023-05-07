import { Outlet } from "react-router-dom";
import {Container, Header, Logo, Link} from "./SharedLayout.styled";

export const SharedLayout = () => {
    return (
        <Container>
     <Header>
      <Logo>
        Hello
      </Logo>
     <nav>
        <Link to="/" end>Home</Link>
        <Link to="/movie">Movie</Link>
      </nav>
     </Header>
    <Outlet/>
    </Container>
    );
};