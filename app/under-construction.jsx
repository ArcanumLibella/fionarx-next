import * as React from "react"
import Link from "next/link"
import { ArrowLeftIcon } from "@/public/_assets/icons"
import { COLORS } from "./_constants/Colors"
import { Blobs, BlobsLight, Heading } from "./_components"

const UnderConstructionPage = () => {
  return (
    <div className="relative mx-auto md:ml-20 px-4 pt-32 sm:pt-48 pb-16 md:px-8 md:pt-[48%] xl:pt-[16%] xl:px-64 max-w-800 xl:max-w-full z-100">
      <Blobs className="fixed flex justify-center items-center -top-1/5 -right-1/10 xl:right-auto xl:top-auto xl:-left-1/10 xl:-bottom-1/5 w-[56vw] h-[36vh] xl:w-[48vw] xl:h-[54vh] 2xl:w-[40vw] 2xl:h-[64vh] -z-20" />
      <BlobsLight className="hidden fixed xl:flex justify-center items-center xl:-right-1/10 xl:-top-1/5 w-[56vw] h-[40vh] xl:w-[48vw] xl:h-[54vh] 2xl:w-[40vw] 2xl:h-[72vh] -z-20" />
      <div className="xl:max-w-800 2xl:max-w-5xl">
        <Heading level={1} className="mb-8 text-tomato leading-none">Page en construction</Heading>
        <Heading level={3} className="!mb-2 !font-bold text-white text-balance">
          🚧 Je travaille actuellement sur cette page.
        </Heading>
        <Heading level={3} className="!mt-4 !mb-12 !font-bold text-white text-balance">
          Elle sera disponible sous peu. Stay tuned !
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

export default UnderConstructionPage