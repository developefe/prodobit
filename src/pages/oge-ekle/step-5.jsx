import React, { useState } from "react";

import AddProductSteps from "@/components/add-product-steps";

import { Box, Tab, Tabs } from "@mui/material";

import productSum from "@/assets/img/product-sum.png";

export default function Step5() {
  // Tab value
  const [tabValue, setTabValue] = React.useState(0);

  const tabsHandle = (event, newValue) => {
    setTabValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={tabValue !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {tabValue === index && (
          <Box sx={{ p: 3 }}>
            <div>{children}</div>
          </Box>
        )}
      </div>
    );
  }
  return (
    <div className="flex flex-col">
      <AddProductSteps />

      <div className="flex-1 overflow-y-auto overflow-x-hidden pt-[150px] pb-[10vw] before:content-[''] before:fixed before:left-[460px] before:right-0 before:bottom-0 before:h-[200px] before:bg-gradient-to-t before:from-red-50 before:to-green-10/10 before:z-[3]">
        <span className="block text-[54px] font-medium text-green-600 text-center">
          Ürün Özeti
        </span>

        <div
          className="bg-white flex flex-col rounded-[40px] py-[50px] px-[75px] max-w-[700px] mx-auto mt-[55px]"
          style={{ boxShadow: "0px 37px 44px -13px rgba(104, 48, 48, 0.1)" }}
        >
          <div className="flex items-center flex-wrap gap-[6px] mb-[20px]">
            <div className="flex items-center gap-[8px] min-h-[30px] bg-blue-50 py-[5px] px-[10px] rounded-[5px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={12}
                height={12}
                fill="none"
              >
                <path
                  stroke="#1D5B83"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M1 4.5V3.25A2.247 2.247 0 0 1 3.25 1H4.5M7.5 1h1.25A2.247 2.247 0 0 1 11 3.25V4.5M11 8v.75A2.247 2.247 0 0 1 8.75 11H8M4.5 11H3.25A2.247 2.247 0 0 1 1 8.75V7.5M5.25 3.5v1c0 .5-.25.75-.75.75h-1c-.5 0-.75-.25-.75-.75v-1c0-.5.25-.75.75-.75h1c.5 0 .75.25.75.75ZM9.25 3.5v1c0 .5-.25.75-.75.75h-1c-.5 0-.75-.25-.75-.75v-1c0-.5.25-.75.75-.75h1c.5 0 .75.25.75.75ZM5.25 7.5v1c0 .5-.25.75-.75.75h-1c-.5 0-.75-.25-.75-.75v-1c0-.5.25-.75.75-.75h1c.5 0 .75.25.75.75ZM9.25 7.5v1c0 .5-.25.75-.75.75h-1c-.5 0-.75-.25-.75-.75v-1c0-.5.25-.75.75-.75h1c.5 0 .75.25.75.75Z"
                />
              </svg>
              <span className="text-blue-500 text-[12px] font-semibold leading-normal">
                B342309SC00
              </span>
            </div>
            <div className="flex items-center gap-[8px] min-h-[30px] border-[1px] border-blue-100 py-[5px] px-[10px] rounded-[5px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={12}
                height={12}
                fill="none"
              >
                <path
                  stroke="#2980B9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.375 6.625A4.377 4.377 0 0 1 6 11a4.377 4.377 0 0 1-4.375-4.375A4.377 4.377 0 0 1 6 2.25a4.377 4.377 0 0 1 4.375 4.375ZM6 4v2.5"
                />
                <path
                  stroke="#2980B9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit={10}
                  d="M4.5 1h3"
                />
              </svg>
              <span className="text-blue-500 text-[12px] font-semibold leading-normal">
                12 Mayıs 2023 - 20:33
              </span>
            </div>
            <div className="flex items-center gap-[8px] min-h-[30px] border-[1px] border-blue-100 py-[5px] px-[10px] rounded-[5px]">
              <span className="text-blue-500 text-[12px] font-semibold leading-normal">
                Nike
              </span>
            </div>
          </div>
          <div className="flex items-center gap-[20px] mb-[35px]">
            <img
              className="w-[58px] h-[58px] rounded-full overflow-hidden"
              src={productSum.src}
              alt=""
            />
            <div className="text-black font-medium text-[26px] max-w-[75%] min-w-[35%] leading-[1.3]">
              Adidas AX2S Terrex Erkek Outdoor Ayakkabı
            </div>
          </div>
          <div className="flex flex-col border-[1px] border-gray-600 rounded-[30px] p-[30px]">
            <div className="flex w-[100%] gap-[5%] mb-[28px]">
              <div className="flex flex-col w-[25%]">
                <div className="flex items-center gap-[8px] mb-[6px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    fill="none"
                  >
                    <path
                      stroke="#292D32"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.926 11.492c.478-.514 1.207-.473 1.627.087l.59.787c.472.625 1.236.625 1.709 0l.589-.787c.42-.56 1.15-.6 1.627-.088 1.039 1.109 1.885.741 1.885-.81V4.107c.005-2.351-.543-2.94-2.748-2.94h-4.41c-2.205 0-2.753.589-2.753 2.94v6.568c0 1.557.851 1.919 1.884.816ZM4.667 4.083h4.666M5.25 6.417h3.5"
                    />
                  </svg>
                  <div className="text-black text-[15px] font-normal">
                    Maaliyet
                  </div>
                </div>
                <div className="text-black font-semibold text-[26px] leading-[1.2] mb-[3px]">
                  2500₺
                </div>
                <div className="flex items-center justify-center py-[6px] px-[8px] gap-[6px] bg-green-300 rounded-full w-[max-content]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={8}
                    fill="none"
                    className="mb-[-1px]"
                  >
                    <path
                      stroke="#0C3F34"
                      strokeLinecap="round"
                      strokeMiterlimit={10}
                      strokeWidth={1.5}
                      d="M1 6.725 4.734 3.3l2.569 2.545 4.96-4.514"
                    />
                    <path
                      stroke="#0C3F34"
                      strokeLinecap="round"
                      strokeMiterlimit={10}
                      strokeWidth={1.5}
                      d="M7.636 1.275h4.628v4.628"
                    />
                  </svg>
                  <div className="text-green-900 leading-[1] font-semibold text-[12px]">
                    12%
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[25%]">
                <div className="flex items-center gap-[8px] mb-[6px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={15}
                    height={14}
                    fill="none"
                  >
                    <path
                      stroke="#292D32"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.333 3.004v1.575c0 1.313-.525 1.838-1.837 1.838H9.92c-1.313 0-1.838-.525-1.838-1.838V3.004c0-1.313.525-1.837 1.838-1.837h1.575c1.312 0 1.837.524 1.837 1.837ZM6.917 9.421v1.575c0 1.313-.525 1.838-1.838 1.838H3.504c-1.312 0-1.837-.525-1.837-1.838V9.421c0-1.313.525-1.837 1.837-1.837H5.08c1.313 0 1.838.524 1.838 1.837Z"
                    />
                    <path
                      stroke="#292D32"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.638 6.417v1.528c0 1.57-.624 2.194-2.193 2.194H6.917V9.42c0-1.313-.525-1.838-1.838-1.838h-.717V6.055c0-1.569.624-2.193 2.193-2.193h1.528v.717c0 1.313.525 1.838 1.838 1.838h.717Z"
                    />
                  </svg>
                  <div className="text-black text-[15px] font-normal">
                    Hammadde
                  </div>
                </div>
                <div className="text-black font-semibold text-[26px] leading-[1.2] mb-[3px]">
                  15₺
                </div>
                <div className="flex items-center justify-center py-[6px] px-[8px] gap-[6px] bg-red-300 rounded-full w-[max-content]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={8}
                    fill="none"
                    className="mb-[-1px]"
                  >
                    <path
                      stroke="#86292E"
                      strokeLinecap="round"
                      strokeMiterlimit={10}
                      strokeWidth={1.5}
                      d="M1 6.725 4.734 3.3l2.569 2.545 4.96-4.514"
                    />
                    <path
                      stroke="#86292E"
                      strokeLinecap="round"
                      strokeMiterlimit={10}
                      strokeWidth={1.5}
                      d="M7.636 1.275h4.628v4.628"
                    />
                  </svg>
                  <div className="text-red-800 leading-[1] font-semibold text-[12px]">
                    15%
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[25%]">
                <div className="flex items-center gap-[8px] mb-[6px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    fill="none"
                  >
                    <path
                      stroke="#292D32"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.432 8.925 2.643 2.643a2.788 2.788 0 0 0 3.937 0l2.561-2.561a2.788 2.788 0 0 0 0-3.938L8.925 2.433a2.771 2.771 0 0 0-2.1-.811l-2.917.14a2.254 2.254 0 0 0-2.152 2.14l-.14 2.917a2.802 2.802 0 0 0 .816 2.106Z"
                    />
                    <path
                      stroke="#292D32"
                      strokeLinecap="round"
                      d="M5.542 7a1.458 1.458 0 1 0 0-2.917 1.458 1.458 0 0 0 0 2.917Z"
                    />
                  </svg>
                  <div className="text-black text-[15px] font-normal">
                    Satış
                  </div>
                </div>
                <div className="text-black font-semibold text-[26px] leading-[1.2] mb-[3px]">
                  3200₺
                </div>
                <div className="flex items-center justify-center py-[6px] px-[8px] gap-[6px] bg-red-300 rounded-full w-[max-content]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={8}
                    fill="none"
                  >
                    <path
                      stroke="#86292E"
                      strokeLinecap="round"
                      strokeMiterlimit={10}
                      strokeWidth={1.5}
                      d="M1 1.275 4.734 4.7l2.569-2.545 4.96 4.514"
                    />
                    <path
                      stroke="#86292E"
                      strokeLinecap="round"
                      strokeMiterlimit={10}
                      strokeWidth={1.5}
                      d="M7.636 6.725h4.628V2.097"
                    />
                  </svg>
                  <div className="text-red-800 leading-[1] font-semibold text-[12px]">
                    05%
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[25%]">
                <div className="flex items-center gap-[8px] mb-[6px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={14}
                    fill="none"
                  >
                    <path
                      stroke="#292D32"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.078 1.167h3.719c3.099 0 4.338 1.166 4.338 4.083v3.5c0 2.916-1.24 4.083-4.338 4.083H6.078c-3.099 0-4.339-1.167-4.339-4.083v-3.5c0-2.917 1.24-4.083 4.339-4.083ZM5.812 8.907l4.053-3.815"
                    />
                    <path
                      stroke="#292D32"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.066 6.05c.42 0 .762-.322.762-.718 0-.396-.341-.718-.762-.718s-.763.322-.763.718c0 .396.342.717.763.717ZM10.12 9.386c.42 0 .762-.322.762-.718 0-.396-.342-.717-.763-.717-.42 0-.762.32-.762.717 0 .396.341.718.762.718Z"
                    />
                  </svg>
                  <div className="text-black text-[15px] font-normal">
                    Kazanç
                  </div>
                </div>
                <div className="text-black font-semibold text-[26px] leading-[1.2] mb-[3px]">
                  25%
                </div>
                <div className="flex items-center justify-center py-[6px] px-[8px] gap-[6px] bg-green-300 rounded-full w-[max-content]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={8}
                    fill="none"
                    className="mb-[-1px]"
                  >
                    <path
                      stroke="#0C3F34"
                      strokeLinecap="round"
                      strokeMiterlimit={10}
                      strokeWidth={1.5}
                      d="M1 6.725 4.734 3.3l2.569 2.545 4.96-4.514"
                    />
                    <path
                      stroke="#0C3F34"
                      strokeLinecap="round"
                      strokeMiterlimit={10}
                      strokeWidth={1.5}
                      d="M7.636 1.275h4.628v4.628"
                    />
                  </svg>
                  <div className="text-green-900 leading-[1] font-semibold text-[12px]">
                    12%
                  </div>
                </div>
              </div>
            </div>
            <Tabs
              className="step-5-tabs flex gap-[8px]"
              value={tabValue}
              onChange={tabsHandle}
            >
              <Tab
                label={
                  <div className="flex flex-col rounded-full w-[80px] min-h-[130px] border-[1px] border-blue-50 py-[10px] px-[8px] duration-[.4s]">
                    <div className="icon flex items-center justify-center bg-blue-50 w-[62px] h-[62px] mb-[10px] rounded-full  duration-[.4s]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        className="opacity-[50%] duration-[.4s] duration-[.4s]"
                      >
                        <path
                          stroke="#2980B9"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit={10}
                          strokeWidth={1.5}
                          d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5ZM6 8v8M9 8v4M9 15v1M15 8v1M12 8v8M15 12v4M18 8v8"
                        />
                      </svg>
                    </div>
                    <div className="text-blue-300 text-[12px] font-normal duration-[.4s]">
                      Öğe Kimliği
                    </div>
                  </div>
                }
              ></Tab>
              <Tab
                label={
                  <div className="flex flex-col rounded-full w-[80px] min-h-[130px] border-[1px] border-blue-50 py-[10px] px-[8px] duration-[.4s]">
                    <div className="icon flex items-center justify-center bg-blue-50 w-[62px] h-[62px] mb-[10px] rounded-full duration-[.4s]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        className="opacity-[50%] duration-[.4s]"
                      >
                        <path
                          stroke="#2980B9"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit={10}
                          strokeWidth={1.5}
                          d="M17 10h2c2 0 3-1 3-3V5c0-2-1-3-3-3h-2c-2 0-3 1-3 3v2c0 2 1 3 3 3ZM5 22h2c2 0 3-1 3-3v-2c0-2-1-3-3-3H5c-2 0-3 1-3 3v2c0 2 1 3 3 3ZM6 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM18 22a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                        />
                      </svg>
                    </div>
                    <div className="text-blue-300 text-[12px] font-normal duration-[.4s]">
                      Öğe Özellikleri
                    </div>
                  </div>
                }
              ></Tab>
              <Tab
                label={
                  <div className="flex flex-col rounded-full w-[80px] min-h-[130px] border-[1px] border-blue-50 py-[10px] px-[8px] duration-[.4s]">
                    <div className="icon flex items-center justify-center bg-blue-50 w-[62px] h-[62px] mb-[10px] rounded-full duration-[.4s]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        className="opacity-[50%] duration-[.4s]"
                      >
                        <path
                          stroke="#2980B9"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit={10}
                          strokeWidth={1.5}
                          d="M22 17.5h-7M5 17.5H2M22 6.5h-3M9 6.5H2M7 14.5h6c1.1 0 2 .5 2 2v2c0 1.5-.9 2-2 2H7c-1.1 0-2-.5-2-2v-2c0-1.5.9-2 2-2ZM11 3.5h6c1.1 0 2 .5 2 2v2c0 1.5-.9 2-2 2h-6c-1.1 0-2-.5-2-2v-2c0-1.5.9-2 2-2Z"
                        />
                      </svg>
                    </div>
                    <div className="text-blue-300 text-[12px] font-normal duration-[.4s]">
                      Öğe Seçeneği
                    </div>
                  </div>
                }
              ></Tab>
              <Tab
                label={
                  <div className="flex flex-col rounded-full w-[80px] min-h-[130px] border-[1px] border-blue-50 py-[10px] px-[8px] duration-[.4s]">
                    <div className="icon flex items-center justify-center bg-blue-50 w-[62px] h-[62px] mb-[10px] rounded-full duration-[.4s]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        className="opacity-[50%] duration-[.4s]"
                      >
                        <path
                          stroke="#2980B9"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 5v14M5 12h14"
                        />
                      </svg>
                    </div>
                    <div className="text-blue-300 text-[12px] font-normal duration-[.4s]">
                      Yeni Ekle
                    </div>
                  </div>
                }
              ></Tab>
            </Tabs>
            <TabPanel value={1} index={0}>
              <table>
                <tbody>
                  {/* First tr and its elements different from the rest(!) */}
                  <tr className="border-b-[1px] border-gray-600">
                    <th className="text-black text-[12px] font-bold text-start w-[35%] pb-[10px]">
                      Özellik Tanımı
                    </th>
                    <th className="text-black text-[12px] font-bold text-start w-[45%] pb-[10px]">
                      Özelliği
                    </th>
                    <th className="w-[20%] pb-[10px]">
                      <div className="flex items-center justify-center py-[5px] px-[15px] w-[max-content] bg-gray-1000 rounded-full cursor-pointer ml-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={15}
                          height={16}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M7.5 3.625v8.75M3.125 8h8.75"
                          />
                        </svg>
                      </div>
                    </th>
                  </tr>
                  <tr className="group relative transition-[.2s] hover:shadow-[0px_17px_34px_-13px_rgba(48,57,104,0.2)] rounded-[6px]">
                    <td className="text-gray-800 text-[12px] font-normal py-[15px] px-[15px] transition-[.2s] group-hover:text-black">
                      Ürün Tam Adı
                    </td>
                    <td className="text-black text-[12px] font-normal py-[15px] px-[15px]">
                      Adidas AX2S Terrex Erkek Outdoor Ayakkabı
                    </td>
                    <td className="py-[15px] px-[15px]">
                      <div className="flex items-center justify-end gap-[8px] opacity-[40%] transition-[.2s] group-hover:opacity-[100%]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={17}
                          height={17}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#676668"
                            strokeWidth={1.5}
                            d="M14.481 4.88c-1.18.393-2.754-1.181-2.36-2.362m-.096.096L9.482 5.157a8.627 8.627 0 0 0-2.27 4.008l-.122.492a.21.21 0 0 0 .253.253l.492-.123a8.627 8.627 0 0 0 4.008-2.269l2.543-2.543a1.67 1.67 0 0 0-2.361-2.361Z"
                          />
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeWidth={1.5}
                            d="M8.5 2.125c-.725 0-1.45.083-2.16.25A5.32 5.32 0 0 0 2.375 6.34a9.459 9.459 0 0 0 0 4.32 5.32 5.32 0 0 0 3.965 3.965c1.42.333 2.9.333 4.32 0a5.32 5.32 0 0 0 3.965-3.965c.167-.71.25-1.435.25-2.16"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={15}
                          height={15}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M10 8.063v2.624c0 2.188-.875 3.063-3.063 3.063H4.313c-2.187 0-3.062-.875-3.062-3.063V8.063C1.25 5.874 2.125 5 4.313 5h2.625C9.124 5 10 5.875 10 8.063Z"
                          />
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M13.75 4.313v2.625c0 2.187-.875 3.062-3.063 3.062H10V8.062C10 5.876 9.125 5 6.937 5H5v-.688c0-2.187.875-3.062 3.063-3.062h2.624c2.188 0 3.063.875 3.063 3.063Z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={19}
                          height={17}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M15.875 2.833H6.667L1.708 8.5l4.959 5.667h9.208a1.417 1.417 0 0 0 1.417-1.417v-8.5a1.417 1.417 0 0 0-1.417-1.417ZM13.75 6.375l-4.25 4.25M9.5 6.375l4.25 4.25"
                          />
                        </svg>
                      </div>
                    </td>
                  </tr>
                  <tr className="group relative transition-[.2s] hover:shadow-[0px_17px_34px_-13px_rgba(48,57,104,0.2)] rounded-[6px]">
                    <td className="text-gray-800 text-[12px] font-normal py-[15px] px-[15px] transition-[.2s] group-hover:text-black">
                      Ürün Tam Adı
                    </td>
                    <td className="text-black text-[12px] font-normal py-[15px] px-[15px]">
                      Adidas AX2S Terrex Erkek Outdoor Ayakkabı
                    </td>
                    <td className="py-[15px] px-[15px]">
                      <div className="flex items-center justify-end gap-[8px] opacity-[40%] transition-[.2s] group-hover:opacity-[100%]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={17}
                          height={17}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#676668"
                            strokeWidth={1.5}
                            d="M14.481 4.88c-1.18.393-2.754-1.181-2.36-2.362m-.096.096L9.482 5.157a8.627 8.627 0 0 0-2.27 4.008l-.122.492a.21.21 0 0 0 .253.253l.492-.123a8.627 8.627 0 0 0 4.008-2.269l2.543-2.543a1.67 1.67 0 0 0-2.361-2.361Z"
                          />
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeWidth={1.5}
                            d="M8.5 2.125c-.725 0-1.45.083-2.16.25A5.32 5.32 0 0 0 2.375 6.34a9.459 9.459 0 0 0 0 4.32 5.32 5.32 0 0 0 3.965 3.965c1.42.333 2.9.333 4.32 0a5.32 5.32 0 0 0 3.965-3.965c.167-.71.25-1.435.25-2.16"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={15}
                          height={15}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M10 8.063v2.624c0 2.188-.875 3.063-3.063 3.063H4.313c-2.187 0-3.062-.875-3.062-3.063V8.063C1.25 5.874 2.125 5 4.313 5h2.625C9.124 5 10 5.875 10 8.063Z"
                          />
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M13.75 4.313v2.625c0 2.187-.875 3.062-3.063 3.062H10V8.062C10 5.876 9.125 5 6.937 5H5v-.688c0-2.187.875-3.062 3.063-3.062h2.624c2.188 0 3.063.875 3.063 3.063Z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={19}
                          height={17}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M15.875 2.833H6.667L1.708 8.5l4.959 5.667h9.208a1.417 1.417 0 0 0 1.417-1.417v-8.5a1.417 1.417 0 0 0-1.417-1.417ZM13.75 6.375l-4.25 4.25M9.5 6.375l4.25 4.25"
                          />
                        </svg>
                      </div>
                    </td>
                  </tr>
                  <tr className="group relative transition-[.2s] hover:shadow-[0px_17px_34px_-13px_rgba(48,57,104,0.2)] rounded-[6px]">
                    <td className="text-gray-800 text-[12px] font-normal py-[15px] px-[15px] transition-[.2s] group-hover:text-black">
                      Ürün Tam Adı
                    </td>
                    <td className="text-black text-[12px] font-normal py-[15px] px-[15px]">
                      Adidas AX2S Terrex Erkek Outdoor Ayakkabı
                    </td>
                    <td className="py-[15px] px-[15px]">
                      <div className="flex items-center justify-end gap-[8px] opacity-[40%] transition-[.2s] group-hover:opacity-[100%]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={17}
                          height={17}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#676668"
                            strokeWidth={1.5}
                            d="M14.481 4.88c-1.18.393-2.754-1.181-2.36-2.362m-.096.096L9.482 5.157a8.627 8.627 0 0 0-2.27 4.008l-.122.492a.21.21 0 0 0 .253.253l.492-.123a8.627 8.627 0 0 0 4.008-2.269l2.543-2.543a1.67 1.67 0 0 0-2.361-2.361Z"
                          />
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeWidth={1.5}
                            d="M8.5 2.125c-.725 0-1.45.083-2.16.25A5.32 5.32 0 0 0 2.375 6.34a9.459 9.459 0 0 0 0 4.32 5.32 5.32 0 0 0 3.965 3.965c1.42.333 2.9.333 4.32 0a5.32 5.32 0 0 0 3.965-3.965c.167-.71.25-1.435.25-2.16"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={15}
                          height={15}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M10 8.063v2.624c0 2.188-.875 3.063-3.063 3.063H4.313c-2.187 0-3.062-.875-3.062-3.063V8.063C1.25 5.874 2.125 5 4.313 5h2.625C9.124 5 10 5.875 10 8.063Z"
                          />
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M13.75 4.313v2.625c0 2.187-.875 3.062-3.063 3.062H10V8.062C10 5.876 9.125 5 6.937 5H5v-.688c0-2.187.875-3.062 3.063-3.062h2.624c2.188 0 3.063.875 3.063 3.063Z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={19}
                          height={17}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M15.875 2.833H6.667L1.708 8.5l4.959 5.667h9.208a1.417 1.417 0 0 0 1.417-1.417v-8.5a1.417 1.417 0 0 0-1.417-1.417ZM13.75 6.375l-4.25 4.25M9.5 6.375l4.25 4.25"
                          />
                        </svg>
                      </div>
                    </td>
                  </tr>
                  <tr className="group relative transition-[.2s] hover:shadow-[0px_17px_34px_-13px_rgba(48,57,104,0.2)] rounded-[6px]">
                    <td className="text-gray-800 text-[12px] font-normal py-[15px] px-[15px] transition-[.2s] group-hover:text-black">
                      Ürün Tam Adı
                    </td>
                    <td className="text-black text-[12px] font-normal py-[15px] px-[15px]">
                      Adidas AX2S Terrex Erkek Outdoor Ayakkabı
                    </td>
                    <td className="py-[15px] px-[15px]">
                      <div className="flex items-center justify-end gap-[8px] opacity-[40%] transition-[.2s] group-hover:opacity-[100%]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={17}
                          height={17}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#676668"
                            strokeWidth={1.5}
                            d="M14.481 4.88c-1.18.393-2.754-1.181-2.36-2.362m-.096.096L9.482 5.157a8.627 8.627 0 0 0-2.27 4.008l-.122.492a.21.21 0 0 0 .253.253l.492-.123a8.627 8.627 0 0 0 4.008-2.269l2.543-2.543a1.67 1.67 0 0 0-2.361-2.361Z"
                          />
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeWidth={1.5}
                            d="M8.5 2.125c-.725 0-1.45.083-2.16.25A5.32 5.32 0 0 0 2.375 6.34a9.459 9.459 0 0 0 0 4.32 5.32 5.32 0 0 0 3.965 3.965c1.42.333 2.9.333 4.32 0a5.32 5.32 0 0 0 3.965-3.965c.167-.71.25-1.435.25-2.16"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={15}
                          height={15}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M10 8.063v2.624c0 2.188-.875 3.063-3.063 3.063H4.313c-2.187 0-3.062-.875-3.062-3.063V8.063C1.25 5.874 2.125 5 4.313 5h2.625C9.124 5 10 5.875 10 8.063Z"
                          />
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M13.75 4.313v2.625c0 2.187-.875 3.062-3.063 3.062H10V8.062C10 5.876 9.125 5 6.937 5H5v-.688c0-2.187.875-3.062 3.063-3.062h2.624c2.188 0 3.063.875 3.063 3.063Z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={19}
                          height={17}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M15.875 2.833H6.667L1.708 8.5l4.959 5.667h9.208a1.417 1.417 0 0 0 1.417-1.417v-8.5a1.417 1.417 0 0 0-1.417-1.417ZM13.75 6.375l-4.25 4.25M9.5 6.375l4.25 4.25"
                          />
                        </svg>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </TabPanel>
            <TabPanel value={2} index={1}>
              <table>
                <tbody>
                  {/* First tr and its elements different from the rest(!) */}
                  <tr className="border-b-[1px] border-gray-600">
                    <th className="text-black text-[12px] font-bold text-start w-[35%] pb-[10px]">
                      Özellik Tanımı
                    </th>
                    <th className="text-black text-[12px] font-bold text-start w-[45%] pb-[10px]">
                      Özelliği
                    </th>
                    <th className="w-[20%] pb-[10px]">
                      <div className="flex items-center justify-center py-[5px] px-[15px] w-[max-content] bg-gray-1000 rounded-full cursor-pointer ml-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={15}
                          height={16}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M7.5 3.625v8.75M3.125 8h8.75"
                          />
                        </svg>
                      </div>
                    </th>
                  </tr>
                  <tr className="group relative transition-[.2s] hover:shadow-[0px_17px_34px_-13px_rgba(48,57,104,0.2)] rounded-[6px]">
                    <td className="text-gray-800 text-[12px] font-normal py-[15px] px-[15px] transition-[.2s] group-hover:text-black">
                      Ürün Tam Adı
                    </td>
                    <td className="text-black text-[12px] font-normal py-[15px] px-[15px]">
                      Adidas AX2S Terrex Erkek Outdoor Ayakkabı
                    </td>
                    <td className="py-[15px] px-[15px]">
                      <div className="flex items-center justify-end gap-[8px] opacity-[40%] transition-[.2s] group-hover:opacity-[100%]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={17}
                          height={17}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#676668"
                            strokeWidth={1.5}
                            d="M14.481 4.88c-1.18.393-2.754-1.181-2.36-2.362m-.096.096L9.482 5.157a8.627 8.627 0 0 0-2.27 4.008l-.122.492a.21.21 0 0 0 .253.253l.492-.123a8.627 8.627 0 0 0 4.008-2.269l2.543-2.543a1.67 1.67 0 0 0-2.361-2.361Z"
                          />
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeWidth={1.5}
                            d="M8.5 2.125c-.725 0-1.45.083-2.16.25A5.32 5.32 0 0 0 2.375 6.34a9.459 9.459 0 0 0 0 4.32 5.32 5.32 0 0 0 3.965 3.965c1.42.333 2.9.333 4.32 0a5.32 5.32 0 0 0 3.965-3.965c.167-.71.25-1.435.25-2.16"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={15}
                          height={15}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M10 8.063v2.624c0 2.188-.875 3.063-3.063 3.063H4.313c-2.187 0-3.062-.875-3.062-3.063V8.063C1.25 5.874 2.125 5 4.313 5h2.625C9.124 5 10 5.875 10 8.063Z"
                          />
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M13.75 4.313v2.625c0 2.187-.875 3.062-3.063 3.062H10V8.062C10 5.876 9.125 5 6.937 5H5v-.688c0-2.187.875-3.062 3.063-3.062h2.624c2.188 0 3.063.875 3.063 3.063Z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={19}
                          height={17}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M15.875 2.833H6.667L1.708 8.5l4.959 5.667h9.208a1.417 1.417 0 0 0 1.417-1.417v-8.5a1.417 1.417 0 0 0-1.417-1.417ZM13.75 6.375l-4.25 4.25M9.5 6.375l4.25 4.25"
                          />
                        </svg>
                      </div>
                    </td>
                  </tr>
                  <tr className="group relative transition-[.2s] hover:shadow-[0px_17px_34px_-13px_rgba(48,57,104,0.2)] rounded-[6px]">
                    <td className="text-gray-800 text-[12px] font-normal py-[15px] px-[15px] transition-[.2s] group-hover:text-black">
                      Ürün Tam Adı
                    </td>
                    <td className="text-black text-[12px] font-normal py-[15px] px-[15px]">
                      Adidas AX2S Terrex Erkek Outdoor Ayakkabı
                    </td>
                    <td className="py-[15px] px-[15px]">
                      <div className="flex items-center justify-end gap-[8px] opacity-[40%] transition-[.2s] group-hover:opacity-[100%]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={17}
                          height={17}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#676668"
                            strokeWidth={1.5}
                            d="M14.481 4.88c-1.18.393-2.754-1.181-2.36-2.362m-.096.096L9.482 5.157a8.627 8.627 0 0 0-2.27 4.008l-.122.492a.21.21 0 0 0 .253.253l.492-.123a8.627 8.627 0 0 0 4.008-2.269l2.543-2.543a1.67 1.67 0 0 0-2.361-2.361Z"
                          />
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeWidth={1.5}
                            d="M8.5 2.125c-.725 0-1.45.083-2.16.25A5.32 5.32 0 0 0 2.375 6.34a9.459 9.459 0 0 0 0 4.32 5.32 5.32 0 0 0 3.965 3.965c1.42.333 2.9.333 4.32 0a5.32 5.32 0 0 0 3.965-3.965c.167-.71.25-1.435.25-2.16"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={15}
                          height={15}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M10 8.063v2.624c0 2.188-.875 3.063-3.063 3.063H4.313c-2.187 0-3.062-.875-3.062-3.063V8.063C1.25 5.874 2.125 5 4.313 5h2.625C9.124 5 10 5.875 10 8.063Z"
                          />
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M13.75 4.313v2.625c0 2.187-.875 3.062-3.063 3.062H10V8.062C10 5.876 9.125 5 6.937 5H5v-.688c0-2.187.875-3.062 3.063-3.062h2.624c2.188 0 3.063.875 3.063 3.063Z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={19}
                          height={17}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M15.875 2.833H6.667L1.708 8.5l4.959 5.667h9.208a1.417 1.417 0 0 0 1.417-1.417v-8.5a1.417 1.417 0 0 0-1.417-1.417ZM13.75 6.375l-4.25 4.25M9.5 6.375l4.25 4.25"
                          />
                        </svg>
                      </div>
                    </td>
                  </tr>
                  <tr className="group relative transition-[.2s] hover:shadow-[0px_17px_34px_-13px_rgba(48,57,104,0.2)] rounded-[6px]">
                    <td className="text-gray-800 text-[12px] font-normal py-[15px] px-[15px] transition-[.2s] group-hover:text-black">
                      Ürün Tam Adı
                    </td>
                    <td className="text-black text-[12px] font-normal py-[15px] px-[15px]">
                      Adidas AX2S Terrex Erkek Outdoor Ayakkabı
                    </td>
                    <td className="py-[15px] px-[15px]">
                      <div className="flex items-center justify-end gap-[8px] opacity-[40%] transition-[.2s] group-hover:opacity-[100%]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={17}
                          height={17}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#676668"
                            strokeWidth={1.5}
                            d="M14.481 4.88c-1.18.393-2.754-1.181-2.36-2.362m-.096.096L9.482 5.157a8.627 8.627 0 0 0-2.27 4.008l-.122.492a.21.21 0 0 0 .253.253l.492-.123a8.627 8.627 0 0 0 4.008-2.269l2.543-2.543a1.67 1.67 0 0 0-2.361-2.361Z"
                          />
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeWidth={1.5}
                            d="M8.5 2.125c-.725 0-1.45.083-2.16.25A5.32 5.32 0 0 0 2.375 6.34a9.459 9.459 0 0 0 0 4.32 5.32 5.32 0 0 0 3.965 3.965c1.42.333 2.9.333 4.32 0a5.32 5.32 0 0 0 3.965-3.965c.167-.71.25-1.435.25-2.16"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={15}
                          height={15}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M10 8.063v2.624c0 2.188-.875 3.063-3.063 3.063H4.313c-2.187 0-3.062-.875-3.062-3.063V8.063C1.25 5.874 2.125 5 4.313 5h2.625C9.124 5 10 5.875 10 8.063Z"
                          />
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M13.75 4.313v2.625c0 2.187-.875 3.062-3.063 3.062H10V8.062C10 5.876 9.125 5 6.937 5H5v-.688c0-2.187.875-3.062 3.063-3.062h2.624c2.188 0 3.063.875 3.063 3.063Z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={19}
                          height={17}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M15.875 2.833H6.667L1.708 8.5l4.959 5.667h9.208a1.417 1.417 0 0 0 1.417-1.417v-8.5a1.417 1.417 0 0 0-1.417-1.417ZM13.75 6.375l-4.25 4.25M9.5 6.375l4.25 4.25"
                          />
                        </svg>
                      </div>
                    </td>
                  </tr>
                  <tr className="group relative transition-[.2s] hover:shadow-[0px_17px_34px_-13px_rgba(48,57,104,0.2)] rounded-[6px]">
                    <td className="text-gray-800 text-[12px] font-normal py-[15px] px-[15px] transition-[.2s] group-hover:text-black">
                      Ürün Tam Adı
                    </td>
                    <td className="text-black text-[12px] font-normal py-[15px] px-[15px]">
                      Adidas AX2S Terrex Erkek Outdoor Ayakkabı
                    </td>
                    <td className="py-[15px] px-[15px]">
                      <div className="flex items-center justify-end gap-[8px] opacity-[40%] transition-[.2s] group-hover:opacity-[100%]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={17}
                          height={17}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#676668"
                            strokeWidth={1.5}
                            d="M14.481 4.88c-1.18.393-2.754-1.181-2.36-2.362m-.096.096L9.482 5.157a8.627 8.627 0 0 0-2.27 4.008l-.122.492a.21.21 0 0 0 .253.253l.492-.123a8.627 8.627 0 0 0 4.008-2.269l2.543-2.543a1.67 1.67 0 0 0-2.361-2.361Z"
                          />
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeWidth={1.5}
                            d="M8.5 2.125c-.725 0-1.45.083-2.16.25A5.32 5.32 0 0 0 2.375 6.34a9.459 9.459 0 0 0 0 4.32 5.32 5.32 0 0 0 3.965 3.965c1.42.333 2.9.333 4.32 0a5.32 5.32 0 0 0 3.965-3.965c.167-.71.25-1.435.25-2.16"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={15}
                          height={15}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M10 8.063v2.624c0 2.188-.875 3.063-3.063 3.063H4.313c-2.187 0-3.062-.875-3.062-3.063V8.063C1.25 5.874 2.125 5 4.313 5h2.625C9.124 5 10 5.875 10 8.063Z"
                          />
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M13.75 4.313v2.625c0 2.187-.875 3.062-3.063 3.062H10V8.062C10 5.876 9.125 5 6.937 5H5v-.688c0-2.187.875-3.062 3.063-3.062h2.624c2.188 0 3.063.875 3.063 3.063Z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={19}
                          height={17}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M15.875 2.833H6.667L1.708 8.5l4.959 5.667h9.208a1.417 1.417 0 0 0 1.417-1.417v-8.5a1.417 1.417 0 0 0-1.417-1.417ZM13.75 6.375l-4.25 4.25M9.5 6.375l4.25 4.25"
                          />
                        </svg>
                      </div>
                    </td>
                  </tr>
                  <tr className="group relative transition-[.2s] hover:shadow-[0px_17px_34px_-13px_rgba(48,57,104,0.2)] rounded-[6px]">
                    <td className="text-gray-800 text-[12px] font-normal py-[15px] px-[15px] transition-[.2s] group-hover:text-black">
                      Ürün Tam Adı
                    </td>
                    <td className="text-black text-[12px] font-normal py-[15px] px-[15px]">
                      Adidas AX2S Terrex Erkek Outdoor Ayakkabı
                    </td>
                    <td className="py-[15px] px-[15px]">
                      <div className="flex items-center justify-end gap-[8px] opacity-[40%] transition-[.2s] group-hover:opacity-[100%]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={17}
                          height={17}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#676668"
                            strokeWidth={1.5}
                            d="M14.481 4.88c-1.18.393-2.754-1.181-2.36-2.362m-.096.096L9.482 5.157a8.627 8.627 0 0 0-2.27 4.008l-.122.492a.21.21 0 0 0 .253.253l.492-.123a8.627 8.627 0 0 0 4.008-2.269l2.543-2.543a1.67 1.67 0 0 0-2.361-2.361Z"
                          />
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeWidth={1.5}
                            d="M8.5 2.125c-.725 0-1.45.083-2.16.25A5.32 5.32 0 0 0 2.375 6.34a9.459 9.459 0 0 0 0 4.32 5.32 5.32 0 0 0 3.965 3.965c1.42.333 2.9.333 4.32 0a5.32 5.32 0 0 0 3.965-3.965c.167-.71.25-1.435.25-2.16"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={15}
                          height={15}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M10 8.063v2.624c0 2.188-.875 3.063-3.063 3.063H4.313c-2.187 0-3.062-.875-3.062-3.063V8.063C1.25 5.874 2.125 5 4.313 5h2.625C9.124 5 10 5.875 10 8.063Z"
                          />
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M13.75 4.313v2.625c0 2.187-.875 3.062-3.063 3.062H10V8.062C10 5.876 9.125 5 6.937 5H5v-.688c0-2.187.875-3.062 3.063-3.062h2.624c2.188 0 3.063.875 3.063 3.063Z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={19}
                          height={17}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M15.875 2.833H6.667L1.708 8.5l4.959 5.667h9.208a1.417 1.417 0 0 0 1.417-1.417v-8.5a1.417 1.417 0 0 0-1.417-1.417ZM13.75 6.375l-4.25 4.25M9.5 6.375l4.25 4.25"
                          />
                        </svg>
                      </div>
                    </td>
                  </tr>
                  <tr className="group relative transition-[.2s] hover:shadow-[0px_17px_34px_-13px_rgba(48,57,104,0.2)] rounded-[6px]">
                    <td className="text-gray-800 text-[12px] font-normal py-[15px] px-[15px] transition-[.2s] group-hover:text-black">
                      Ürün Tam Adı
                    </td>
                    <td className="text-black text-[12px] font-normal py-[15px] px-[15px]">
                      Adidas AX2S Terrex Erkek Outdoor Ayakkabı
                    </td>
                    <td className="py-[15px] px-[15px]">
                      <div className="flex items-center justify-end gap-[8px] opacity-[40%] transition-[.2s] group-hover:opacity-[100%]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={17}
                          height={17}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#676668"
                            strokeWidth={1.5}
                            d="M14.481 4.88c-1.18.393-2.754-1.181-2.36-2.362m-.096.096L9.482 5.157a8.627 8.627 0 0 0-2.27 4.008l-.122.492a.21.21 0 0 0 .253.253l.492-.123a8.627 8.627 0 0 0 4.008-2.269l2.543-2.543a1.67 1.67 0 0 0-2.361-2.361Z"
                          />
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeWidth={1.5}
                            d="M8.5 2.125c-.725 0-1.45.083-2.16.25A5.32 5.32 0 0 0 2.375 6.34a9.459 9.459 0 0 0 0 4.32 5.32 5.32 0 0 0 3.965 3.965c1.42.333 2.9.333 4.32 0a5.32 5.32 0 0 0 3.965-3.965c.167-.71.25-1.435.25-2.16"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={15}
                          height={15}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M10 8.063v2.624c0 2.188-.875 3.063-3.063 3.063H4.313c-2.187 0-3.062-.875-3.062-3.063V8.063C1.25 5.874 2.125 5 4.313 5h2.625C9.124 5 10 5.875 10 8.063Z"
                          />
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M13.75 4.313v2.625c0 2.187-.875 3.062-3.063 3.062H10V8.062C10 5.876 9.125 5 6.937 5H5v-.688c0-2.187.875-3.062 3.063-3.062h2.624c2.188 0 3.063.875 3.063 3.063Z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={19}
                          height={17}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M15.875 2.833H6.667L1.708 8.5l4.959 5.667h9.208a1.417 1.417 0 0 0 1.417-1.417v-8.5a1.417 1.417 0 0 0-1.417-1.417ZM13.75 6.375l-4.25 4.25M9.5 6.375l4.25 4.25"
                          />
                        </svg>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </TabPanel>
            <TabPanel value={3} index={2}>
              <table>
                <tbody>
                  {/* First tr and its elements different from the rest(!) */}
                  <tr className="border-b-[1px] border-gray-600">
                    <th className="text-black text-[12px] font-bold text-start w-[35%] pb-[10px]">
                      Özellik Tanımı
                    </th>
                    <th className="text-black text-[12px] font-bold text-start w-[45%] pb-[10px]">
                      Özelliği
                    </th>
                    <th className="w-[20%] pb-[10px]">
                      <div className="flex items-center justify-center py-[5px] px-[15px] w-[max-content] bg-gray-1000 rounded-full cursor-pointer ml-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={15}
                          height={16}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M7.5 3.625v8.75M3.125 8h8.75"
                          />
                        </svg>
                      </div>
                    </th>
                  </tr>
                  <tr className="group relative transition-[.2s] hover:shadow-[0px_17px_34px_-13px_rgba(48,57,104,0.2)] rounded-[6px]">
                    <td className="text-gray-800 text-[12px] font-normal py-[15px] px-[15px] transition-[.2s] group-hover:text-black">
                      Ürün Tam Adı
                    </td>
                    <td className="text-black text-[12px] font-normal py-[15px] px-[15px]">
                      Adidas AX2S Terrex Erkek Outdoor Ayakkabı
                    </td>
                    <td className="py-[15px] px-[15px]">
                      <div className="flex items-center justify-end gap-[8px] opacity-[40%] transition-[.2s] group-hover:opacity-[100%]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={17}
                          height={17}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#676668"
                            strokeWidth={1.5}
                            d="M14.481 4.88c-1.18.393-2.754-1.181-2.36-2.362m-.096.096L9.482 5.157a8.627 8.627 0 0 0-2.27 4.008l-.122.492a.21.21 0 0 0 .253.253l.492-.123a8.627 8.627 0 0 0 4.008-2.269l2.543-2.543a1.67 1.67 0 0 0-2.361-2.361Z"
                          />
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeWidth={1.5}
                            d="M8.5 2.125c-.725 0-1.45.083-2.16.25A5.32 5.32 0 0 0 2.375 6.34a9.459 9.459 0 0 0 0 4.32 5.32 5.32 0 0 0 3.965 3.965c1.42.333 2.9.333 4.32 0a5.32 5.32 0 0 0 3.965-3.965c.167-.71.25-1.435.25-2.16"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={15}
                          height={15}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M10 8.063v2.624c0 2.188-.875 3.063-3.063 3.063H4.313c-2.187 0-3.062-.875-3.062-3.063V8.063C1.25 5.874 2.125 5 4.313 5h2.625C9.124 5 10 5.875 10 8.063Z"
                          />
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M13.75 4.313v2.625c0 2.187-.875 3.062-3.063 3.062H10V8.062C10 5.876 9.125 5 6.937 5H5v-.688c0-2.187.875-3.062 3.063-3.062h2.624c2.188 0 3.063.875 3.063 3.063Z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={19}
                          height={17}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M15.875 2.833H6.667L1.708 8.5l4.959 5.667h9.208a1.417 1.417 0 0 0 1.417-1.417v-8.5a1.417 1.417 0 0 0-1.417-1.417ZM13.75 6.375l-4.25 4.25M9.5 6.375l4.25 4.25"
                          />
                        </svg>
                      </div>
                    </td>
                  </tr>
                  <tr className="group relative transition-[.2s] hover:shadow-[0px_17px_34px_-13px_rgba(48,57,104,0.2)] rounded-[6px]">
                    <td className="text-gray-800 text-[12px] font-normal py-[15px] px-[15px] transition-[.2s] group-hover:text-black">
                      Ürün Tam Adı
                    </td>
                    <td className="text-black text-[12px] font-normal py-[15px] px-[15px]">
                      Adidas AX2S Terrex Erkek Outdoor Ayakkabı
                    </td>
                    <td className="py-[15px] px-[15px]">
                      <div className="flex items-center justify-end gap-[8px] opacity-[40%] transition-[.2s] group-hover:opacity-[100%]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={17}
                          height={17}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#676668"
                            strokeWidth={1.5}
                            d="M14.481 4.88c-1.18.393-2.754-1.181-2.36-2.362m-.096.096L9.482 5.157a8.627 8.627 0 0 0-2.27 4.008l-.122.492a.21.21 0 0 0 .253.253l.492-.123a8.627 8.627 0 0 0 4.008-2.269l2.543-2.543a1.67 1.67 0 0 0-2.361-2.361Z"
                          />
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeWidth={1.5}
                            d="M8.5 2.125c-.725 0-1.45.083-2.16.25A5.32 5.32 0 0 0 2.375 6.34a9.459 9.459 0 0 0 0 4.32 5.32 5.32 0 0 0 3.965 3.965c1.42.333 2.9.333 4.32 0a5.32 5.32 0 0 0 3.965-3.965c.167-.71.25-1.435.25-2.16"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={15}
                          height={15}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M10 8.063v2.624c0 2.188-.875 3.063-3.063 3.063H4.313c-2.187 0-3.062-.875-3.062-3.063V8.063C1.25 5.874 2.125 5 4.313 5h2.625C9.124 5 10 5.875 10 8.063Z"
                          />
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M13.75 4.313v2.625c0 2.187-.875 3.062-3.063 3.062H10V8.062C10 5.876 9.125 5 6.937 5H5v-.688c0-2.187.875-3.062 3.063-3.062h2.624c2.188 0 3.063.875 3.063 3.063Z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={19}
                          height={17}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M15.875 2.833H6.667L1.708 8.5l4.959 5.667h9.208a1.417 1.417 0 0 0 1.417-1.417v-8.5a1.417 1.417 0 0 0-1.417-1.417ZM13.75 6.375l-4.25 4.25M9.5 6.375l4.25 4.25"
                          />
                        </svg>
                      </div>
                    </td>
                  </tr>
                  <tr className="group relative transition-[.2s] hover:shadow-[0px_17px_34px_-13px_rgba(48,57,104,0.2)] rounded-[6px]">
                    <td className="text-gray-800 text-[12px] font-normal py-[15px] px-[15px] transition-[.2s] group-hover:text-black">
                      Ürün Tam Adı
                    </td>
                    <td className="text-black text-[12px] font-normal py-[15px] px-[15px]">
                      Adidas AX2S Terrex Erkek Outdoor Ayakkabı
                    </td>
                    <td className="py-[15px] px-[15px]">
                      <div className="flex items-center justify-end gap-[8px] opacity-[40%] transition-[.2s] group-hover:opacity-[100%]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={17}
                          height={17}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#676668"
                            strokeWidth={1.5}
                            d="M14.481 4.88c-1.18.393-2.754-1.181-2.36-2.362m-.096.096L9.482 5.157a8.627 8.627 0 0 0-2.27 4.008l-.122.492a.21.21 0 0 0 .253.253l.492-.123a8.627 8.627 0 0 0 4.008-2.269l2.543-2.543a1.67 1.67 0 0 0-2.361-2.361Z"
                          />
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeWidth={1.5}
                            d="M8.5 2.125c-.725 0-1.45.083-2.16.25A5.32 5.32 0 0 0 2.375 6.34a9.459 9.459 0 0 0 0 4.32 5.32 5.32 0 0 0 3.965 3.965c1.42.333 2.9.333 4.32 0a5.32 5.32 0 0 0 3.965-3.965c.167-.71.25-1.435.25-2.16"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={15}
                          height={15}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M10 8.063v2.624c0 2.188-.875 3.063-3.063 3.063H4.313c-2.187 0-3.062-.875-3.062-3.063V8.063C1.25 5.874 2.125 5 4.313 5h2.625C9.124 5 10 5.875 10 8.063Z"
                          />
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M13.75 4.313v2.625c0 2.187-.875 3.062-3.063 3.062H10V8.062C10 5.876 9.125 5 6.937 5H5v-.688c0-2.187.875-3.062 3.063-3.062h2.624c2.188 0 3.063.875 3.063 3.063Z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={19}
                          height={17}
                          fill="none"
                          className="cursor-pointer"
                        >
                          <path
                            stroke="#676668"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M15.875 2.833H6.667L1.708 8.5l4.959 5.667h9.208a1.417 1.417 0 0 0 1.417-1.417v-8.5a1.417 1.417 0 0 0-1.417-1.417ZM13.75 6.375l-4.25 4.25M9.5 6.375l4.25 4.25"
                          />
                        </svg>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </TabPanel>
          </div>
        </div>
      </div>

      <div className="fixed bottom-[50px] left-[460px] right-0 z-[5]">
        <div className="flex items-center justify-center">
          <div
            className="bg-white/80 backdrop-blur-[5px] p-[15px] rounded-full flex items-center gap-[5px] shadow-2xl shadow-red-10/40"
            style={{ boxShadow: "0px 24px 54px -13px rgba(177, 109, 92, 0.3)" }}
          >
            <div className="cursor-pointer flex items-center justify-center text-[22px] font-light text-blue-400 border border-blue-400 rounded-full py-[16px] px-[24px] text-center gap-[15px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={10}
                height={10}
                fill="none"
              >
                <path
                  stroke="#5499C7"
                  strokeLinecap="round"
                  strokeWidth={1.5}
                  d="M1 5h8M5 1v8"
                />
              </svg>
              <span>Varyasyon Ürünü Ekle</span>
            </div>

            <div className="cursor-pointer w-[150px] flex items-center justify-center text-[22px] font-light text-white bg-green-600 border border-green-600 rounded-full py-[16px] px-[10px] text-center gap-[10px]">
              <span>Yayınla</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
              >
                <path
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
