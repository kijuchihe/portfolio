import React from 'react'
import ResumeContent from './ResumeContent'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume - Kingsley Ihemelandu',
  description: 'This is the resume page where I showcase my skills, experience and Information about me',
  openGraph: {
    type: 'website',
    url: 'https://kijuchihe.vercel.app/work',
    title: 'Work - Kingsley Ihemelandu',
    description: 'This is the resume page where I showcase my skills, experience and Information about me',
    images: [
      {
        url: 'https://example.com/og-image.jpg', // replace with your own image
        width: 1200,
        height: 630,
        alt: 'Kingsley Ihemelandu',
      },
    ],
  },
};

const Resume = () => {
  return (
    <ResumeContent />
  )
}

export default Resume
