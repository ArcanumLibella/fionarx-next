import * as React from "react"
import { Blobs } from "./_components/organisms/Blobs"
import { BlobsLight } from "./_components/organisms/BlobsLight"
import { Heading } from "./_components/atoms/Heading"
import Link from "next/link"
import { ArrowLeftIcon } from "@/public/_assets/icons"
import { COLORS } from "./_constants/Colors"

const NotFoundPage = () => {
  return (
    <div className="relative px-4 pt-40 pb-16 md:px-8 md:pt-[32%] xl:pt-[16%] xl:px-64 max-w-fit z-100">
      <Blobs className="fixed flex justify-center items-center -top-1/5 -right-1/10 xl:right-auto xl:top-auto xl:-left-1/10 xl:-bottom-1/5 w-[56vw] h-[36vh] xl:w-[48vw] xl:h-[54vh] 2xl:w-[40vw] 2xl:h-[64vh] -z-1" />
      <BlobsLight className="hidden fixed xl:flex justify-center items-center xl:-right-1/10 xl:-top-1/5 w-[56vw] h-[40vh] xl:w-[48vw] xl:h-[54vh] 2xl:w-[40vw] 2xl:h-[72vh]" />
      <div className="max-w-800 2xl:max-w-5xl">
        <Heading level={2} className="mb-4">Oups !</Heading>
        <Heading level={4} className="text-white mb-16">
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
    </div>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
