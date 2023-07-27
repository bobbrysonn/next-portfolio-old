"use client"

type Props = {};

const Navbar = (props: Props) => {
    return (
        <div className="w-10/12 mx-auto pt-4">
            {/* Actual navigation bar */}
            <div className="flex items-center justify-between flex-nowrap w-full pb-3 border-b-[1px] border-neutral-500">
                <div className="sm:text-3xl text-xl font-bold inline-block"><a href="/" className="inline-block">Bob</a></div>
            </div>
        </div>
    )
}

export default Navbar;