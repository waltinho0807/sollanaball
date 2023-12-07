import FormSubmitButton from "@/components/FormSubmitButton";
import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";

export const metadata  = {
    title: "Create game - Solanaball"
}

async function createGame (formData: FormData) {
    "use server";


    const campeonato = formData.get("campeonato")?.toString();
    const rodada = Number(formData.get("rodada") || 0);
    const temporada = formData.get("temporada")?.toString();
    const status = formData.get("status")?.toString();
    const timeOne = formData.get("timeone")?.toString();
    const timeTwo = formData.get("timetwo")?.toString();
    const timeThree = formData.get("timethree")?.toString();
    const timeFour = formData.get("timefour")?.toString();
    const timeFive = formData.get("timefive")?.toString();
    const timeSix = formData.get("timesix")?.toString();
    const timeSeven = formData.get("timeseven")?.toString();
    const timeEight = formData.get("timeeight")?.toString();

    if(!campeonato || !rodada || !temporada || !status || !timeOne || !timeTwo || !timeThree || !timeFour || !timeFive || !timeSix || !timeSeven || !timeEight){
        throw Error("Missing required fields")
    }

    await prisma.rodada.create({
        data: {
            campeonato,
            rodada,
            status,
            temporada,
            timeOne,
            timeTwo,
            timeThree,
            timeFour,
            timeFive,
            timeSix,
            timeSeven,
            timeEight,
        }
    });

    redirect("/")
}



export default function AddRodadaPage () {
    return (
        <div>
            <h1 className="text-lg mb-3 font-bold">Create game</h1>
            <form action={createGame} >
            <input
                  required
                  name="campeonato"
                  placeholder="Brasileiro"
                  className="input-bordered input mb-3 w-full"
                />
                <input
                  required
                  name="rodada"
                  placeholder="Rodada"
                  type="number"
                  className="input-bordered input mb-3 w-full"
                />
                <input
                  required
                  name="status"
                  placeholder="open"
                  className="input-bordered input mb-3 w-full"
                />
                <input
                  required
                  name="temporada"
                  placeholder="Temporada ex: 2024"
                  className="input-bordered input mb-3 w-full"
                />
                <input
                  required
                  name="timeone"
                  placeholder="Time 1"
                  className="input-bordered input mb-3 w-full"
                />
                <input
                  required
                  name="timetwo"
                  placeholder="Time 2"
                  className="input-bordered input mb-3 w-full"
                />
                <input
                  required
                  name="timethree"
                  placeholder="Time 3"
                  className="input-bordered input mb-3 w-full"
                />
                <input
                  required
                  name="timefour"
                  placeholder="Time 4"
                  className="input-bordered input mb-3 w-full"
                />
                <input
                  required
                  name="timefive"
                  placeholder="Time 5"
                  className="input-bordered input mb-3 w-full"
                />
                <input
                  required
                  name="timesix"
                  placeholder="Time 6"
                  className="input-bordered input mb-3 w-full"
                />
                <input
                  required
                  name="timeseven"
                  placeholder="Time 7"
                  className="input-bordered input mb-3 w-full"
                />
                <input
                  required
                  name="timeeight"
                  placeholder="Time 8"
                  className="input-bordered input mb-3 w-full"
                />
                <FormSubmitButton className="btn-block">
                  Create  
                </FormSubmitButton>  
            </form>
        </div>
    )
}