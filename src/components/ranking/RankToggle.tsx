export const RankToggle = () => {
    return(
        <div className="flex items-center justify-end">
            <span className="text-xl">좋아요 순</span>
            <label className="relative inline-flex items-center cursor-pointer mx-3">
                <input 
                    className="sr-only peer" 
                    type="checkbox" 
                />
                <div className="group peer ring-0 bg-rose-400 rounded-full outline-none duration-300 after:duration-300 w-16 h-8 shadow-md peer-checked:bg-emerald-500 peer-focus:outline-none  after:content-['']  after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-6 after:w-6 after:top-1 after:left-1 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-8 peer-checked:after:content-[''] peer-hover:after:scale-125 peer-checked:after:rotate-0">
                </div>
            </label>
            <span className="text-xl">포인트 순</span>
        </div>
    )
}