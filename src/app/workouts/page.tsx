import { getWorkoutsForList } from '@/actions'
import Link from 'next/link'
import Redirect from '@/components/Redirect'

export const fetchCache = 'force-no-store';

async function Workouts() {
  const workouts = await getWorkoutsForList()

  if (workouts.length === 0) {
    return <Redirect to="/" />
  }

  return (
    <div className='p-4'>
      <h1 className='font-bold'>Workouts</h1>
      <div className="flex flex-col">
        {workouts.map((w) => (
          <Link className="text-slate-800 hover:text-slate-700 transition-all underline" key={w.id} href={`/workouts/${w.id}`}>{w.name}</Link>
        ))}
      </div>
    </div>
  )
}

export default Workouts
