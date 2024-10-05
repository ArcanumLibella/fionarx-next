import React from 'react'
import { Copyright, Heading, Text } from "../../atoms"
import Link from "next/link"

export const Footer = ({ footer }) => {
  const currentYear = new Date().getFullYear();
  const { title, role, location, mail, menu, legalInformation } = footer;

  return (
    <div className="Footer relative bottom-0 flex justify-center xl:mt-36 2xl:mt-80 md:ml-20 py-16 px-4 md:px-8 backdrop-blur-3xl bg-gradient-to-t from-transparent to-purple-ultraDark z-50">
      <div className="Footer__wrapper flex flex-col md:flex-row justify-between w-full max-w-1200">
        
        {/* LEFT */}
        <div className="Footer__left flex flex-col justify-between mb-16 md:mb-0">
          <div className="Footer__left--top mb-8 md:mb-0">
            <Heading level={2} className="!mt-0 !mb-2 !text-md lg:!text-2md !normal-case !text-white">
              {title}
            </Heading>
            <Heading level={3} className="!mt-0 !mb-4 !text-2base lg:!text-3base text-pretty">
              {role}
            </Heading>
            <Text type="paragraphLight" className="!text-normal">
              {location}
            </Text>
          </div>
          <div className="Footer__left--bottom">
            <Link href={`mailto:${mail}`}>
              <Text type="custom" className="font-bold text-base lg:text-2base">
                {mail}
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
              {menu && menu.map((item) => {
                return (
                  <li key={item.id} className="mb-2">
                    <Link href={item.link} className="cursor-pointer">
                      <Text type="custom" className="font-bold text-sm text-white hover:text-tomato transition ease-in-out duration-300 uppercase">
                        {item.label}
                      </Text>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="Footer__right--bottom">
            <Text type="custom" className="mb-3 font-normal text-sm text-purple-ultraLight">
              INFORMATIONS JURIDIQUES
            </Text>
            <ul className="Footer__menu">
              {legalInformation && legalInformation.map((item) => {
                return (
                  <li key={item.id} className="mb-2 cursor-default">
                    {/* <Link href={item.link} className="cursor-pointer"> */}
                      <Text type="custom" className="font-normal text-sm text-white hover:text-tomato transition ease-in-out duration-300 normal-case">
                        {item.label}
                      </Text>
                    {/* </Link> */}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
      <Copyright year={ currentYear } />
    </div>
  )
}
