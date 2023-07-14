import { Fragment } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

export const AddCourse = () => {
  return (
    <Fragment>
      <h1 className="my-3">Fill Course Detail</h1>
      <Form>
        <FormGroup>
          <Label for="courseId">Course Id</Label>
          <Input
            type="text"
            placeholder="Enter here"
            name="courseId"
            id="courseId"
          />
        </FormGroup>
        <FormGroup>
          <Label for="title">Course Title</Label>
          <Input type="text" placeholder="Enter title here" id="title" />
        </FormGroup>
        <FormGroup>
          <Label for="description">Course Description</Label>
          <Input
            type="textarea"
            id="description"
            placeholder="Enter description here"
            style={{height:150}}
          />
        </FormGroup>
        <Container>
            <Button color="success">Add Course</Button>
            <Button color="warning" style={{marginLeft:4}}>Clear</Button>
        </Container>
      </Form>
    </Fragment>
  );
};