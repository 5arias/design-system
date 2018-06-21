import Button from '../Button/Button';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';

export class FormWizard extends React.Component {
  static Page = ({ children }) => children;

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      values: props.initialValues
    };
  }

  next = values =>
    this.setState(state => ({
      page: Math.min(state.page + 1, this.props.children.length - 1),
      values
    }));

  handlePrevious = () =>
    this.setState(state => ({
      page: Math.max(state.page - 1, 0)
    }));

  validate = values => {
    const activePage = React.Children.toArray(this.props.children)[
      this.state.page
    ];
    return activePage.props.validate ? activePage.props.validate(values) : {};
  };

  handleSubmit = (values, bag) => {
    const { children, onSubmit } = this.props;
    const { page } = this.state;
    const isLastPage = page === React.Children.count(children) - 1;
    if (isLastPage) {
      return onSubmit(values);
    } else {
      this.next(values);
      bag.setSubmitting(false);
    }
  };

  render() {
    const { children } = this.props;
    const { page, values } = this.state;
    const activePage = React.Children.toArray(children)[page];
    const isLastPage = page === React.Children.count(children) - 1;
    return (
      <Formik
        initialValues={values}
        enableReinitialize={false}
        validate={this.validate}
        onSubmit={this.handleSubmit}
        render={({ handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            {activePage}
            <div className="buttons">
              {page > 0 && (
                <Button type="button" onClick={this.handlePrevious}>
                  « Previous
                </Button>
              )}

              {!isLastPage && (
                <Button type="submit" variation="primary">
                  Next »
                </Button>
              )}
              {isLastPage && (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variation="primary"
                >
                  Submit
                </Button>
              )}
            </div>
          </form>
        )}
      />
    );
  }
}
// FormWizard.defaultProps = {
//   initialValues: {},
//   validate: () => {},
//   onSubmit: () => {}
// };
FormWizard.propTypes = {
  children: PropTypes.instanceOf(Object),
  initialValues: PropTypes.instanceOf(Object),
  onSubmit: PropTypes.func
};

export default FormWizard;
