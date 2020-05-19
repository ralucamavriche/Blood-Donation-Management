import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addDonor } from '../../actions/donorActions';
import PropTypes from 'prop-types';

class DonorModal extends Component {
    state = {
        modal: false,
        name: 'Raluca',
        email: 'raluca@yahoo.com',
        age: '4',
        weight: '100',
        phone_number: '0759123123'

    }

    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const newDonor = {
            name: this.state.name,
            email: this.state.email,
            age: this.state.age,
            weight: this.state.weight,
            phone_number: this.state.phone_number,
            currentUser:this.props.auth.user.id
        }

        //Add donor via addDonor action
        this.props.addDonor(newDonor);
        
        //Close modal
        this.toggle();
    }

    render() {
        return (
            <div>
                {this.props.isAuthenticated ? (
                    <Button
                        color="dark"
                        style={{ marginBottom: '2rem' }}
                        onClick={this.toggle}
                    >Add Donor
                </Button>
                ) : (
                        <h5
                            className="mb-3 ml-4"
                            className="text-center"
                            style={{ marginBottom: '2rem' }}> Please log in to manage donors</h5>
                    )}
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add To Donor List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="donor">Donor</Label>
                                <Input
                                    required
                                    input="text"
                                    name="name"
                                    id="donor"
                                    value={this.state.name}
                                    placeholder="Add Name donor"
                                    onChange={this.onChange}
                                />
                                <Label for='email'>Email</Label>
                                <Input
                                    required
                                    input="email"
                                    name="email"
                                    id="email"
                                    value={this.state.email}
                                    placeholder="Add Email"
                                    onChange={this.onChange}
                                />
                                <Label for='age'>Age</Label>
                                <Input
                                    required
                                    input="text"
                                    name="age"
                                    id="age"
                                    value={this.state.age}
                                    placeholder="Add Age"
                                    onChange={this.onChange}
                                />
                                <Label for='weight'>Weight</Label>
                                <Input
                                    required
                                    input="text"
                                    name="weight"
                                    id="weight"
                                    value={this.state.weight}
                                    placeholder="Add weight"
                                    onChange={this.onChange}
                                />
                                <Label for='phone_number'>Phone number</Label>
                                <Input
                                    required
                                    input="text"
                                    name="phone_number"
                                    id="phone_number"
                                    value={this.state.phone_number}
                                    placeholder="Add Phone Number"
                                    onChange={this.onChange}
                                />
                                <Button
                                    color="dark"
                                    style={{ marginTop: '2rem' }}
                                    block >Add donor
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal >
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth:state.auth,
    donor: state.donor,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { addDonor })(DonorModal);