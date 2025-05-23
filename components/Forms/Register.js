import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import Checkbox from './Checkbox';
import SocialAuth from './SocialAuth';
import AuthFrame from './AuthFrame';
import useStyles from './form-style';

function Register() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  // Media query
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== values.password) {
        return false;
      }
      return true;
    });
    ValidatorForm.addValidationRule('isTruthy', value => value);
  });

  const [check, setCheck] = useState(false);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleCheck = event => {
    setCheck(event.target.checked);
  };

  const handleSubmit = () => {
    console.log('data submited');
  };

  return (
    <AuthFrame title={t('register_subtitle')} type="register" subtitle={t('auth_desc')}>
      <div>
        <div className={classes.head}>
          <h3 className={isDesktop ? text.subtitle : cx(text.title, text.textPrimary)}>
            {t('login_create')}
          </h3>
        </div>
        <SocialAuth />
        <div className={classes.separator}>
          <Typography>{t('register_or')}</Typography>
        </div>
        <ValidatorForm
          onError={errors => console.log(errors)}
          onSubmit={handleSubmit}
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextValidator
                className={classes.input}
                label={t('register_name')}
                onChange={handleChange('name')}
                name="name"
                variant="filled"
                fullWidth
                value={values.name}
                validators={['required']}
                errorMessages={['This field is required']}
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                className={classes.input}
                fullWidth
                label={t('register_email')}
                onChange={handleChange('email')}
                name="email"
                variant="filled"
                value={values.email}
                validators={['required', 'isEmail']}
                errorMessages={['This field is required', 'Email is not valid']}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextValidator
                type="password"
                className={classes.input}
                label={t('register_password')}
                validators={['required']}
                fullWidth
                onChange={handleChange('password')}
                errorMessages={['This field is required']}
                name="password"
                variant="filled"
                value={values.password}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextValidator
                type="password"
                className={classes.input}
                fullWidth
                label={t('register_confirm')}
                validators={['isPasswordMatch', 'required']}
                errorMessages={['Password mismatch', 'this field is required']}
                onChange={handleChange('confirmPassword')}
                name="confirm"
                variant="filled"
                value={values.confirmPassword}
              />
            </Grid>
          </Grid>
          <div className={classes.btnArea}>
            <FormControlLabel
              control={(
                <Checkbox
                  validators={['isTruthy']}
                  errorMessages="This field is required"
                  checked={check}
                  value={check}
                  onChange={(e) => handleCheck(e)}
                  color="primary"
                />
              )}
              label={(
                <span>
                  {t('form_terms')}
                  &nbsp;
                  <a href="#">
                    {t('form_privacy')}
                  </a>
                </span>
              )}
            />
            <Button
              variant="contained"
              className={classes.buttonLarge}
              type="submit"
              color="primary"
              size="large"
            >
              {t('continue')}
            </Button>
          </div>
        </ValidatorForm>
      </div>
    </AuthFrame>
  );
}

Register.propTypes = {

};

export default Register;
