import React, { useState } from "react";
import Link from "next/link";

import PropTypes from "prop-types";
import { Tabs, Tab, Box, FormControl, MenuItem, Select } from "@mui/material";

import pageBanner from "@/assets/img/page-banner.png";

import TableList from "@/components/table-list";
import Header from "@/layouts/header";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Home() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // For table select
  const [age, setAge] = useState(10);

  const selectHandleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Header />

      <div className="h-[380px] relative flex items-end px-[100px]">
        <div
          className="absolute top-0 bottom-0 left-[-80px] right-0 -z-[1]"
          style={{
            backgroundImage: "url(" + pageBanner.src + ")",
            backgroundSize: "cover",
            backgroundPosition: "bottom left",
          }}
        ></div>

        <div className="flex items-center pb-[85px]">
          <div className="relative cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="none"
              className="absolute top-[10px] right-[-20px]"
            >
              <path
                stroke="#363853"
                strokeWidth={1.5}
                d="M13.63 4.592c-1.111.37-2.593-1.11-2.222-2.222m-.09.09L8.924 4.854a8.12 8.12 0 0 0-2.136 3.772l-.115.463a.197.197 0 0 0 .238.238l.463-.115a8.12 8.12 0 0 0 3.772-2.136l2.394-2.394a1.571 1.571 0 1 0-2.222-2.222Z"
              />
              <path
                stroke="#363853"
                strokeLinecap="round"
                strokeWidth={1.5}
                d="M8 2c-.682 0-1.364.078-2.033.235a5.008 5.008 0 0 0-3.732 3.732 8.902 8.902 0 0 0 0 4.066 5.008 5.008 0 0 0 3.732 3.732 8.904 8.904 0 0 0 4.066 0 5.008 5.008 0 0 0 3.732-3.732C13.922 9.364 14 8.683 14 8"
              />
            </svg>

            <span className="text-[64px] text-black font-light">Öğeler</span>
          </div>

          <div className="flex items-center border-l border-gray-1000/20 pl-[25px] ml-[50px] gap-[10px]">
            <button
              type="button"
              className="border border-green-600 bg-green-600 rounded-full py-[20px] px-[30px] inline-flex items-center gap-[20px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={25}
                fill="none"
              >
                <path
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5.5v14M5 12.5h14"
                />
              </svg>
              <span className="text-white text-[22px] font-light">
                Öğe Ekle
              </span>
            </button>

            <button
              type="button"
              className="border border-green-600 rounded-full py-[20px] px-[30px] inline-flex items-center gap-[20px]"
            >
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
                  strokeWidth={2}
                  d="M12 5.5v14M5 12.5h14"
                />
              </svg>
              <span className="text-green-900 text-[22px] font-light">
                Kategori Ekle
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-[10px] px-[100px] translate-y-[-50%] w-[100%] overflow-hidden">
        <div className="flex-1 overflow-hidden">
          <div className="overflow-auto flex items-center gap-[10px] whitespace-nowrap">
            {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
              <Link
                href={"#"}
                key={index}
                className="inline-block text-[15px] text-gray-1100 bg-white rounded-full py-[18px] px-[40px] min-h-[60px]"
              >
                <span>Üst Giyim</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="cursor-pointer bg-green-900 rounded-full py-[18px] px-[40px] min-h-[60px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={25}
            fill="none"
          >
            <path
              stroke="#FFD973"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5.5v14M5 12.5h14"
            />
          </svg>
        </div>
      </div>

      <div className="px-[100px] pb-[100px]">
        <div className="flex items-center">
          <span className="text-[30px] text-black font-light mr-[30px]">
            Öğe Listesi
          </span>

          <div className="flex-1 overflow-hidden mb-[10px]">
            <Tabs value={value} onChange={handleChange}>
              <Tab label="Tümü" {...a11yProps(0)} />
              <Tab label="Filtre Adı" {...a11yProps(1)} />
              <Tab label="Filtre Adı" {...a11yProps(2)} />
            </Tabs>
          </div>
        </div>

        <div className="mt-[10px]">
          <TabPanel value={value} index={0} className="table-container">
            <TableList />
          </TabPanel>

          <TabPanel value={value} index={1} className="table-container">
            Item Two
          </TabPanel>

          <TabPanel value={value} index={2} className="table-container">
            Item Three
          </TabPanel>
        </div>
      </div>

      <div className="fixed bottom-[50px] left-[460px] right-0">
        <div className="flex items-center justify-center">
          <div
            className="bg-white/80 backdrop-blur-[5px] rounded-[15px] p-[5px]"
            style={{ boxShadow: "0px 24px 54px -13px rgba(177, 109, 92, 0.3)" }}
          >
            <div className="bg-gray-300 rounded-[10px] py-[12px] px-[20px] flex items-center">
              <div className="flex items-center gap-[14px]">
                <div className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10}
                    height={10}
                    fill="none"
                  >
                    <path
                      stroke="#242529"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit={10}
                      d="M9.293 9.46 6.033 6.2a.993.993 0 0 1 0-1.4l3.26-3.26"
                    />
                    <path
                      stroke="#242529"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit={10}
                      d="M5.744 9.46 2.484 6.2a.993.993 0 0 1 0-1.4l3.26-3.26M.684 1.489l-.173 8"
                    />
                  </svg>
                </div>

                <div className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={6}
                    height={9}
                    fill="none"
                  >
                    <path
                      stroke="#242529"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit={10}
                      d="M4.838 8.46 1.578 5.2a.993.993 0 0 1 0-1.4L4.838.54"
                    />
                  </svg>
                </div>

                <input
                  type="number"
                  defaultValue={"01"}
                  className="w-[34px] h-[30px] bg-transparent border border-black/20 py-[5px] px-[8px] font-bold text-[15px] text-gray-1100 text-center rounded-full"
                />

                <div className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={13}
                    height={13}
                    fill="none"
                  >
                    <path
                      stroke="#242529"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit={10}
                      d="m4.748 10.46 3.26-3.26a.993.993 0 0 0 0-1.4l-3.26-3.26"
                    />
                  </svg>
                </div>

                <div className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={11}
                    height={10}
                    fill="none"
                  >
                    <path
                      stroke="#242529"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit={10}
                      d="m1.293 9.46 3.26-3.26a.993.993 0 0 0 0-1.4l-3.26-3.26"
                    />
                    <path
                      stroke="#242529"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit={10}
                      d="m4.841 9.46 3.26-3.26a.993.993 0 0 0 0-1.4l-3.26-3.26M9.901 1.489l.173 8"
                    />
                  </svg>
                </div>
              </div>

              <div className="border-l border-black/20 pl-[12px] ml-[24px]">
                <span className="block text-[12px] font-light text-gray-1100/50">
                  Gösterim
                </span>

                <FormControl fullWidth>
                  <Select
                    className="text-[15px] font-medium text-gray-1100"
                    defaultValue={age}
                    value={age}
                    onChange={selectHandleChange}
                    IconComponent={() => (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        fill="none"
                        className="ml-[-15px]"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
