import RodadaCard from '@/components/RodadaCard'
import { prisma } from '@/lib/db/prisma'
import Image from 'next/image'

export default async function Home() {
  const rodadas = await prisma.rodada.findMany({
    orderBy: {id: "desc"}
  })
  return (
    <div>
      <RodadaCard rodada={rodadas[0]}/>
    </div>
  )
}
