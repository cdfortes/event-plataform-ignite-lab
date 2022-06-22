import { gql, useQuery } from '@apollo/client'
import { Lesson } from './Lesson'

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      title
      slug
    }
  }
`

interface GetLessonQueryResponse {
  lessons: {
    title: string
    slug: string
    availableAt: Date
    type: 'live' | 'class'
  }[]
}

export function Sidebar() {
  const { data } = useQuery<GetLessonQueryResponse>(GET_LESSONS_QUERY)
  return (
    <aside className="w-[348px] border-l border-gray-600 bg-gray-700 p-6">
      <span className="mb-6 block border-b border-gray-500 pb-6 text-2xl font-bold ">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => (
          <Lesson
            key={lesson.slug}
            title={lesson.title}
            slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.type}
          />
        ))}
      </div>
    </aside>
  )
}
