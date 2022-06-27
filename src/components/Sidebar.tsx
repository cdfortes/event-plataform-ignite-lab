import { useGetLessonsQueryQuery } from '../graphql/generated'
import { Lesson } from './Lesson'

export function Sidebar() {
  const { data } = useGetLessonsQueryQuery()
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
            pslug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType}
          />
        ))}
      </div>
    </aside>
  )
}
