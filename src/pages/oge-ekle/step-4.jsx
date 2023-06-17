import React, { useState } from "react";

import AddProductSteps from "@/components/add-product-steps";
import { FormControl, MenuItem, Select } from "@mui/material";

export default function Step4() {
  // For Width Select
  const [size, setSize] = useState(1);

  const selectHandleChange = (event) => {
    setSize(event.target.value);
  };

  // For Height Select
  const [height, setHeight] = useState(1);

  const secSelectHandleChange = (event) => {
    setHeight(event.target.value);
  };

  // Add Variable
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleClass, setIsVisibleClass] = useState(false);

  const toggleVisibility = () => {
    if (isVisible) {
      setIsVisibleClass(!isVisibleClass);
      setTimeout(() => {
        setIsVisible(!isVisible);
      }, 500);
    }else {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisibleClass(true);
      });
    }
  };

  return (
    <div className="flex flex-col">
      <AddProductSteps />

      <div className="flex-1 overflow-y-auto overflow-x-hidden pt-[7vw] pb-[10vw] before:content-[''] before:fixed before:left-[460px] before:right-0 before:bottom-0 before:h-[200px] before:bg-gradient-to-t before:from-red-50 before:to-green-10/10 before:z-[3]">
        <span className="block text-[54px] font-medium text-green-600 text-center">
          Öğe Özellikleri
        </span>

        <div className="relative max-w-[700px] mx-auto mt-[55px]">
          <div
            className={`bg-white flex flex-col rounded-[40px] py-[50px] px-[75px] max-w-[700px] mx-auto mt-[55px] relative z-[2] ease-out duration-500 ${
              isVisibleClass ? "translate-x-[-12vw]" : ""
            }`}
            style={{ boxShadow: "0px 37px 44px -13px rgba(104, 48, 48, 0.1)" }}
          >
            <div className="text-black text-[37px] leading-[1.2] font-light mb-[40px]">
              Kişiselleştirilmiş Öğe Özellik Ekranınız Hazır.
            </div>
            <div className="flex flex-col pb-[40px] mb-[30px] border-b-[1px] border-gray-600">
              <div className="flex justify-between items-center mb-[15px]">
                <div className="text-green-600 text-[37px] font-normal ">
                  Boyut
                </div>
                <div className="flex gap-[30px]" onClick={toggleVisibility}>
                  <div
                    className="flex gap-[5px] cursor-pointer items-center"
                  >
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
                        onChange={selectHandleChange}
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
                        onChange={secSelectHandleChange}
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
                <div className="flex gap-[30px]" onClick={toggleVisibility}>
                  <div className="flex gap-[5px] cursor-pointer items-center">
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
                <div className="flex gap-[30px]" onClick={toggleVisibility}>
                  <div className="flex gap-[5px] cursor-pointer items-center">
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
                <div className="flex gap-[30px]" onClick={toggleVisibility}>
                  <div className="flex gap-[5px] cursor-pointer items-center">
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
          </div>
          {
            (isVisible) && (
              <div
              className={`bg-white flex flex-col rounded-[40px] py-[50px] px-[75px] max-w-[475px] max-h-[100%] mx-auto z-[1] ease-out duration-500 absolute w-[100%] h-[100%] top-0 left-0 before:content-[''] before:absolute before:left-0 before:bottom-[50px] before:right-0 before:h-[200px] before:bg-gradient-to-t before:from-white before:to-white/0 before:pointer-events-none  ${
                isVisibleClass ? "translate-x-[26vw]" : ""
              }`}
              style={{ boxShadow: "0px 37px 44px -13px rgba(104, 48, 48, 0.1)" }}
            >
              <div className="text-black text-[37px] leading-[1.2] font-light mb-[40px]">
                Varyasyon Değişkenleri
              </div>
              <div className="text-gray-900 text-[18px] leading-[1.3] font-light mb-[40px]">
                Varyasyon değişkeni özelliği ürünlerinizin sabit olandeğerlerini
                tutar yalnızca değiştirilecek bölgerini düzenlemenize yardımcı
                olur. Böylece hızlı ve daha sadece bir ekleme paneli oluşturmuş
                olursunuz kendinize.
              </div>
              <div
                className="flex flex-col gap-[30px] overflow-y-auto max-h-[-webkit-fill-available] step-4-webkit pb-[200px]"
              >
                <div className="flex justify-between items-center bg-gray-500 rounded-[30px] px-[30px] py-[30px]">
                  <div className="text-black text-[26px] leading-[1.2] font-light">
                    Boyut
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={35}
                    height={21}
                    fill="none"
                    className="cursor-pointer"
                  >
                    <path
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13.125 10.5h8.75"
                    />
                    <rect
                      width={34}
                      height={19}
                      x={0.5}
                      y={1}
                      stroke="#000"
                      rx={9.5}
                    />
                  </svg>
                </div>
                <div className="flex justify-between items-center bg-gray-500 rounded-[30px] px-[30px] py-[30px]">
                  <div className="text-black text-[26px] leading-[1.2] font-light">
                    Boyut
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={35}
                    height={21}
                    fill="none"
                    className="cursor-pointer"
                  >
                    <path
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13.125 10.5h8.75"
                    />
                    <rect
                      width={34}
                      height={19}
                      x={0.5}
                      y={1}
                      stroke="#000"
                      rx={9.5}
                    />
                  </svg>
                </div>
                <div className="flex justify-between items-center border-[1px] border-gray-700 rounded-[30px] px-[30px] py-[30px] cursor-pointer">
                  <div className="text-black text-[26px] leading-[1.2] font-light">
                    Ekle
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
            </div>
            )
          }
        </div>
      </div>

      <div className="fixed bottom-[50px] left-[460px] right-0 z-[5]">
        <div className="flex items-center justify-center">
          <div
            className="bg-white/80 backdrop-blur-[5px] p-[15px] rounded-full flex items-center gap-[5px] shadow-2xl shadow-red-10/40"
            style={{ boxShadow: "0px 24px 54px -13px rgba(177, 109, 92, 0.3)" }}
          >
            <div className="cursor-pointer w-[150px] flex items-center justify-center text-[22px] font-light text-red-500 border border-red-500 rounded-full py-[16px] px-[10px] text-center gap-[15px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
              >
                <path
                  stroke="#F34A53"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 6 6 18M6 6l12 12"
                />
              </svg>
              <span>İptal</span>
            </div>

            <div className="cursor-pointer w-[150px] flex items-center justify-center text-[22px] font-light text-white bg-green-600 border border-green-600 rounded-full py-[16px] px-[10px] text-center gap-[10px]">
              <span>Sonraki</span>
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
