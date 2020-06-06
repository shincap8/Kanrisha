# API Kanrisha

|               Request               | Type |               Routes              |                                                          Parameters                                                          |
|:-----------------------------------:|:----:|:---------------------------------:|:----------------------------------------------------------------------------------------------------------------------------:|
|            Create manager           | POST |          /singUp/manager          |                                       { name: String, email: String, password: String }                                      |
|          Create freelancer          | POST |         /singUp/freelancer        |                                       { name: String, email: String, password: String }                                      |
|            login manager            | POST |          /signIn/manager          |                                              { email: String, password: String }                                             |
|           login freelancer          | POST |         /signIn/freelancer        |                                              { email: String, password: String }                                             |
|          Create new project         | POST |            /new-project           |           { managerId: String, name: String, description: String, status: Boolean, deadline: String, advanced: 0 }           |
|           Create new task           | POST |             /new-task             | { name: String, description: String, projectId: String, weight: Number, tasktype: Number, amount: number, deadline: String } |
|          Create new comment         | POST |         /createnewcomment         |                 { title: String, taskId: String, description: String, Idowner: String, profiletype: Number }                 |
|        add task to freelancer       | POST | /tasks/addfreelancers             |                              { taskId: String, freelancersids: ["String"], projectId: "String" }                             |
| Update task's advance by freelancer |  PUT |           /modifyadvance          |                                    { taskId: String, freelancerId: String, value: Number }                                   |
|       change project's status       | PUT  |      /changestatus/projectid      |                                                                                                                              |
|        All manager's projects       |  GET |        /projects/managerId        |                                                                                                                              |
|          Project's advance          |  GET |     /project-advance/projectId    |                                                                                                                              |
|            Task's advance           |  GET |        /task-advance/taskId       |                                                                                                                              |
|           All freelancers           |  GET |          /all-freelancers         |                                                                                                                              |
|      All project's freelancers      |  GET |   /project/freelancers/projectid  |                                                                                                                              |
|        All task's freelancers       |  GET |      /task/freelancers/taskid     |                                                                                                                              |
|            Task's advance           |  GET |        /task-advance/taskid       |                                                                                                                              |
|          Project's advance          |  GET |     /project-advance/projectid    |                                                                                                                              |
|         All task's comments         |  GET |       /comments-task/taskid       |                                                                                                                              |
|      Active projects by manager     |  GET |     /active-project/idmanager     |                                                                                                                              |
|            Project's task           |  GET |      /project/tasks/projectid     |                                                                                                                              |
|           Freelancer by id          |  GET |      /freelancer/freelancerid     |                                                                                                                              |
|            Manager by id            |  GET |         /manager/managerId        |                                                                                                                              |
|     freelancer's task by project    |  GET |    /task/idproject/idfreelancer   |                                                                                                                              |
|       all freelancer's project      |  GET | /project/freelanceer/freelancerid |                                                                                                                              |
|                                     |      |                                   |                                                                                                                              |
|                                     |      |                                   |                                                                                                                              |
|                                     |      |                                   |                                                                                                                              |
|                                     |      |                                   |                                                                                                                              |
|                                     |      |                                   |                                                                                                                              |
|                                     |      |                                   |                                                                                                                              |
