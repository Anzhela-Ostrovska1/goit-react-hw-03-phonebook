import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './Form.module.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  nameId = nanoid();
  numberId = nanoid();
  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul className={css.formList}>
          <li className={css.list}>
            <label className={css.label} htmlFor={this.nameId}>
              Name
              <input
                className={css.input}
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                id={this.nameId}
              />
            </label>
          </li>
          <li className={css.list}>
            <label className={css.label} htmlFor={this.numberId}>
              Number
              <input
                className={css.input}
                type="tel"
                name="number"
                value={this.state.number}
                onChange={this.handleChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                id={this.numberId}
              />
            </label>
          </li>
        </ul>
        <button className={css.contactBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
export default Form;
