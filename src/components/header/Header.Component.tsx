import * as React from 'react';
import {
  Collapse,
  Input, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink,
} from 'reactstrap';
import './Header.Component.scss';

export interface IHeaderComponentState {
  isOpen: boolean;
}

export class HeaderComponent extends React.Component<{}, IHeaderComponentState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  public render() {
    return (
      <header>
        <Navbar expand="md">
          <NavbarBrand>
            <i className="material-icons">apps</i>
            To-Do
          </NavbarBrand>
          <div className="d-none d-md-flex search-input-container">
            <Input
              className="search-input"
              type="text"
              placeholder="Search..."
            />
          </div>
          <NavbarToggler onClick={this.toggleNavbar}>
            <i className="material-icons">menu</i>
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>Settings</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Help</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <div className="d-md-none">
          <Input
            className="search-input"
            type="text"
            placeholder="Search..."
          />
        </div>
      </header>
    );
  }

  private toggleNavbar() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
}
