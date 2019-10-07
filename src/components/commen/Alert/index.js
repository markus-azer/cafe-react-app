import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const AlertDialog = ({
  open,
  toggleAlert,
  title,
  content,
  onSubmit,
  submit,
  submitLabel,
  cancelLabel,
  children,
  isValid,
}) => {
  // eslint-disable-next-line consistent-return
  const handleSubmit = () => {
    const submitButton = onSubmit();
    if (submitButton === null) return false;
    toggleAlert();
  };

  return (
    <Dialog
      open={open}
      onClose={toggleAlert}
      fullWidth
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>

      <DialogContent>
        <DialogContentText id="alert-dialog-description">{content}</DialogContentText>
        {children}
      </DialogContent>

      <DialogActions>
        <Button onClick={toggleAlert} color="primary">
          {cancelLabel}
        </Button>

        <Button
          onClick={handleSubmit}
          color="primary"
          autoFocus
          type={submit && 'submit'}
          disabled={!isValid}
        >
          {submitLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

AlertDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleAlert: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  submitLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  children: PropTypes.node,
  submit: PropTypes.bool.isRequired,
  isValid: PropTypes.bool.isRequired,
};

AlertDialog.defaultProps = {
  submitLabel: 'Save Item',
  cancelLabel: 'Cancel',
  content: null,
  children: null,
};

export default AlertDialog;
