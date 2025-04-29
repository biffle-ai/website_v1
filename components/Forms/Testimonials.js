import React from 'react';
import { makeStyles } from 'tss-react/mui';
import {
  Box,
  Container,
  Typography,
  Card as MuiCard,
  CardContent as MuiCardContent,
} from '@mui/material';
import { Star } from '@mui/icons-material';

// Define the styles using makeStyles
const useStyles = makeStyles({ uniqId: 'testimonials' })(theme => ({
  section: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    backgroundColor: theme.palette.background.default, // Equivalent to bg-white
  },
  container: {
    maxWidth: '100%', // Equivalent to max-w-6xl
  },
  headerContainer: {
    textAlign: 'center',
    marginBottom: theme.spacing(12),
  },
  title: {
    fontSize: '1.875rem', // Equivalent to text-3xl
    fontWeight: 700,
    marginBottom: theme.spacing(2),
  },
  subtitle: {
    color: theme.palette.text.secondary, // Equivalent to text-muted-foreground
  },
  cardGrid: {
    display: 'grid',
    gap: theme.spacing(8),
  },
  card: {
    border: 'none',
    boxShadow: theme.shadows[1], // Equivalent to shadow-sm
  },
  cardContent: {
    padding: theme.spacing(6),
  },
  starsContainer: {
    display: 'flex',
    color: '#FBBF24', // Yellow-400 equivalent
    marginBottom: theme.spacing(4),
  },
  starIcon: {
    width: theme.spacing(2.5),
    height: theme.spacing(2.5),
    fillOpacity: 1,
  },
  testimonialText: {
    color: '#4B5563', // text-gray-600
    fontStyle: 'italic',
    marginBottom: theme.spacing(4),
  },
  authorName: {
    fontWeight: 600,
  },
  authorJob: {
    fontSize: '0.875rem', // text-sm
    color: theme.palette.text.secondary, // text-muted-foreground
  },
}));

export default function Testimonials({ data }) {
  const { classes } = useStyles();

  return (
    <Box component="section" className={classes.section}>
      <Container className={classes.container}>
        <Box className={classes.headerContainer}>
          <Typography variant="h4" className={classes.title}>
            Trusted by Amazing Creators
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            Join thousands of creators already growing their communities
          </Typography>
        </Box>

        <Box className={classes.cardGrid}>
          {data?.map((testimonial, index) => (
            <MuiCard key={index} className={classes.card}>
              <MuiCardContent className={classes.cardContent}>
                <Box className={classes.starsContainer}>
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className={classes.starIcon} />
                  ))}
                </Box>
                <Typography component="blockquote" className={classes.testimonialText}>
                  {testimonial.text}
                </Typography>
                <Box>
                  <Typography variant="body1" className={classes.authorName}>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" className={classes.authorJob}>
                    {testimonial.job}
                  </Typography>
                </Box>
              </MuiCardContent>
            </MuiCard>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
