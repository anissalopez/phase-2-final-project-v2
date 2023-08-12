import { Button, Container, Form }from 'react-bootstrap'

function AddHabit({}){
  

    return(
        <Container id="formContainer" className="d-grid h-75 mt-5">
        <Form id="habitForm" className="text-center w-60 pt-5 mt-5" >
            <Form.Group>
            <Form.Label className="mb-4 fs-4">Add Habit</Form.Label>
            <Form.Control className="mb-4" type="text" placeholder="please enter a habit" />
            <Button variant="primary" type="submit">
            Submit
            </Button>
         </Form.Group>
        </Form>
        </Container>
    );
};

export default AddHabit;