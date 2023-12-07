import { Rodada } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logobrasileiro.jpg";
//images temporarias
import palmeiras from "../assets/palmeiras.png";
import flamengo from "../assets/flamengoc.png";
import fluminense from "../assets/fluminense.png";
import cuiaba from "../assets/cuiaba.png";
import botafogo from "../assets/botafogo.png";
import atleticomg from "../assets/atleticomg.png";
import corinthians from "../assets/corinthians.png";
import americamg from "../assets/americamg.png";
import FormSubmitButton from "./FormSubmitButton";
import { prisma } from "@/lib/db/prisma";

interface RodadaCardProps {
    rodada: Rodada
}

async function createTicket (formData: FormData) {
  "use server";

  let user = "dhajshdasdhadhasdi1234"
  
  const timeOne = Number(formData.get("timeone") || 0);
  const timeTwo = Number(formData.get("timetwo") || 0);
  const timeThree = Number(formData.get("timethree") || 0);
  const timeFour = Number(formData.get("timefour") || 0);
  const timeFive = Number(formData.get("timefive") || 0);
  const timeSix = Number(formData.get("timesix") || 0);
  const timeSeven = Number(formData.get("timeseven") || 0);
  const timeEight = Number(formData.get("timeeight") || 0);
  const rodadaId = formData.get("rodadaid")?.toString();
  const temporada = formData.get("temporada")?.toString();
  const rodada = Number(formData.get("rodada") || 0);

  

  await prisma.ticket.create({
    data: {timeOne, timeTwo, timeThree, timeFour, timeEight, timeFive, timeSix, timeSeven, rodada, rodadaId, temporada, user}
  })

}

export default function RodadaCard ({rodada}: RodadaCardProps) {
    return (
        <div className="flex flex-col items-center mb-10 bg-accent rounded-box">

          <div className=" ">
              <div>
                <h2 className="font-semibold text-4xl mb-5 mt-2">
                  Campeonato {rodada.campeonato}
                </h2>
                <Image
                  src={logo}
                  alt="Logo campeonato brasileiro"
                  />
                  
              </div>
              <p className="font-semibold text-2xl">
                Rodada:  <Link  href={"/rodadas/" + rodada.id} className="text-2x1">
                           {rodada.rodada}   
                         </Link> 
              </p>
              <p className="font-semibold text-2xl">
                Temporada: 2024
              </p>
          </div>
            
            
          <form className="bg-accent mt-10 w-full rounded-box" action={createTicket}>
              <div className="flex w-full mt-10">
                <div className="grid h-20 flex-grow flex-row card bg-base-300 rounded-box place-items-center w-[200px] mr-5 ml-5 text-2xl font-bold">
                  <div className="flex flex-row ">
                  <Image 
                      src={palmeiras} 
                      alt="Logo palmeiras" 
                      height={40} 
                      width={40}
                      className="mr-2 rounded-full"
                    />
                    <div className="w-[140px]">{rodada.timeOne}</div>
                  </div>
                </div>
                <input className="input input-bordered w-full max-w-[80px] h-20 text-lg font-bold" 
                  type="number"
                  name="timeone"
                />
                
                <div className="divider divider-horizontal">X</div>
                <input className="input input-bordered w-full max-w-[80px] h-20 text-lg font-bold" 
                  type="number"
                  name="timetwo"
                />
                <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center w-[200px] mr-5 ml-5 text-2xl font-bold">
                <div className="flex flex-row ">
                <div className="w-[140px]">{rodada.timeTwo}</div>
                  <Image 
                      src={corinthians} 
                      alt="Logo palmeiras" 
                      height={40} 
                      width={40}
                      className="ml-2 rounded-full"
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full mt-10">
                <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center w-[200px] mr-5 ml-5 text-2xl font-bold">
                <div className="flex flex-row ">
                  <Image 
                      src={flamengo} 
                      alt="Logo palmeiras" 
                      height={40} 
                      width={40}
                      className="mr-2 rounded-full"
                    />
                    <div className="w-[140px]">{rodada.timeThree}</div>
                  </div>
                </div>
                <input className="input input-bordered w-full max-w-[80px] h-20 text-lg font-bold" 
                  type="number"
                  name="timethree"
                />
                <div className="divider divider-horizontal">X</div>
                <input className="input input-bordered w-full max-w-[80px] h-20 text-lg font-bold" 
                  type="number"
                  name="timefour"
                />
                <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center w-[200px] mr-5 ml-5 text-2xl font-bold">
                <div className="flex flex-row ">
                <div className="w-[140px]">{rodada.timeFour}</div>
                  <Image 
                      src={cuiaba} 
                      alt="Logo palmeiras" 
                      height={40} 
                      width={40}
                      className="ml-2 rounded-full"
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full mt-10">
                <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center w-[200px] mr-5 ml-5 text-2xl font-bold">
                <div className="flex flex-row ">
                  <Image 
                      src={fluminense} 
                      alt="Logo palmeiras" 
                      height={40} 
                      width={40}
                      className="mr-2 rounded-full"
                    />
                    <div className="w-[140px]">{rodada.timeFive}</div>
                  </div>
                </div>
                <input className="input input-bordered w-full max-w-[80px] h-20 text-lg font-bold" 
                  type="number"
                  name="timefive"
                />
                <div className="divider divider-horizontal">X</div>
                <input className="input input-bordered w-full max-w-[80px] h-20 text-lg font-bold" 
                  type="number"
                  name="timesix"
                />
                <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center w-[200px] mr-5 ml-5 text-2xl font-bold">
                <div className="flex flex-row ">
                <div className="w-[140px]">{rodada.timeSix}</div>
                  <Image 
                      src={americamg} 
                      alt="Logo palmeiras" 
                      height={40} 
                      width={40}
                      className="ml-2 rounded-full"
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full mt-10">
                <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center w-[200px] mr-5 ml-5 text-2xl font-bold">
                <div className="flex flex-row ">
                  <Image 
                      src={atleticomg} 
                      alt="Logo Atletico-MG" 
                      height={40} 
                      width={40}
                      className="mr-2 rounded-full"
                    />
                    <div className="w-[140px]">{rodada.timeSeven}</div>
                  </div>
                </div>
                <input className="input input-bordered w-full max-w-[80px] h-20 text-lg font-bold" 
                  type="number"
                  name="timeseven"
                />
                <div className="divider divider-horizontal">X</div>
                <input className="input input-bordered w-full max-w-[80px] h-20 text-lg font-bold" 
                  type="number"
                  name="timeeight"
                />
                <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center w-[200px] mr-5 ml-5 text-2xl font-bold">
                <div className="flex flex-row ">
                <div className="w-[140px]">{rodada.timeEight}</div>
                  <Image 
                      src={botafogo} 
                      alt="Logo palmeiras" 
                      height={40} 
                      width={40}
                      className="ml-2 rounded-full"
                    />
                  </div>
                </div>
              </div>
              <input
                type="hidden"
                name="rodadaid"
                value={rodada.id}
                />
                <input
                type="hidden"
                name="rodada"
                value={rodada.rodada}
                />
                <input
                type="hidden"
                name="temporada"
                value={rodada.temporada}
                />

              <FormSubmitButton className="btn-block mt-10">Create ticket</FormSubmitButton> 
          </form>
        </div>
        
    )
}