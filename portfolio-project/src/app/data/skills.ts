import {
  SiReact,
  SiTailwindcss,
  SiPostgresql,
  SiTypescript,
  SiJavascript,
  SiSpringboot,
  SiNextdotjs,
  SiAngular,
  SiVuedotjs,
  SiJenkins,
  SiGit,
  SiJira,
  SiBitbucket,
  SiLinux,
  SiPython,
  SiMysql,
  SiGnubash,
} from 'react-icons/si'
import { FaJava, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { TbBrandReactNative } from 'react-icons/tb'
import type { IconType } from 'react-icons'

export type Skill = {
  name: string
  Icon: IconType
  color: string
  group: 'Language' | 'Framework' | 'Tool'
}

export const skills: Skill[] = [
  { name: 'Java', Icon: FaJava, color: '#f89820', group: 'Language' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178c6', group: 'Language' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#f7df1e', group: 'Language' },
  { name: 'Python', Icon: SiPython, color: '#3776ab', group: 'Language' },
  { name: 'SQL', Icon: SiMysql, color: '#4479a1', group: 'Language' },
  { name: 'HTML', Icon: FaHtml5, color: '#e34c26', group: 'Language' },
  { name: 'CSS', Icon: FaCss3Alt, color: '#264de4', group: 'Language' },
  { name: 'Bash', Icon: SiGnubash, color: '#4eaa25', group: 'Language' },
  { name: 'Spring Boot', Icon: SiSpringboot, color: '#6db33f', group: 'Framework' },
  { name: 'React', Icon: SiReact, color: '#61dafb', group: 'Framework' },
  { name: 'React Native', Icon: TbBrandReactNative, color: '#61dafb', group: 'Framework' },
  { name: 'Next.js', Icon: SiNextdotjs, color: '#ffffff', group: 'Framework' },
  { name: 'Angular', Icon: SiAngular, color: '#dd0031', group: 'Framework' },
  { name: 'Vue', Icon: SiVuedotjs, color: '#42b883', group: 'Framework' },
  { name: 'Tailwind', Icon: SiTailwindcss, color: '#38bdf8', group: 'Framework' },
  { name: 'Git', Icon: SiGit, color: '#f05032', group: 'Tool' },
  { name: 'Jenkins', Icon: SiJenkins, color: '#d24939', group: 'Tool' },
  { name: 'Jira', Icon: SiJira, color: '#0052cc', group: 'Tool' },
  { name: 'Bitbucket', Icon: SiBitbucket, color: '#2684ff', group: 'Tool' },
  { name: 'Linux', Icon: SiLinux, color: '#ffce00', group: 'Tool' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#336791', group: 'Tool' },
]
