import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderForm.module.scss';
import Button from '@material-ui/core/Button';

class OrderForm extends React.Component {

  static propTypes = {
    cart: PropTypes.array,
    submitOrder: PropTypes.func,
    cleanCart: PropTypes.func,
  };

  state = {
    orderer: {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      postCode: '',
      phoneNumber: '',
    },
    error: null,
    validation: false,
  }

  updateInput({ target }) {
    const { orderer } = this.state;
    const { value, name } = target;

    console.log(value, name);
    this.setState({ orderer: {...orderer, [name]: value}, error: null });
  }

  sendOrder(e){
    e.preventDefault();

    const { cart, submitOrder, cleanCart } = this.props;
    const { firstName, lastName, email, address, postCode, phoneNumber } = this.state.orderer;

    const validEmail = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;
    const validAddress = /^([^\\u0000-\u007F]|\w)+,?\s\d+[A-z]?(\/\d+[A-z]?)?$/;
    const validPostCode = /[0-9]{2}-[0-9]{3}/;
    const validPhoneNumber = /[0-9]*/;

    let error = null;
    if(!firstName || !lastName || !email || !address || !postCode || !phoneNumber) error = 'Uzupełnij wszystkie wymagane pola';
    else if(!validEmail.test(email)) error = 'Adres email jest nieprawidłowy';
    else if(!validAddress.test(address)) error = 'Adres wysyłki jest nieprawidłowy';
    else if(!validPostCode.test(postCode)) error = 'Kod pocztowy jest nieprawidłowy';
    else if(!validPhoneNumber.test(phoneNumber)) error = 'Numer kontaktowy jest nieprawidłowy';
    else {
      this.setState({ validation: true });
    }

    if(this.state.validation) {

      window.location.href = `${process.env.PUBLIC_URL}/order-summary`;
      submitOrder(cart, this.state.orderer);
      cleanCart();
    } else {
      setTimeout(() => this.setState({ error }), 1000);
    }
  }

  render() {
    const { firstName, lastName, email, address, postCode, phoneNumber } = this.state.orderer;
    return (
      <div className={styles.root}>
        <form className={styles.form} noValidate>
          {this.state.error != null
            ? <div className={styles.alert}>{this.state.error}</div>
            : null}
          <input className={styles.input} onChange={(e) => this.updateInput(e)} placeholder="Imię" value={firstName} name="firstName" type="text" required />
          <input className={styles.input} onChange={(e) => this.updateInput(e)} placeholder="Nazwisko" value={lastName} name="lastName" type="text" required />
          <input className={styles.input} onChange={(e) => this.updateInput(e)} placeholder="Email" value={email} name="email" type="email" required />
          <input className={styles.input} onChange={(e) => this.updateInput(e)} placeholder="Adres" value={address} name="address" type="text" required />
          <input className={styles.input} onChange={(e) => this.updateInput(e)} placeholder="Kod pocztowy" value={postCode} name="postCode" type="text" required />
          <input className={styles.input} onChange={(e) => this.updateInput(e)} placeholder="Numer tel" value={phoneNumber} name="phoneNumber" type="text" required />
          <div className={styles.buttonContainer}>
            <Button onClick={(e) => this.sendOrder(e)} className={styles.orderButton} type="submit" >Zamawiam</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default OrderForm;
