// Bitrix24CRM.jsx
import React from "react";
import { Tab, Nav, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Bitrix24CRM.css";

const tabs = [
   "CRM",
   "Tasks & Projects",
  "Social Intranet",
  "Chat & Video",
  "Documents",
  "Drive",
  "Calendars",
  "Mail",
  "Clients",
  "Telephony",
  "HR",
  "Mobile",
  "Sites",
];

const Bitrix24CRM = () => {
  return (
    <div className="bitrix24-wrapper">
      <div
        className="service-banner"
        style={{ backgroundImage: "url(/assets/img/bitrix24-bg.jpeg)" }}
      >
        <h1>Authorised Partner of Bitrix24</h1>
        <h3>
          Buy Bitrix24 from us and get fully-customized Bitrix24 solutions.
        </h3>
      </div>

      <div className="text-center my-4">
        <a
          href="https://udconsultant.bitrix24.site/UniqueDesignConsultant/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-default"
        >
          Book your free demo
        </a>
        <a
          href="https://udconsultant.bitrix24.site/UniqueDesignConsultant/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-default"
        >
          Get a Quote
        </a>
      </div>

      <div className="bitrix24-tabs">
        <Tab.Container defaultActiveKey="Social Intranet">
          <Row>
            <Col sm={12}>
              <Nav variant="tabs" className="bitrix-nav-tabs">
                {tabs.map((tab) => (
                  <Nav.Item key={tab}>
                    <Nav.Link eventKey={tab}>{tab}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col sm={12}>
              <Tab.Content className="tab-content p-3">
                <Tab.Pane eventKey="Social Intranet">
                  <div className="row">
                    <div className="col-md-6 brdr-btm">
                      <h2>Social Intranet</h2>
                      <ul>
                        <li>Integrate to the power of corporate social networks into your company’s day-to-day operations!</li>
                        <li>Manage tasks, share documents and track time with these social interfaces</li>
                        <li>Maximize communications and productivity of your employees.</li>
                        <li>Use Bitrix24 in your workplace or anywhere with the mobile app</li>
                        <li>Highly customizable Bitrix24 can be accessed using its own host version and source code.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 brdr-btm">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/Social-Intranet.png" alt="Social Intranet" />
                    </div>

                    <div className="col-md-6 brdr-btm top40">
                      <img className="img-responsive" src="/assets/img/bitrix24/Activity-Stream.png" alt="Activity Stream" />
                    </div>
                    <div className="col-md-6 brdr-btm top40">
                      <h2>Activity Stream</h2>
                      <ul>
                        <li>An activity stream includes all of the production, social, and hybrid functionality portions of an intranet.</li>
                        <li>Every employee can choose what type of updates to show because they understand what’s happening</li>
                        <li>Each user can contribute to the discussion and personalize the activity stream.</li>
                        <li>Bitstream24 provides real-time updates, smart tracking, notification settings and company announcements.</li>
                        <li>Schedule events, attach files, and receive immediate feedback from colleagues.</li>
                      </ul>
                    </div>

                    <div className="col-md-6 brdr-btm top40">
                      <h2>The 'Like!' button</h2>
                      <ul>
                        <li>Add comments directly from the main interface</li>
                        <li>Run tasks and document viewers without further navigation</li>
                        <li>Like tasks and documents associated with projects</li>
                        <li>Your favorite content is prioritized in search results</li>
                        <li>Easy to find useful and popular content.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 brdr-btm top40">
                      <img className="img-responsive" src="/assets/img/bitrix24/The-Like-button.png" alt="Like Button" />
                    </div>

                    <div className="col-md-6 brdr-btm top40">
                      <img className="img-responsive" src="/assets/img/bitrix24/Conversations.png" alt="Conversations" />
                    </div>
                    <div className="col-md-6 brdr-btm top40">
                      <h2>Conversations</h2>
                      <ul>
                        <li>A conversation is a way to easily start a task or document</li>
                        <li>You can attach a document or image when you start a new session in the activity stream.</li>
                        <li>Make a private conversation with colleagues and add other participants</li>
                        <li>Send private messages through Instant Messenger</li>
                      </ul>
                    </div>

                    <div className="col-md-6 brdr-btm top40">
                      <h2>Badges</h2>
                      <ul>
                        <li>Badge is a good motivational tool!</li>
                        <li>Use it to show gratitude to your colleagues.</li>
                        <li>Supervisors and managers may provide compensation</li>
                        <li>This badge is displayed in the activity stream and user profile.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 brdr-btm top40">
                      <img className="img-responsive" src="/assets/img/bitrix24/Badges.png" alt="Badges" />
                    </div>

                    <div className="col-md-6 brdr-btm top40">
                      <img className="img-responsive" src="/assets/img/bitrix24/Announcements.png" alt="Announcements" />
                    </div>
                    <div className="col-md-6 brdr-btm top40">
                      <h2>Announcements</h2>
                      <ul>
                        <li>Do not miss an important announcement!</li>
                        <li>Click Notification Message Types in the activity stream to see important announcements for everyone</li>
                        <li>Notifications continue to be displayed until you mark them as read.</li>
                      </ul>
                    </div>

                    <div className="col-md-6 brdr-btm top40">
                      <h2>Photo Gallery</h2>
                      <ul>
                        <li>Create as many albums as you want</li>
                        <li>Quickly upload files and add notes with bulk loader</li>
                        <li>The photo gallery is integrated with the event stream</li>
                        <li>Access photos by clicking on the thumbnails</li>
                      </ul>
                    </div>
                    <div className="col-md-6 brdr-btm top40">
                      <img className="img-responsive" src="/assets/img/bitrix24/Photo-Gallery.png" alt="Photo Gallery" />
                    </div>

                    <div className="col-md-6 brdr-btm top40">
                      <img className="img-responsive" src="/assets/img/bitrix24/Workflows.png" alt="Workflows" />
                    </div>
                    <div className="col-md-6 brdr-btm top40">
                      <h2>Workflows</h2>
                      <ul>
                        <li>Bitrix24 standard and professional programs include standard workflows.</li>
                        <li>If an employee needs to take the time, pay the cost, ask for technical support, or make a purchase request, the employee can request it through the activity stream.</li>
                        <li>All workflow updates are also posted to the activity stream.</li>
                      </ul>
                    </div>

                    <div className="col-md-6 brdr-btm top40">
                      <h2>Collaborate by email</h2>
                      <ul>
                        <li>Create posts from e-mail and add e-mail recipients to your posts.</li>
                        <li>To create a new post in an email, simply forward it to the special address listed in the employee profile.</li>
                        <li>Whether you choose an intranet, extranet, or email collaboration tool, all content is indexed and stored in your Bitrix24 account.</li>
                        <li>This option is completely free and there is no limit.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 brdr-btm top40">
                      <img className="img-responsive" src="/assets/img/bitrix24/Collaborate-by-email.png" alt="Collaborate by Email" />
                    </div>

                    <div className="col-md-6 brdr-btm top40">
                      <img className="img-responsive" src="/assets/img/bitrix24/soc_net_integration.png" alt="Social Network Integration" />
                    </div>
                    <div className="col-md-6 brdr-btm top40">
                      <h2>Integration with popular Social Networks</h2>
                      <ul>
                        <li>Post tweets to your activity stream on your intranet using the #b24 hashtag.</li>
                        <li>Post your watch entry information and the number of completed tasks on Facebook or Twitter.</li>
                      </ul>
                    </div>
                  </div>
                  
                </Tab.Pane>
                 <Tab.Pane eventKey="Tasks & Projects">
                  <div className="row">
                    <div className="col-md-6">
                      <h2>Project Management and Tasks</h2>
                      <ul>
                        <li>Projects can be defined, assigned to colleagues for themselves, or delegated on receipt.</li>
                        <li>The project management functions of the product are built into “Group”.</li>
                        <li>All files, discussions, and tasks associated with a project can only be saved and accessed by users associated with the project.</li>
                        <li>You can track the time spent on each task in the project and integrate tasks into group scheduling.</li>
                        <li>Projects can be created on an extranet for full participation by customers or partners.</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/Project-Management-Tasks.png" alt="Project Management and Tasks" />
                    </div>

                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/Gantt-Chart.png" alt="Gantt Chart" />
                    </div>
                    <div className="col-md-6 top40">
                      <h2>Gantt Chart</h2>
                      <ul>
                        <li>Jobs and subtasks can be viewed in Gantt charts with state, contact, and time relationships.</li>
                        <li>This helps you to understand project progress at a glance and to identify potential or existing delays.</li>
                        <li>Even after you create a job, you can modify it directly in a table or Gantt chart.</li>
                        <li>Complete deadlines quickly, add subtasks and other changes, and send automatic notifications to all relevant users.</li>
                      </ul>
                    </div>

                    <div className="col-md-6 top40">
                      <h2>Task dependencies</h2>
                      <ul>
                        <li>This tool allows you to establish logical relationships between tasks.</li>
                        <li>All four dependency types are supported.</li>
                        <li>Simply drag the arrow from one task to another to set dependencies.</li>
                        <li>Once the dependency is set, moving the job automatically changes the start / end dates of other tasks in the project as needed.</li>
                        <li>Custom task fields are also available.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/Task-dependencies.png" alt="Task dependencies" />
                    </div>

                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/kanban_sm.png" alt="Kanban" />
                    </div>
                    <div className="col-md-6 top40">
                      <h2>Kanban</h2>
                      <ul>
                        <li>Kanban view can be used for tasks and projects (work groups) and internal task schedulers.</li>
                        <li>Consistent with the agile project management approach</li>
                        <li>Kanban steps are fully customizable and can be set individually for each user.</li>
                        <li>All Bitrix24 programs offer unlimited kanban, cards and checklists.</li>
                      </ul>
                    </div>

                    <div className="col-md-6 top40">
                      <h2>Employee Workload Management in tasks</h2>
                      <ul>
                        <li>Employee workload planning helps you complete more tasks on time</li>
                        <li>Determine which tasks are nearing expiration.</li>
                        <li>Supervisors can allocate time for each task and track the actual working time.</li>
                        <li>Get monthly reports for each job and each employee’s jobs.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/resourse_tracking_sm.png" alt="Employee Workload" />
                    </div>

                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/task_counter_sm.png" alt="Counters and roles" />
                    </div>
                    <div className="col-md-6 top40">
                      <h2>Counters and roles</h2>
                      <ul>
                        <li>Task counters help you remember tasks that require immediate attention.</li>
                        <li>They simplify tasks, roles and responsibilities of the counters</li>
                        <li>Employees can draw their own state of work with graphics, display departments, groups or individual employees.</li>
                      </ul>
                    </div>

                    <div className="col-md-6 top40">
                      <h2>Checklist</h2>
                      <ul>
                        <li>Add a checklist to your job and keep track of your progress.</li>
                        <li>This is useful if the task involves multiple steps or multiple participants.</li>
                        <li>Participants in this task can add scores to the list and mark completion.</li>
                        <li>You can now quickly see the exact status of your work in progress.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/task_checklist_en_sm.png" alt="Checklist" />
                    </div>

                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/task_templates_sm.png" alt="Templates and Automation" />
                    </div>
                    <div className="col-md-6 top40">
                      <h2>Templates and Automation</h2>
                      <ul>
                        <li>Duplicate tasks and task templates help automate routine chores and rework routines.</li>
                        <li>Suitable for repeat business processes such as the hiring / termination of employees, recruit new customers or start new projects.</li>
                        <li>Bitrix24 visual business process designers can trigger automatic task creation with specific events.</li>
                        <li>Tasks can be scheduled to repeat at time intervals (such as daily, weekly, every 10 days, every Saturday).</li>
                      </ul>
                    </div>

                    <div className="col-md-6 top40">
                      <h2>Workgroups</h2>
                      <ul>
                        <li>Group provides an efficient way to communicate using Bitrix24</li>
                        <li>Workgroup includes all the social networks and organizational tools needed for optimal operation.</li>
                        <li>Each group is like a small internal network, not only discuss important files and data, but also can save work, tracking and platform plans.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/workgroup_sm.png" alt="Workgroups" />
                    </div>

                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/task_reports_sm.png" alt="Task Reports" />
                    </div>
                    <div className="col-md-6 top40">
                      <h2>Task Reports</h2>
                      <ul>
                        <li>Job reports are an easy way to find when employees spend time on a job or project.</li>
                        <li>With this handy tool, you can see how many jobs are still being processed and how many jobs have been completed.</li>
                        <li>By default, job reports can be submitted weekly, monthly, or annually, but you can always set a custom report date.</li>
                        <li>Pre-defined efficiency report templates allow you to assess the effectiveness of your project participants.</li>
                        <li>Corporate executives can also help you analyze the efficiency of a department or company as a whole.</li>
                        <li>All reports can be easily exported into Excel files.</li>
                      </ul>
                    </div>

                    <div className="col-md-6 top40">
                      <h2>Report Builder</h2>
                      <ul>
                        <li>Report generator allows you to aggregate, filter, and sort report data</li>
                        <li>You can display it to the management in the format you want.</li>
                        <li>With the Generic Report Builder, you can collect the necessary data fields and evaluate the effects, productivity and total time spent on projects and tasks.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/task_report_sm.png" alt="Report Builder" />
                    </div>

                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/extranet_group_sm.png" alt="External Users" />
                    </div>
                    <div className="col-md-6 top40">
                      <h2>External Users</h2>
                      <ul>
                        <li>Extranet access security provides an independent space</li>
                        <li>Working groups can be shared with external users, such as customers, partners, freelancers, and other service providers.</li>
                        <li>Extranet groups offer the same functionality, but these third party users can see a variety of groups that belong to the task.</li>
                      </ul>
                    </div>

                    <div className="col-md-6 top40">
                      <h2>Tasks via Email</h2>
                      <ul>
                        <li>Bitrix24 supports email-to-tasks and tasks-to-email.</li>
                        <li>The user simply creates an e-mail by forwarding the e-mail to the special address provided in the configuration file.</li>
                        <li>Similarly, you can select an e-mail recipient as a participant, an observer, or someone responsible for completing a task.</li>
                        <li>Receive e-mail notifications whenever job updates or status changes.</li>
                        <li>Email recipients can leave comments on the task without having to access the Bitrix24 account.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/task_email_sm.png" alt="Tasks via Email" />
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="Chat & Video">
                  <div className="row">
                    <div className="col-md-6 brdr-btm">
                      <h2>Chat & Video Calls</h2>
                      <ul>
                        <li>Internal messenger for real-time communication.</li>
                        <li>Group chats, personal messaging, and image/file sharing.</li>
                        <li>Available on both web and mobile versions.</li>
                        <li>Offline message support, message history, and notifications.</li>
                        <li>Perfectly integrated into your daily workflow and tasks.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 brdr-btm">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/communications_main.png" alt="Chat & Video" />
                    </div>

                    <div className="col-md-6 brdr-btm top40">
                      <img className="img-responsive" src="/assets/img/bitrix24/im_sm.png" alt="Group Chat" />
                    </div>
                    <div className="col-md-6 brdr-btm top40">
                      <h2>Group Chat</h2>
                      <ul>
                        <li>Communicate instantly with your department or project team.</li>
                        <li>Create unlimited chat groups for specific tasks or goals.</li>
                        <li>Quickly attach images, videos, links, and documents.</li>
                        <li>Tag users to notify them directly inside chats.</li>
                      </ul>
                    </div>

                    <div className="col-md-6 brdr-btm top40">
                      <h2>Video Calls and Conferencing</h2>
                      <ul>
                        <li>One-on-one or group video calls integrated directly into Bitrix24.</li>
                        <li>No additional software needed — runs in browser or mobile app.</li>
                        <li>Screen sharing and recording features included.</li>
                        <li>Conferencing with up to 48 participants at once.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 brdr-btm top40">
                      <img className="img-responsive" src="/assets/img/bitrix24/im_sm.png" alt="Video Calls" />
                    </div>

                    <div className="col-md-6 brdr-btm top40">
                      <img className="img-responsive" src="/assets/img/bitrix24/screensharing_sm.png" alt="Screen Sharing" />
                    </div>
                    <div className="col-md-6 brdr-btm top40">
                      <h2>Screen Sharing</h2>
                      <ul>
                        <li>Present documents, slides, or your entire screen during calls.</li>
                        <li>Share screen during a live chat or conference call.</li>
                        <li>Participants can collaborate in real-time.</li>
                        <li>No need to install separate screen sharing software.</li>
                      </ul>
                    </div>

                    <div className="col-md-6 brdr-btm top40">
                      <h2>Mobile Communication</h2>
                      <ul>
                        <li>All messaging and calling features available on mobile app.</li>
                        <li>Chat, call, and share files on the go.</li>
                        <li>Instant push notifications to stay updated from anywhere.</li>
                        <li>Perfect for remote teams and mobile workers.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 brdr-btm top40">
                      <img className="img-responsive" src="/assets/img/bitrix24/app_sm.png" alt="Mobile Communication" />
                    </div>
                  </div>
                </Tab.Pane>
                 <Tab.Pane eventKey="Documents">
                  <div className="row">
                    <div className="col-md-6 brdr-btm">
                      <h2>Document Management</h2>
                      <ul>
                        <li>Bitrix24 gives you full control over document access and collaboration.</li>
                        <li>Upload and store files in a structured manner for easy access.</li>
                        <li>Files can be stored in personal, group, or company-wide drives.</li>
                        <li>Supports version control, sharing, commenting, and editing.</li>
                        <li>Collaborate on documents in real time with colleagues.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 brdr-btm">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/docs_main.png" alt="Document Management" />
                    </div>

                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/personal_files_sm.png" alt="Online Editing" />
                    </div>
                    <div className="col-md-6 top40">
                      <h2>Online Document Editing</h2>
                      <ul>
                        <li>Edit documents directly from Bitrix24 without downloading.</li>
                        <li>Use tools like Google Docs, Microsoft Office Online, or OnlyOffice.</li>
                        <li>Changes are saved and synchronized instantly.</li>
                        <li>Control who can view or edit with granular permissions.</li>
                      </ul>
                    </div>

                    <div className="col-md-6 top40">
                      <h2>Document Sharing</h2>
                      <ul>
                        <li>Share documents internally with specific users or entire teams.</li>
                        <li>External sharing options allow you to send secure links to clients or vendors.</li>
                        <li>Optional password protection and expiration dates for links.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/docs_search_sm.png" alt="Document Sharing" />
                    </div>

                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/document_lock_sm.png" alt="Document Versioning" />
                    </div>
                    <div className="col-md-6 top40">
                      <h2>Version Control</h2>
                      <ul>
                        <li>All document versions are automatically saved.</li>
                        <li>Restore older versions or compare them with the latest edit.</li>
                        <li>Track who made changes and when.</li>
                        <li>Perfect for managing evolving project files and history.</li>
                      </ul>
                    </div>

                    <div className="col-md-6 top40">
                      <h2>Workflows & Approvals</h2>
                      <ul>
                        <li>Automate document approval processes with built-in workflows.</li>
                        <li>Use visual workflow designer to create custom steps.</li>
                        <li>Track document review status, feedback, and approvals easily.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/state_driven_bp_sm.png" alt="Workflows & Approvals" />
                    </div>
                  </div>
                </Tab.Pane>
                   <Tab.Pane eventKey="Drive">
                  <div className="row">
                    <div className="col-md-6 brdr-btm">
                      <h2>Bitrix24.Drive</h2>
                      <ul>
                        <li>Bitrix24.Drive lets you sync and manage all your documents in the cloud.</li>
                        <li>Files are accessible on desktop and mobile, anywhere, anytime.</li>
                        <li>Sync selected folders or documents from your Bitrix24 account.</li>
                        <li>Control user and group permissions with advanced sharing options.</li>
                        <li>Manage document access by employees or teams centrally.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 brdr-btm">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/disk_main.png" alt="Bitrix24 Drive" />
                    </div>

                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/disk-docs.png" alt="My Drive" />
                    </div>
                    <div className="col-md-6 top40">
                      <h2>My Drive</h2>
                      <ul>
                        <li>Each user has a personal drive to store private files and documents.</li>
                        <li>Files in My Drive can be shared with coworkers or groups.</li>
                        <li>Support for previews, commenting, editing, and more.</li>
                        <li>Quick access to recent files and collaborative tools.</li>
                      </ul>
                    </div>

                    <div className="col-md-6 top40">
                      <h2>Group Drive</h2>
                      <ul>
                        <li>Every Bitrix24 Workgroup has its own file repository.</li>
                        <li>Collaborate on documents, spreadsheets, and presentations as a team.</li>
                        <li>Perfect for project teams, departments, or client groups.</li>
                        <li>All access controlled based on workgroup roles.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/personal_files_sm-1.png" alt="Group Drive" />
                    </div>

                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/b24_drive_sm.png" alt="Company Drive" />
                    </div>
                    <div className="col-md-6 top40">
                      <h2>Company Drive</h2>
                      <ul>
                        <li>Centralized cloud file storage for the entire organization.</li>
                        <li>Secure internal file access across departments.</li>
                        <li>Share company policies, templates, branding materials, and more.</li>
                        <li>Keep data structured and centrally manageable.</li>
                      </ul>
                    </div>

                    <div className="col-md-6 top40">
                      <h2>Desktop and Mobile Sync</h2>
                      <ul>
                        <li>Download Bitrix24 Drive app for Windows, macOS, iOS, and Android.</li>
                        <li>Keep your local folders in sync with Bitrix24.Drive.</li>
                        <li>Changes are updated in real-time across all devices.</li>
                        <li>Great for working on the go or offline.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/drive_integration_sm.png" alt="Drive Sync" />
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="Calendars">
                  <div className="row">
                    <div className="col-md-6 brdr-btm">
                      <h2>Calendars</h2>
                      <ul>
                        <li>Keep track of meetings, events, deadlines, and schedules.</li>
                        <li>Each employee has a personal calendar, with options to share and sync.</li>
                        <li>Calendars for groups and projects are also available.</li>
                        <li>Supports recurring events, reminders, and invites.</li>
                        <li>Available in desktop and mobile versions.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 brdr-btm">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/calendars_main.png" alt="Calendars" />
                    </div>

                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/event_scheduler_sm.png" alt="Shared Calendars" />
                    </div>
                    <div className="col-md-6 top40">
                      <h2>Shared Calendars</h2>
                      <ul>
                        <li>Coordinate team schedules using shared calendars.</li>
                        <li>Helps avoid double bookings or missed meetings.</li>
                        <li>Group calendars are automatically linked to workgroups.</li>
                        <li>Color-coded calendar types for easy distinction.</li>
                      </ul>
                    </div>

                    <div className="col-md-6 top40">
                      <h2>Event Planning</h2>
                      <ul>
                        <li>Schedule internal or external events with ease.</li>
                        <li>Invite attendees and receive confirmation of attendance.</li>
                        <li>Set event details, locations, links, and reminders.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/crm_events_sm.png" alt="Event Planner" />
                    </div>

                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/favorite_calendar_sm.png" alt="Calendar Sync" />
                    </div>
                    <div className="col-md-6 top40">
                      <h2>Sync with External Calendars</h2>
                      <ul>
                        <li>Sync Bitrix24 calendars with Google, Outlook, or iOS/Android calendars.</li>
                        <li>Two-way sync keeps all your devices updated in real time.</li>
                        <li>Stay informed on all schedules, no matter what device you use.</li>
                      </ul>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="Mail">
                  <div className="row">
                    <div className="col-md-6 brdr-btm">
                      <h2>Mail Integration</h2>
                      <ul>
                        <li>Connect your email accounts directly to Bitrix24.</li>
                        <li>Support for Gmail, Outlook, Yahoo, and custom domains.</li>
                        <li>View, send, and receive emails within the Bitrix24 interface.</li>
                        <li>Create tasks and CRM entries from emails instantly.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 brdr-btm">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/mail_main.png" alt="Mail Integration" />
                    </div>

                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/b24_mail_sm.png" alt="Email Domains" />
                    </div>
                    <div className="col-md-6 top40">
                      <h2>Custom Domains</h2>
                      <ul>
                        <li>Use your own domain email like name@yourcompany.com inside Bitrix24.</li>
                        <li>Manage multiple domain accounts in one place.</li>
                        <li>Simple setup for domain verification and mailbox creation.</li>
                      </ul>
                    </div>

                    <div className="col-md-6 top40">
                      <h2>Email to Task/CRM</h2>
                      <ul>
                        <li>Convert any incoming email into a task or CRM lead automatically.</li>
                        <li>Assign tasks or contacts to specific employees directly from email.</li>
                        <li>All communications get logged in the respective entity for traceability.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/mail_sm.png" alt="Email to CRM" />
                    </div>

                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/email_connector_sm.png" alt="Mail Collaboration" />
                    </div>
                    <div className="col-md-6 top40">
                      <h2>Collaborate via Email</h2>
                      <ul>
                        <li>Share mailboxes across departments or project teams.</li>
                        <li>Tag, comment, and forward emails just like internal chats.</li>
                        <li>Full transparency and shared responsibility for responses.</li>
                      </ul>
                    </div>

                    <div className="col-md-6 top40">
                      <h2>Email Security</h2>
                      <ul>
                        <li>All email traffic is encrypted with SSL/TLS.</li>
                        <li>Spam filtering and blacklisting/whitelisting options available.</li>
                        <li>Manage user access to mailboxes based on roles.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/activity_email_sm.png" alt="Email Security" />
                    </div>
                  </div>
                </Tab.Pane>

                 <Tab.Pane eventKey="CRM">
                  <div className="row">
                    <div className="col-md-6 brdr-btm">
                      <h2>Bitrix24 CRM</h2>
                      <ul>
                        <li>Track interactions with clients, log calls, emails, meetings and tasks.</li>
                        <li>Every lead, deal, contact, and company is stored securely.</li>
                        <li>Automate sales funnels, monitor conversions, and manage pipelines.</li>
                        <li>Built-in tools for invoicing, quote management, and online payments.</li>
                        <li>Flexible reporting and dashboards to monitor performance in real-time.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 brdr-btm">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/crm_main.png" alt="CRM Dashboard" />
                    </div>

                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/crm_stream_sm.png" alt="Leads" />
                    </div>
                    <div className="col-md-6 top40">
                      <h2>Leads</h2>
                      <ul>
                        <li>Capture potential clients from forms, email, chat, phone, or manual entry.</li>
                        <li>Set automatic actions based on status changes: assign, notify, convert.</li>
                        <li>Convert qualified leads into contacts, deals, or companies instantly.</li>
                      </ul>
                    </div>

                    <div className="col-md-6 top40">
                      <h2>Deals</h2>
                      <ul>
                        <li>Track sales progress through customizable pipeline stages.</li>
                        <li>Automate repetitive sales tasks with triggers and rules.</li>
                        <li>Add products, discounts, and taxes directly into deal cards.</li>
                        <li>Get real-time updates on closing probability and progress.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/crm_emails_sm.png" alt="Deals" />
                    </div>

                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/crm_perms_sm.png" alt="Contacts" />
                    </div>
                    <div className="col-md-6 top40">
                      <h2>Contacts</h2>
                      <ul>
                        <li>Centralized database for all customer information.</li>
                        <li>Store phone numbers, emails, social profiles, and communication history.</li>
                        <li>Link contacts to deals, companies, tasks, and activities.</li>
                      </ul>
                    </div>

                    <div className="col-md-6 top40">
                      <h2>Companies</h2>
                      <ul>
                        <li>Manage B2B clients using detailed company profiles.</li>
                        <li>Link contacts, deals, quotes, and activities to company accounts.</li>
                        <li>Customize fields to match your business requirements.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/crm_automation_sm.png" alt="Companies" />
                    </div>

                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/crm_dashboard_sm.png" alt="Reports & Dashboards" />
                    </div>
                    <div className="col-md-6 top40">
                      <h2>Reports & Dashboards</h2>
                      <ul>
                        <li>Visual reports for leads, deals, conversion rates, and revenue.</li>
                        <li>Create custom dashboards to track KPIs in real time.</li>
                        <li>Export reports to Excel or use the built-in analytics engine.</li>
                      </ul>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="Clients">
                  <div className="row">
                    <div className="col-md-6 brdr-btm">
                      <h2>Client Management</h2>
                      <ul>
                        <li>Centralize all client-related data in one platform.</li>
                        <li>Access full communication history, notes, files, and deals linked to each client.</li>
                        <li>Ensure client follow-ups, tasks, and meetings are never missed.</li>
                        <li>Segment clients by source, activity, or status.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 brdr-btm">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/clients_main.png" alt="Client Management" />
                    </div>

                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/open_line_chat_sm.png" alt="Client History" />
                    </div>
                    <div className="col-md-6 top40">
                      <h2>Client Communication History</h2>
                      <ul>
                        <li>Every email, call, meeting, and comment is logged automatically.</li>
                        <li>View a complete timeline of all interactions with each client.</li>
                        <li>Helps sales and support teams stay informed at every touchpoint.</li>
                      </ul>
                    </div>

                    <div className="col-md-6 top40">
                      <h2>Client Segmentation</h2>
                      <ul>
                        <li>Create smart lists based on behavior, status, spending, or location.</li>
                        <li>Use segments to send targeted emails or assign reps to specific client groups.</li>
                        <li>Improve retention and personalize service with data-driven segmentation.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/queue_sm.png" alt="Client Segmentation" />
                    </div>

                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/crm_webforms-1.png" alt="Client Support" />
                    </div>
                    <div className="col-md-6 top40">
                      <h2>Client Support & Service</h2>
                      <ul>
                        <li>Create service tickets and assign them to relevant departments or agents.</li>
                        <li>Track ticket status and maintain SLAs with automated workflows.</li>
                        <li>Improve satisfaction through consistent and timely client support.</li>
                      </ul>
                    </div>
                  </div>
                </Tab.Pane>
                 <Tab.Pane eventKey="Telephony">
                  <div className="row">
                    <div className="col-md-6 brdr-btm">
                      <h2>Telephony Integration</h2>
                      <ul>
                        <li>Connect cloud or office PBX to Bitrix24 for call tracking and automation.</li>
                        <li>Make and receive calls directly in the browser or mobile app.</li>
                        <li>Auto-record calls and link them to CRM contacts or deals.</li>
                        <li>Buy or rent phone numbers from over 60 countries.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 brdr-btm">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/call_main.png" alt="Telephony" />
                    </div>

                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/b24_telephony.png" alt="Call Routing" />
                    </div>
                    <div className="col-md-6 top40">
                      <h2>Call Routing</h2>
                      <ul>
                        <li>Route calls based on time, language, agent availability, or skill.</li>
                        <li>Set custom greetings, IVR menus, and redirection rules.</li>
                        <li>Perfect for departments like sales, support, or billing.</li>
                      </ul>
                    </div>

                    <div className="col-md-6 top40">
                      <h2>Call Recording</h2>
                      <ul>
                        <li>Automatically record inbound and outbound calls.</li>
                        <li>Playback recordings from inside deals, leads, or contact profiles.</li>
                        <li>Use for quality assurance, dispute resolution, or training.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/office_pbx_sm.png" alt="Call Recording" />
                    </div>

                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/call_crm_sm.png" alt="Call Statistics" />
                    </div>
                    <div className="col-md-6 top40">
                      <h2>Call Analytics & Statistics</h2>
                      <ul>
                        <li>Track number of calls made, duration, missed calls, and success rates.</li>
                        <li>Generate reports per user, department, or campaign.</li>
                        <li>Use filters and time frames to analyze performance trends.</li>
                      </ul>
                    </div>

                    <div className="col-md-6 top40">
                      <h2>CRM Telephony Automation</h2>
                      <ul>
                        <li>Trigger workflows after a call is completed (e.g., task creation or follow-up).</li>
                        <li>Assign calls to responsible employees based on rules.</li>
                        <li>Combine with CRM forms to auto-capture caller data and save time.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/callback_sm.png" alt="CRM Telephony Automation" />
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="HR">
                  <div className="row">
                    <div className="col-md-6 brdr-btm">
                      <h2>HR Tools & Employee Management</h2>
                      <ul>
                        <li>Manage employee records, departments, and company structure digitally.</li>
                        <li>Each employee has a personal profile and activity timeline.</li>
                        <li>Organize roles, permissions, and access levels based on hierarchy.</li>
                        <li>Enable onboarding, offboarding, and team transitions seamlessly.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 brdr-btm">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/company_main.png" alt="HR Tools" />
                    </div>

                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/employees_sm.png" alt="Employee Directory" />
                    </div>
                    <div className="col-md-6 top40">
                      <h2>Employee Directory</h2>
                      <ul>
                        <li>Maintain a searchable list of all staff with detailed contact info.</li>
                        <li>Employees can find colleagues by name, department, or role.</li>
                        <li>Enables easy internal communication and collaboration.</li>
                      </ul>
                    </div>

                    <div className="col-md-6 top40">
                      <h2>Work Time Tracking</h2>
                      <ul>
                        <li>Monitor clock-in/out times, breaks, and daily hours worked.</li>
                        <li>Useful for remote, hybrid, and on-site teams.</li>
                        <li>Track productivity and ensure attendance compliance.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/timeman_sm.png" alt="Time Tracking" />
                    </div>

                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/bp_in_as_sm.png" alt="HR Requests" />
                    </div>
                    <div className="col-md-6 top40">
                      <h2>HR Requests</h2>
                      <ul>
                        <li>Let employees submit leave, travel, or general HR requests digitally.</li>
                        <li>Automate approvals and track status via workflows.</li>
                        <li>Store request history within each employee profile.</li>
                      </ul>
                    </div>

                    <div className="col-md-6 top40">
                      <h2>Employee Self-Service</h2>
                      <ul>
                        <li>Enable employees to update personal data, request documents, or apply for leave.</li>
                        <li>Reduce admin workload and improve HR responsiveness.</li>
                        <li>Enhance transparency and employee satisfaction.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/no_access_sm.png" alt="Self Service" />
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="Mobile">
                  <div className="row">
                    <div className="col-md-6 brdr-btm">
                      <h2>Bitrix24 Mobile App</h2>
                      <ul>
                        <li>Access all Bitrix24 tools on the go from iOS or Android devices.</li>
                        <li>Collaborate with your team anytime, anywhere.</li>
                        <li>Supports chat, video, tasks, calendar, CRM, and more.</li>
                        <li>Receive instant push notifications and alerts.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 brdr-btm">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/mobile_main.png" alt="Mobile App" />
                    </div>

                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/mobile_apps_sm.jpg" alt="Mobile CRM" />
                    </div>
                    <div className="col-md-6 top40">
                      <h2>CRM On The Go</h2>
                      <ul>
                        <li>Update leads, deals, and contacts from your phone.</li>
                        <li>Log calls, add notes, and send follow-ups right after meetings.</li>
                        <li>Attach documents, view histories, and assign tasks via mobile CRM.</li>
                      </ul>
                    </div>

                    <div className="col-md-6 top40">
                      <h2>Task & Project Management</h2>
                      <ul>
                        <li>Create, assign, and monitor tasks while on the move.</li>
                        <li>Get notified of deadlines and changes instantly.</li>
                        <li>Manage Kanban boards and checklists via mobile interface.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/app_tasks_sm.png" alt="Mobile Tasks" />
                    </div>

                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/app_docs_sm-1.png" alt="Push Notifications" />
                    </div>
                    <div className="col-md-6 top40">
                      <h2>Push Notifications</h2>
                      <ul>
                        <li>Receive updates on activities, mentions, messages, and reminders.</li>
                        <li>Stay informed on deals, approvals, and urgent tasks in real-time.</li>
                        <li>Never miss important team communications, even when away from your desk.</li>
                      </ul>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="Sites">
                  <div className="row">
                    <div className="col-md-6 brdr-btm">
                      <h2>Bitrix24 Sites</h2>
                      <ul>
                        <li>Create modern websites and landing pages without any coding skills.</li>
                        <li>Choose from professionally designed templates and customize visually.</li>
                        <li>Mobile-friendly and responsive by default.</li>
                        <li>Connect directly to your CRM for lead generation and automation.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 brdr-btm">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/sites_1.gif" alt="Bitrix24 Sites" />
                    </div>

                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/sites_2.gif" alt="Site Templates" />
                    </div>
                    <div className="col-md-6 top40">
                      <h2>Drag & Drop Builder</h2>
                      <ul>
                        <li>Use prebuilt content blocks to design pages quickly.</li>
                        <li>Drag & drop images, text, video, buttons, forms, and more.</li>
                        <li>No need to know HTML, CSS, or JS.</li>
                      </ul>
                    </div>

                    <div className="col-md-6 top40">
                      <h2>CRM-Connected Forms</h2>
                      <ul>
                        <li>Add contact, feedback, order, and quote forms directly to your site.</li>
                        <li>Automatically create leads or tasks in CRM from form submissions.</li>
                        <li>Customize fields, rules, and autoresponder settings.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/sites_3.gif" alt="CRM Forms" />
                    </div>

                    <div className="col-md-6 top40">
                      <img className="img-responsive w-100" src="/assets/img/bitrix24/sites_4.gif" alt="Site Analytics" />
                    </div>
                    <div className="col-md-6 top40">
                      <h2>Analytics & SEO</h2>
                      <ul>
                        <li>Track traffic, conversions, bounce rates, and more.</li>
                        <li>Integrate with Google Analytics, Yandex.Metrica, and Facebook Pixel.</li>
                        <li>Edit SEO settings, meta tags, and URL slugs with ease.</li>
                      </ul>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        
      </div>
    </div>

    
  );
};

export default Bitrix24CRM;
