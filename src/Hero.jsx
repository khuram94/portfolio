import React from "react";
import styled from "styled-components";
import { Link, Tooltip } from "@material-ui/core";
import { Avatar, Typography, IconButton } from "@mui/material";
// import { breakpoint, Box, Text } from '@sky-uk/orion-toolkit-react-4';
// import { BasicMarkdown } from '@sky-uk/toolkit-react';
import Pic from "./images/avatar.png";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const colourMappings = {
  diamond: ["rgba(37, 37, 37, 0.4) 0%", "rgba(37, 37, 37) 100%"],
  platinum: ["rgba(125, 124, 163, 0.4) 0%", "rgba(125, 124, 163) 100%"],
  gold: ["rgba(194, 135, 36, 0.4) 0%", "rgba(194, 135, 36) 100%"],
  silver: ["rgba(110, 120, 123, 0.4) 0%", "rgba(110, 120, 123) 100%"],
  blue: ["rgba(135, 206, 235, 0.4) 0%", "rgba(135, 206, 235) 100%"],
};

const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: -12.5%;
  width: 125%;
  text-align: center;
  height: 45vh;
  border-radius: 0 0 50% 50%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-image linear-gradient(to right, #8e2de2, #4a00e0);
`;

//blue green
// background-color #20bf55;
// background-image linear-gradient(315deg, #20bf55 0%, #01baef 74%);

//dusty grass
//  background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);

//amin (purple)
//background-image: linear-gradient(to right, #8e2de2, #4a00e0);

//blue raspberry
//background-image: linear-gradient(to right, #00b4db, #0083b0);

//mango
//background-image: radial-gradient(circle farthest-side, #fceabb, #f8b500);

// ${({ gradient }) =>
// gradient &&
// ` background: radial-gradient(
//   35% 49.8% at 50% 50.2%,
// ${gradient[0]},
// ${gradient[1]}
// );
// `}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// @media (min-width: ${breakpoint('md')}) {
//     height: 60vh;
//   }

//   @media (min-width: ${breakpoint('xl')}) {
//     height: 75vh;
//   }

const tier = "blue";

const text = "Get more with \nSky Mobile VIP";

const dummyFunc = () => {};

export const Hero = () => (
  <BackgroundContainer
    gradient={colourMappings[tier]}
    data-test-id="page-background-section"
  >
    <Box>
      <Avatar src={Pic} sx={{ width: 150, height: 150 }} />
      <Typography variant="h4" component="h4" marginTop="20px" color="white">
        KHURAM ALI
      </Typography>
      <Typography variant="h5" component="h5" color="white">
        FULL-STACK WEB DEVELOPER
      </Typography>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <IconButton
          style={{ display: "flex", alignItems: "center", color: "black" }}
          as={Link}
          href="https://www.linkedin.com/in/khuram-ali-b32389140"
          target="_blank"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          style={{ display: "flex", alignItems: "center", color: "black" }}
          as={Link}
          href="mailto:khuram.a@live.com"
          target="_blank"
        >
          <EmailIcon />
        </IconButton>
        <Tooltip title="07484612700">
          <PhoneAndroidIcon />
        </Tooltip>
        <Tooltip title="Derby, UK">
          <LocationOnIcon />
        </Tooltip>
      </div>
    </Box>
  </BackgroundContainer>
);
