import React from 'react'
import WorkContent from './WorkContent'
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Work',
  description: 'This is the work page where I showcase the projects and works I have done',
  openGraph: {
    type: 'website',
    url: 'https://kijuchihe.vercel.app/work',
    title: 'Work - Kingsley Ihemelandu',
    description: 'This is the work page of Kingsley Ihemelandu',
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

const Work = () => {
  return (
    <WorkContent/>
  )
}

export default Work
