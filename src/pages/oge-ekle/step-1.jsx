import React, { useState } from "react";

import { FormControl, MenuItem, Select } from "@mui/material";

import AddProductSteps from "@/components/add-product-steps";
import Link from "next/link";

export default function Step1() {
  // For Hour Select
  const [hourValue, setHourValue] = useState(10);

  const selectHandleChange = (event) => {
    setHourValue(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <AddProductSteps />

      <div className="flex-1 overflow-y-auto overflow-x-hidden text-center pt-[11vw]">
        <span className="block text-[35px] font-light mb-[-10px]">
          Ürün Ekle
        </span>
        <span className="block text-[54px] font-medium text-green-600">
          Varyasyon Seçimi
        </span>

        <div
          className="bg-white rounded-[40px] py-[50px] px-[45px] max-w-[700px] mx-auto mt-[55px]"
          style={{ boxShadow: "0px 37px 44px -13px rgba(104, 48, 48, 0.1)" }}
        >
          <span className="block text-[30px] text-black border-b border-gray-600 pb-[32px] mb-[45px]">
            Ürününüzde Varyasyon <br /> bulunuyor mu?
          </span>

          <div className="flex items-center justify-center">
            <span className="text-[15px] text-gray-1100/70">Seçimimi</span>

            <FormControl fullWidth>
              <Select
                className="text-[15px] font-medium text-gray-1100/70"
                defaultValue={hourValue}
                value={hourValue}
                onChange={selectHandleChange}
                IconComponent={() => (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={12}
                    fill="none"
                    className="opacity-50 ml-[-5px]"
                  >
                    <path
                      stroke="#242529"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit={10}
                      d="M9.96 4.475 6.7 7.735a.993.993 0 0 1-1.4 0l-3.26-3.26"
                    />
                  </svg>
                )}
              >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
              </Select>
            </FormControl>

            <span className="text-[15px] text-gray-1100/70">
              saat boyunca hatırla
            </span>
          </div>
        </div>
      </div>

      <div className="fixed bottom-[50px] left-[460px] right-0">
        <div className="flex items-center justify-center">
          <div
            className="bg-white/80 backdrop-blur-[5px] p-[15px] rounded-full flex items-center gap-[5px]"
            style={{ boxShadow: "0px 24px 54px -13px rgba(177, 109, 92, 0.3)" }}
          >
            <Link href={"#"}>
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
                <span>Hayır</span>
              </div>
            </Link>

            <Link href={"/oge-ekle/step-2"}>
              <div className="cursor-pointer w-[150px] flex items-center justify-center text-[22px] font-light text-white bg-green-600 border border-green-600 rounded-full py-[16px] px-[10px] text-center gap-[20px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={14}
                  fill="none"
                >
                  <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    strokeWidth={2}
                    d="m16.5 1.5-9.345 11L1.5 5.844"
                  />
                </svg>
                <span>Evet</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
