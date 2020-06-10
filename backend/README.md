# API Kanrisha
## File Structures
#### 1. Routes: 
contains the scripts to control the data flux between Kanrisha's frontend.
###### 1.1 advances.js:
- /new- task,
- /tasks/addfreelancers.
- /tasks/deletefreelancers,
- /createcomment,
- /comments-task/:id,
- /task/freelancers/:id,
- /task/:idproject/:idfreelancer,
- /task/:id
###### 1.2 freelancers.js:
- /signUp/freelancer,
- /signIn/freelancer,
- /all-freelancers,
- /all-freelancers/:taskId,
- /freelancer/:id,
###### 1.3 manager.js:
- /signUp/manager,
- /signIn/manager,
- /manager/:id,
- /projects/:id
###### 1.4 project.js:
- /new-project,
- /project/freelancer/:freelancerid,
- /project/:id,
- /active-project/:id,
- /active-project/freelancer/:id,
- /project/freelancers/:id,
- /project/tasks/:id,
- /changestatus/:id
###### 1.5 task.js:
- /new-task,
- /tasks/addfreelancers,
- /tasks/deletefreelancers,
- /createcomment,
- /comments-task/:id,
- /task/freelancers/:id,
- /task/:idproject/:idfreelancer,
- /task/:id

## 2 Models:
contains Object class uses in the database.
###### 2.1: advance_measure.js
###### 2.2: comments.js
###### 2.3: freelancer.js
###### 2.4: manager.js
###### 2.5: project.js
###### 2.6: task.js

## Routes

|               Request               | Type |               Routes              |                                                          Parameters                                                          |
|:-----------------------------------:|:----:|:---------------------------------:|:----------------------------------------------------------------------------------------------------------------------------:|
|            Create manager           | POST |          /singUp/manager          |                                       { name: String, email: String, password: String }                                      |
|          Create freelancer          | POST |         /singUp/freelancer        |                                       { name: String, email: String, password: String }                                      |
|            Login manager            | POST |          /signIn/manager          |                                              { email: String, password: String }                                             |
|           Login freelancer          | POST |         /signIn/freelancer        |                                              { email: String, password: String }                                             |
|          Create new project         | POST |            /new-project           |           { managerId: String, name: String, description: String, status: Boolean, deadline: String, advanced: 0 }           |
|           Create new task           | POST |             /new-task             | { name: String, description: String, projectId: String, weight: Number, tasktype: Number, amount: number, deadline: String } |
|          Create new comment         | POST |         /createnewcomment         |                 { title: String, taskId: String, description: String, Idowner: String, profiletype: Number }                 |
|        Add task to freelancer       | POST | /tasks/addfreelancers             |                              { taskId: String, freelancersids: ["String"], projectId: "String" }                             |
| Update task's advance by freelancer |  PUT |           /modifyadvance          |                                    { taskId: String, freelancerId: String, value: Number }                                   |
|       Change project's status       | PUT  |      /changestatus/projectid      |                                                                                                                              |
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
|     Freelancer's task by project    |  GET |    /task/idproject/idfreelancer   |                                                                                                                              |
|       All freelancer's project      |  GET | /project/freelancer/freelancerid |                                                                                                                              |
|       update the list of freelancers for task                              |     GET |       all-freelancers/:taskId                            |                                                                                                                              |
|     Active project by freelancer                               |      GET | active-project/freelancer/frelancerid                                   |                                                                                                                              |
|         task's advances by freelancer                            |  GET    |    freelancer/task-advance/:taskId/:freelancerId                               |                                                                                                                              |
|                                     |      |                                   |                                                                                                                              |
|                                     |      |                                   |                                                                                                                              |
|                                     |      |                                   |                                                                                                                              |
