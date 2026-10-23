import React from 'react'

const CORE_EXPERTISE = [
  {
    title: 'AI-Assisted Development',
    body:
      'Using AI Coding Assistants To Generate, Review, Debug, And Refine Code Across Web And Mobile Applications.',
  },
  {
    title: 'Web Development',
    body:
      'Building Responsive Websites With Python (Flask), Javascript, Html, Css, And Modern Frameworks.',
  },
  {
    title: 'Mobile App Development',
    body:
      'Creating Cross-Platform Mobile Applications Using Flutter And Dart For Ios And Android.',
  },
  {
    title: 'Backend & Databases',
    body:
      'Working With Postgresql, Supabase, Rest Apis, And Backend Integration For Full-Stack Applications.',
  },
];

const SubHeader = () => {
  return (
    <div className='w-full flex flex-col items-start text-left px-4 md:px-0'>
      <div className='w-full text-[15px] md:text-lg lg:text-xl flex flex-col gap-3 md:gap-4 leading-relaxed text-left'>
        <p>
          Hi, I&apos;m Rohit Rajesh Survase, A Computer Engineering Student At Isbm College Of Engineering, Pune. I&apos;m Interested In Building Useful Software Products.
        </p>
        <p>
          I Use Ai Coding Assistants To Help Plan, Prototype, Implement, Debug, And Refine Web And Mobile Applications. I Am Continuously Strengthening My Programming Fundamentals And Independent Technical Understanding Through Hands-On Projects, Code Review, And Testing.
        </p>
        <p>
          Ai Assistance Is A Development Method—It Helps Accelerate The Process, But Generated Code Still Needs Human Review, Testing, And Validation To Ensure Quality And Correctness.
        </p>
      </div>

      <div className='about-inline-services w-full mt-8 md:mt-12 h-auto'>
        <div className='about-inline-services__head'>
          <span className='about-inline-services__label'>Core Expertise</span>
        </div>
        <div className='about-inline-services__grid'>
          {CORE_EXPERTISE.map((service) => (
            <article key={service.title} className='about-inline-services__item'>
              <h4>{service.title}</h4>
              <p>{service.body}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SubHeader
