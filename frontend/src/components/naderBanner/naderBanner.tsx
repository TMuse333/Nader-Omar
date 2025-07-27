import Image from "next/image";
import React from "react";
import banner from '../../../public/nader-banner.jpeg'



const NaderBanner = () => {



    return (
        <section className="w-full bg-black h-[30vh]
        max-h-[300px] relative">
            <Image
            src={banner.src}
            alt="Nader Omar personal banner"
            className="w-full h-full object-contain max-w-[1200px]
            my-auto"
            width={600}
            height={1300}
            />
        </section>
    )
}

export default NaderBanner