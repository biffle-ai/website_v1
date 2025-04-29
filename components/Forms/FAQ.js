import React from 'react';
import { makeStyles } from 'tss-react/mui';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Define the styles using makeStyles
const useStyles = makeStyles({ uniqId: 'FAQ' })((theme) => ({
  section: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(16),
    // backgroundColor: theme.palette.grey[50], // Equivalent to bg-gray-50
  },
  container: {
    maxWidth: '100%', // Equivalent to max-w-3xl
  },
  title: {
    fontSize: '1.875rem', // Equivalent to text-3xl
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: theme.spacing(6),
  },
  accordionContainer: {
    '& > *': {
      marginBottom: theme.spacing(2),
    },
  },
  accordion: {
    backgroundColor: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius * 2, // Rounded-lg
    boxShadow: theme.shadows[3], // shadow-lg
    padding: theme.spacing(2),
  },
  accordionSummary: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    '&:hover': {
      textDecoration: 'none',
    },
    '& .MuiAccordionSummary-content': {
      margin: 0,
    },
  },
  accordionDetails: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  questionText: {
    fontWeight: 500,
  },
}));

export default function FAQ() {
  const { classes } = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    {
      question: 'How do I become a creator on Biffle?',
      answer:
        'Fill out our creator application form with your details and content information. Our team will review your application and get back to you within 48 hours.',
    },
    {
      question: 'What are the benefits of being a creator on Biffle?',
      answer:
        "You'll get access to multiple monetization tools, analytics, community features, and dedicated creator support to help grow your audience.",
    },
    {
      question: 'How can I earn from private calls and gifts?',
      answer:
        'You can set your own rates for private video calls and receive virtual gifts from your supporters during live streams and interactions.',
    },
    {
      question: 'What kind of content can I post?',
      answer:
        'You can share photos, videos, live streams, and text posts. All content must follow our community guidelines and be appropriate for your audience.',
    },
    {
      question: 'Are there any rules or guidelines I should follow?',
      answer:
        'Yes, we have community guidelines to ensure a safe and positive environment. These include content restrictions and professional conduct standards.',
    },
    {
      question: 'How do I withdraw my earnings?',
      answer:
        'You can withdraw your earnings through our secure payment system once you reach the minimum threshold. We support multiple payment methods.',
    },
  ];

  return (
    <Box component="section" className={classes.section}>
      <Container className={classes.container}>
        <Typography variant="h4" className={classes.title}>
          Frequently Asked Questions
        </Typography>

        <Box className={classes.accordionContainer}>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              className={classes.accordion}
              expanded={expanded === `panel-${index}`}
              onChange={handleChange(`panel-${index}`)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel-${index}-content`}
                id={`panel-${index}-header`}
                className={classes.accordionSummary}
              >
                <Typography className={classes.questionText}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.accordionDetails}>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
