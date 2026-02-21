import { supportConfig, supportProjects, supportData } from "./data/support";
import { commonSocials, commonContact } from "./data/common";
import { GlobalConfig } from "@shared/types";

// Default exports for backward compatibility (defaults to Support profile)
// This is the ONLY thing the main app should need for initial load.
export const portfolioConfig: GlobalConfig = {
  pl: supportConfig.pl,
  en: supportConfig.en,
  socials: commonSocials,
  contact: commonContact
};

export const projects = supportProjects;
export const cvData = supportData;

// DO NOT EXPORT resumeProfiles HERE. 
// It forces bundling of all data.
// Resume.tsx will import specific files dynamically.
