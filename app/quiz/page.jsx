/**
Renders a Next.js page component that displays a quiz introduction with an image and a link to start the quiz.
@component
@returns {JSX.Element} The rendered page component.
*/

import { Container } from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import { endpoint } from '@/utils/endpoint'
import { TbArrowBigRightFilled } from 'react-icons/tb'

export async function getRandomQuizQuestion() {
  const data = await fetch(`${endpoint}/quiz/random`, { cache: 'no-store' })
  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }
  return data.json()
}


export default async function Page() {
  const data = await getRandomQuizQuestion()
  return (
    <Container as="main" className="flex flex-col gap-5 py-5 md:flex-row-reverse md:justify-between">
      <div className='relative overflow-hidden rounded-2x1'>
        <div className='md:w-[24rem]'>
          <Image
            src="/wallpaper.jpg"
            alt="Quiz"
            width={700}
            height={700}
          />
        </div>
        <div className='absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent md:mb-gradient-to-r'></div>
      </div>
      <div className='md:w-[50%] flex flex-col gap-5'>
        <h1 className='text2x1 font-semibold'>Family Guy Quiz</h1>
        <p className='text-sm leading-6 text-gray-300'>
          Take this quiz to find out how much yuo know about the hit animated sitcom Family Guy.
          Test your knowledge of the characters, the episodes, and memorable moments many pop culture references.
        </p>

        <Link href="{`/quiz/${data.randomQuestion}`}"
          className='flex items-center justify-center gap-1 px-5 py-4 font-semibold text-orange-500 transition-colors rounded-md outline duration-600 hover:bg-orange-950'>

          <TbArrowBigRightFilled className='text-lg' />
          Take a Quiz Now!
        </Link>
      </div>

    </Container>
  )
}
