import React, { useState, useEffect } from "react";

import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import Page from "src/components/Page";

import ProjectCard from "./ProjectCard";
//import data from "./data";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  projectCard: {
    height: "100%",
  },
}));

const Projects = () => {
  const classes = useStyles();
  //let porducts = new Array();

  var retrivedata = localStorage.getItem("data");
  var data = JSON.parse(retrivedata);

  const [products] = useState(data);
  console.log(products.length);

  return (
    <Page className={classes.root} title='products'>
      <Container maxWidth={false}>
        <Box mt={3}>
          <Grid container spacing={3}>
            {products.map((project) => (
              <Grid item key={project.product} xl={3} lg={4} md={6} xs={12}>
                <ProjectCard
                  className={classes.projectCard}
                  project={project}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box mt={3} display='flex' justifyContent='center'>
          <Pagination color='primary' count={3} size='small' />
        </Box>
      </Container>
    </Page>
  );
};

export default Projects;
