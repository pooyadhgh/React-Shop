import React from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import './Account.css';

class Account extends React.Component {
  state = {
    form: {
      name: {
        elementType: 'input',
        value: '',
        valid: false,
        used: false,
        validation: {
          required: true,
        },
        elementConfig: {
          type: 'text',
          placeholder: 'Name',
        },
      },
      email: {
        elementType: 'input',
        value: '',
        valid: false,
        used: false,
        validation: {
          required: true,
        },
        elementConfig: {
          type: 'text',
          placeholder: 'Email',
        },
      },
      password: {
        elementType: 'input',
        value: '',
        valid: false,
        used: false,
        validation: {
          required: true,
        },
        elementConfig: {
          type: 'password',
          placeholder: 'Password',
        },
      },
    },
  };

  submitHandler = event => {
    event.preventDefault();
    const formData = {};
    for (let item in this.state.form) {
      formData[item] = this.state.form[item].value;
    }
    console.log(formData);
  };

  checkValidation = (value, rules) => {
    let isValid = false;
    if (rules.required) {
      return (isValid = value.trim() !== '');
    }

    return isValid;
  };

  inputChangeHandler = (event, inputElement) => {
    const updatedForm = { ...this.state.form };
    const updatedElement = { ...updatedForm[inputElement] };
    updatedElement.value = event.target.value;

    updatedElement.valid = this.checkValidation(
      updatedElement.value,
      updatedElement.validation
    );

    updatedElement.used = true;
    console.log(updatedElement);

    updatedForm[inputElement] = updatedElement;
    this.setState({ form: updatedForm });
  };

  render() {
    const elementsArray = [];
    for (let item in this.state.form) {
      elementsArray.push({
        id: item,
        config: this.state.form[item],
      });
    }

    return (
      <div className="account">
        <form onSubmit={event => this.submitHandler(event)}>
          {elementsArray.map(item => {
            return (
              <Input
                key={item.id}
                elementType={item.config.elementType}
                elementConfig={item.config.elementConfig}
                value={item.config.value}
                change={event => this.inputChangeHandler(event, item.id)}
                invalid={!item.config.valid}
                used={item.config.used}
              />
            );
          })}
          <Button btnType="success">Submit</Button>
        </form>
      </div>
    );
  }
}

export default Account;
