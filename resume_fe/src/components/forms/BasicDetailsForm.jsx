import {
  Button,
  FormControl,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
  InputAdornment,
  Stack,
} from "@mui/material";
import React from "react";

const BasicDetails = (props) => {
  const { resumeInfo, setResumeInfo, setPage } = props;

  const [addressSection, setAddressSection] = React.useState(false);

  return (
    <Stack>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl>
            <FormLabel>First name:</FormLabel>
            <Input
              type="text"
              placeholder="Your first name"
              value={resumeInfo.profile.firstname}
              onChange={(e) => {
                const updateValue = {
                  ...resumeInfo.profile,
                  firstname: e.target.value,
                };
                const updateResumeInfo = {
                  ...resumeInfo,
                  profile: updateValue,
                };
                setResumeInfo(updateResumeInfo);
              }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl>
            <FormLabel>Last name:</FormLabel>
            <Input
              type="text"
              placeholder="Your last name"
              value={resumeInfo.profile.lastname}
              onChange={(e) => {
                const updateValue = {
                  ...resumeInfo.profile,
                  lastname: e.target.value,
                };
                const updateResumeInfo = {
                  ...resumeInfo,
                  profile: updateValue,
                };
                setResumeInfo(updateResumeInfo);
              }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl>
            <FormLabel>Phone Number:</FormLabel>
            <FormGroup>
              <InputAdornment children="+" color="blue.600" />
              <Input
                type="tel"
                placeholder="phone number"
                maxLength={10}
                pattern="[0-9]{10}"
                value={resumeInfo.profile.phone}
                onChange={(e) => {
                  const updateValue = {
                    ...resumeInfo.profile,
                    phone: e.target.value,
                  };
                  const updateResumeInfo = {
                    ...resumeInfo,
                    profile: updateValue,
                  };
                  setResumeInfo(updateResumeInfo);
                }}
              />
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl>
            <FormLabel>Email address:</FormLabel>
            <Input
              type="email"
              placeholder="Your email address"
              value={resumeInfo.profile.email}
              onChange={(e) => {
                const updateValue = {
                  ...resumeInfo.profile,
                  email: e.target.value,
                };
                const updateResumeInfo = {
                  ...resumeInfo,
                  profile: updateValue,
                };
                setResumeInfo(updateResumeInfo);
              }}
            />
            <FormHelperText>
              Enter email address to get contacted for jobs
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl>
            <FormLabel>Linkedin:</FormLabel>
            <Input
              type="url"
              placeholder="https://example.com"
              pattern="https://.*"
              value={resumeInfo.profile.linkedin}
              onChange={(e) => {
                const updateValue = {
                  ...resumeInfo.profile,
                  linkedin: e.target.value,
                };
                const updateResumeInfo = {
                  ...resumeInfo,
                  profile: updateValue,
                };
                setResumeInfo(updateResumeInfo);
              }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl>
            <FormLabel>Github:</FormLabel>
            <Input
              type="url"
              placeholder="https://example.com"
              pattern="https://.*"
              value={resumeInfo.profile.github}
              onChange={(e) => {
                const updateValue = {
                  ...resumeInfo.profile,
                  github: e.target.value,
                };
                const updateResumeInfo = {
                  ...resumeInfo,
                  profile: updateValue,
                };
                setResumeInfo(updateResumeInfo);
              }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl>
            <FormLabel>Portfolio or Website:</FormLabel>
            <Input
              type="url"
              placeholder="https://example.com"
              pattern="https://.*"
              value={resumeInfo.profile.website}
              onChange={(e) => {
                const updateValue = {
                  ...resumeInfo.profile,
                  website: e.target.value,
                };
                const updateResumeInfo = {
                  ...resumeInfo,
                  profile: updateValue,
                };
                setResumeInfo(updateResumeInfo);
              }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl style={{ display: addressSection ? "block" : "none" }}>
            <FormLabel>Address: </FormLabel>
            <Input
              type="text"
              placeholder="city, country"
              value={resumeInfo.profile.address}
              onChange={(e) => {
                const updateValue = {
                  ...resumeInfo.profile,
                  address: e.target.value,
                };
                const updateResumeInfo = {
                  ...resumeInfo,
                  profile: updateValue,
                };
                setResumeInfo(updateResumeInfo);
              }}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Button
        color="primary"
        onClick={() => {
          setAddressSection(!addressSection);
        }}
        isDisabled={addressSection}
        w="max-content"
        rightIcon={<AddIcon />}
      >
        Add Address
      </Button>
      <Center sx={{ mt: 8 }}>
        <Button
          color="primary"
          onClick={() => {
            setPage((p) => p + 1);
          }}
          rightIcon={<ChevronRightIcon />}
        >
          Save
        </Button>
      </Center>
    </Stack>
  );
};

export default BasicDetails;
