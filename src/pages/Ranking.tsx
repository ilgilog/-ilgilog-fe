import { RankList } from "components/ranking/RankList"
import { RankToggle } from "components/ranking/RankToggle"

export const Ranking = () => {
    return(
        <div>
            <h2 className="flex justify-center text-3xl mt-3 mb-2">미니홈 랭킹</h2>
            <RankToggle />
            <RankList />
        </div>
    )
}