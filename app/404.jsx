import * as React from "react"
import Link from "next/link"
import { ArrowLeftIcon } from "@/public/_assets/icons"
import { COLORS } from "./_constants/Colors"
import { Blobs, BlobsLight, Heading } from "./_components"
import Image from "next/image"

const NotFoundPage = () => {
  return (
    <div className="relative flex flex-col xl:flex-row justify-center items-center h-full md:ml-20 xl:mx-auto px-4 xl:max-w-screen-xl 2xl:max-w-screen-2xl z-100">
      <Blobs className="fixed flex justify-center items-center -top-1/5 -right-1/10 xl:right-auto xl:top-auto xl:-left-1/10 xl:-bottom-1/5 w-[56vw] h-[36vh] xl:w-[48vw] xl:h-[54vh] 2xl:w-[40vw] 2xl:h-[64vh] !-z-50" />
      <BlobsLight className="hidden fixed xl:flex justify-center items-center xl:-right-1/10 xl:-top-1/5 w-[56vw] h-[40vh] xl:w-[48vw] xl:h-[54vh] 2xl:w-[40vw] 2xl:h-[72vh] !-z-50" />
      <div className="flex flex-col items-center justify-items-center xl:grid grid-cols-3 2xl:gap-16 w-full">
        <div className="NotFound__content xl:col-span-2 mb-16 xl:mb-0 ">
          <Heading level={2} className="mb-8 text-tomato">Oups !</Heading>
          <Heading level={5} className="text-white mb-16">
            Il semble que vous vous soyez égaré(e) ! 👀
          </Heading>
          
          <Link href="/" className="flex items-center">
            <ArrowLeftIcon
              fill={COLORS.white.DEFAULT}
              width={24}
              height={24}
            />
            <Heading level={6} className="text-white hover:text-tomato transition-all ease-in-out">
              Retour à l'accueil
            </Heading>
          </Link>
        </div>
        <figure className="NotFound__image h-full hidden md:block opacity-80">
          <Image
            src="/_assets/images/ptit_cochon_boudeur.png"
            alt="Petit cochon boudeur"
            width={320}
            height={280}
          />
        </figure>
      </div>
    </div>
  )
}

export default NotFoundPage