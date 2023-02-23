import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
  Stack,
} from "@mui/material";
import React from "react";

const ProfessionalDetails = (props) => {
  const { resumeInfo, setResumeInfo, setPage } = props;

  const [workSection, setWorkSection] = React.useState([]);

  const [workData, setWorkData] = React.useState({
    jobTitle: "",
    company: "",
    startDate: "",
    endDate: "",
    jobDetails: "",
  });

  const saveData = () => {
    const isEmpty = Object.values(workData).some((x) => x.trim() === "");
    if (isEmpty) return;

    const duplicate = () => {
      let arr = resumeInfo.professional.work;
      for (let i = 0; i < arr.length; i++) {
        if (JSON.stringify(arr[i]) === JSON.stringify(workData)) {
          return true;
        }
      }
      return false;
    };

    if (duplicate()) return;

    const updatedValue = {
      ...resumeInfo.professional,
      work: resumeInfo.professional.work.concat(workData),
    };
    const updateResumeInfo = {
      ...resumeInfo,
      professional: updatedValue,
    };
    setResumeInfo(updateResumeInfo);
  };

  React.useEffect(() => {
    saveData();
  }, [workSection.length]);

  const createWorkSection = () => {
    setWorkSection(workSection.concat(workExperienceForm()));
  };

  const workExperienceForm = () => {
    return (
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl>
            <FormLabel>Job Title: </FormLabel>
            <Input
              type="text"
              placeholder="Software developer"
              onChange={(e) => {
                setWorkData((prev) => ({ ...prev, jobTitle: e.target.value }));
              }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl>
            <FormLabel>Company/Employer: </FormLabel>
            <Input
              type="text"
              placeholder="Employer(Company) name"
              onChange={(e) => {
                setWorkData((prev) => ({ ...prev, company: e.target.value }));
              }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl>
            <FormLabel>Start date: </FormLabel>
            <Input
              type="text"
              placeholder="Enter start date jan 2022"
              onChange={(e) => {
                setWorkData((prev) => ({ ...prev, startDate: e.target.value }));
              }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl>
            <FormLabel>End date: </FormLabel>
            <Input
              type="text"
              placeholder="Enter end date jan 2023"
              onChange={(e) => {
                setWorkData((prev) => ({ ...prev, endDate: e.target.value }));
              }}
            />
            <FormHelperText>write present if ongoing</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <FormLabel>JOb Details:</FormLabel>
            <Textarea
              placeholder="Describe your role and achievements"
              onChange={(e) => {
                setWorkData((prev) => ({
                  ...prev,
                  jobDetails: e.target.value,
                }));
              }}
            />
            <FormHelperText>Hit enter for newline</FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    );
  };

  return (
    <Stack spacing={4}>
      <FormControl>
        <FormLabel>Summary:</FormLabel>
        <TextField
          id="filled-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          placeholder="Introduce yourself by pitching your skills & explaining how they can be of value to a company"
          value={resumeInfo.professional.summary}
          onChange={(e) => {
            const updateValue = {
              ...resumeInfo.professional,
              summary: e.target.value,
            };
            const updateResumeInfo = {
              ...resumeInfo,
              professional: updateValue,
            };
            setResumeInfo(updateResumeInfo);
          }}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Skills:</FormLabel>
        <TextField
          id="filled-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          placeholder="Communication, Teambuilding, etc.."
          value={resumeInfo.professional.skills}
          onChange={(e) => {
            const updateValue = {
              ...resumeInfo.professional,
              skills: e.target.value,
            };
            const updateResumeInfo = {
              ...resumeInfo,
              professional: updateValue,
            };
            setResumeInfo(updateResumeInfo);
          }}
        />
        <FormHelperText>Hit enter for newline</FormHelperText>
      </FormControl>
      {workSection}
      <Button
        colorScheme="messenger"
        onClick={createWorkSection}
        w="max-content"
        rightIcon={<AddIcon />}
      >
        Add Work Experience
      </Button>
      <Stack spacing={8} justify="center">
        <Button
          color="primary"
          onClick={() => {
            setPage((p) => p - 1);
          }}
          leftIcon={<ChevronLeftIcon />}
        >
          back
        </Button>
        <Button
          color="primary"
          onClick={() => {
            saveData();
            setPage((p) => p + 1);
          }}
          rightIcon={<ChevronRightIcon />}
        >
          Save
        </Button>
      </Stack>
    </Stack>
  );
};

export default ProfessionalDetails;
