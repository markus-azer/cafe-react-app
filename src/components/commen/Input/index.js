import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import styles from './style';

const InputComponent = ({
  formikProps,
  classes,
  label,
  name,
  required,
  fullWidth,
  maxInputWidth,
  buttonType,
  options,
  uploadOnBackground,
}) => {
  const {
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
    setFieldValue,
    setFieldError,
    setFieldTouched,
  } = formikProps;
  const inputWidth = maxInputWidth ? 12 : fullWidth ? 9 : 5; // eslint-disable-line no-nested-ternary
  const [loading, setLoading] = useState(false);

  return (
    <Grid className={classes.root} container>
      <Grid justify="center" md={inputWidth} xs={12} item container>
        <FormControl variant="filled" fullWidth error={touched[name] && errors[name]}>
          {/* eslint-disable-next-line no-nested-ternary */}
          {buttonType === 'file' ? (
            // TODO: Show thumb
            <div>
              <input
                id="contained-button-file"
                name={name}
                onChange={event => {
                  const file = event.currentTarget.files[0];
                  setLoading(true);
                  uploadOnBackground(file)
                    .then(url => {
                      setLoading(false);
                      setFieldValue('photo', url);
                      handleChange();
                    })
                    .catch(err => {
                      setLoading(false);
                      setFieldError(name, err);
                      setFieldTouched(name, true);
                    });
                }}
                accept="image/jpeg,image/png,image/webp,image/jpg"
                className={classes.hiddenInput}
                multiple
                type="file"
                aria-describedby="input-error-text"
              />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="contained-button-file">
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  component="span"
                  className={classes.uploadButton}
                >
                  Choose Photo
                </Button>
                {loading ? <CircularProgress size={20} /> : ``}
              </label>
            </div>
          ) : buttonType === 'select' ? (
            <TextField
              id={`input-${name}`}
              name={name}
              fullWidth
              value={values[name] || ''}
              onChange={handleChange(name)}
              type={buttonType}
              onBlur={handleBlur}
              className={classes.input}
              margin="normal"
              variant="outlined"
              aria-describedby="input-error-text"
              required={required}
              select
              label={name}
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                },
              }}
            >
              {options.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          ) : (
            <>
              <InputLabel htmlFor={`input-${name}`}>{label}</InputLabel>
              <TextField
                id={`input-${name}`}
                name={name}
                fullWidth
                value={values[name] || ''}
                onChange={handleChange}
                type={buttonType}
                onBlur={handleBlur}
                className={classes.input}
                margin="normal"
                variant="outlined"
                aria-describedby="input-error-text"
                required={required}
              />
            </>
          )}

          <FormHelperText className={classes.helperText} id="input-error-text">
            {touched[name] && errors[name]}
          </FormHelperText>
        </FormControl>
      </Grid>
    </Grid>
  );
};

InputComponent.propTypes = {
  formikProps: PropTypes.object.isRequired, //eslint-disable-line
  classes: PropTypes.object.isRequired, //eslint-disable-line
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  maxInputWidth: PropTypes.bool,
  buttonType: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  uploadOnBackground: PropTypes.func,
};

InputComponent.defaultProps = {
  required: false,
  fullWidth: false,
  maxInputWidth: false,
  buttonType: 'input',
  options: [],
  uploadOnBackground: undefined,
};

export default withStyles(styles, { withTheme: true })(InputComponent);
