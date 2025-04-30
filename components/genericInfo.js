import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';

// Define styles using makeStyles
const useStyles = makeStyles({ uniqId: 'genericui' })(theme => ({
  sectionTitle: {
    fontWeight: 600,
    color: theme.palette.text.primary,
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[100],
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(2),
    '&:hover': {
      backgroundColor: theme.palette.grey[200],
    },
  },
  sectionContainer: {
    marginBottom: theme.spacing(4),
  },
  contentParagraph: {
    paddingLeft: 0,
    paddingRight: 0,
    color: theme.palette.text.secondary,
    fontSize: '1.1rem',
    '&::before': {
      content: '"•"',
      marginRight: theme.spacing(1),
    },
  },
  numberedListItem: {
    paddingLeft: 0,
    paddingRight: 0,
    color: theme.palette.text.secondary,
    fontSize: '1.1rem',
    display: 'list-item',
    listStyleType: 'decimal',
    marginLeft: theme.spacing(3),
  },
  sectionContent: {
    padding: theme.spacing(0, 2, 2, 2),
  },
  pageTitle: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(4),
  },
  paperContainer: {
    padding: theme.spacing(2),
  },
  lastUpdated: {
    textAlign: 'center',
    display: 'block',
  },
  subsectionBox: {
    marginLeft: theme.spacing(1),
  },
  nestedList: {
    marginLeft: theme.spacing(2),
  },
  subsectionTitle: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  divider: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
}));

export const GenericPage = ({ termsData, title }) => {
  const { classes } = useStyles();

  return (
    <Container maxWidth="lg">
      <Box mt={4} mb={6}>
        <Paper className={classes.paperContainer}>
          {/* {title && (
            <Typography 
              variant="h4" 
              component="h1" 
              className={classes.pageTitle} 
              align="center"
            >
              {title}
            </Typography>
          )} */}

          {Object.entries(termsData.sections).map(([sectionKey, section]) => (
            <Box key={sectionKey} className={classes.sectionContainer}>
              <Typography variant="h6" className={classes.sectionTitle}>
                {section.title}
              </Typography>
              
              <Box className={classes.sectionContent}>
                {section?.description && (
                  <Typography variant="body1" paragraph color="text.secondary">
                    {section.description}
                  </Typography>
                )}

                {section?.content && (
                  <List disablePadding>
                    {section.content.map((paragraph, index) => (
                      <ListItem
                        key={index}
                        disableGutters
                        className={classes.contentParagraph}
                      >
                        <ListItemText primary={paragraph} />
                      </ListItem>
                    ))}
                  </List>
                )}

                {section?.subsections && (
                  <Box className={classes.subsectionBox}>
                    <List disablePadding>
                      {section.subsections.map((paragraph, index) => (typeof paragraph === 'string' ? (
                        <ListItem
                          key={index}
                          disableGutters
                          className={classes.numberedListItem}
                        >
                          <ListItemText primary={paragraph} />
                        </ListItem>
                        ) : (
                          <Box key={index} mb={2}>
                            <Typography
                              variant="subtitle1"
                              className={`${classes.sectionTitle} ${classes.subsectionTitle}`}
                              sx={{ pl: 2, py: 1.5 }} // Smaller padding for subsection titles
                            >
                              {paragraph?.title}
                            </Typography>

                            <Box sx={{ pl: 2 }}> {/* Add padding to subsection content */}
                              {paragraph?.description && (
                                <Typography
                                  variant="body1"
                                  paragraph
                                  color="text.secondary"
                                >
                                  {paragraph.description}
                                </Typography>
                              )}

                              {paragraph?.subsections && (
                                <List
                                  disablePadding
                                  className={classes.nestedList}
                                >
                                  {paragraph.subsections.map((subItem, idx) => (
                                    <ListItem
                                      key={idx}
                                      disableGutters
                                      className={classes.numberedListItem}
                                    >
                                      <ListItemText primary={subItem} />
                                    </ListItem>
                                  ))}
                                </List>
                              )}

                              {paragraph?.content && (
                                <List disablePadding>
                                  {paragraph.content.map((contentItem, idx) => (
                                    <ListItem
                                      key={idx}
                                      disableGutters
                                      className={classes.contentParagraph}
                                    >
                                      <ListItemText primary={contentItem} />
                                    </ListItem>
                                  ))}
                                </List>
                              )}
                            </Box>
                          </Box>
                        ))
                      )}
                    </List>
                  </Box>
                )}
              </Box>
            </Box>
          ))}

          <Divider className={classes.divider} />
          <Typography
            variant="caption"
            color="text.secondary"
            className={classes.lastUpdated}
          >
            Last Updated:
            {' '}
            {termsData.lastUpdated}
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default GenericPage;