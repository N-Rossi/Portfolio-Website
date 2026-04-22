export type Experience = {
  company: string
  role: string
  location: string
  period: string
  context: string
  bullets: string[]
  tech: string[]
}

export const experiences: Experience[] = [
  {
    company: 'TCG Inc.',
    role: 'Java Developer',
    location: 'Washington, D.C.',
    period: 'June 2023 — Present',
    context:
      'Contractor for the U.S. International Trade Commission (USITC), developing complex Java/Spring Boot web applications for federal users.',
    bullets: [
      'Delivered the majority of the Bulk Filing feature release for the EDIS application, expanding filing capacity for thousands of federal users.',
      'Played a key role in the Java 17 migration, Spring framework upgrade, eService release, and Dual MFA rollout — coordinating changes across multiple services and environments.',
      'Built responsive front-end components using JavaScript, jQuery, HTML/CSS, and Thymeleaf within Spring Boot, and designed back-end REST services and SQL schemas supporting core EDIS workflows.',
      'Authored unit tests with JUnit and Mockito to maintain high code coverage, created Microsoft Power BI reports for end users, and managed version control with Git and Subversion.',
    ],
    tech: ['Java 17', 'Spring Boot', 'Thymeleaf', 'jQuery', 'SQL', 'JUnit', 'Mockito', 'Power BI', 'Git', 'Subversion'],
  },
  {
    company: 'ASRC Federal',
    role: 'Associate Software Developer',
    location: 'Moorestown, NJ',
    period: 'June 2022 — June 2023',
    context:
      'Contributed to the AEGIS Combat System contract, a mission-critical defense codebase supporting U.S. Navy operations.',
    bullets: [
      'Developed and maintained Java code within an extremely large, legacy codebase supporting U.S. Navy operations, resolving production bugs and writing unit, integration, and regression tests.',
      'Collaborated in Agile teams using Git, Jenkins, Bitbucket, and Jira on UNIX-based systems.',
    ],
    tech: ['Java', 'Jenkins', 'Bitbucket', 'Jira', 'UNIX', 'Agile / Scrum'],
  },
  {
    company: 'RunSignup (Capstone)',
    role: 'Mobile Development Team Lead',
    location: 'Moorestown, NJ',
    period: 'Sept. 2021 — Dec. 2021',
    context:
      'Led a 6-student team building a cross-platform race timing app in React Native and TypeScript integrated with RunSignup\'s production API.',
    bullets: [
      'Led a 6-student team delivering a cross-platform (iOS/Android) race timing app on 2-week Agile Scrum sprints.',
      'Integrated with RunSignup\'s production API, with offline support and automatic upload once a device reconnected.',
      'Designed a racer-conflict resolution flow that RunSignup specifically requested to address.',
    ],
    tech: ['React Native', 'TypeScript', 'REST APIs', 'Agile / Scrum'],
  },
]

export const education = {
  school: 'Rowan University',
  degree: 'B.S. Computer Science, Cyber Security Defense; Minor, Mathematics',
  period: 'July 2022',
  honors: ['Magna Cum Laude', 'GPA: 3.69/4.0', 'NCAA Track & Field Athlete'],
}
