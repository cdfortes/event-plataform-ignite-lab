import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import pt from 'date-fns/locale/pt'
import { Link, useParams } from 'react-router-dom'

interface LessonProps {
  title: string
  pslug: string
  availableAt: Date
  type: 'live' | 'class'
}

export function Lesson({ title, pslug, availableAt, type }: LessonProps) {
  const { slug } = useParams<{ slug: string }>()
  const isAvailable = isPast(availableAt)
  const availableAtFormatted = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • 'kk'h'mm",
    {
      locale: pt
    }
  )

  const isActiveLesson = slug === pslug

  return (
    <Link to={`/event/lesson/${pslug}`} className="group">
      <span className="text-gray-300">{availableAtFormatted}</span>
      <div
        className={`mt-2 rounded border border-gray-500 p-4 group-hover:border-green-500 ${
          isActiveLesson ? 'bg-green-500' : ''
        }`}
      >
        <header className="flex items-center justify-between">
          {isAvailable ? (
            <span
              className={`flex items-center gap-2 text-sm font-medium text-blue-500 ${
                isActiveLesson ? 'text-white' : ''
              } `}
            >
              <CheckCircle size={20} />
              Conteúdo Liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm font-medium text-orange-500">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span
            className={`rounded border border-green-300 px-2 py-[0.125] text-xs font-bold uppercase text-white ${
              isActiveLesson ? 'border-white' : ''
            }`}
          >
            {type === 'live' ? 'Ao Vivo' : 'Aula Pratica'}
          </span>
        </header>
        <strong
          className={`mt-5 block  ${
            isActiveLesson ? 'text-white' : 'text-gray-200'
          }`}
        >
          {title}
        </strong>
      </div>
    </Link>
  )
}
