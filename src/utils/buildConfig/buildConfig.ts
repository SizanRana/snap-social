import { BuildConfig } from "./buildConfig.model";

const getEnvKeyValue = (key: string): string => {
  const envValue = process.env[key];

  if (!envValue) {
    throw new Error(`Environment not found for key ${key}`);
  }

  return envValue;
};

export const buildConfig: BuildConfig = {
  enableHomePage: getEnvKeyValue("NEXT_PUBLIC_ENABLE_HOME_PAGE") === "true",
  enableSearchPage: getEnvKeyValue("NEXT_PUBLIC_ENABLE_SEARCH_PAGE") === "true",
  enableExplorePage:
    getEnvKeyValue("NEXT_PUBLIC_ENABLE_EXPLORE_PAGE") === "true",
  enableReelsPage: getEnvKeyValue("NEXT_PUBLIC_ENABLE_REELS_PAGE") === "true",
  enableMessagesPage:
    getEnvKeyValue("NEXT_PUBLIC_ENABLE_MESSAGES_PAGE") === "true",
  enableNotificationsPage:
    getEnvKeyValue("NEXT_PUBLIC_ENABLE_NOTIFICATIONS_PAGE") === "true",
  enableCreatePage: getEnvKeyValue("NEXT_PUBLIC_ENABLE_CREATE_PAGE") === "true",
  enableProfilePage:
    getEnvKeyValue("NEXT_PUBLIC_ENABLE_PROFILE_PAGE") === "true",
};
