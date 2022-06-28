import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Fade from "@mui/material/Fade";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Grid from "@mui/material/Grid";

import "./contact.css";

interface IFormInput {
  firstName: string;
  lastName: string;
  phone: number;
  heritageName: string;
}

export default function Contact({ checked }) {
  // const [value, setValue] = React.useState("");

  // const [district, setDistrict] = React.useState("");

  // const handleChange = (event: SelectChangeEvent) => {
  //   setDistrict(event.target.value as string);
  // };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ criteriaMode: "all" });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    alert(
      "Thanks for your contribution! We will contact you very soon for further information"
    );
    window.location.reload();
  };

  return (
    <Fade in={checked}>
      <Grid container spacing={2}>
        <Grid item xl={6} sx={{ height: "100%" }}>
          <img className="contactimage" src="contactimg.jpg" />
        </Grid>
        <Grid item xl={6} sx={{ height: "100%" }}>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="body">
              <Typography
                variant="h3"
                gutterBottom
                component="div"
                sx={{ pt: 2 }}
              >
                <div className="title">Contact us</div>
              </Typography>

              <div className="box">
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <Controller
                    name="firstName"
                    control={control}
                    defaultValue=""
                    rules={{ required: "*Required field" }}
                    render={({ field }) => (
                      <TextField
                        id="outlined-multiline-flexible"
                        label="*First Name"
                        maxRows={1}
                        helperText={
                          <ErrorMessage
                            errors={errors}
                            name="firstName"
                            as="a"
                          />
                        }
                        {...field}
                      />
                    )}
                  />

                  <Controller
                    name="lastName"
                    control={control}
                    defaultValue=""
                    rules={{ required: "*Required field" }}
                    render={({ field }) => (
                      <TextField
                        id="outlined-multiline-flexible"
                        label="*Last Name"
                        maxRows={1}
                        helperText={
                          <ErrorMessage
                            errors={errors}
                            name="lastName"
                            as="a"
                          />
                        }
                        {...field}
                      />
                    )}
                  />
                </Box>
              </div>

              <div className="box">
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <Controller
                    name="phone"
                    control={control}
                    // defaultValue=
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField
                        id="outlined-multiline-flexible"
                        label="*Phone no."
                        maxRows={1}
                        inputProps={{ maxLength: 8 }}
                        helperText={
                          errors?.phone?.type === "required" && (
                            <div>
                              <a>*8 numbers </a>
                            </div>
                          )
                        }
                        {...field}
                      />
                    )}
                  />
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Email"
                    maxRows={1}
                    //   value={value}
                  />
                </Box>
              </div>

              <Typography
                variant="h5"
                gutterBottom
                component="div"
                className="question"
                sx={{ p: 2 }}
              >
                *Heritage you discover:
              </Typography>

              <Controller
                name="heritageName"
                control={control}
                // defaultValue=
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    id="heritage-name"
                    label="*Heritage Name, District"
                    sx={{ width: 400 }}
                    helperText={
                      errors?.phone?.type === "required" && (
                        <div>
                          <a>*Required field </a>
                        </div>
                      )
                    }
                    {...field}
                  />
                )}
              />

              <Typography
                variant="h5"
                gutterBottom
                component="div"
                className="question"
                sx={{ pt: 3, pb: 2 }}
              >
                How do you know about us?
              </Typography>

              <div className="checkbox">
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="Facebook" />
                  <FormControlLabel control={<Checkbox />} label="Instagram" />
                  <FormControlLabel control={<Checkbox />} label="Google" />
                  <FormControlLabel control={<Checkbox />} label="Magazine" />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="Newspaper" />
                  <FormControlLabel control={<Checkbox />} label="TV" />
                  <FormControlLabel control={<Checkbox />} label="Friends" />
                  <FormControlLabel control={<Checkbox />} label="School" />
                </FormGroup>
              </div>

              <div className="notes">*Required field</div>

              <div className="submit-btn">
                <Button
                  type="submit"
                  value="Submit"
                  variant="contained"
                  size="medium"
                  sx={{ width: 200, height: 50 }}
                >
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </Grid>
      </Grid>
    </Fade>
  );
}
