import React, { useState, useEffect, useRef } from 'react';
import Carousel from 'react-slick';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { useTranslation } from 'next-i18next';
import imgAPI from '~/public/images/imgAPI';
import Title from '../../Title';
import useStyles from './stories-style';

const storyContent = [
  {
    text: 'I used to feel nervous talking to new people, especially girls. Through this Biffle app, I found genuine people who helped me build confidence with meaningful conversations. Now I look forward to every call!.',
    avatar: imgAPI.avatar[10],
    name: 'Deepak, 22 yrs',
    title: '(Student, Mumbai)',
  },
  {
    text: 'The cultural exchange on Biffle.ai is incredible. Last week I learned the Ghee Podi Idli recipe from a creator in Chennai - all through a secure video call. Mind-blowing!.',
    avatar: imgAPI.avatar[1],
    name: 'Priya, 27 yrs',
    title: 'Marketing Professional, Delhi',
  },
  {
    text:"Finally, a platform where I can have meaningful discussions about my photography passion with like minded creators. The verification system makes me feel completely safe.", 
    avatar: imgAPI.avatar[10],
    name: 'Rahul, 31 yrs',
    title: 'Software Engineer, Bangalore',
  },
  {
    text: 'As someone who moved cities for studies, Biffle.ai became my comfort space. My favorite Bffl Ananya makes me feel like talking to an angel in dreams.',
    avatar: imgAPI.avatar[10],
    name: 'Anuj, 22 yrs',
    title: 'College Student, Kolkata',
  },
  {
    text: 'Really amazed by this concept of learning with conversations. I now teach students across the globe. The language filters help me connect with serious learners - no more time wasted!',
    avatar: imgAPI.avatar[3],
    name: 'Jennifer D’sousa 34 yrs ',
    title: 'English Language Tutor, Delhi',
  },
  {
    text: 'Really amazed by this concept of learning with conversations. I now teach students across the globe. The language filters help me connect with serious learners - no more time wasted!',
    avatar: imgAPI.avatar[4],
    name: 'Jennifer D’sousa 34 yrs',
    title: 'English Language Tutor, Delhi',
  },
];

function Stories() {
  const { classes } = useStyles();
  const { t } = useTranslation('common');

  const sliderText = useRef(null);
  const sliderAvatar = useRef(null);
  const [slider, setSlider] = useState({
    nav1: null,
    nav2: null
  });

  useEffect(() => {
    setSlider({
      nav1: sliderText.current,
      nav2: sliderAvatar.current
    });
  }, []);

  const settingsText = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    arrows: false,
  };

  const settingsAvatar = {
    dots: false,
    infinite: true,
    speed: 500,
    focusOnSelect: true,
    autoplay: true,
    centerPadding: '2px',
    centerMode: true,
    autoplaySpeed: 5000,
    slidesToShow: 6,
    pauseOnHover: false,
    arrows: false,
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }]
  };

  return (
    <div className={classes.root}>
      <ScrollAnimation animateOnce animateIn="fadeInUpShort" offset={-50} delay={0.3} duration={0.5}>
        <div>
          <Title align="center">
            {t('social-landing.stories_title')}
          </Title>
        </div>
      </ScrollAnimation>
      <div className={classes.carouselWrap}>
        <ScrollAnimation animateOnce animateIn="fadeInUpShort" offset={-150} delay={400} duration={0.5}>
          <div>
            <div className={classes.carouselAvatar}>
              <Carousel ref={sliderAvatar} asNavFor={slider.nav1} {...settingsAvatar}>
                {storyContent.map((item, index) => (
                  <div className={classes.item} key={index.toString()}>
                    <Avatar alt={item.name} src={item.avatar} className={classes.avatar} />
                  </div>
                ))}
              </Carousel>
            </div>
            <Container maxWidth="sm">
              <div className={classes.carouselText}>
                <Carousel ref={sliderText} asNavFor={slider.nav2} {...settingsText}>
                  {storyContent.map((item, index) => (
                    <div className={classes.item} key={index.toString()}>
                      <Typography className={classes.content}>
                        {item.text}
                      </Typography>
                      <Typography className={classes.name}>
                        <strong>{item.name}</strong>
                        &nbsp;-&nbsp;
                        {item.title}
                      </Typography>
                    </div>
                  ))}
                </Carousel>
              </div>
            </Container>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}

Stories.propTypes = {

};

export default Stories;
