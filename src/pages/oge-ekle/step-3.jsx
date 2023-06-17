import React, { useState } from "react";

import AddProductSteps from "@/components/add-product-steps";
import {
  Box,
  Tab,
  Tabs,
} from "@mui/material";

export default function Step3() {
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

      <div className="flex-1 overflow-y-auto overflow-x-hidden pt-[7vw] pb-[10vw] before:content-[''] before:fixed before:left-[460px] before:right-0 before:bottom-0 before:h-[200px] before:bg-gradient-to-t before:from-red-50 before:to-green-10/10">
        <span className="block text-[54px] font-medium text-green-600 text-center">
          Öğe Özellikleri
        </span>

        <div
          className="bg-white flex flex-col rounded-[40px] py-[50px] px-[75px] max-w-[700px] mx-auto mt-[55px]"
          style={{ boxShadow: "0px 37px 44px -13px rgba(104, 48, 48, 0.1)" }}
        >
          <div className="text-black text-[37px] leading-[1.2] font-light mb-[25px]">
            Sadece İhtiyaç Duyduğunuz Özelliklerle Muhattap Olun
          </div>
          <div className="text-gray-800 text-[18px] font-light leading-normal mb-[50px]">
            Prodobit nöral bir mimari üstüne kurulmuştur. Ürün Detayları
            Özelleştirme özelliği ile ürünlerinize istediğiniz özellikleri
            ekleyin. Giysi için 'boyut', 'renk', teknoloji için 'hız', 'pil
            gücü'... Her ürün, sizin kontrolünüzde!
          </div>
          <div className="text-blue-500 text-[37px] font-normal mb-[15px]">
            Şablon Seç
          </div>

          <div className="mb-[25px]">
            <Tabs
              className="step-3-tabs"
              value={tabValue}
              onChange={tabsHandle}
            >
              <Tab label="Fabrika Üretim" />
              <Tab label="Perakende" />
              <Tab label="B2B" />
            </Tabs>
          </div>
          <div className="step-3-tab-panels pb-[40px] mb-[30px] border-b-[1px] border-gray-600">
            <TabPanel value={1} index={0}>
              <div className="flex items-center gap-[5px] flex-wrap">
                <div className="flex items-center rounded-full px-[15px] py-[10px] bg-blue-50">
                  <div className="mr-[10px] text-blue-700 text-[15px]">
                    Kumaş
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    fill="none"
                    className="mr-[3px] cursor-pointer"
                  >
                    <path
                      stroke="#2980B9"
                      d="M9.625 5.33c-1.06.353-2.475-1.061-2.121-2.122m.436-.435L5.655 5.057a7.75 7.75 0 0 0-2.039 3.601l-.11.442a.188.188 0 0 0 .228.227l.441-.11a7.75 7.75 0 0 0 3.6-2.039l2.286-2.284A1.5 1.5 0 1 0 7.94 2.773Z"
                    />
                    <path
                      stroke="#2980B9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M11.083 11.667H2.917"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    fill="none"
                    className="cursor-pointer"
                  >
                    <path
                      stroke="#2980B9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="m10.5 3.5-7 7M3.5 3.5l7 7"
                    />
                  </svg>
                </div>
                <div className="flex items-center rounded-full px-[15px] py-[10px] bg-blue-50">
                  <div className="mr-[10px] text-blue-700 text-[15px]">
                    Teknoloji
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    fill="none"
                    className="mr-[3px] cursor-pointer"
                  >
                    <path
                      stroke="#2980B9"
                      d="M9.625 5.33c-1.06.353-2.475-1.061-2.121-2.122m.436-.435L5.655 5.057a7.75 7.75 0 0 0-2.039 3.601l-.11.442a.188.188 0 0 0 .228.227l.441-.11a7.75 7.75 0 0 0 3.6-2.039l2.286-2.284A1.5 1.5 0 1 0 7.94 2.773Z"
                    />
                    <path
                      stroke="#2980B9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M11.083 11.667H2.917"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    fill="none"
                    className="cursor-pointer"
                  >
                    <path
                      stroke="#2980B9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="m10.5 3.5-7 7M3.5 3.5l7 7"
                    />
                  </svg>
                </div>
                <div className="flex items-center rounded-full px-[15px] py-[10px] bg-blue-50">
                  <div className="mr-[10px] text-blue-700 text-[15px]">
                    Nike
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    fill="none"
                    className="mr-[3px] cursor-pointer"
                  >
                    <path
                      stroke="#2980B9"
                      d="M9.625 5.33c-1.06.353-2.475-1.061-2.121-2.122m.436-.435L5.655 5.057a7.75 7.75 0 0 0-2.039 3.601l-.11.442a.188.188 0 0 0 .228.227l.441-.11a7.75 7.75 0 0 0 3.6-2.039l2.286-2.284A1.5 1.5 0 1 0 7.94 2.773Z"
                    />
                    <path
                      stroke="#2980B9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M11.083 11.667H2.917"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    fill="none"
                    className="cursor-pointer"
                  >
                    <path
                      stroke="#2980B9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="m10.5 3.5-7 7M3.5 3.5l7 7"
                    />
                  </svg>
                </div>
                <div className="flex items-center rounded-full px-[15px] py-[10px] bg-blue-50">
                  <div className="mr-[10px] text-blue-700 text-[15px]">
                    Hammadde
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    fill="none"
                    className="mr-[3px] cursor-pointer"
                  >
                    <path
                      stroke="#2980B9"
                      d="M9.625 5.33c-1.06.353-2.475-1.061-2.121-2.122m.436-.435L5.655 5.057a7.75 7.75 0 0 0-2.039 3.601l-.11.442a.188.188 0 0 0 .228.227l.441-.11a7.75 7.75 0 0 0 3.6-2.039l2.286-2.284A1.5 1.5 0 1 0 7.94 2.773Z"
                    />
                    <path
                      stroke="#2980B9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M11.083 11.667H2.917"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    fill="none"
                    className="cursor-pointer"
                  >
                    <path
                      stroke="#2980B9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="m10.5 3.5-7 7M3.5 3.5l7 7"
                    />
                  </svg>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={2} index={1}>
              <div className="flex items-center gap-[5px] flex-wrap">
                <div className="flex items-center rounded-full px-[15px] py-[10px] bg-blue-50">
                  <div className="mr-[10px] text-blue-700 text-[15px]">
                    Teknoloji
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    fill="none"
                    className="mr-[3px] cursor-pointer"
                  >
                    <path
                      stroke="#2980B9"
                      d="M9.625 5.33c-1.06.353-2.475-1.061-2.121-2.122m.436-.435L5.655 5.057a7.75 7.75 0 0 0-2.039 3.601l-.11.442a.188.188 0 0 0 .228.227l.441-.11a7.75 7.75 0 0 0 3.6-2.039l2.286-2.284A1.5 1.5 0 1 0 7.94 2.773Z"
                    />
                    <path
                      stroke="#2980B9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M11.083 11.667H2.917"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    fill="none"
                    className="cursor-pointer"
                  >
                    <path
                      stroke="#2980B9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="m10.5 3.5-7 7M3.5 3.5l7 7"
                    />
                  </svg>
                </div>
                <div className="flex items-center rounded-full px-[15px] py-[10px] bg-blue-50">
                  <div className="mr-[10px] text-blue-700 text-[15px]">
                    Kumaş
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    fill="none"
                    className="mr-[3px] cursor-pointer"
                  >
                    <path
                      stroke="#2980B9"
                      d="M9.625 5.33c-1.06.353-2.475-1.061-2.121-2.122m.436-.435L5.655 5.057a7.75 7.75 0 0 0-2.039 3.601l-.11.442a.188.188 0 0 0 .228.227l.441-.11a7.75 7.75 0 0 0 3.6-2.039l2.286-2.284A1.5 1.5 0 1 0 7.94 2.773Z"
                    />
                    <path
                      stroke="#2980B9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M11.083 11.667H2.917"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    fill="none"
                    className="cursor-pointer"
                  >
                    <path
                      stroke="#2980B9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="m10.5 3.5-7 7M3.5 3.5l7 7"
                    />
                  </svg>
                </div>
                <div className="flex items-center rounded-full px-[15px] py-[10px] bg-blue-50">
                  <div className="mr-[10px] text-blue-700 text-[15px]">
                    Hammadde
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    fill="none"
                    className="mr-[3px] cursor-pointer"
                  >
                    <path
                      stroke="#2980B9"
                      d="M9.625 5.33c-1.06.353-2.475-1.061-2.121-2.122m.436-.435L5.655 5.057a7.75 7.75 0 0 0-2.039 3.601l-.11.442a.188.188 0 0 0 .228.227l.441-.11a7.75 7.75 0 0 0 3.6-2.039l2.286-2.284A1.5 1.5 0 1 0 7.94 2.773Z"
                    />
                    <path
                      stroke="#2980B9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M11.083 11.667H2.917"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    fill="none"
                    className="cursor-pointer"
                  >
                    <path
                      stroke="#2980B9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="m10.5 3.5-7 7M3.5 3.5l7 7"
                    />
                  </svg>
                </div>
                <div className="flex items-center rounded-full px-[15px] py-[10px] bg-blue-50">
                  <div className="mr-[10px] text-blue-700 text-[15px]">
                    Nike
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    fill="none"
                    className="mr-[3px] cursor-pointer"
                  >
                    <path
                      stroke="#2980B9"
                      d="M9.625 5.33c-1.06.353-2.475-1.061-2.121-2.122m.436-.435L5.655 5.057a7.75 7.75 0 0 0-2.039 3.601l-.11.442a.188.188 0 0 0 .228.227l.441-.11a7.75 7.75 0 0 0 3.6-2.039l2.286-2.284A1.5 1.5 0 1 0 7.94 2.773Z"
                    />
                    <path
                      stroke="#2980B9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M11.083 11.667H2.917"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    fill="none"
                    className="cursor-pointer"
                  >
                    <path
                      stroke="#2980B9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="m10.5 3.5-7 7M3.5 3.5l7 7"
                    />
                  </svg>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={3} index={2}>
              <div className="flex items-center gap-[5px] flex-wrap">
                <div className="flex items-center rounded-full px-[15px] py-[10px] bg-blue-50">
                  <div className="mr-[10px] text-blue-700 text-[15px]">
                    Kumaş
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    fill="none"
                    className="mr-[3px] cursor-pointer"
                  >
                    <path
                      stroke="#2980B9"
                      d="M9.625 5.33c-1.06.353-2.475-1.061-2.121-2.122m.436-.435L5.655 5.057a7.75 7.75 0 0 0-2.039 3.601l-.11.442a.188.188 0 0 0 .228.227l.441-.11a7.75 7.75 0 0 0 3.6-2.039l2.286-2.284A1.5 1.5 0 1 0 7.94 2.773Z"
                    />
                    <path
                      stroke="#2980B9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M11.083 11.667H2.917"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    fill="none"
                    className="cursor-pointer"
                  >
                    <path
                      stroke="#2980B9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="m10.5 3.5-7 7M3.5 3.5l7 7"
                    />
                  </svg>
                </div>
                <div className="flex items-center rounded-full px-[15px] py-[10px] bg-blue-50">
                  <div className="mr-[10px] text-blue-700 text-[15px]">
                    Nike
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    fill="none"
                    className="mr-[3px] cursor-pointer"
                  >
                    <path
                      stroke="#2980B9"
                      d="M9.625 5.33c-1.06.353-2.475-1.061-2.121-2.122m.436-.435L5.655 5.057a7.75 7.75 0 0 0-2.039 3.601l-.11.442a.188.188 0 0 0 .228.227l.441-.11a7.75 7.75 0 0 0 3.6-2.039l2.286-2.284A1.5 1.5 0 1 0 7.94 2.773Z"
                    />
                    <path
                      stroke="#2980B9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M11.083 11.667H2.917"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    fill="none"
                    className="cursor-pointer"
                  >
                    <path
                      stroke="#2980B9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="m10.5 3.5-7 7M3.5 3.5l7 7"
                    />
                  </svg>
                </div>
                <div className="flex items-center rounded-full px-[15px] py-[10px] bg-blue-50">
                  <div className="mr-[10px] text-blue-700 text-[15px]">
                    Hammadde
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    fill="none"
                    className="mr-[3px] cursor-pointer"
                  >
                    <path
                      stroke="#2980B9"
                      d="M9.625 5.33c-1.06.353-2.475-1.061-2.121-2.122m.436-.435L5.655 5.057a7.75 7.75 0 0 0-2.039 3.601l-.11.442a.188.188 0 0 0 .228.227l.441-.11a7.75 7.75 0 0 0 3.6-2.039l2.286-2.284A1.5 1.5 0 1 0 7.94 2.773Z"
                    />
                    <path
                      stroke="#2980B9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M11.083 11.667H2.917"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    fill="none"
                    className="cursor-pointer"
                  >
                    <path
                      stroke="#2980B9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="m10.5 3.5-7 7M3.5 3.5l7 7"
                    />
                  </svg>
                </div>
                <div className="flex items-center rounded-full px-[15px] py-[10px] bg-blue-50">
                  <div className="mr-[10px] text-blue-700 text-[15px]">
                    Teknoloji
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    fill="none"
                    className="mr-[3px] cursor-pointer"
                  >
                    <path
                      stroke="#2980B9"
                      d="M9.625 5.33c-1.06.353-2.475-1.061-2.121-2.122m.436-.435L5.655 5.057a7.75 7.75 0 0 0-2.039 3.601l-.11.442a.188.188 0 0 0 .228.227l.441-.11a7.75 7.75 0 0 0 3.6-2.039l2.286-2.284A1.5 1.5 0 1 0 7.94 2.773Z"
                    />
                    <path
                      stroke="#2980B9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M11.083 11.667H2.917"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    fill="none"
                    className="cursor-pointer"
                  >
                    <path
                      stroke="#2980B9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="m10.5 3.5-7 7M3.5 3.5l7 7"
                    />
                  </svg>
                </div>
              </div>
            </TabPanel>
          </div>
          <div className="flex justify-between mb-[35px]">
            <div className="text-gray-900 text-[15px]">
              Özellik Alanları Belirleyin
            </div>
            <div className="flex gap-[5px] items-center text-black font-semibold text-[15px] cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                fill="none"
                className="mt-[-2px]"
              >
                <path
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M14.25 14.45V5.885c0-1.653-1.181-3.075-2.82-3.398a12.6 12.6 0 0 0-4.86 0c-1.639.323-2.82 1.745-2.82 3.398v8.567c0 1.002 1.1 1.626 1.976 1.12l2.39-1.384a1.768 1.768 0 0 1 1.768 0l2.39 1.383c.875.507 1.976-.117 1.976-1.12Z"
                />
              </svg>
              Şablon Olarak Kaydet
            </div>
          </div>
          <div className="flex items-center justify-center flex-wrap gap-[5px] mb-[80px]">
            <div className="flex items-center justify-center gap-[10px] rounded-full border-[1px] border-green-800 py-[8px] px-[18px]">
              <div className="text-black text-[15px] font-normal">2D Boyut</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                fill="none"
                className="cursor-pointer"
              >
                <path
                  stroke="#0C3F34"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="m10.5 3.5-7 7M3.5 3.5l7 7"
                />
              </svg>
            </div>
            <div className="flex items-center justify-center gap-[10px] rounded-full border-[1px] border-green-800 py-[8px] px-[18px]">
              <div className="text-black text-[15px] font-normal">Renk</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                fill="none"
                className="cursor-pointer"
              >
                <path
                  stroke="#0C3F34"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="m10.5 3.5-7 7M3.5 3.5l7 7"
                />
              </svg>
            </div>
            <div className="flex items-center justify-center gap-[10px] rounded-full border-[1px] border-green-800 py-[8px] px-[18px]">
              <div className="text-black text-[15px] font-normal">Beden</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                fill="none"
                className="cursor-pointer"
              >
                <path
                  stroke="#0C3F34"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="m10.5 3.5-7 7M3.5 3.5l7 7"
                />
              </svg>
            </div>
            <div className="flex items-center justify-center gap-[10px] rounded-full border-[1px] border-green-800 py-[8px] px-[18px]">
              <div className="text-black text-[15px] font-normal">Kalite</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                fill="none"
                className="cursor-pointer"
              >
                <path
                  stroke="#0C3F34"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="m10.5 3.5-7 7M3.5 3.5l7 7"
                />
              </svg>
            </div>
            <div className="flex items-center justify-center gap-[10px] rounded-full border-[1px] border-green-800 py-[8px] px-[18px]">
              <div className="text-black text-[15px] font-normal">2D Boyut</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                fill="none"
                className="cursor-pointer"
              >
                <path
                  stroke="#0C3F34"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="m10.5 3.5-7 7M3.5 3.5l7 7"
                />
              </svg>
            </div>
            <div className="flex items-center justify-center gap-[10px] rounded-full border-[1px] border-green-800 py-[8px] px-[18px]">
              <div className="text-black text-[15px] font-normal">Materyal</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                fill="none"
                className="cursor-pointer"
              >
                <path
                  stroke="#0C3F34"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="m10.5 3.5-7 7M3.5 3.5l7 7"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col px-[40px] py-[30px] border-[1px] border-gray-600 rounded-[20px] mx-[-30px]">
            <div className="flex w-[100%] relative mt-[-60px]">
              <input
                className="rounded-full h-[58px] px-[30px] text-black text-[15px] font-normal w-[100%] bg-gray-400 focus:outline-none"
                type="text"
                defaultValue="Boy"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                fill="none"
                className="absolute top-[50%] translate-y-[-50%] right-[30px]"
              >
                <path
                  fill="#242529"
                  d="M8.625 16.313c-4.237 0-7.688-3.45-7.688-7.688 0-4.237 3.45-7.688 7.688-7.688 4.238 0 7.688 3.45 7.688 7.688 0 4.238-3.45 7.688-7.688 7.688Zm0-14.25a6.57 6.57 0 0 0-6.563 6.562 6.57 6.57 0 0 0 6.563 6.563 6.57 6.57 0 0 0 6.563-6.563 6.57 6.57 0 0 0-6.563-6.563ZM16.5 17.063a.556.556 0 0 1-.397-.165l-1.5-1.5a.566.566 0 0 1 0-.795.566.566 0 0 1 .795 0l1.5 1.5a.566.566 0 0 1 0 .795.556.556 0 0 1-.398.165Z"
                />
              </svg>
            </div>
            <div className="text-gray-900 text-[15px] mt-[20px]">
              Bunu Mu Demek İstediniz?
            </div>
            <div className="flex flex-wrap gap-[5px] py-[20px]">
              <div className="flex items-center w-[100%] rounded-[10px] border-[1px] border-green-100 px-[25px] py-[10px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  fill="none"
                  className="min-w-[40px]"
                >
                  <path
                    stroke="#198870"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    strokeWidth={2}
                    d="m27.5 14.5-9.345 11-5.655-6.656"
                  />
                </svg>
                <div className="flex flex-col ml-[25px]">
                  <div className="text-blue-700 text-[12px] font-medium mb-[5px]">
                    3D Boyut
                  </div>
                  <div className="flex items-center gap-[5px] flex-wrap">
                    <div className="text-black text-[12px] font-normal rounded-full py-[6px] px-[15px] bg-gray-400">
                      En
                    </div>
                    <div className="text-black text-[12px] font-normal rounded-full py-[6px] px-[15px] bg-gray-400">
                      Boy
                    </div>
                    <div className="text-black text-[12px] font-normal rounded-full py-[6px] px-[15px] bg-gray-400">
                      Derinlik
                    </div>
                  </div>
                </div>
                <div className="flex gap-[5px] ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    fill="none"
                    className="mr-[3px] cursor-pointer"
                  >
                    <path
                      stroke="#2980B9"
                      d="M9.625 5.33c-1.06.353-2.475-1.061-2.121-2.122m.436-.435L5.655 5.057a7.75 7.75 0 0 0-2.039 3.601l-.11.442a.188.188 0 0 0 .228.227l.441-.11a7.75 7.75 0 0 0 3.6-2.039l2.286-2.284A1.5 1.5 0 1 0 7.94 2.773Z"
                    />
                    <path
                      stroke="#2980B9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M11.083 11.667H2.917"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    fill="none"
                    className="mr-[3px] cursor-pointer"
                  >
                    <path
                      stroke="#2980B9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="m10.5 3.5-7 7M3.5 3.5l7 7"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex items-center w-[100%] rounded-[10px] border-[1px] border-green-100 px-[25px] py-[10px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  fill="none"
                  className="min-w-[40px]"
                >
                  <path
                    stroke="#198870"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    strokeWidth={2}
                    d="m27.5 14.5-9.345 11-5.655-6.656"
                  />
                </svg>
                <div className="flex flex-col ml-[25px]">
                  <div className="text-blue-700 text-[12px] font-medium mb-[5px]">
                    Kumaş
                  </div>
                  <div className="flex items-center gap-[5px] flex-wrap">
                    <div className="text-black text-[12px] font-normal rounded-full py-[6px] px-[15px] bg-gray-400">
                      Kullanılan Kumaş
                    </div>
                    <div className="text-black text-[12px] font-normal rounded-full py-[6px] px-[15px] bg-gray-400">
                      Sentetik Oranı
                    </div>
                    <div className="text-black text-[12px] font-normal rounded-full py-[6px] px-[15px] bg-gray-400">
                      Pamuk Oranı
                    </div>
                  </div>
                </div>
                <div className="flex gap-[5px] ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    fill="none"
                    className="mr-[3px] cursor-pointer"
                  >
                    <path
                      stroke="#2980B9"
                      d="M9.625 5.33c-1.06.353-2.475-1.061-2.121-2.122m.436-.435L5.655 5.057a7.75 7.75 0 0 0-2.039 3.601l-.11.442a.188.188 0 0 0 .228.227l.441-.11a7.75 7.75 0 0 0 3.6-2.039l2.286-2.284A1.5 1.5 0 1 0 7.94 2.773Z"
                    />
                    <path
                      stroke="#2980B9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M11.083 11.667H2.917"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    fill="none"
                    className="mr-[3px] cursor-pointer"
                  >
                    <path
                      stroke="#2980B9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="m10.5 3.5-7 7M3.5 3.5l7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="text-gray-900 text-[15px] mb-[20px]">
              En Son Kullanılanlar
            </div>
            <div className="flex flex-wrap items-center gap-[5px]">
              <div className="flex items-center justify-center gap-[10px] rounded-full border-[1px] border-green-800 py-[8px] px-[18px]">
                <div className="text-black text-[15px] font-normal">
                  2D Boyut
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={14}
                  height={14}
                  fill="none"
                  className="cursor-pointer"
                >
                  <path
                    stroke="#0C3F34"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="m10.5 3.5-7 7M3.5 3.5l7 7"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-center gap-[10px] rounded-full border-[1px] border-green-800 py-[8px] px-[18px]">
                <div className="text-black text-[15px] font-normal">Renk</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={14}
                  height={14}
                  fill="none"
                  className="cursor-pointer"
                >
                  <path
                    stroke="#0C3F34"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="m10.5 3.5-7 7M3.5 3.5l7 7"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-center gap-[10px] rounded-full border-[1px] border-green-800 py-[8px] px-[18px]">
                <div className="text-black text-[15px] font-normal">Beden</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={14}
                  height={14}
                  fill="none"
                  className="cursor-pointer"
                >
                  <path
                    stroke="#0C3F34"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="m10.5 3.5-7 7M3.5 3.5l7 7"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-center gap-[10px] rounded-full border-[1px] border-green-800 py-[8px] px-[18px]">
                <div className="text-black text-[15px] font-normal">Kalite</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={14}
                  height={14}
                  fill="none"
                  className="cursor-pointer"
                >
                  <path
                    stroke="#0C3F34"
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
