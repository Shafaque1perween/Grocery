

const Banner = ({ title, bgImage }) => {
    return (
        <div className="h-[50vh] mt-25 flex justify-center items-centern bg-center bg-cover relative " style={{ backgroundImage: `url(${bgImage})` }}>
            <h2 className="text-5xl text-zinc-800 bg-white h-fit mt-25 p-5 rounded-xl font-bold z-10">
                {title}
            </h2>
            <div className="bg-black/40 absolute inset-0"></div>

        </div>
    )
}

export default Banner
