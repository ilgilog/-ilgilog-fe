import { NoticeList } from "components/adminNotice/NoticeList"
import { NoticeRegister } from "components/adminNotice/NoticeRegister"

export const AdminNotice = () => {
    return(
        <div>
            <NoticeRegister />
            <NoticeList />
        </div>
    )
}