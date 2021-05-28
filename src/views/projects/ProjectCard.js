import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Button } from "@material-ui/core";
import { Divider, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 240,
    paddingTop: "0%", // 16:9
  },
  margin: {
    marginInlineStart: 10,
  },
  marginTop: {
    marginBlockStart: 10,
  },
  button: {
    marginBlockStart: 10,
  },
  description: {
    marginBlockEnd: 10,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  box: {
    alignItems: "center",
  },
  text: {
    display: "flex",
    justifyContent: "flex-end",
    margin: 0,
    padding: 0,
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const ProjectCard = ({ className, project, ...rest }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [values, setValues] = React.useState({
    amount: "",
    summary: "",
  });

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='h2' component='h2'>
          {project.product}
        </Typography>
        <Typography
          variant='body2'
          color='textSecondary'
          component='p'
          className={classes.description}
        >
          {project.description}
        </Typography>
        <Typography variant='h5' component='h5'>
          Average Price : {project.averagePrice}
        </Typography>
        <Typography variant='h5' component='h5'>
          Lowest Price : {project.lowestPrice}
        </Typography>
        <Typography variant='h5' component='h5'>
          Highest Price : {project.highestPrice}
        </Typography>
        <Typography variant='h5' component='h5'>
          Ideal Price : {project.idealPrice}
        </Typography>
        <Typography variant='h5' component='h5'>
          expiry : {project.expdate}
        </Typography>
        <Typography variant='h5' component='h5'>
          No of prices collected : {project.noOfPrices}
        </Typography>
        <Divider className={classes.marginTop} />
      </CardContent>
    </Card>
  );
};

ProjectCard.propTypes = {
  className: PropTypes.string,
  team: PropTypes.object.isRequired,
};

export default ProjectCard;
