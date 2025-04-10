import { buildConfig } from "@/utils/buildConfig/buildConfig";
import { SidebarItem } from "../models/sidebarItem.model";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  GlobeAmericasIcon,
  FilmIcon,
  ChatBubbleBottomCenterTextIcon,
  HeartIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon as HomeIconSolid,
  MagnifyingGlassIcon as MagnifyingGlassIconSolid,
  GlobeAmericasIcon as GlobeAmericasIconSolid,
  FilmIcon as FilmIconSolid,
  ChatBubbleBottomCenterTextIcon as ChatBubbleBottomCenterTextIconSolid,
  HeartIcon as HeartIconSolid,
  PlusCircleIcon as PlusCircleIconSolid,
} from "@heroicons/react/16/solid";

export const sidebarItems: SidebarItem[] = [
  {
    id: 0,
    title: "Home",
    outlineIcon: HomeIcon,
    solidIcon: HomeIconSolid,
    link: "/",
    active: buildConfig.enableHomePage,
  },
  {
    id: 1,
    title: "Search",
    outlineIcon: MagnifyingGlassIcon,
    solidIcon: MagnifyingGlassIconSolid,
    link: "/search",
    active: buildConfig.enableSearchPage,
  },
  {
    id: 2,
    title: "Explore",
    outlineIcon: GlobeAmericasIcon,
    solidIcon: GlobeAmericasIconSolid,
    link: "/explore",
    active: buildConfig.enableExplorePage,
  },
  {
    id: 3,
    title: "Reels",
    outlineIcon: FilmIcon,
    solidIcon: FilmIconSolid,
    link: "/reels",
    active: buildConfig.enableReelsPage,
  },
  {
    id: 4,
    title: "Messages",
    outlineIcon: ChatBubbleBottomCenterTextIcon,
    solidIcon: ChatBubbleBottomCenterTextIconSolid,
    link: "/messages",
    active: buildConfig.enableMessagesPage,
  },
  {
    id: 5,
    title: "Notifications",
    outlineIcon: HeartIcon,
    solidIcon: HeartIconSolid,
    link: "/notifications",
    active: buildConfig.enableNotificationsPage,
  },
  {
    id: 6,
    title: "Create",
    outlineIcon: PlusCircleIcon,
    solidIcon: PlusCircleIconSolid,
    link: "/create",
    active: buildConfig.enableCreatePage,
  },
];
