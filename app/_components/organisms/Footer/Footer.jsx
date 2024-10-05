import React from 'react'
import { Copyright, Heading, Text } from "../../atoms"
import Link from "next/link"

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="Footer relative bottom-0 flex justify-center xl:mt-36 2xl:mt-80 md:ml-20 py-16 px-4 md:px-8 backdrop-blur-3xl bg-gradient-to-t from-transparent to-purple-ultraDark z-50">
      <div className="Footer__wrapper flex flex-col md:flex-row justify-between w-full max-w-1200">
        
        {/* LEFT */}
        <div className="Footer__left flex flex-col justify-between mb-16 md:mb-0">
          <div className="Footer__left--top mb-8 md:mb-0">
            <Heading level={2} className="!mt-0 !mb-2 !text-md lg:!text-2md !normal-case !text-white">
              Fiona Roux
            </Heading>
            <Heading level={3} className="!mt-0 !mb-4 !text-2base lg:!text-3base text-pretty">
              Consultante en Stratégie Digitale
            </Heading>
            <Text type="paragraphLight" className="!text-normal">
              Basée à Avignon dans le Sud de la France.
            </Text>
          </div>
          <div className="Footer__left--bottom">
            <Link href="">
              <Text type="custom" className="font-bold text-base lg:text-2base">
                hello@fionarx.com
              </Text>
            </Link>
          </div>

        </div>

        {/* RIGHT */}
        <div className="Footer__right md:text-right">
          <div className="Footer__right--top mb-8">
            <Text type="custom" className="mb-3 font-normal text-sm text-purple-ultraLight">
              MENU
            </Text>
            <ul className="Footer__menu">
              <li className="mb-2">
                <Link href="" className="cursor-pointer">
                  <Text type="custom" className="font-bold text-sm text-white hover:text-tomato transition ease-in-out duration-300 uppercase">
                    À propos
                  </Text>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="" className="cursor-pointer">
                  <Text type="custom" className="font-bold text-sm text-white hover:text-tomato transition ease-in-out duration-300 uppercase">
                    Prestations
                  </Text>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="" className="cursor-pointer">
                  <Text type="custom" className="font-bold text-sm text-white hover:text-tomato transition ease-in-out duration-300 uppercase">
                    Contact
                  </Text>
                </Link>
              </li>
            </ul>
          </div>

          <div className="Footer__right--bottom">
            <Text type="custom" className="mb-3 font-normal text-sm text-purple-ultraLight">
              INFORMATIONS JURIDIQUES
            </Text>
            <ul className="Footer__menu">
              <li className="mb-2">
                <Link href="" className="cursor-pointer">
                  <Text type="custom" className="font-normal text-sm text-white hover:text-tomato transition ease-in-out duration-300 normal-case">
                    Mentions légales
                  </Text>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="" className="cursor-pointer">
                  <Text type="custom" className="font-normal text-sm text-white hover:text-tomato transition ease-in-out duration-300 normal-case">
                    Politique de confidentialité
                  </Text>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="" className="cursor-pointer">
                  <Text type="custom" className="font-normal text-sm text-white hover:text-tomato transition ease-in-out duration-300 normal-case">
                    Conditions générales de vente
                  </Text>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Copyright year={ currentYear } />
    </div>
  )
}
