import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Container,
  Typography,
  makeStyles,
  withStyles,
  Grid,
} from "@material-ui/core";
import Page from "src/components/Page";

import Particles from "./Particles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    // backgroundImage: `url(${Image})`,
    backgroundColor: "black",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  container: {
    margin: theme.spacing(10),
  },
  TeamProfile: {
    margin: "auto",
    height: "100%",
    width: "100%",
  },
  teamheading: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
    margin: "auto",
    color: "black",
  },
  Button: {
    zIndex: 10,
    marginTop: 40,
    marginInlineStart: 0,
    marginInlineEnd: 20,
  },
  body: {
    maxWidth: 500,
  },
}));

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
  },
})(Typography);

const BlueTextTypography = withStyles({
  root: {
    color: "#039dfc",
    fontSize: 80,
  },
})(Typography);

const LandingPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const clickHandleIndividual = (e) => {
    e.preventDefault();
    navigate("loadProduct", { replace: true });
  };

  const clickHandleOrg = (e) => {
    e.preventDefault();
    navigate("ViewProduct", { replace: true });
  };

  return (
    <Page className={classes.root} title='Abc'>
      <Particles>
        <Box
          display='flex'
          flexDirection='column'
          height='90vh'
          maxWidth='60%'
          justifyContent='center'
        >
          <Container className={classes.container}>
            <WhiteTextTypography variant='h1'>
              Welcome to
              <BlueTextTypography variant='h1'>ABC</BlueTextTypography>
            </WhiteTextTypography>
            <div className={classes.body}>
              <WhiteTextTypography variant='body1'>
                Product price calculator
              </WhiteTextTypography>
            </div>
            <Button
              variant='contained'
              color='primary'
              className={classes.Button}
              onClick={(e) => clickHandleIndividual(e)}
            >
              Load Product
            </Button>
            <Button
              variant='contained'
              color='primary'
              className={classes.Button}
              onClick={(e) => clickHandleOrg(e)}
            >
              View List of products
            </Button>
          </Container>
        </Box>
      </Particles>
      {/* <Box
        mt={10}
        display='flex'
        flexDirection='column'
        justifyContent='center'
        height='120px'
      >
        <Typography
          className={classes.teamheading}
          variant='h1'
          component='h2'
          gutterBottom
        >
          Our Team
        </Typography>
      </Box> */}

      {/* <Box justifyContent='center' display='flex'>
        <Grid
          container
          spacing={10}
          direction='row'
          justify='center'
          alignItems='flex-start'
        >
          {teams.map((team) => (
            <Grid item key={team.id} lg={4} md={6} xs={12}>
              <TeamProfile className={classes.TeamProfile} team={team} />
            </Grid>
          ))}
        </Grid>
      </Box> */}
      {/* <Footer></Footer> */}
    </Page>
  );
};

export default LandingPage;
