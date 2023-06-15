import React, { useRef, useState } from "react";
import Link from "next/link";

import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

import logo from "@/assets/img/logo.svg";
import avatar from "@/assets/img/avatar.svg";

export default function Sidebar() {
  const [expanded, setExpanded] = useState([]);

  const handleChange = (panelId) => (_, isExpanded) => {
    if (isExpanded) {
      setExpanded((prevExpanded) => [...prevExpanded, panelId]);
    } else {
      setExpanded((prevExpanded) =>
        prevExpanded.filter((id) => id !== panelId)
      );
    }
  };

  return (
    <div className="sidebar sticky top-0 py-[50px] max-w-[460px] w-[100%] bg-gray-100/90 rounded-tr-[80px] rounded-br-[80px] h-[100vh] flex flex-col">
      <Link href={"/"} className="mb-[70px] px-[80px]">
        <img src={logo.src} alt="Prodobit" />
      </Link>

      <div className="flex-1 overflow-hidden">
        <div className="overflow-y-auto overflow-x-auto pr-[100px] max-h-[95%]">
          <ul className="flex flex-col gap-[20px]">
            <li className="relative">
              <Link
                href={"#"}
                className="text-[20px] font-bold text-gray-800 ml-[50px] rounded-[20px] flex items-center justify-between py-[20px] px-[33px]"
              >
                <div className="flex items-center flex-1 gap-[15px]">
                  <svg
                    width="23"
                    height="24"
                    viewBox="0 0 23 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {" "}
                    <path
                      opacity="0.43"
                      d="M16.048 0.407806H19C20.0608 0.407806 21.0783 0.829234 21.8284 1.57938C22.5785 2.32952 23 3.34694 23 4.40781V7.35981C23 8.42067 22.5785 9.43809 21.8284 10.1882C21.0783 10.9384 20.0608 11.3598 19 11.3598H16.048C14.9871 11.3598 13.9697 10.9384 13.2195 10.1882C12.4694 9.43809 12.048 8.42067 12.048 7.35981V4.40781C12.048 3.34694 12.4694 2.32952 13.2195 1.57938C13.9697 0.829234 14.9871 0.407806 16.048 0.407806Z"
                      fill="#242529"
                    />{" "}
                    <path
                      d="M16.048 12.4558H19C20.0608 12.4558 21.0783 12.8772 21.8284 13.6274C22.5785 14.3775 23 15.3949 23 16.4558V19.4078C23 20.4686 22.5785 21.4861 21.8284 22.2362C21.0783 22.9864 20.0608 23.4078 19 23.4078H16.048C14.9871 23.4078 13.9697 22.9864 13.2195 22.2362C12.4694 21.4861 12.048 20.4686 12.048 19.4078V16.4558C12.048 15.3949 12.4694 14.3775 13.2195 13.6274C13.9697 12.8772 14.9871 12.4558 16.048 12.4558Z"
                      fill="#242529"
                    />{" "}
                    <path
                      d="M4 0.407806H6.952C8.01287 0.407806 9.03028 0.829234 9.78043 1.57938C10.5306 2.32952 10.952 3.34694 10.952 4.40781V7.35981C10.952 8.42067 10.5306 9.43809 9.78043 10.1882C9.03028 10.9384 8.01287 11.3598 6.952 11.3598H4C2.93913 11.3598 1.92172 10.9384 1.17157 10.1882C0.421427 9.43809 0 8.42067 0 7.35981V4.40781C0 3.34694 0.421427 2.32952 1.17157 1.57938C1.92172 0.829234 2.93913 0.407806 4 0.407806Z"
                      fill="#242529"
                    />{" "}
                    <path
                      opacity="0.43"
                      d="M4 12.4558H6.952C8.01287 12.4558 9.03028 12.8772 9.78043 13.6274C10.5306 14.3775 10.952 15.3949 10.952 16.4558V19.4078C10.952 20.4686 10.5306 21.4861 9.78043 22.2362C9.03028 22.9864 8.01287 23.4078 6.952 23.4078H4C2.93913 23.4078 1.92172 22.9864 1.17157 22.2362C0.421427 21.4861 0 20.4686 0 19.4078V16.4558C0 15.3949 0.421427 14.3775 1.17157 13.6274C1.92172 12.8772 2.93913 12.4558 4 12.4558Z"
                      fill="#242529"
                    />{" "}
                  </svg>
                  <span>Dashboard</span>
                </div>
              </Link>
            </li>

            <Accordion
              className="bg-transparent shadow-none"
              key={"analizler"}
              expanded={expanded.includes("analizler")}
              onChange={handleChange("analizler")}
            >
              <AccordionSummary
                aria-controls="panel-analizler-content"
                id="panel-analizler-header"
                className="p-0"
              >
                <Link
                  href={"#"}
                  className={`${
                    expanded.includes("analizler")
                      ? "bg-green-100/30 text-green-700"
                      : "text-gray-800"
                  } text-[20px] font-bold w-[100%] ml-[50px] rounded-[20px] flex items-center justify-between py-[20px] px-[33px]`}
                >
                  <div className="flex items-center flex-1 gap-[15px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={29}
                      height={25}
                      fill="none"
                    >
                      <path
                        fill={
                          expanded.includes("analizler") ? "#198870" : "#242529"
                        }
                        d="M5.972 7.436a2.875 2.875 0 0 1 2.875 2.875v13.1h-5.75v-13.1a2.875 2.875 0 0 1 2.875-2.875ZM22.583 12.547a2.875 2.875 0 0 1 2.875 2.875v7.986h-5.75v-7.986a2.875 2.875 0 0 1 2.875-2.875Z"
                        opacity={0.43}
                      />
                      <path
                        fill={
                          expanded.includes("analizler") ? "#198870" : "#242529"
                        }
                        d="M14.278.408a2.875 2.875 0 0 1 2.875 2.875v20.125h-5.75V3.283A2.875 2.875 0 0 1 14.278.408Z"
                      />
                      <path
                        fill={
                          expanded.includes("analizler") ? "#198870" : "#242529"
                        }
                        d="M27.056 24.589H1.5a1.5 1.5 0 1 1 0-3h25.556a1.5 1.5 0 1 1 0 3Z"
                      />
                    </svg>
                    <span>Analizler</span>
                  </div>

                  {expanded.includes("analizler") && (
                    <span className="absolute top-0 left-0 h-[70px] w-[9px] bg-green-400 rounded-tr-[9px] rounded-br-[9px]"></span>
                  )}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={25}
                    fill="none"
                    style={{
                      transform: expanded.includes("analizler")
                        ? "rotate(0deg)"
                        : "rotate(180deg)",
                    }}
                  >
                    <path
                      stroke={
                        expanded.includes("analizler") ? "#1C957B" : "#242529"
                      }
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit={10}
                      strokeWidth={1.5}
                      d="m19.92 15.458-6.52-6.52c-.77-.77-2.03-.77-2.8 0l-6.52 6.52"
                    />
                  </svg>
                </Link>
              </AccordionSummary>

              <AccordionDetails className="pr-0">
                <ul className="ml-[95px] mt-[10px] flex flex-col gap-[5px] sidebar-dropdown">
                  <li>
                    <Link
                      href={"#"}
                      className="text-[20px] font-medium text-gray-800 rounded-[10px] flex items-center justify-between py-[10px] px-[20px]"
                    >
                      Satış
                    </Link>
                  </li>

                  <Accordion
                    className="bg-transparent shadow-none"
                    key={"genel-analiz"}
                    expanded={expanded.includes("genel-analiz")}
                    onChange={handleChange("genel-analiz")}
                  >
                    <AccordionSummary
                      aria-controls="panel-genel-analiz-content"
                      id="panel-genel-analiz-header"
                      className="p-0"
                    >
                      <Link
                        href={"#"}
                        className={`${
                          expanded.includes("genel-analiz")
                            ? "bg-green-100/30 text-green-700 ml-[20px]"
                            : "text-gray-800"
                        } text-[20px] font-medium w-[100%] rounded-[10px] flex items-center justify-between py-[10px] px-[20px]`}
                      >
                        <span>Genel Analiz</span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={25}
                          fill="none"
                          style={{
                            transform: expanded.includes("genel-analiz")
                              ? "rotate(0deg)"
                              : "rotate(180deg)",
                          }}
                        >
                          <path
                            stroke={
                              expanded.includes("genel-analiz")
                                ? "#1C957B"
                                : "#242529"
                            }
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit={10}
                            strokeWidth={1.5}
                            d="m19.92 15.458-6.52-6.52c-.77-.77-2.03-.77-2.8 0l-6.52 6.52"
                          />
                        </svg>
                      </Link>
                    </AccordionSummary>

                    <AccordionDetails className="pr-0">
                      <ul className="ml-[35px] mt-[10px] mr-[35px] sidebar-dropdown sidebar-dropdown-2">
                        <li>
                          <Link
                            href={"#"}
                            className="text-[20px] font-light text-gray-800 py-[5px] flex items-center justify-between"
                          >
                            <div className="flex items-center flex-1 gap-[5px]">
                              <span>Genel</span>
                            </div>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={7}
                              height={12}
                              fill="none"
                              className="opacity-0"
                            >
                              <path
                                stroke="#1C957B"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={10}
                                strokeWidth={1.5}
                                d="m1.22 10.709 3.804-3.804c.45-.449.45-1.184 0-1.633L1.221 1.47"
                              />
                            </svg>
                          </Link>
                        </li>

                        <li>
                          <Link
                            href={"/oge-ekle/step-1"}
                            className="text-[20px] font-light text-gray-1100 py-[5px] flex items-center justify-between"
                          >
                            <div className="flex items-center flex-1 gap-[5px]">
                              <span>Görevler</span>
                              <span className="text-[12px] text-white font-bold h-[17px] w-[24px] text-center bg-green-400 rounded-full">
                                3
                              </span>
                            </div>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={7}
                              height={12}
                              fill="none"
                            >
                              <path
                                stroke="#1C957B"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={10}
                                strokeWidth={1.5}
                                d="m1.22 10.709 3.804-3.804c.45-.449.45-1.184 0-1.633L1.221 1.47"
                              />
                            </svg>
                          </Link>
                        </li>

                        <li>
                          <Link
                            href={"#"}
                            className="text-[20px] font-light text-gray-800 py-[5px] flex items-center justify-between"
                          >
                            <div className="flex items-center flex-1 gap-[5px]">
                              <span>İşler</span>
                            </div>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={7}
                              height={12}
                              fill="none"
                              className="opacity-0"
                            >
                              <path
                                stroke="#1C957B"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={10}
                                strokeWidth={1.5}
                                d="m1.22 10.709 3.804-3.804c.45-.449.45-1.184 0-1.633L1.221 1.47"
                              />
                            </svg>
                          </Link>
                        </li>
                      </ul>
                    </AccordionDetails>
                  </Accordion>

                  <li>
                    <Link
                      href={"#"}
                      className="text-[20px] font-medium text-gray-800 rounded-[10px] flex items-center justify-between py-[10px] px-[20px]"
                    >
                      Performans
                    </Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <li className="relative">
              <Link
                href={"#"}
                className="text-[20px] font-bold text-gray-800 ml-[50px] rounded-[20px] flex items-center justify-between py-[20px] px-[33px]"
              >
                <div className="flex items-center flex-1 gap-[15px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={26}
                    height={26}
                    fill="none"
                  >
                    <path
                      fill="#101324"
                      d="M9.342 25.589a2.793 2.793 0 0 1-2.125-.981L5.476 22.57a2.32 2.32 0 0 0-1.766-.814A3.714 3.714 0 0 1 0 18.047V4.299A3.714 3.714 0 0 1 3.71.589h18.452a3.714 3.714 0 0 1 3.71 3.71v13.748a3.714 3.714 0 0 1-3.71 3.71h-7.733a2.31 2.31 0 0 0-2.079 1.285l-.5 1a2.787 2.787 0 0 1-2.508 1.547Zm-5.632-23A1.712 1.712 0 0 0 2 4.299v13.748a1.712 1.712 0 0 0 1.71 1.71A4.318 4.318 0 0 1 7 21.272l1.741 2.037a.8.8 0 0 0 1.324-.162l.5-1a4.3 4.3 0 0 1 3.867-2.39h7.734a1.712 1.712 0 0 0 1.71-1.71V4.299a1.712 1.712 0 0 0-1.71-1.71H3.71Z"
                    />
                    <path
                      fill="#101324"
                      d="M8.914 14.974a3.015 3.015 0 1 0 0-6.03 3.015 3.015 0 0 0 0 6.03Z"
                    />
                    <path
                      fill="#101324"
                      d="M17.205 14.974a3.015 3.015 0 1 0 0-6.03 3.015 3.015 0 0 0 0 6.03Z"
                      opacity={0.43}
                    />
                  </svg>
                  <span>Talepler</span>
                  <span className="text-[12px] text-white py-[3px] px-[9px] bg-orange-500 rounded-full">Yeni</span>
                </div>
              </Link>
            </li>

            <li className="relative">
              <Link
                href={"#"}
                className="text-[20px] font-bold text-gray-800 ml-[50px] rounded-[20px] flex items-center justify-between py-[20px] px-[33px]"
              >
                <div className="flex items-center flex-1 gap-[15px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17}
                    height={25}
                    fill="none"
                  >
                    <path
                      fill="#101324"
                      d="M13.697 24.589a.5.5 0 0 1-.5-.5v-23a.5.5 0 0 1 1 0v23a.5.5 0 0 1-.5.5Z"
                    />
                    <path
                      fill="#101324"
                      d="M13.697 19.93a2.5 2.5 0 0 1-2.5-2.5v-7.262a2.5 2.5 0 0 1 5 0v7.263a2.5 2.5 0 0 1-2.5 2.5Z"
                    />
                    <g fill="#101324" opacity={0.43}>
                      <path d="M2.5 24.589a.5.5 0 0 1-.5-.5v-23a.5.5 0 1 1 1 0v23a.5.5 0 0 1-.5.5Z" />
                      <path d="M2.5 15.089a2.5 2.5 0 0 1-2.5-2.5V5.326a2.5 2.5 0 1 1 5 0v7.263a2.5 2.5 0 0 1-2.5 2.5Z" />
                    </g>
                  </svg>
                  <span>Görevler</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-[40px] p-[15px] mx-[60px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={avatar.src} alt="Fatih G." />

            <div className="ml-[24px]">
              <span className="block text-body-md text-purple-800 font-bold">
                Fatih G.
              </span>
              <span className="block text-body-sm text-gray-800">
                Senior Designer
              </span>
            </div>
          </div>

          <Link href="#" className="px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={22}
              height={21}
              fill="none"
            >
              <path
                stroke="#AEADAF"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1.833 10.25S5.167 3.585 11 3.585s9.167 6.667 9.167 6.667-3.334 6.666-9.167 6.666-9.167-6.667-9.167-6.667Z"
              />
              <path
                stroke="#AEADAF"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 12.75a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
              />
            </svg>
          </Link>
        </div>

        <div className="border-t border-gray-500 mt-[15px] pt-[15px]">
          <div className="flex gap-[5px]">
            <Link
              href={"#"}
              className="flex-1 bg-gray-500 rounded-[6px] rounded-bl-[25px] flex items-center justify-center h-[45px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                fill="none"
              >
                <path
                  stroke="#363853"
                  strokeWidth={1.5}
                  d="M11.75 6.161c-1.768.59-4.124-1.767-3.535-3.535M8.94 1.9 5.133 5.708a12.918 12.918 0 0 0-3.398 6.001l-.184.736c-.057.23.15.437.38.38l.736-.184a12.918 12.918 0 0 0 6.001-3.398l3.808-3.808A2.5 2.5 0 1 0 8.941 1.9Z"
                />
              </svg>
            </Link>

            <Link
              href={"#"}
              className="flex-1 bg-gray-500 rounded-[6px] flex items-center justify-center h-[45px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={21}
                height={20}
                fill="none"
              >
                <path
                  fill="#363853"
                  d="m4.003 14.193-.695.283.695-.283Zm-.29-4.686.724.196-.724-.196Zm12.824 0-.724.196.724-.196Zm-.29 4.686.695.283-.695-.283Zm-4.425 3.176-.116-.74.116.74Zm-3.394 0-.116.741.116-.74ZM7.338 6.35l-.149-.736.15.735Zm5.574 0-.15.734.15-.735ZM7.804 17.271l.116-.741-.116.74ZM4.08 14.383l.695-.283-.695.283Zm8.366 2.889.116.74-.116-.74Zm3.724-2.889-.695-.283.695.283Zm-3.028-7.988.149-.735-.15.735Zm-6.034 0 .15.735-.15-.735Zm-1.363-.19a.75.75 0 1 0 1.5 0h-1.5Zm.75-.196h-.75.75ZM9.224 2.62l-.182-.728.182.728Zm.057-.014.182.728-.182-.728Zm3.278.855-.52.54.52-.54Zm-.306.745a.75.75 0 1 0 1.038-1.082l-1.038 1.082ZM10.97 2.599l.175-.73-.175.73ZM7.258 7.13l.23-.047-.299-1.47-.23.047.299 1.47Zm5.504-.047.23.047.299-1.47-.23-.047-.299 1.47Zm-.432 9.448-.624.097.232 1.482.624-.097-.232-1.482Zm-3.786.097-.624-.097-.232 1.482.624.097.232-1.482Zm7.009-2.718-.078.19 1.39.566.077-.19-1.39-.566Zm-10.778.19-.078-.19-1.389.566.077.19 1.39-.566Zm-.078-.19a6.573 6.573 0 0 1-.26-4.207L2.99 9.311a8.073 8.073 0 0 0 .319 5.165l1.39-.566Zm11.116-4.207a6.574 6.574 0 0 1-.26 4.207l1.389.566a8.073 8.073 0 0 0 .319-5.165l-1.448.392Zm-4.107 6.925a10.251 10.251 0 0 1-3.162 0l-.232 1.482c1.2.188 2.425.188 3.626 0l-.232-1.482ZM7.488 7.083a13.258 13.258 0 0 1 5.274 0l.299-1.47a14.758 14.758 0 0 0-5.872 0l.299 1.47Zm.432 9.448c-1.438-.225-2.627-1.158-3.145-2.43l-1.39.565c.726 1.781 2.368 3.045 4.303 3.347l.232-1.482Zm4.642 1.482c1.935-.302 3.577-1.566 4.303-3.347l-1.39-.566c-.518 1.273-1.707 2.206-3.145 2.43l.232 1.483Zm.43-10.883c1.39.283 2.473 1.29 2.82 2.573l1.449-.392c-.504-1.857-2.05-3.26-3.97-3.65l-.299 1.47ZM6.96 5.66c-1.92.39-3.466 1.794-3.97 3.651l1.448.392c.348-1.284 1.43-2.29 2.82-2.573L6.96 5.66Zm.286.546v-.197h-1.5v.197h1.5Zm2.16-2.857.058-.014-.364-1.456-.057.014.364 1.456Zm2.635.654.213.204 1.038-1.082-.213-.205-1.038 1.083Zm-1.244-.675c.474.114.904.348 1.244.675l1.038-1.083a4.207 4.207 0 0 0-1.932-1.05l-.35 1.458Zm-1.333.007c.436-.11.895-.112 1.333-.007l.35-1.458a4.308 4.308 0 0 0-2.047.01l.364 1.455ZM7.245 6.009c0-1.23.869-2.337 2.16-2.66l-.363-1.456c-1.922.48-3.297 2.159-3.297 4.116h1.5Z"
                />
                <path
                  stroke="#363853"
                  strokeLinecap="round"
                  strokeWidth={1.5}
                  d="M10.125 11.251v1.667"
                />
              </svg>
            </Link>

            <Link
              href={"#"}
              className="flex-1 bg-gray-500 rounded-[6px] flex items-center justify-center h-[45px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={21}
                height={20}
                fill="none"
              >
                <path
                  stroke="#292D32"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.208 3.334h3.334a6.665 6.665 0 0 1 6.666 6.667 6.665 6.665 0 0 1-6.666 6.667H9.208A6.665 6.665 0 0 1 2.542 10a6.665 6.665 0 0 1 6.666-6.667Z"
                />
                <path
                  stroke="#292D32"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12.542 13.334a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666Z"
                />
              </svg>
            </Link>

            <Link
              href={"#"}
              className="flex-1 bg-gray-500 rounded-[6px] rounded-br-[25px] flex items-center justify-center h-[45px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={21}
                height={20}
                fill="none"
              >
                <path
                  stroke="#363853"
                  strokeWidth={1.5}
                  d="M3.42 7.46a6.26 6.26 0 0 1 4.664-4.665 11.128 11.128 0 0 1 5.082 0 6.26 6.26 0 0 1 4.665 4.665 11.127 11.127 0 0 1 0 5.082 6.26 6.26 0 0 1-4.665 4.665 11.128 11.128 0 0 1-5.082 0 6.26 6.26 0 0 1-4.665-4.665 11.128 11.128 0 0 1 0-5.082Z"
                />
                <path
                  stroke="#363853"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M10.625 12.918V9.584"
                />
                <mask id="a" fill="#fff">
                  <circle cx={10.625} cy={7.501} r={0.833} />
                </mask>
                <path
                  fill="#363853"
                  d="M10.458 7.501c0-.092.075-.167.167-.167v2c1.012 0 1.833-.82 1.833-1.833h-2Zm.167-.167c.092 0 .167.075.167.167h-2c0 1.013.82 1.833 1.833 1.833v-2Zm.167.167a.167.167 0 0 1-.167.167v-2c-1.012 0-1.833.82-1.833 1.833h2Zm-.167.167a.167.167 0 0 1-.167-.167h2c0-1.012-.82-1.833-1.833-1.833v2Z"
                  mask="url(#a)"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
