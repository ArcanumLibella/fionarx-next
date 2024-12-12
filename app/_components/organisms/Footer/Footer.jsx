import React from 'react'
import { Copyright, Heading, Text } from "../../atoms"
import Link from "next/link"
import { MailIcon, MapPinIcon } from "@/public/_assets/icons";
import { COLORS } from "@/app/_constants/Colors";

export const Footer = ({ footer }) => {
  const currentYear = new Date().getFullYear();
  const { title, role, location, google, mail, menu, formules, legalInformation } = footer;

  return (
    <div className="Footer relative bottom-0 flex justify-center xl:mt-36 2xl:mt-80 md:ml-20 py-16 px-4 md:px-8 backdrop-blur-3xl bg-gradient-to-t from-transparent to-purple-ultraDark z-50">
      <div className="Footer__wrapper flex flex-col md:flex-row justify-between w-full max-w-1200">
        
        {/* LEFT */}
        <div className="Footer__left flex flex-col justify-between mb-16 md:mb-0 md:mr-8">
          <div className="Footer__left--top mb-8 md:mb-0">
            <Heading level={2} className="h2 !mt-0 !mb-2 !text-md lg:!text-2md !normal-case !text-white">
              {title}
            </Heading>
            <Heading level={3} className="h3 !mt-0 !mb-4 !text-2base lg:!text-3base text-pretty">
              {role}
            </Heading>
            <Text type="paragraphLight" className="!text-normal">
              {location}
            </Text>
          </div>
          <div className="Footer__left--bottom">
            <Link href={google} title="Google My Business de Fiona Roux" className="flex mb-2">
              <MapPinIcon
                fill={COLORS.purple.DEFAULT}
                height={32}
                width={32}
                className="mr-2 transition-all duration-300 hover:fill-purple-light"
              />
              <Text type="custom" className="font-normal text-2normal md:text-base">
                Google My Business
              </Text>
            </Link>
            <Link href={`mailto:${mail}`} title={mail} className="flex">
              <MailIcon
                fill={COLORS.purple.DEFAULT}
                height={32}
                width={32}
                className="mr-2 transition-all duration-300 hover:fill-purple-light"
              />
              <Text type="custom" className="font-normal text-2normal md:text-base">
                {mail}
              </Text>
            </Link>
          </div>

        </div>

        {/* RIGHT */}
        <div className="Footer__right">
          <div className="Footer__right--top flex mb-8">
            <div className="Footer__main-menu mr-12 md:mr-8 lg:mr-16">
              <span className="block mb-3 font-normal text-sm text-purple-ultraLight">
                MENU
              </span>
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
            <div className="Footer__prestations">
              <span className="block mb-3 font-normal text-sm text-purple-ultraLight uppercase">
                Prestations
              </span>
              <ul className="Footer__menu">
                {formules && formules.map((item) => {
                  return (
                    <li key={item.id} className="mb-2">
                      <Link href={item.link} className="cursor-pointer">
                        <Text type="custom" className="font-medium text-sm text-white hover:text-tomato transition ease-in-out duration-300">
                          {item.label}
                        </Text>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          <div className="Footer__right--bottom md:text-right">
            <span className="block mb-3 font-normal text-sm text-purple-ultraLight">
              INFORMATIONS JURIDIQUES
            </span>
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
