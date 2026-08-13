export const UserRolesEnum = {
    ADMIN: "admin",
    PROJECT_ADMIN: "project_admin",
    MEMBER: "member",
}

export const AvailableUserRoles = Object.values(UserRolesEnum); // ["admin", "project_admin", "member"]

export const TaskStatusEnum = {
  TODO: "todo",
  IN_PROGRESS: "in_progress",
  DONE: "done",
}

export const AvailableTaskStatues = Object.values(TaskStatusEnum); // ["todo", "in_progress", "done"]