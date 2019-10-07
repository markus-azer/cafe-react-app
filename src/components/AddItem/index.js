import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Alert from '../commen/Alert';
import Input from '../commen/Input';

const AddItem = ({ addItem, open, toggleModal }) => {
  const AddItemSchema = Yup.object().shape({
    type: Yup.string().required(),
    name: Yup.string().required(),
    price: Yup.number().required(),
    photo: Yup.mixed().required(),
  });

  const initialValues = {
    type: '',
    name: '',
    price: '',
    photo: '',
  };

  const renderForm = formikProps => {
    return (
      <Alert
        open={open}
        toggleAlert={toggleModal}
        title="Add Menu Item"
        onSubmit={formikProps.handleSubmit}
        isValid={formikProps.isValid}
        submit
      >
        <Input
          label="Type"
          fullWidth
          buttonType="select"
          name="type"
          required
          options={[
            { label: 'Main Course', value: 'Main Course' },
            { label: 'Side', value: 'Side' },
          ]}
          formikProps={formikProps}
        />
        <Input label="Name" fullWidth name="name" required formikProps={formikProps} />
        <Input label="Price" fullWidth name="price" required formikProps={formikProps} />
        <Input
          label="Choose photo"
          buttonType="file"
          name="photo"
          required
          formikProps={formikProps}
        />
      </Alert>
    );
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AddItemSchema}
      render={renderForm}
      onSubmit={(v, { resetForm }) => {
        addItem({ ...v });
        resetForm({});
      }}
    />
  );
};
AddItem.propTypes = {
  open: PropTypes.bool.isRequired,
  addItem: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
export default AddItem;
