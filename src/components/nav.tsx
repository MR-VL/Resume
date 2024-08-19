import { Navbar, Nav as BootstrapNav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Nav() {
    const base = '/Resume';
    return (
        <Navbar bg="light" expand="lg">
            <LinkContainer to={`${base}/Home`}>
                <Navbar.Brand className={"margin"}>Resume</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <BootstrapNav className="mr-auto">

                    <LinkContainer className={"margin"} to={`${base}/Home`}>
                        <BootstrapNav.Link>Home</BootstrapNav.Link>
                    </LinkContainer>


                </BootstrapNav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Nav;