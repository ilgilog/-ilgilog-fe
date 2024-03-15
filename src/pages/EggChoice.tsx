import { EggCont } from "components/eggChoice/EggCont"


export const EggChoice = () => {
    return(
        <div className="flex flex-wrap justify-center">
            <h2 className="mb-2 mt-12 text-4xl text-center font-black">미니미 선택</h2>
            <h3 className="w-full text-center text-2xl">키우고 싶은 알을 선택해주세요!</h3>
            <EggCont />
        </div>
    )
}