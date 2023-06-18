import React, { useState } from "react";

import AddProductSteps from "@/components/add-product-steps";
import { FormControl, MenuItem, Select } from "@mui/material";

import brandImgHolder from "@/assets/img/brand-image-holder.png";
import excel from "@/assets/img/excel.svg";

export default function Step6() {
  // For Brand Select
  const [brand, setBrand] = useState(1);

  const brandSelectHandleChange = (event) => {
    setBrand(event.target.value);
  };
  // For Width Select
  const [size, setSize] = useState(1);

  const sizeSelectHandleChange = (event) => {
    setSize(event.target.value);
  };

  // For Height Select
  const [height, setHeight] = useState(1);

  const heightSelectHandleChange = (event) => {
    setHeight(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <AddProductSteps />

      <div className="flex-1 overflow-y-auto overflow-x-hidden pt-[7vw] pb-[10vw] before:content-[''] before:fixed before:left-[460px] before:right-0 before:bottom-0 before:h-[200px] before:bg-gradient-to-t before:from-red-50 before:to-green-10/10 before:z-[3]">
        <span className="block text-[54px] font-medium text-green-600 text-center">
          Ürün Özeti
        </span>

        <div className="relative z-[0]">
          {/* The low opacity product summary*/}
          <div
            className="absolute top-0 left-0 opacity-[50%] translate-x-[-55%] bg-white flex flex-col rounded-[40px] py-[50px] px-[75px] max-w-[700px] mx-auto"
            style={{ boxShadow: "0px 37px 44px -13px rgba(104, 48, 48, 0.1)" }}
          >
            <div className="flex items-center">
              <img className="mr-[25px]" src={brandImgHolder.src} alt="" />
              <div className="flex flex-col ">
                <div className="text-gray-900 font-medium leading-normal text-sm mb-[20px]">
                  Öğeniz İçin Marka Belirleyin
                </div>
                <div className="flex flex-wrap gap-[10px]">
                  <div className="flex items-center justify-center border-[1px] border-green-600 rounded-full">
                    <FormControl fullWidth className="step-2-select">
                      <Select
                        defaultValue={brand}
                        value={brand}
                        onChange={brandSelectHandleChange}
                        IconComponent={() => (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={25}
                            fill="none"
                          >
                            <path
                              stroke="#0C3F34"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit={10}
                              strokeWidth={1.5}
                              d="m19.92 9.45-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 9.45"
                            />
                          </svg>
                        )}
                      >
                        <MenuItem value={1}>Nike</MenuItem>
                        <MenuItem value={2}>Adidas</MenuItem>
                        <MenuItem value={3}>Puma</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="flex items-center justify-center py-[10px] px-[30px] border-[1px] border-green-600 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={25}
                      fill="none"
                    >
                      <path
                        stroke="#0C3F34"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 5.5v14M5 12.5h14"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col py-[35px] my-[40px] border-y-[1px] border-gray-600">
              <div className="flex items-center justify-between mb-[20px]">
                <div className="text-gray-900 font-medium leading-normal text-sm">
                  Öğenizin Ana Adını Belirleyin
                </div>
                <div className="flex gap-[5px] cursor-pointer items-center text-black text-[15px] font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    fill="none"
                  >
                    <path
                      stroke="#292D32"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M14.25 12V4.875c0-.825-.675-1.5-1.5-1.5H9.375"
                    />
                    <path
                      stroke="#292D32"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M11.25 1.5 9 3.375l2.25 1.875M3.75 6.75V12M3.938 6.375a2.438 2.438 0 1 0 0-4.875 2.438 2.438 0 0 0 0 4.875ZM3.75 16.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM14.25 16.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                    />
                  </svg>
                  Akıllı Ad Belirle
                </div>
              </div>
              <div className="text-black font-normal text-[64px] leading-[1.3]">
                Sportswear Tech Fleece
              </div>
            </div>
            <div className="flex flex-col pb-[40px] mb-[30px] border-b-[1px] border-gray-600">
              <div className="flex justify-between mb-[25px]">
                <div className="text-gray-900 font-medium leading-normal text-sm">
                  Öğe Kodu
                </div>
                <div className="flex gap-[20px]">
                  <div className="flex items-center gap-[8px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      fill="none"
                    >
                      <path
                        stroke="#292D32"
                        strokeMiterlimit={10}
                        strokeWidth={2}
                        d="M11.693 9.195a3.848 3.848 0 1 0 0-7.695 3.848 3.848 0 0 0 0 7.695ZM4.77 14.58a2.31 2.31 0 1 0 0-4.62 2.31 2.31 0 0 0 0 4.62ZM12.465 16.5a1.92 1.92 0 1 0 0-3.84 1.92 1.92 0 0 0 0 3.84Z"
                      />
                    </svg>
                    Otomatik Oluştur
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      fill="none"
                    >
                      <path
                        stroke="#292D32"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1.5 6.75V4.875A3.37 3.37 0 0 1 4.875 1.5H6.75M11.25 1.5h1.875A3.37 3.37 0 0 1 16.5 4.875V6.75M16.5 12v1.125a3.37 3.37 0 0 1-3.375 3.375H12M6.75 16.5H4.875A3.37 3.37 0 0 1 1.5 13.125V11.25M7.875 5.25v1.5c0 .75-.375 1.125-1.125 1.125h-1.5c-.75 0-1.125-.375-1.125-1.125v-1.5c0-.75.375-1.125 1.125-1.125h1.5c.75 0 1.125.375 1.125 1.125Z"
                      />
                      <path
                        stroke="#292D32"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13.875 5.25v1.5c0 .75-.375 1.125-1.125 1.125h-1.5c-.75 0-1.125-.375-1.125-1.125v-1.5c0-.75.375-1.125 1.125-1.125h1.5c.75 0 1.125.375 1.125 1.125ZM7.875 11.25v1.5c0 .75-.375 1.125-1.125 1.125h-1.5c-.75 0-1.125-.375-1.125-1.125v-1.5c0-.75.375-1.125 1.125-1.125h1.5c.75 0 1.125.375 1.125 1.125ZM13.875 11.25v1.5c0 .75-.375 1.125-1.125 1.125h-1.5c-.75 0-1.125-.375-1.125-1.125v-1.5c0-.75.375-1.125 1.125-1.125h1.5c.75 0 1.125.375 1.125 1.125Z"
                      />
                    </svg>
                    Barkod Okut
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-black font-medium text-[37px]">
                  BK23SR25
                </div>
                <div className="flex items-center justify-center py-[8px] px-[14px] rounded-full border-[1px] border-gray-700 cursor-pointer">
                  Kod Mantığı Oluştur
                </div>
              </div>
            </div>
            <div className="text-black text-[37px] leading-[1.2] font-light mb-[40px]">
              Kişiselleştirilmiş Öğe Özellik Ekranınız Hazır.
            </div>
            <div className="flex flex-col pb-[40px] mb-[30px] border-b-[1px] border-gray-600">
              <div className="flex justify-between items-center mb-[15px]">
                <div className="text-green-600 text-[37px] font-normal ">
                  Boyut
                </div>
                <div className="flex gap-[30px]">
                  <div className="flex gap-[5px] cursor-pointer items-center text-black text-[15px] font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      fill="none"
                    >
                      <path
                        stroke="#292D32"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M14.25 12V4.875c0-.825-.675-1.5-1.5-1.5H9.375"
                      />
                      <path
                        stroke="#292D32"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M11.25 1.5 9 3.375l2.25 1.875M3.75 6.75V12M3.938 6.375a2.438 2.438 0 1 0 0-4.875 2.438 2.438 0 0 0 0 4.875ZM3.75 16.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM14.25 16.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                      />
                    </svg>
                    Varyasyon Değişkeni Yap
                  </div>
                  <div className="flex items-center justify-center py-[4px] px-[12px] bg-black rounded-full cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={15}
                      height={16}
                      fill="none"
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
                </div>
              </div>
              <div className="flex items-center gap-[8px]">
                <div className="flex border-[1px] border-gray-600 rounded-full">
                  <div className="px-[23px] text-black text-[22px] font-normal border-r-[1px] border-gray-600 flex items-center">
                    En
                  </div>
                  <div className="flex">
                    <FormControl fullWidth className="step-4-select">
                      <Select
                        defaultValue={size}
                        value={size}
                        onChange={sizeSelectHandleChange}
                        IconComponent={() => (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={14}
                            height={15}
                            fill="none"
                          >
                            <path
                              stroke="#292D32"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit={10}
                              d="M11.62 5.72 7.817 9.525c-.45.45-1.185.45-1.634 0L2.38 5.721"
                            />
                          </svg>
                        )}
                      >
                        <MenuItem value={1}>
                          100 <span>cm</span>
                        </MenuItem>
                        <MenuItem value={2}>
                          200 <span>cm</span>
                        </MenuItem>
                        <MenuItem value={3}>
                          300 <span>cm</span>
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={13}
                  height={10}
                  fill="none"
                >
                  <path
                    stroke="#000"
                    d="M0-.5h13.966"
                    transform="matrix(-.83817 -.54542 -.10967 .99397 12.706 9.309)"
                  />
                  <path
                    stroke="#000"
                    d="M0-.5h13.966"
                    transform="matrix(.83817 -.54542 .10967 .99397 1 9.309)"
                  />
                </svg>
                <div className="flex border-[1px] border-gray-600 rounded-full">
                  <div className="px-[23px] text-black text-[22px] font-normal border-r-[1px] border-gray-600 flex items-center">
                    Boy
                  </div>
                  <div className="flex">
                    <FormControl fullWidth className="step-4-select">
                      <Select
                        defaultValue={height}
                        value={height}
                        onChange={heightSelectHandleChange}
                        IconComponent={() => (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={14}
                            height={15}
                            fill="none"
                          >
                            <path
                              stroke="#292D32"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit={10}
                              d="M11.62 5.72 7.817 9.525c-.45.45-1.185.45-1.634 0L2.38 5.721"
                            />
                          </svg>
                        )}
                      >
                        <MenuItem value={1}>
                          10 <span>cm</span>
                        </MenuItem>
                        <MenuItem value={2}>
                          20 <span>cm</span>
                        </MenuItem>
                        <MenuItem value={3}>
                          30 <span>cm</span>
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col pb-[40px] mb-[30px] border-b-[1px] border-gray-600">
              <div className="flex justify-between items-center mb-[15px]">
                <div className="text-green-600 text-[37px] font-normal ">
                  Renk
                </div>
                <div className="flex gap-[30px]">
                  <div className="flex gap-[5px] cursor-pointer items-center text-black text-[15px] font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      fill="none"
                    >
                      <path
                        stroke="#292D32"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M14.25 12V4.875c0-.825-.675-1.5-1.5-1.5H9.375"
                      />
                      <path
                        stroke="#292D32"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M11.25 1.5 9 3.375l2.25 1.875M3.75 6.75V12M3.938 6.375a2.438 2.438 0 1 0 0-4.875 2.438 2.438 0 0 0 0 4.875ZM3.75 16.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM14.25 16.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                      />
                    </svg>
                    Varyasyon Değişkeni Yap
                  </div>
                  <div className="flex items-center justify-center py-[4px] px-[12px] bg-black rounded-full cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={15}
                      height={16}
                      fill="none"
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
                </div>
              </div>
              <div className="flex items-center gap-[16px] flex-wrap">
                <div className="flex items-center rounded-full border-[1px] border-gray-600 gap-[12px] py-[4px] px-[25px] relative">
                  <div className="bg-orange-10 border-[1px] border-white rounded-full w-[15px] h-[15px] shadow-[0_3px_11px_-1px_rgba(255,95,27,1)]"></div>
                  <div className="text-black text-[22px] font-bold">
                    Alev Kızılı
                  </div>
                  <div className="absolute right-0 top-[-8px] w-[20px] h-[20px] flex justify-center items-center bg-red-500 rounded-full cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      fill="none"
                    >
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="m10.5 3.5-7 7M3.5 3.5l7 7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center rounded-full border-[1px] border-gray-600 gap-[12px] py-[4px] px-[25px] relative">
                  <div className="bg-blue-10 border-[1px] border-white rounded-full w-[15px] h-[15px] shadow-[0_3px_11px_-1px_rgba(0,106,203,1)]"></div>
                  <div className="text-black text-[22px] font-bold">
                    Gök Mavisi
                  </div>
                  <div className="absolute right-0 top-[-8px] w-[20px] h-[20px] flex justify-center items-center bg-red-500 rounded-full cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      fill="none"
                    >
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="m10.5 3.5-7 7M3.5 3.5l7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col pb-[40px] mb-[30px] border-b-[1px] border-gray-600">
              <div className="flex justify-between items-center mb-[15px]">
                <div className="text-green-600 text-[37px] font-normal ">
                  Beden
                </div>
                <div className="flex gap-[30px]">
                  <div className="flex gap-[5px] cursor-pointer items-center text-black text-[15px] font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      fill="none"
                    >
                      <path
                        stroke="#292D32"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M14.25 12V4.875c0-.825-.675-1.5-1.5-1.5H9.375"
                      />
                      <path
                        stroke="#292D32"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M11.25 1.5 9 3.375l2.25 1.875M3.75 6.75V12M3.938 6.375a2.438 2.438 0 1 0 0-4.875 2.438 2.438 0 0 0 0 4.875ZM3.75 16.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM14.25 16.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                      />
                    </svg>
                    Varyasyon Değişkeni Yap
                  </div>
                  <div className="flex items-center justify-center py-[4px] px-[12px] bg-black rounded-full cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={15}
                      height={16}
                      fill="none"
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
                </div>
              </div>
              <div className="flex items-center gap-[16px] flex-wrap">
                <div className="flex items-center justify-center rounded-full gap-[12px] py-[4px] px-[25px] relative w-[50px] h-[50px] bg-gray-500">
                  <div className="text-black text-[15px] font-medium">S</div>
                  <div className="absolute right-0 top-[-8px] w-[20px] h-[20px] flex justify-center items-center bg-red-500 rounded-full cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      fill="none"
                    >
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="m10.5 3.5-7 7M3.5 3.5l7 7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-center rounded-full gap-[12px] py-[4px] px-[25px] relative w-[50px] h-[50px] bg-gray-500">
                  <div className="text-black text-[15px] font-medium">M</div>
                  <div className="absolute right-0 top-[-8px] w-[20px] h-[20px] flex justify-center items-center bg-red-500 rounded-full cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      fill="none"
                    >
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="m10.5 3.5-7 7M3.5 3.5l7 7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-center rounded-full gap-[12px] py-[4px] px-[25px] relative w-[50px] h-[50px] bg-gray-500">
                  <div className="text-black text-[15px] font-medium">L</div>
                  <div className="absolute right-0 top-[-8px] w-[20px] h-[20px] flex justify-center items-center bg-red-500 rounded-full cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      fill="none"
                    >
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="m10.5 3.5-7 7M3.5 3.5l7 7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-center rounded-full gap-[12px] py-[4px] px-[25px] relative w-[50px] h-[50px] bg-gray-500">
                  <div className="text-black text-[15px] font-medium">XL</div>
                  <div className="absolute right-0 top-[-8px] w-[20px] h-[20px] flex justify-center items-center bg-red-500 rounded-full cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      fill="none"
                    >
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="m10.5 3.5-7 7M3.5 3.5l7 7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-center rounded-full gap-[12px] py-[4px] px-[25px] relative w-[50px] h-[50px] bg-gray-500">
                  <div className="text-black text-[15px] font-medium">2XL</div>
                  <div className="absolute right-0 top-[-8px] w-[20px] h-[20px] flex justify-center items-center bg-red-500 rounded-full cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      fill="none"
                    >
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="m10.5 3.5-7 7M3.5 3.5l7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col pb-[40px]">
              <div className="flex justify-between items-center mb-[15px]">
                <div className="text-green-600 text-[37px] font-normal ">
                  Model
                </div>
                <div className="flex gap-[30px]">
                  <div className="flex gap-[5px] cursor-pointer items-center text-black text-[15px] font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      fill="none"
                    >
                      <path
                        stroke="#292D32"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M14.25 12V4.875c0-.825-.675-1.5-1.5-1.5H9.375"
                      />
                      <path
                        stroke="#292D32"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M11.25 1.5 9 3.375l2.25 1.875M3.75 6.75V12M3.938 6.375a2.438 2.438 0 1 0 0-4.875 2.438 2.438 0 0 0 0 4.875ZM3.75 16.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM14.25 16.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                      />
                    </svg>
                    Varyasyon Değişkeni Yap
                  </div>
                  <div className="flex items-center justify-center py-[4px] px-[12px] bg-black rounded-full cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={15}
                      height={16}
                      fill="none"
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
                </div>
              </div>
              <div className="flex items-center gap-[16px] flex-wrap">
                <div className="flex items-center rounded-full border-[1px] border-gray-600 gap-[12px] py-[4px] px-[25px] relative">
                  <div className="text-black text-[22px] font-bold">
                    Yaz Şortu
                  </div>
                  <div className="absolute right-0 top-[-8px] w-[20px] h-[20px] flex justify-center items-center bg-red-500 rounded-full cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      fill="none"
                    >
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="m10.5 3.5-7 7M3.5 3.5l7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center py-[30px] px-[40px] mx-[-30px] bg-gray-200 rounded-[20px] cursor-pointer">
              <div className="flex gap-[20px]">
                <img src={excel.src} alt="" />
                <div className="flex flex-col">
                  <div className="text-black font-bold text-[15px]">
                    Excel x Csv
                  </div>
                  <div className="text-black font-normal text-[15px]">
                    Dosya İle Aktar
                  </div>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
                fill="none"
              >
                <path
                  stroke="#292D32"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m29 29-4-4-4 4M25 25v9"
                />
                <path
                  stroke="#292D32"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M33.39 31.39A5 5 0 0 0 31 22h-1.26A8 8 0 1 0 16 29.3"
                />
                <path
                  stroke="#292D32"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m29 29-4-4-4 4"
                />
                <rect
                  width={49}
                  height={49}
                  x={0.5}
                  y={0.5}
                  stroke="#000"
                  strokeOpacity={0.4}
                  rx={24.5}
                />
              </svg>
            </div>
          </div>
          <div
            className="bg-white flex flex-col rounded-[40px] py-[50px] px-[75px] max-w-[700px] mx-auto mt-[55px]"
            style={{ boxShadow: "0px 37px 44px -13px rgba(104, 48, 48, 0.1)" }}
          >
            <div className="flex items-center">
              <img className="mr-[25px]" src={brandImgHolder.src} alt="" />
              <div className="flex flex-col ">
                <div className="text-gray-900 font-medium leading-normal text-sm mb-[20px]">
                  Öğeniz İçin Marka Belirleyin
                </div>
                <div className="flex flex-wrap gap-[10px]">
                  <div className="flex items-center justify-center border-[1px] border-green-600 rounded-full">
                    <FormControl fullWidth className="step-2-select">
                      <Select
                        defaultValue={brand}
                        value={brand}
                        onChange={brandSelectHandleChange}
                        IconComponent={() => (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={25}
                            fill="none"
                          >
                            <path
                              stroke="#0C3F34"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit={10}
                              strokeWidth={1.5}
                              d="m19.92 9.45-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 9.45"
                            />
                          </svg>
                        )}
                      >
                        <MenuItem value={1}>Nike</MenuItem>
                        <MenuItem value={2}>Adidas</MenuItem>
                        <MenuItem value={3}>Puma</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="flex items-center justify-center py-[10px] px-[30px] border-[1px] border-green-600 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={25}
                      fill="none"
                    >
                      <path
                        stroke="#0C3F34"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 5.5v14M5 12.5h14"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col py-[35px] my-[40px] border-y-[1px] border-gray-600">
              <div className="flex items-center justify-between mb-[20px]">
                <div className="text-gray-900 font-medium leading-normal text-sm">
                  Öğenizin Ana Adını Belirleyin
                </div>
                <div className="flex gap-[5px] cursor-pointer items-center text-black text-[15px] font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    fill="none"
                  >
                    <path
                      stroke="#292D32"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M14.25 12V4.875c0-.825-.675-1.5-1.5-1.5H9.375"
                    />
                    <path
                      stroke="#292D32"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M11.25 1.5 9 3.375l2.25 1.875M3.75 6.75V12M3.938 6.375a2.438 2.438 0 1 0 0-4.875 2.438 2.438 0 0 0 0 4.875ZM3.75 16.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM14.25 16.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                    />
                  </svg>
                  Akıllı Ad Belirle
                </div>
              </div>
              <div className="text-black font-normal text-[64px] leading-[1.3]">
                Sportswear Tech Fleece
              </div>
            </div>
            <div className="flex flex-col pb-[40px] mb-[30px] border-b-[1px] border-gray-600">
              <div className="flex justify-between mb-[25px]">
                <div className="text-gray-900 font-medium leading-normal text-sm">
                  Öğe Kodu
                </div>
                <div className="flex gap-[20px]">
                  <div className="flex items-center gap-[8px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      fill="none"
                    >
                      <path
                        stroke="#292D32"
                        strokeMiterlimit={10}
                        strokeWidth={2}
                        d="M11.693 9.195a3.848 3.848 0 1 0 0-7.695 3.848 3.848 0 0 0 0 7.695ZM4.77 14.58a2.31 2.31 0 1 0 0-4.62 2.31 2.31 0 0 0 0 4.62ZM12.465 16.5a1.92 1.92 0 1 0 0-3.84 1.92 1.92 0 0 0 0 3.84Z"
                      />
                    </svg>
                    Otomatik Oluştur
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      fill="none"
                    >
                      <path
                        stroke="#292D32"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1.5 6.75V4.875A3.37 3.37 0 0 1 4.875 1.5H6.75M11.25 1.5h1.875A3.37 3.37 0 0 1 16.5 4.875V6.75M16.5 12v1.125a3.37 3.37 0 0 1-3.375 3.375H12M6.75 16.5H4.875A3.37 3.37 0 0 1 1.5 13.125V11.25M7.875 5.25v1.5c0 .75-.375 1.125-1.125 1.125h-1.5c-.75 0-1.125-.375-1.125-1.125v-1.5c0-.75.375-1.125 1.125-1.125h1.5c.75 0 1.125.375 1.125 1.125Z"
                      />
                      <path
                        stroke="#292D32"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13.875 5.25v1.5c0 .75-.375 1.125-1.125 1.125h-1.5c-.75 0-1.125-.375-1.125-1.125v-1.5c0-.75.375-1.125 1.125-1.125h1.5c.75 0 1.125.375 1.125 1.125ZM7.875 11.25v1.5c0 .75-.375 1.125-1.125 1.125h-1.5c-.75 0-1.125-.375-1.125-1.125v-1.5c0-.75.375-1.125 1.125-1.125h1.5c.75 0 1.125.375 1.125 1.125ZM13.875 11.25v1.5c0 .75-.375 1.125-1.125 1.125h-1.5c-.75 0-1.125-.375-1.125-1.125v-1.5c0-.75.375-1.125 1.125-1.125h1.5c.75 0 1.125.375 1.125 1.125Z"
                      />
                    </svg>
                    Barkod Okut
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-black font-medium text-[37px]">
                  BK23SR25
                </div>
                <div className="flex items-center justify-center py-[8px] px-[14px] rounded-full border-[1px] border-gray-700 cursor-pointer">
                  Kod Mantığı Oluştur
                </div>
              </div>
            </div>
            <div className="text-black text-[37px] leading-[1.2] font-light mb-[40px]">
              Kişiselleştirilmiş Öğe Özellik Ekranınız Hazır.
            </div>
            <div className="flex flex-col pb-[40px] mb-[30px] border-b-[1px] border-gray-600">
              <div className="flex justify-between items-center mb-[15px]">
                <div className="text-green-600 text-[37px] font-normal ">
                  Boyut
                </div>
                <div className="flex gap-[30px]">
                  <div className="flex gap-[5px] cursor-pointer items-center text-black text-[15px] font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      fill="none"
                    >
                      <path
                        stroke="#292D32"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M14.25 12V4.875c0-.825-.675-1.5-1.5-1.5H9.375"
                      />
                      <path
                        stroke="#292D32"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M11.25 1.5 9 3.375l2.25 1.875M3.75 6.75V12M3.938 6.375a2.438 2.438 0 1 0 0-4.875 2.438 2.438 0 0 0 0 4.875ZM3.75 16.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM14.25 16.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                      />
                    </svg>
                    Varyasyon Değişkeni Yap
                  </div>
                  <div className="flex items-center justify-center py-[4px] px-[12px] bg-black rounded-full cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={15}
                      height={16}
                      fill="none"
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
                </div>
              </div>
              <div className="flex items-center gap-[8px]">
                <div className="flex border-[1px] border-gray-600 rounded-full">
                  <div className="px-[23px] text-black text-[22px] font-normal border-r-[1px] border-gray-600 flex items-center">
                    En
                  </div>
                  <div className="flex">
                    <FormControl fullWidth className="step-4-select">
                      <Select
                        defaultValue={size}
                        value={size}
                        onChange={sizeSelectHandleChange}
                        IconComponent={() => (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={14}
                            height={15}
                            fill="none"
                          >
                            <path
                              stroke="#292D32"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit={10}
                              d="M11.62 5.72 7.817 9.525c-.45.45-1.185.45-1.634 0L2.38 5.721"
                            />
                          </svg>
                        )}
                      >
                        <MenuItem value={1}>
                          100 <span>cm</span>
                        </MenuItem>
                        <MenuItem value={2}>
                          200 <span>cm</span>
                        </MenuItem>
                        <MenuItem value={3}>
                          300 <span>cm</span>
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={13}
                  height={10}
                  fill="none"
                >
                  <path
                    stroke="#000"
                    d="M0-.5h13.966"
                    transform="matrix(-.83817 -.54542 -.10967 .99397 12.706 9.309)"
                  />
                  <path
                    stroke="#000"
                    d="M0-.5h13.966"
                    transform="matrix(.83817 -.54542 .10967 .99397 1 9.309)"
                  />
                </svg>
                <div className="flex border-[1px] border-gray-600 rounded-full">
                  <div className="px-[23px] text-black text-[22px] font-normal border-r-[1px] border-gray-600 flex items-center">
                    Boy
                  </div>
                  <div className="flex">
                    <FormControl fullWidth className="step-4-select">
                      <Select
                        defaultValue={height}
                        value={height}
                        onChange={heightSelectHandleChange}
                        IconComponent={() => (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={14}
                            height={15}
                            fill="none"
                          >
                            <path
                              stroke="#292D32"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit={10}
                              d="M11.62 5.72 7.817 9.525c-.45.45-1.185.45-1.634 0L2.38 5.721"
                            />
                          </svg>
                        )}
                      >
                        <MenuItem value={1}>
                          10 <span>cm</span>
                        </MenuItem>
                        <MenuItem value={2}>
                          20 <span>cm</span>
                        </MenuItem>
                        <MenuItem value={3}>
                          30 <span>cm</span>
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col pb-[40px] mb-[30px] border-b-[1px] border-gray-600">
              <div className="flex justify-between items-center mb-[15px]">
                <div className="text-green-600 text-[37px] font-normal ">
                  Renk
                </div>
                <div className="flex gap-[30px]">
                  <div className="flex gap-[5px] cursor-pointer items-center text-black text-[15px] font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      fill="none"
                    >
                      <path
                        stroke="#292D32"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M14.25 12V4.875c0-.825-.675-1.5-1.5-1.5H9.375"
                      />
                      <path
                        stroke="#292D32"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M11.25 1.5 9 3.375l2.25 1.875M3.75 6.75V12M3.938 6.375a2.438 2.438 0 1 0 0-4.875 2.438 2.438 0 0 0 0 4.875ZM3.75 16.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM14.25 16.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                      />
                    </svg>
                    Varyasyon Değişkeni Yap
                  </div>
                  <div className="flex items-center justify-center py-[4px] px-[12px] bg-black rounded-full cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={15}
                      height={16}
                      fill="none"
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
                </div>
              </div>
              <div className="flex items-center gap-[16px] flex-wrap">
                <div className="flex items-center rounded-full border-[1px] border-gray-600 gap-[12px] py-[4px] px-[25px] relative">
                  <div className="bg-orange-10 border-[1px] border-white rounded-full w-[15px] h-[15px] shadow-[0_3px_11px_-1px_rgba(255,95,27,1)]"></div>
                  <div className="text-black text-[22px] font-bold">
                    Alev Kızılı
                  </div>
                  <div className="absolute right-0 top-[-8px] w-[20px] h-[20px] flex justify-center items-center bg-red-500 rounded-full cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      fill="none"
                    >
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="m10.5 3.5-7 7M3.5 3.5l7 7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center rounded-full border-[1px] border-gray-600 gap-[12px] py-[4px] px-[25px] relative">
                  <div className="bg-blue-10 border-[1px] border-white rounded-full w-[15px] h-[15px] shadow-[0_3px_11px_-1px_rgba(0,106,203,1)]"></div>
                  <div className="text-black text-[22px] font-bold">
                    Gök Mavisi
                  </div>
                  <div className="absolute right-0 top-[-8px] w-[20px] h-[20px] flex justify-center items-center bg-red-500 rounded-full cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      fill="none"
                    >
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="m10.5 3.5-7 7M3.5 3.5l7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col pb-[40px] mb-[30px] border-b-[1px] border-gray-600">
              <div className="flex justify-between items-center mb-[15px]">
                <div className="text-green-600 text-[37px] font-normal ">
                  Beden
                </div>
                <div className="flex gap-[30px]">
                  <div className="flex gap-[5px] cursor-pointer items-center text-black text-[15px] font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      fill="none"
                    >
                      <path
                        stroke="#292D32"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M14.25 12V4.875c0-.825-.675-1.5-1.5-1.5H9.375"
                      />
                      <path
                        stroke="#292D32"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M11.25 1.5 9 3.375l2.25 1.875M3.75 6.75V12M3.938 6.375a2.438 2.438 0 1 0 0-4.875 2.438 2.438 0 0 0 0 4.875ZM3.75 16.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM14.25 16.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                      />
                    </svg>
                    Varyasyon Değişkeni Yap
                  </div>
                  <div className="flex items-center justify-center py-[4px] px-[12px] bg-black rounded-full cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={15}
                      height={16}
                      fill="none"
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
                </div>
              </div>
              <div className="flex items-center gap-[16px] flex-wrap">
                <div className="flex items-center justify-center rounded-full gap-[12px] py-[4px] px-[25px] relative w-[50px] h-[50px] bg-gray-500">
                  <div className="text-black text-[15px] font-medium">S</div>
                  <div className="absolute right-0 top-[-8px] w-[20px] h-[20px] flex justify-center items-center bg-red-500 rounded-full cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      fill="none"
                    >
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="m10.5 3.5-7 7M3.5 3.5l7 7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-center rounded-full gap-[12px] py-[4px] px-[25px] relative w-[50px] h-[50px] bg-gray-500">
                  <div className="text-black text-[15px] font-medium">M</div>
                  <div className="absolute right-0 top-[-8px] w-[20px] h-[20px] flex justify-center items-center bg-red-500 rounded-full cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      fill="none"
                    >
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="m10.5 3.5-7 7M3.5 3.5l7 7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-center rounded-full gap-[12px] py-[4px] px-[25px] relative w-[50px] h-[50px] bg-gray-500">
                  <div className="text-black text-[15px] font-medium">L</div>
                  <div className="absolute right-0 top-[-8px] w-[20px] h-[20px] flex justify-center items-center bg-red-500 rounded-full cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      fill="none"
                    >
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="m10.5 3.5-7 7M3.5 3.5l7 7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-center rounded-full gap-[12px] py-[4px] px-[25px] relative w-[50px] h-[50px] bg-gray-500">
                  <div className="text-black text-[15px] font-medium">XL</div>
                  <div className="absolute right-0 top-[-8px] w-[20px] h-[20px] flex justify-center items-center bg-red-500 rounded-full cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      fill="none"
                    >
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="m10.5 3.5-7 7M3.5 3.5l7 7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-center rounded-full gap-[12px] py-[4px] px-[25px] relative w-[50px] h-[50px] bg-gray-500">
                  <div className="text-black text-[15px] font-medium">2XL</div>
                  <div className="absolute right-0 top-[-8px] w-[20px] h-[20px] flex justify-center items-center bg-red-500 rounded-full cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      fill="none"
                    >
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="m10.5 3.5-7 7M3.5 3.5l7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col pb-[40px]">
              <div className="flex justify-between items-center mb-[15px]">
                <div className="text-green-600 text-[37px] font-normal ">
                  Model
                </div>
                <div className="flex gap-[30px]">
                  <div className="flex gap-[5px] cursor-pointer items-center text-black text-[15px] font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      fill="none"
                    >
                      <path
                        stroke="#292D32"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M14.25 12V4.875c0-.825-.675-1.5-1.5-1.5H9.375"
                      />
                      <path
                        stroke="#292D32"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M11.25 1.5 9 3.375l2.25 1.875M3.75 6.75V12M3.938 6.375a2.438 2.438 0 1 0 0-4.875 2.438 2.438 0 0 0 0 4.875ZM3.75 16.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM14.25 16.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                      />
                    </svg>
                    Varyasyon Değişkeni Yap
                  </div>
                  <div className="flex items-center justify-center py-[4px] px-[12px] bg-black rounded-full cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={15}
                      height={16}
                      fill="none"
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
                </div>
              </div>
              <div className="flex items-center gap-[16px] flex-wrap">
                <div className="flex items-center rounded-full border-[1px] border-gray-600 gap-[12px] py-[4px] px-[25px] relative">
                  <div className="text-black text-[22px] font-bold">
                    Yaz Şortu
                  </div>
                  <div className="absolute right-0 top-[-8px] w-[20px] h-[20px] flex justify-center items-center bg-red-500 rounded-full cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      fill="none"
                    >
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="m10.5 3.5-7 7M3.5 3.5l7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center py-[30px] px-[40px] mx-[-30px] bg-gray-200 rounded-[20px] cursor-pointer">
              <div className="flex gap-[20px]">
                <img src={excel.src} alt="" />
                <div className="flex flex-col">
                  <div className="text-black font-bold text-[15px]">
                    Excel x Csv
                  </div>
                  <div className="text-black font-normal text-[15px]">
                    Dosya İle Aktar
                  </div>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
                fill="none"
              >
                <path
                  stroke="#292D32"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m29 29-4-4-4 4M25 25v9"
                />
                <path
                  stroke="#292D32"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M33.39 31.39A5 5 0 0 0 31 22h-1.26A8 8 0 1 0 16 29.3"
                />
                <path
                  stroke="#292D32"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m29 29-4-4-4 4"
                />
                <rect
                  width={49}
                  height={49}
                  x={0.5}
                  y={0.5}
                  stroke="#000"
                  strokeOpacity={0.4}
                  rx={24.5}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed top-[55%] translate-y-[-50%] right-[4vw] p-[30px] w-[140px] flex flex-col gap-[15px] text-center items-center justify-center rounded-[30px] bg-gray-1100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={49}
          height={49}
          fill="none"
        >
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M24.5 10.208v28.583M10.208 24.5h28.584"
          />
        </svg>
        <span className="text-white font-semibold text-[15px]">
          Varyasyon Ekle
        </span>
      </div>

      <div className="fixed bottom-[50px] left-[460px] right-0 z-[5]">
        <div className="flex items-center justify-center">
          <div
            className="bg-white/80 backdrop-blur-[5px] p-[15px] rounded-full flex items-center gap-[5px] shadow-2xl shadow-red-10/40"
            style={{ boxShadow: "0px 24px 54px -13px rgba(177, 109, 92, 0.3)" }}
          >
            <div className="cursor-pointer w-[80px] h-[60px] flex items-center justify-center text-[22px] font-light text-black border border-gray-800 rounded-full py-[16px] px-[10px] text-center gap-[15px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
              >
                <path
                  stroke="#242529"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 12H5M12 5l-7 7 7 7"
                />
              </svg>
            </div>

            <div className="cursor-pointer w-[250px] h-[60px] flex items-center justify-center text-[22px] font-light text-white bg-green-600 border border-green-600 rounded-full py-[16px] px-[10px] text-center gap-[10px]">
              <span>Tümünü Yayınla</span>
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
