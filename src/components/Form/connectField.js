import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function connectField(getChangeHandlerProps) {
  return (Field) => {
    class FormField extends Component {
      constructor(props, context) {
        super(props, context);

        this.state = {
          value: '',
        };

        // The updater method
        this.onUpdate = (value) => {
          if (this.context.setFieldValue) {
            this.context.setFieldValue(this.props.name, value);
          }
        };

        this.changeHandlerProps = getChangeHandlerProps(this.onUpdate);
      }

      componentWillMount() {
        if (this.context.registerField) {
          this.unregister = this.context.registerField(this.props.name, (value) => {
            this.setState({ value });
          });
        }
      }

      componentWillUnmount() {
        if (this.unregister) {
          this.unregister();
        }
      }

      render() {
        const { value } = this.state;
        return (
          <Field {...this.props} value={value} {...this.changeHandlerProps} />
        );
      }
    }

    FormField.propTypes = {
      name: PropTypes.string.isRequired,
    };

    FormField.contextTypes = {
      registerField: PropTypes.func.isRequired,
      setFieldValue: PropTypes.func.isRequired,
    };

    return FormField;
  };
}
