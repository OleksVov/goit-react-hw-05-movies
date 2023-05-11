import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import {Container, Header, Logo, Link} from "./SharedLayout.styled";
import {ImFilm} from "react-icons/im";

export const SharedLayout = () => {
    return (
        <Container>
     <Header>
      <a href="/goit-react-hw-05-movies">
     <Logo>
        <ImFilm 
        size='30'
        color = 'orange'/>       
        </Logo>
     </a>
      
     <nav>
        <Link to="/" >Home</Link>
        <Link to="/movie">Movie</Link>
      </nav>
     </Header>
     <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
    );
};