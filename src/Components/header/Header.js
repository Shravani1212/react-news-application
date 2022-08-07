import React ,{ Fragment, useState } from "react"
import { Button, Input } from "reactstrap"
import classes from './Header.module.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Form,
    Col,
    FormGroup,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from 'reactstrap';
 const Header=props=>{
     const [isOpen,setIsOpen]=useState(false);
     const toggle=()=>{
         setIsOpen((isOpen)=>!isOpen);
     }
    return <Fragment>
        <Navbar color="dark" dark expand="md"  >
        <NavbarBrand href="/">News</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
            <Form inline>
                <FormGroup row className="mb-2 mr-2  mb-sm-0">
                    <Col lg={10} className="p-0" >
                        <Input type="search" name="Search" id="searcgField"
                            placeholder="Enter Text Here... " className={classes.input1} />
                    </Col>
                    <Col lg={2} className="p-0">
                       <Button><i className="fa fa-search" aria-hidden="true"></i></Button>
                    </Col>
                </FormGroup>
              </Form>
            </NavItem>
            <NavItem>
            <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Categories
                </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                  </DropdownItem>
                <DropdownItem>
                  Option 2
                  </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                  </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </Fragment>
}
export default Header;