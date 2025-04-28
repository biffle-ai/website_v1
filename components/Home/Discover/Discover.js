import React from 'react';
import Carousel from 'react-slick';
import { useTranslation } from 'next-i18next';
import imgAPI from '~/public/images/imgAPI';
import Title from '../../Title';
import DiscoverCard from '../../Cards/DiscoverCard';
import useStyles from './discover-style';
import TitleSecondary from '../../Title/TitleSecondary';
import { Box } from '@mui/material';

const discoverData = [
  {
    title: 'Short stories',
    desc: 'Exclusive short videos and images from top creators  ',
    color: 'primary',
    illustration: [imgAPI.social[15], imgAPI.social[16]],
    img: imgAPI.social[30]
  },
  {
    title: 'Explore',
    desc: 'Find creators based on your matching interests and vibes',
    color: 'secondary',
    illustration: [imgAPI.social[17], imgAPI.social[18]],
    img: imgAPI.social[31]
  },
  {
    title: 'Speak freely',
    desc: 'With 100% safe & secure video calls, feel free to express yourself freely',
    color: 'accent',
    illustration: [imgAPI.social[25], imgAPI.social[26]],
    img: imgAPI.social[35]
  },
  {
    title: 'Gift & Tips',
    desc: 'Feel free to appreciate the efforts from the creator with lots of love in form of gifts and tips',
    color: 'accent',
    illustration: [imgAPI.social[19], imgAPI.social[20]],
    img: imgAPI.social[32]
  },
  {
    title: 'Messages',
    desc: 'Get to know your favourite creators with a private conversation over messages',
    color: 'primary',
    illustration: [imgAPI.social[21], imgAPI.social[22]],
    img: imgAPI.social[33]
  },
  // {
  //   title: 'item5_title',
  //   desc: 'item5_desc',
  //   color: 'secondary',
  //   illustration: [imgAPI.social[23], imgAPI.social[24]],
  //   img: imgAPI.social[34]
  // },
];

function Discover() {
  const { classes } = useStyles();
  const { t } = useTranslation('common');

  // Slider Carousel
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 2,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className={classes.root}>
      <Title align="center">
        <span>
          {t('social-landing.discover_title')}
        </span>
      </Title>
      <Box align="center" mb={2}>
        <h2>
          At Biffle.ai, every interaction enriches your life. Whether you seek inspiration, companionship,
          <br/> or a safe space to be yourself, 
          Biffle.ai bridges the gap between <br/>loneliness and genuine human connection.
        </h2>
      </Box>
      <div className={classes.sliderWrap}>
        <div className={classes.carousel}>
          <Carousel {...settings}>
            {discoverData.map((item, index) => (
              <div
                key={index.toString()}
                className={classes.item}
              >
                <DiscoverCard
                  img={item.img}
                  illustration2d={item.illustration[0]}
                  illustration3d={item.illustration[1]}
                  color={item.color}
                  title={item.title}
                  desc={item.desc}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

Discover.propTypes = {

};

export default Discover;
