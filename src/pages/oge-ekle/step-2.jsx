import React, { useState } from "react";

import AddProductSteps from "@/components/add-product-steps";
import { FormControl, MenuItem, Select } from "@mui/material";

import brandImgHolder from "@/assets/img/brand-image-holder.png";
import excel from "@/assets/img/excel.svg";

export default function Step2() {
  // For Brand Select
  var nike = "Nike";
  const [brand, setBrand] = useState(nike);

  const selectHandleChange = (event) => {
    setBrand(event.target.value);
  };
  return (
    <div className="flex flex-col">
      <AddProductSteps />

      <div className="flex-1 overflow-y-auto overflow-x-hidden pt-[7vw] pb-[10vw] before:content-[''] before:fixed before:left-[460px] before:right-0 before:bottom-0 before:h-[200px] before:bg-gradient-to-t before:from-red-50 before:to-green-10/10">
        <span className="block text-[54px] font-medium text-green-600 text-center">
          Öğe Kimliği
        </span>

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
                      id="demo-simple-select"
                      defaultValue={brand}
                      value={brand}
                      onChange={selectHandleChange}
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
                      <MenuItem value={nike}>Nike</MenuItem>
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
            <div className="text-gray-900 font-medium leading-normal text-sm mb-[20px]">
              Öğenizin Ana Adını Belirleyin
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
            <div className="text-black font-medium text-[37px]">BK23SR25</div>
          </div>
          <div className="flex justify-between items-center py-[30px] px-[40px] mx-[-30px] bg-gray-200 rounded-[20px]">
            <div className="flex gap-[20px]">
              <img src={excel.src} alt="" />
              <div className="flex flex-col">
                <div className="text-black font-bold text-[15px]">
                  Excel x Csv
                </div>
                <div className="text-black font-normal text-[15px]">
                  Excel x Csv
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

      <div className="fixed bottom-[50px] left-[460px] right-0">
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
