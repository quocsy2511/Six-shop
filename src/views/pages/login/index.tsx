"use client";
import {
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { NextPage } from "next";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CustomTextField from "src/components/text-field";
import { EMAIL_REG, PASSWORD_REG } from "src/configs/regex";
import IconifyIcon from "src/components/Icon";
// import IconButton from "src/theme/overrides/icon-button";

type TProps = {};

const LoginPage: NextPage<TProps> = () => {
  const [showPassword, setShowPassword] = useState(false);

  const schema = yup
    .object({
      email: yup
        .string()
        .required("This is required")
        .matches(EMAIL_REG, "This field is must email type"),
      password: yup
        .string()
        .required("This is required")
        .matches(
          PASSWORD_REG,
          "The password is contain character ,special character, number"
        ),
    })
    .required();

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit = (data: { email: string; password: string }) => {
    console.log(data);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Typography component="p" variant="h6" mt={2} color={"blue"}>
          Welcome to Six shop
        </Typography>

        <form
          autoComplete="off"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          style={{
            marginTop: 1,
          }}
        >
          <Box sx={{ mt: 2 }}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <CustomTextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Email Address"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  error={Boolean(errors?.email)}
                  helperText={errors?.email?.message}
                />
              )}
              name="email"
            />
          </Box>

          <Box sx={{ mt: 2 }}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <CustomTextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  error={Boolean(errors?.password)}
                  helperText={errors?.password?.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? (
                            <IconifyIcon icon="material-symbols-light:visibility-outline-rounded" />
                          ) : (
                            <IconifyIcon icon="material-symbols-light:visibility-off-outline-rounded" />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
              name="password"
            />
          </Box>

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              margin: 2,
            }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default LoginPage;
