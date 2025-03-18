import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

export const sidebarData = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Users List",
    url: "/dashboard/users",
    icon: Home,
  },
  {
    title: "Coaches List",
    url: "/dashboard/coaches",
    icon: Home,
  },
  {
    title: "Message Inbox",
    url: "/dashboard/inbox",
    icon: Home,
    children: [
      {
        title: "User Inbox",
        url: "/dashboard/user-inbox",
      },
      {
        title: "Coach Inbox",
        url: "/dashboard/coach-inbox",
      },
    ],
  },
  {
    title: "Fitness",
    url: "#",
    icon: Home,
    children: [
      {
        title: "Exercises",
        url: "/dashboard/exercises",
      },
      {
        title: "Workouts",
        url: "/dashboard/workouts",
      },
    ],
  },
  {
    title: "Nutrition",
    url: "/dashboard/nutrition",
    icon: Home,
    children: [
      {
        title: "Recipes",
        url: "/dashboard/nutrition/recipes",
      },
      {
        title: "Ingredients",
        url: "/dashboard/nutrition/ingredients",
      },
    ],
  },
  {
    title: "Enquiry Form",
    url: "/dashboard/enquiry-form",
    icon: Home,
  },
  {
    title: "Push Notification",
    url: "/dashboard/notifications",
    icon: Home,
  },
  {
    title: "Withdraw Requests",
    url: "/dashboard/withdraw-requests",
    icon: Home,
  },
  {
    title: "Subscriptions",
    url: "/dashboard/subscriptions",
    icon: Home,
    children: [
      {
        title: "User Subscriptions",
        url: "/dashboard/subscriptions/user-subscriptions",
      },
      {
        title: "Coaches Subscriptions",
        url: "/dashboard/subscriptions/coach-subscriptions",
      },
    ],
  },
  {
    title: "Packages",
    url: "/dashboard/packages",
    icon: Home,
  },

  {
    title: "Blogs",
    url: "/dashboard/blogs",
    icon: Home,
  },
];
