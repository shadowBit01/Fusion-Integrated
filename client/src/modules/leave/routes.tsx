import { createRoutesFromElements, RouteObject } from "react-router-dom";
import { LeaveApplicationForm } from "./LeaveApplicationForm";
import { LeaveDashboard } from "./LeaveDashboard";
import { LeaveApprovalQueue } from "./LeaveApprovalQueue";

export const leaveRoutes: RouteObject[] = [
  {
    path: "/leave",
    element: <LeaveDashboard />,
  },
  {
    path: "/leave/apply",
    element: <LeaveApplicationForm />,
  },
  {
    path: "/leave/approvals",
    element: <LeaveApprovalQueue />,
  },
];

export const leavePaths = {
  LEAVE: "/leave",
  APPLY: "/leave/apply",
  APPROVALS: "/leave/approvals",
};
