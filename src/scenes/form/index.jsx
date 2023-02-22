import { Box, TextField, Button, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const userSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup.string().required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});
const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
  };
  const handelFormSubmit = (event) => {
    if (!event.target.checkValidity()) {
      event.preventDefault();
    //   event.stopPropagation();
    }
  };
  return (
    <Box m="10px">
      <Header title="CREATE USER" subTitle="Create a new user profile" />
      <Formik
        onSubmit={handelFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handelChange,
          handelSubmit,
        }) => (
          <form onSubmit={handelSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": {
                  gridColumn: isNonMobile ? null : "span 4",
                },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                name="firstName"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handelChange}
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{
                  gridColumn: "span 2",
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                name="lastName"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handelChange}
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{
                  gridColumn: "span 2",
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                name="email"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handelChange}
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{
                  gridColumn: "span 4",
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                name="contact"
                type="text"
                label="Contact"
                onBlur={handleBlur}
                onChange={handelChange}
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{
                  gridColumn: "span 4",
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                name="address1"
                type="text"
                label="Address1"
                onBlur={handleBlur}
                onChange={handelChange}
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.contact}
                sx={{
                  gridColumn: "span 4",
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                name="address2"
                type="text"
                label="Address2"
                onBlur={handleBlur}
                onChange={handelChange}
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{
                  gridColumn: "span 4",
                }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
                <Button type="submit" color="secondary" variant="contained" >
                    Create New User
                </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
