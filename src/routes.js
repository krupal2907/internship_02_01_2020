import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout, CalenderLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import EmployeeProfileLite from "./views/EmployeeProfileLite";
import AddNewEmployee from "./views/AddNewEmployee";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import Calender from "./components/Calender"
// import { testModeAPI } from "react-ga";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/blog-overview" />
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/employee-details/:id",
    layout: DefaultLayout,
    component: EmployeeProfileLite
  },
  {
    path: "/add-new-employee",
    layout: DefaultLayout,
    component: AddNewEmployee
  },
  {
    path: "/calender",
    layout: CalenderLayout,
    component: Calender
  }
];


