import React from 'react';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import useStyles from './action-style';

function CallAction() {
  // Translation Function
  const { t } = useTranslation('common');
  const { classes: text } = useText();

  const { classes } = useStyles();
  return (
    <div className={classes.action}>
      <h4 className={text.title2}>
        {t('social-landing.footer_text')}
      </h4>
      <div className={classes.btnArea}>
        <a href="#">
          <img src="/images/social/app-store.png" alt="app store" />
        </a>
        <a href="#">
          <img src="/images/social/play-store.png" alt="play store" />
        </a>
      </div>
    </div>
  );
}

CallAction.propTypes = {

};

export default CallAction;
