import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Container, Typography, Box } from '@mui/material';
import { Favorite, Bolt, RateReviewRounded } from '@mui/icons-material';

// Define the styles using makeStyles
const useStyles = makeStyles({ uniqId: 'features' })(theme => ({
  section: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    maxWidth: '1140px', // Equivalent to max-w-6xl
  },
  title: {
    fontWeight: 700,
    // textAlign: 'center',
    textAlign: 'center',
    width: '100%',
    marginBottom: theme.spacing(12),
  },
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: theme.spacing(8),
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
  featureItem: {
    textAlign: 'center',
  },
  iconContainer: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    borderRadius: '50%',
    backgroundColor: '#FCE7F3', // Equivalent to bg-pink-100
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    marginBottom: theme.spacing(4),
  },
  icon: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    color: theme.palette.accent.main, // Equivalent to text-pink-600
  },
  featureTitle: {
    fontWeight: 600,
    marginBottom: theme.spacing(2),
  },
  featureDescription: {
    color: theme.palette.text.secondary, // Equivalent to text-muted-foreground
  },
}));

export default function Features() {
  const { classes } = useStyles();

  return (
    <Box component="section" className={classes.section}>
      <Container className={classes.container}>
        <Typography variant="h4" className={classes.title}>
          Everything You Need to Succeed
        </Typography>

        <Box className={classes.featureGrid}>
          <Box className={classes.featureItem}>
            <Box className={classes.iconContainer}>
              <RateReviewRounded className={classes.icon} />
            </Box>
            <Typography variant="h6" className={classes.featureTitle}>
              Engage Your Community
            </Typography>
            <Typography variant="body2" className={classes.featureDescription}>
              Build meaningful connections with your audience through live
              chats, posts, and exclusive content.
            </Typography>
          </Box>

          <Box className={classes.featureItem}>
            <Box className={classes.iconContainer}>
              <Favorite className={classes.icon} />
            </Box>
            <Typography variant="h6" className={classes.featureTitle}>
              Monetize Your Passion
            </Typography>
            <Typography variant="body2" className={classes.featureDescription}>
              Multiple revenue streams including subscriptions, tips, and
              exclusive content sales.
            </Typography>
          </Box>

          <Box className={classes.featureItem}>
            <Box className={classes.iconContainer}>
              <Bolt className={classes.icon} />
            </Box>
            <Typography variant="h6" className={classes.featureTitle}>
              Power Analytics
            </Typography>
            <Typography variant="body2" className={classes.featureDescription}>
              Track your growth, understand your audience, and optimize your
              content strategy.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
