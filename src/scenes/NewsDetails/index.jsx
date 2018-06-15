import React from 'react';
// import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { Grid, Paper, Divider } from '@material-ui/core';
import Header from '../../components/Header';
import ChatFloatingPopup from '../../components/ChatFloatingPopup';
import NewsDetailsBar from '../../components/NewsDetailsBar';
import RecentNewsBar from '../../components/RecentNewsBar';
import NewsDetailsCard from '../../components/NewsDetailsCard'

const styles = theme => ({
  appFramePaper:
    theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
      backgroundColor: theme.palette.secondary.main,
      marginBottom: '80px',
    }),
});

const NewsDetails = props => (
  <div>
    <Grid container justify="center" alignItems="stretch">
      <Grid item xs={12} lg={10}>
        <Header username={props.username} hospitalName={props.hospitalName} value={6} />
        <Paper elevation={4} className={props.classes.appFramePaper}>
          <NewsDetailsBar />
          <br />
          <Divider />
          <br />
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Grid container justify="space-between">
                <Grid item xs style={{ marginRight: '10px' }}>
                  <NewsDetailsCard
                    date="2.03.2016"
                    title="The war still causes hundreds of deaths"
                    author="Mario Rossi"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                  Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
                  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                  Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                  Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
                  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                   Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                   Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
                   Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod biben dum laoreet.
                    Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                    Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                    Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio."
                  />
                </Grid>
                <Grid item>
                  <RecentNewsBar />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
    <ChatFloatingPopup />
  </div>
);

export default withStyles(styles)(NewsDetails);
