import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Typography,
  Container,
  Button,
  CircularProgress,
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

// Define styles using makeStyles
const useStyles = makeStyles({ uniqId: 'videoReel' })((theme) => ({
  root: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
    background: theme.palette.background.paper,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  titleSection: {
    textAlign: 'center',
    marginBottom: theme.spacing(6),
  },
  title: {
    fontWeight: 700,
    color: theme.palette.grey[900],
    marginBottom: theme.spacing(3),
    fontSize: '2.5rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '3rem',
    },
  },
  subtitle: {
    fontSize: '1.25rem',
    color: theme.palette.secondary.main,
    maxWidth: '768px',
    margin: '0 auto',
  },
  videoContainer: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius * 4,
    overflow: 'hidden',
    boxShadow: theme.shadows[15],
    marginBottom: theme.spacing(8),
    maxWidth: '500px', // Limit the width for vertical video
    margin: '0 auto',
    aspectRatio: '5/7', // Maintain a 9:16 aspect ratio
    // This creates the aspect ratio (9:16)
  },
  placeholderLoading: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
    animation: '$pulse 2s infinite ease-in-out',
  },
  '@keyframes pulse': {
    '0%': { opacity: 0.6 },
    '50%': { opacity: 0.8 },
    '100%': { opacity: 0.6 },
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.paper,
    objectFit: 'cover',
    objectPosition: 'center',
    transition: 'opacity 0.3s ease',
  },
  videoVisible: {
    opacity: 1,
  },
  videoHidden: {
    opacity: 0,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      'linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.2), transparent)',
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(4),
    borderRadius: '50%',
    backdropFilter: 'blur(4px)',
    transition: 'all 0.3s ease',
  },
  playIcon: {
    width: '3rem',
    height: '3rem',
    color: theme.palette.common.white,
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  loadingSpinner: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: theme.palette.common.white,
  },
  pauseButton: {
    position: 'absolute',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
    },
    padding: theme.spacing(1.5),
    borderRadius: '50%',
    backdropFilter: 'blur(4px)',
    transition: 'all 0.3s ease',
  },
  pauseIcon: {
    width: '1.5rem',
    height: '1.5rem',
    color: theme.palette.common.white,
  },
  ctaButton: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    padding: `${theme.spacing(1.5)} ${theme.spacing(4)}`,
    borderRadius: '2rem',
    fontWeight: 600,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
    textTransform: 'none',
  },
  ctaContainer: {
    textAlign: 'center',
  },
}));

const VideoReel = () => {
  const { classes, cx } = useStyles();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const videoRef = useRef(null);

    // Detect when the page is fully loaded
    useEffect(() => {
        if (document.readyState === 'complete') {
          handlePageLoad();
        } else {
          window.addEventListener('load', handlePageLoad);
        }
    
        return () => {
          window.removeEventListener('load', handlePageLoad);
        };
      }, []);
  // Function to handle page load completion
  const handlePageLoad = () => {
    setIsPageLoaded(true);
    // Add a slight delay before loading video to ensure other critical resources load first
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.load();
      }
    }, 1000);
  };

  // Handle video loaded metadata event
  const handleLoadedMetadata = () => {
    setIsLoaded(true);
  };

  const togglePlay = () => {
    if (videoRef.current && isLoaded) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };


  return (
    <Box className={classes.root}>
      <Container className={classes.container}>
        <Box className={classes.titleSection}>
          <Typography variant="h2" className={classes.title}>
            See how it works
          </Typography>
          <Typography variant="h6" className={classes.subtitle}>
            Explore the whole new world full of interesting stories from
            certified creators.
          </Typography>
        </Box>

        {/* Video Reel Container */}
        <Box className={classes.videoContainer}>
          {/* Show placeholder image until page is fully loaded */}
          {!isPageLoaded && (
            <Box className={classes.placeholderLoading}>
              <Typography variant="body1">Loading video...</Typography>
            </Box>
          )}

          <video
            ref={videoRef}
            className={cx(
              classes.video,
              isLoaded ? classes.videoVisible : classes.videoHidden
            )}
            poster="/api/placeholder/720/1280"
            preload="none"
            playsInline
            loop
            onLoadedMetadata={handleLoadedMetadata}
          >
            {isPageLoaded && <source src="/Biffleintro.mp4" type="video/mp4" />}
            Your browser does not support the video tag.
          </video>

          <Box className={classes.overlay} />

          {/* Play Button Overlay - Only visible when video is loaded but not playing */}
          {isLoaded && !isPlaying && (
            <Button
              className={classes.playButton}
              onClick={togglePlay}
              disableRipple
            >
              <PlayArrowIcon className={classes.playIcon} />
            </Button>
          )}

          {/* Loading indicator while video is being loaded after page load */}
          {isPageLoaded && !isLoaded && (
            <CircularProgress size={48} className={classes.loadingSpinner} />
          )}

          {/* Pause Button - Only visible when video is playing */}
          {isPlaying && (
            <Button
              className={classes.pauseButton}
              onClick={togglePlay}
              disableRipple
            >
              <PauseIcon className={classes.pauseIcon} />
            </Button>
          )}
        </Box>

        {/* CTA Button */}
        <Box className={classes.ctaContainer}>
          <Button
            href="https://biffle-apk.s3.ap-south-1.amazonaws.com/app-release.apk"
            className={classes.ctaButton}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
          >
            Get Started – Try Risk-Free
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default VideoReel;