import { gql, useQuery } from '@apollo/client'

const GET_LESSONS = gql`
  query {
    lessons {
      id
      title
    }
  }
`

interface Lesson {
  id: string
  title: string
}

function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS)
  return (
    <div>
      <ul className="text-5xl font-bold text-violet-500">
        {data?.lessons.map((lesson) => (
          <li key={lesson.id}>{lesson.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
