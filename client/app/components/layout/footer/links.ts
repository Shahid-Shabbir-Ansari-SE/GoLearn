import { facebook, linkedin, twitter } from '~/image'

export const footerLinks = {
  informations: [
    { title: 'Download', link: '/download' },
    { title: 'Careers', link: '/careers' },
    { title: 'About Us', link: '/about' },
    { title: 'Contact Us', link: '/contact' },
    {
      title: 'Connect with Us',
      socialMediaLinks: [
        {
          platform: 'Facebook',
          img: { facebook },
          link: 'https://www.facebook.com/'
        },
        {
          platform: 'Twitter',
          img: { twitter },
          link: 'https://twitter.com/'
        },
        {
          platform: 'LinkedIn',
          img: { linkedin },
          link: 'https://www.linkedin.com/in/shahid-shabbir-se/'
        }
      ]
    }
  ],
  resources: [
    { title: 'Help Docs', link: '/docs' },
    { title: 'Student Portal', link: '/studentportal' },
    { title: 'Student Task', link: '/studenttask' },
    { title: 'Student Curriculum', link: '/studentcurriculum' },
    { title: 'Integrations', link: '/integrations' },
    { title: 'To-do-list', link: '/todolist' }
  ],
  features: [
    { title: 'Student Chats', link: '/studentchats' },
    { title: 'Student Tracking', link: '/studenttracking' },
    { title: 'Dashboard & Analytics', link: '/dashboard_analytics' },
    { title: 'Notepad', link: '/notepad' },
    { title: 'Instructors', link: '/instructors' },
    { title: 'Native Time Tracking', link: '/nativetimetracking' }
  ],
  blogs: [
    { title: 'Career Team Hub', link: '/blog' },
    { title: 'Students Improvement', link: '/blogpost' },
    { title: 'Instructor Guide', link: '/instructorguide' },
    { title: 'Career Wallet', link: '/careerwallet' },
    { title: 'Newsletter', link: '/newsletter' },
    { title: 'Student Podcast', link: '/studentpodcast' }
  ]
}
