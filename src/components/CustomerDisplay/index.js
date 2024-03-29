import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import ContactItem from "../CustomerList";

import "./index.css";

const initialContactsList = [
  {
    id: uuidv4(),
    name: "Ram",
    mobileNo: 9999988888,
    address: "Vijay Nagar",
    isFavorite: false,
  },
  {
    id: uuidv4(),
    name: "Pavan",
    mobileNo: 8888866666,
    address: "Khajrana Nagar",
    isFavorite: true,
  },
  {
    id: uuidv4(),
    name: "Nikhil",
    mobileNo: 9999955555,
    address: "Indore",
    isFavorite: false,
  },
];

class CustomerDisplay extends Component {
  state = {
    contactsList: initialContactsList,
    name: "",
    mobileNo: "",
    address:"",
  };

  toggleIsFavorite = (id) => {
    this.setState((prevState) => ({
      contactsList: prevState.contactsList.map((eachContact) => {
        if (id === eachContact.id) {
          return { ...eachContact, isFavorite: !eachContact.isFavorite };
        }
        return eachContact;
      }),
    }));
  };

  onAddContact = (event) => {
    event.preventDefault();
    const { name, mobileNo, address } = this.state;
    const newContact = {
      id: uuidv4(),
      name,
      mobileNo,
      address,
      isFavorite: false,
    };

    this.setState((prevState) => ({
      contactsList: [...prevState.contactsList, newContact],
      name: "",
      mobileNo: "",
    }));
  };

  onChangeAddress = (event) => {
    this.setState({ address: event.target.value });
  };

  onChangeMobileNo = (event) => {
    this.setState({ mobileNo: event.target.value });
  };

  onChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    const { name, mobileNo, contactsList } = this.state;
    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">Customer List</h1>
          <form className="contact-form-container" onSubmit={this.onAddContact}>
            <input
              value={name}
              onChange={this.onChangeName}
              className="input"
              placeholder="Name"
            />
            <input
              value={name}
              onChange={this.onChangeAddress}
              className="input"
              placeholder="Address"
            />
            <input
              className="input"
              value={mobileNo}
              onChange={this.onChangeMobileNo}
              placeholder="Mobile Number"
            />
            <button type="submit" className="button">
              Add 
            </button>
          </form>
          <ul className="contacts-table">
            <li className="table-header">
              <p className="table-header-cell id-column">Id</p>
              <hr className="separator" />
              <p className="table-header-cell name-column">Name</p>
              <hr className="separator" />
              <p className="table-header-cell name-column">Address</p>
              <hr className="separator" />
              <p className="table-header-cell">Mobile Number</p>
            </li>
            {contactsList.map((eachContact) => (
              <ContactItem
                key={eachContact.id}
                contactDetails={eachContact}
                toggleIsFavorite={this.toggleIsFavorite}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default CustomerDisplay;
