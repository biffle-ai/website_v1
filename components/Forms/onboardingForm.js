import React, { useState } from 'react';
// import Button from '@mui/material/Button';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Grid from '@mui/material/Grid';
// import { ValidatorForm } from 'react-material-ui-form-validator';
// import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
// import { useTranslation } from 'next-i18next';
import { CircularProgress } from '@mui/material';
// import { useText } from '~/theme/common';
// import SocialAuth from './SocialAuth';
import AuthFrame from './AuthFrame';
// import useStyles from './form-style';

function OnboardingForm() {
  // const { classes, cx } = useStyles();
  // const { classes: text } = useText();
  // const { t } = useTranslation('common');
  const [isLoading, setIsLoading] = useState(true);
  // const [values, setValues] = useState({
  //   email: '',
  //   password: '',
  // });
  // Media query
  // const theme = useTheme();
  // const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  // useEffect(() => {
  //   ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
  //     if (value !== values.password) {
  //       return false;
  //     }
  //     return true;
  //   });
  // });

  // const [check, setCheck] = useState(false);

  // const handleChange = (name) => (event) => {
  //   setValues({ ...values, [name]: event.target.value });
  // };

  // const handleCheck = (event) => {
  //   setCheck(event.target.checked);
  // };

  // const handleSubmit = () => {
  //   console.log('data submited');
  // };

  return (
    <AuthFrame
      title="Become a Creator on Biffle"
      type="login"
      subtitle="Fill the form below to join our community of 10,000+ creators. Monetize your time and get discovered by millions!"
    >
      <div>
        {/* <div className={classes.head}>
          <h3
            className={
              isDesktop ? text.subtitle : cx(text.title, text.textPrimary)
            }
          >
            {t('login_title')}
          </h3>
        </div> */}
        <div className="space-y-4 md:w-[80%] sm:w-full pt-2 relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50/10 rounded-lg">
              <CircularProgress />
            </div>
          )}
          <iframe
            src="https://form.typeform.com/to/CBwxzxDF"
            width="100%"
            height="500"
            title="Onboarding-Form"
            frameBorder="0"
            className="w-full h-[500px] border-0"
            allow="camera; microphone; autoplay; encrypted-media;"
            onLoad={() => setIsLoading(false)}
          />
        </div>
        {/* <SocialAuth />
        <div className={classes.separator}>
          <Typography>
            {t('login_or')}
          </Typography>
        </div>
        <ValidatorForm
          onError={errors => console.log(errors)}
          onSubmit={handleSubmit}
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextValidator
                className={classes.input}
                label={t('login_email')}
                onChange={handleChange('email')}
                fullWidth
                variant="filled"
                name="email"
                value={values.email}
                validators={['required', 'isEmail']}
                errorMessages={['This field is required', 'Email is not valid']}
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                type="password"
                fullWidth
                variant="filled"
                className={classes.input}
                label={t('login_password')}
                validators={['required']}
                onChange={handleChange('password')}
                errorMessages={['This field is required']}
                name="password"
                value={values.password}
              />
            </Grid>
          </Grid>
          <div className={classes.formHelper}>
            <FormControlLabel
              control={(
                <Checkbox
                  checked={check}
                  onChange={(e) => handleCheck(e)}
                  color="secondary"
                  value={check}
                  className={classes.check}
                />
              )}
              label={(
                <span>
                  {t('login_remember')}
                </span>
              )}
            />
            <Button size="small" className={classes.buttonLink} href="#">
              {t('login_forgot')}
            </Button>
          </div>
          <div className={classes.btnArea}>
            <Button
              className={classes.buttonLarge}
              variant="contained"
              fullWidth
              type="submit"
              color="primary"
              size="large"
            >
              {t('continue')}
            </Button>
          </div>
        </ValidatorForm> */}
      </div>
    </AuthFrame>
  );
}

OnboardingForm.propTypes = {};

export default OnboardingForm;
