import React, { useState, useEffect } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles,
  ListItemSecondaryAction,
} from "@material-ui/core";

const states = [
  {
    value: "delhi",
    label: "Delhi",
  },
  {
    value: "mumbai",
    label: "Mumbai",
  },
  {
    value: "banglore",
    label: "Banglore",
  },
];

const useStyles = makeStyles(() => ({
  root: {},
}));

const ProfileSettings = ({ className, ...rest }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    store: "",
    product: "",
    description: "",
    expdate: "",
    price: 0,
    total: 0,
    averagePrice: 0,
    highestPrice: 0,
    lowestPrice: 0,
    idealPrice: 0,
    noOfPrices: 0,
  });

  const [data, setData] = useState([
    // {
    //   store: "",
    //   product: "",
    //   description: "",
    //   expdate: "",
    //   price: 0,
    //   total: 0,
    //   averagePrice: 0,
    //   highestPrice: 0,
    //   lowestPrice: 0,
    //   idealPrice: 0,
    //   noOfPrices: 0,
    // },
  ]);

  // useEffect(() => {
  //   setData((prevdata) => JSON.parse(localStorage.getItem("data")));
  //   console.log(data);
  // }, []);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  function getproduct(prod) {
    return prod.product === values.product;
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    let newdata = [...data];
    var idx = newdata.findIndex(getproduct);
    if (idx >= 0) {
      newdata[idx].noOfPrices += 1;
      if (values.price > newdata[idx].highestPrice) {
        newdata[idx].highestPrice = values.price;
      }

      if (values.price < newdata[idx].lowestPrice) {
        newdata[idx].lowestPrice = values.price;
      }

      newdata[idx].total =
        parseInt(newdata[idx].total) + parseInt(values.price);
      newdata[idx].averagePrice =
        parseFloat(newdata[idx].total) / parseFloat(newdata[idx].noOfPrices);

      newdata[idx].idealPrice = newdata[idx].averagePrice;
      setData(newdata);
    } else {
      setValues({ ...values, [values.averagePrice]: values.price });

      setValues({ ...values, [values.total]: values.price });

      setValues({ ...values, [values.highestPrice]: values.price });

      setValues({ ...values, [values.lowestPrice]: values.price });

      setValues({ ...values, [values.noOfPrices]: 1 });

      setValues({ ...values, [values.idealPrice]: values.price });

      setData((prevdata) => [...prevdata, values]);
    }

    console.log(data);
    localStorage.clear();

    localStorage.setItem("data", JSON.stringify(data));
  };

  return (
    <form
      autoComplete='off'
      noValidate
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardHeader subheader='The information can be edited' title='Product' />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText='Please specify the store name'
                label='store name'
                name='store'
                onChange={handleChange}
                required
                value={values.store}
                variant='outlined'
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label='product code'
                name='product'
                onChange={handleChange}
                required
                value={values.product}
                variant='outlined'
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label='product description'
                name='description'
                onChange={handleChange}
                required
                value={values.description}
                variant='outlined'
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label='expiry date'
                name='expdate'
                onChange={handleChange}
                type='date'
                defaultValue='2017-05-24'
                value={values.expdate}
                variant='outlined'
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label='price'
                name='price'
                onChange={handleChange}
                required
                type='number'
                value={values.price}
                variant='outlined'
              />
            </Grid>
            {/* <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label='Select State'
                name='state'
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
                variant='outlined'
              >
                {states.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid> */}
          </Grid>
        </CardContent>
        <Divider />
        <Box display='flex' justifyContent='flex-end' p={2}>
          <Button
            onClick={(e) => handleFormSubmit(e)}
            color='primary'
            variant='contained'
          >
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};

ProfileSettings.propTypes = {
  className: PropTypes.string,
};

export default ProfileSettings;
