import FirstTime from "../First-Time"
import Sermon from "../Sermon"

export default function TwoSection() {
    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="">
                <FirstTime />
            </div>

            <div className="">
                <Sermon />
            </div>

        </div >
    )
}