import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Snackbar from '@mui/material/Snackbar';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useTranslation } from 'next-i18next';
import logo from '~/public/images/biffleLogo.png';
import brand from '~/public/text/brand';
import { useText, useTextAlign } from '~/theme/common';
import Decoration from './Decoration';
import useStyles from './contact-style';

function Contact(props) {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();
  const { bg } = props;
  const { t } = useTranslation('common');
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [openNotif, setNotif] = useState(false);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = () => {
    setNotif(true);
  };

  const handleClose = () => {
    setNotif(false);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <footer className={cx(classes.footer, bg ? classes.hasBg : '')}>
      <Decoration bg={bg} />
      <Container className={classes.root} maxWidth="lg">
        <Grid container spacing={6} direction={isMobile ? 'column-reverse' : 'row'}>
          <Grid item xs={12} md={5}>
            <Box mx={{ lg: 10 }} mt={5}>
              <div className={classes.logo}>
                <img src={logo} alt="logo" />
                {brand.social.name}
              </div>
              <Typography>
                {t('social-landing.banner_title')}
                &nbsp;
                {t('social-landing.banner_desc')}
              </Typography>
              <div className={classes.socmed}>
                <IconButton aria-label="Delete" className={classes.margin} size="small">
                  <i className="ion-social-facebook" />
                </IconButton>
                <IconButton aria-label="Delete" className={classes.margin} size="small">
                  <i className="ion-social-instagram" />
                </IconButton>
                <IconButton aria-label="Delete" className={classes.margin} size="small">
                  <i className="ion-social-twitter" />
                </IconButton>
                <IconButton aria-label="Delete" className={classes.margin} size="small">
                  <i className="ion-social-linkedin" />
                </IconButton>
              </div>
              <div className={classes.contact}>
                <Typography className={text.paragraph}>
                  {t('blog_phone')}
                  <br />
                  +12 345 678 90
                </Typography>
                <Divider className={classes.divider} />
                <Typography className={text.paragraph}>
                  Skype
                  <br />
                  jenadoe.skype
                </Typography>
                <Box mt={8}>
                  <Typography variant="subtitle2" className={align.textCenter}>
                    &copy;&nbsp;
                    {brand.social.footerText}
                  </Typography>
                </Box>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <div className={classes.formWrap}>
              <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                key="top right"
                open={openNotif}
                autoHideDuration={4000}
                onClose={handleClose}
                ContentProps={{
                  'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">Message Sent</span>}
              />
              <Paper className={classes.formBox}>
                <Grid container spacing={2}>
                  <Grid item lg={5} xs={12}>
                    <h3 className={cx(classes.title, text.title)}>
                      {t('contact_title2')}
                    </h3>
                  </Grid>
                  <Grid item lg={7} xs={12}>
                    <div className={classes.form}>
                      <ValidatorForm
                        onSubmit={handleSubmit}
                        onError={errors => console.log(errors)}
                      >
                        <TextValidator
                          className={classes.input}
                          label={t('form_name')}
                          onChange={handleChange('name')}
                          name="Name"
                          variant="filled"
                          value={values.name}
                          validators={['required']}
                          errorMessages={['this field is required']}
                        />
                        <TextValidator
                          className={classes.input}
                          label={t('form_email')}
                          onChange={handleChange('email')}
                          name="Email"
                          variant="filled"
                          value={values.email}
                          validators={['required', 'isEmail']}
                          errorMessages={['this field is required', 'email is not valid']}
                        />
                        <TextValidator
                          multiline
                          rows="6"
                          variant="filled"
                          className={classes.input}
                          label={t('form_message')}
                          onChange={handleChange('message')}
                          name="Message"
                          value={values.message}
                        />
                        <div className={classes.btnArea}>
                          <Button variant="contained" fullWidth type="submit" color="primary" size="large">
                            {t('form_send')}
                          </Button>
                        </div>
                      </ValidatorForm>
                    </div>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

Contact.propTypes = {

  bg: PropTypes.bool
};

Contact.defaultProps = {
  bg: false
};

export default Contact;
