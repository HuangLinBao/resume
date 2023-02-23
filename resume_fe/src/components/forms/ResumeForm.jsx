import { Box, Stack } from "@mui/system";
import React from "react";
import BasicDetails from "./BasicDetailsForm";
import EduacationDetails from "./EduForm";
import ProfessionalDetails from "./ProInfoForm";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const ResumeForm = () => {
  const [page, setPage] = React.useState(0);

  const initialState = {
    profile: {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      website: "",
      address: "",
    },
    professional: {
      summary: "",
      skills: "",
      work: [],
    },
    education: [],
    certification: [],
  };

  const [resumeInfo, setResumeInfo] = useState(initialState);

  const formPage = [
    "Profile Details",
    "Professional Experience",
    "Educational Details",
  ];

  const renderForm = () => {
    switch (page) {
      case 0:
        return (
          <BasicDetails
            resumeInfo={resumeInfo}
            setResumeInfo={setResumeInfo}
            setPage={setPage}
          />
        );
      case 1:
        return (
          <ProfessionalDetails
            resumeInfo={resumeInfo}
            setResumeInfo={setResumeInfo}
            setPage={setPage}
          />
        );
      case 2:
        return (
          <EduacationDetails
            resumeInfo={resumeInfo}
            setResumeInfo={setResumeInfo}
            setPage={setPage}
          />
        );
      default:
        return;
    }
  };

  return (
    <Stack mb="50px">
      <Center
        style={{ display: page === 3 ? "none" : "flex" }}
        w="100%"
        px="12px"
        flexDir="column"
      >
        <Heading p={4}>
          Build Your Resume <ModeEditIcon boxSize={8} />
        </Heading>
        <Box w="60%" borderRadius="lg">
          <BorderLinearProgress
            variant="determinate"
            value={page === 0 ? 33.3 : page === 1 ? 66.6 : 100}
          />
        </Box>
      </Center>
    </Stack>
  );
};

export default ResumeForm;
