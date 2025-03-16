import React from 'react'

export default function Footer() {
  return (
    <section className='mb-10 px-4 text-center text-gray-500'>
        <small className='text-xs block mb-2'>
            &copy; 2030 Atul Singh. All rights reserved.
        </small>
        <p className='text-xs'>
            <span className='font-semibold'>
                About this website: <span>
                    Build with React & Next.js (App Router & Server Actions), Typescript, Tailwind CSS,Framer Motion, React Email & Vercel Hosting.
                </span>
            </span>
        </p>
    </section>
  )
}
