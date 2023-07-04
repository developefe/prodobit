import React, { useRef, useState } from "react";

import {
  Button,
  FormControl,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Select,
} from "@mui/material";

import brandImgHolder from "@/assets/img/brand-image-holder.png";
import excel from "@/assets/img/excel.svg";

import AddProductSteps from "@/components/add-product-steps";
import Link from "next/link";

export default function Step2() {
  // For Brand Select
  var nike = "Nike";
  const [brand, setBrand] = useState(nike);

  const selectHandleChange = (event) => {
    setBrand(event.target.value);
  };

  const [addBrand, setAddBrand] = useState(false);

  const addBrandHandle = (event) => {
    setAddBrand(!addBrand);
  };

  // For Width Select
  const [selectGroup, setSelectGroup] = useState(1);

  const selectGroupHandleChange = (event) => {
    setSelectGroup(event.target.value);
  };

  const options = ["Nike", "Deneme 1", "Deneme 2", "Deneme 3"];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Drag n Drop File

  // rebder files

  const renderFiles = function (e) {
    return e.name;
  }

  // drag state
  const [dragActive, setDragActive] = React.useState(false);

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // at least one file has been dropped so do something
      var array = e.dataTransfer.files;
      Array.prototype.forEach.call(e.dataTransfer.files, function(file) { alert('Yüklenilen dosya adı: ' +file.name+ '   Boyut: '+ file.size+'mb') });
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // at least one file has been selected so do something
      // handleFiles(e.target.files);
    }
  };

  return (
    <div className="flex flex-col">
      <AddProductSteps />

      <div className="flex-1 overflow-y-auto overflow-x-hidden pt-[9vw] pb-[10vw] before:content-[''] before:fixed before:left-[460px] before:right-0 before:bottom-0 before:h-[200px] before:bg-gradient-to-t before:from-red-50 before:to-green-10/10">
        <span className="block text-[54px] font-medium text-green-600 text-center">
          Öğe Kimliği
        </span>

        <div
          className="bg-white flex flex-col rounded-[40px] py-[50px] px-[75px] max-w-[700px] mx-auto mt-[55px]"
          style={{ boxShadow: "0px 37px 44px -13px rgba(104, 48, 48, 0.1)" }}
        >
          <div className="flex items-center">
            <img className="mr-[25px]" src={brandImgHolder.src} alt="Nike" />

            <div className="flex flex-col ">
              <div className="text-gray-900 font-medium leading-normal text-sm mb-[20px]">
                Öğeniz İçin Marka Belirleyin
              </div>

              <div className="flex flex-wrap gap-[10px]">
                <div className="flex items-center justify-center border-[1px] border-green-600 rounded-full">
                  <List
                    className="step2-brand-select"
                    component="nav"
                    aria-label="Device settings"
                  >
                    <ListItem
                      button
                      id="lock-button"
                      aria-haspopup="listbox"
                      aria-controls="lock-menu"
                      aria-label=""
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClickListItem}
                    >
                      <ListItemText
                        primary=""
                        secondary={options[selectedIndex]}
                      />
                    </ListItem>
                  </List>
                  <Menu
                    id="lock-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    className="step2-brand-select"
                    MenuListProps={{
                      "aria-labelledby": "lock-button",
                      role: "listbox",
                    }}
                  >
                    {options.map((option, index) => (
                      <MenuItem
                        key={option}
                        disabled={index === 0}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>
                </div>

                <div className="relative">
                  <div
                    onClick={addBrandHandle}
                    className="flex items-center justify-center py-[10px] px-[30px] border-[1px] border-green-600 rounded-full cursor-pointer"
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
                        strokeWidth={1.5}
                        d="M12 5.5v14M5 12.5h14"
                      />
                    </svg>
                  </div>
                  {addBrand && (
                    <div className="flex flex-col gap-1 rounded-[20px] absolute z-[2] top-[115%] left-[50%] translate-x-[-50%]">
                      <div className="flex flex-col p-2 rounded-[20px] bg-white shadow-[0_20px_44px_5px_rgba(104,48,48,0.12)]">
                        <form
                          className="bg-gray-200 rounded-lg gap-2.5 inline-flex mb-[35px] relative"
                          onDragEnter={handleDrag}
                          onSubmit={(e) => e.preventDefault()}
                        >
                          <input
                            className="absolute opacity-0 invisible w-[100%] h-[1px] top-[70%]"
                            type="file"
                            id="input-file-upload"
                            multiple={true}
                            onChange={handleChange}
                          />
                          <label
                            id="label-file-upload"
                            htmlFor="input-file-upload"
                            className="w-[329px] h-[140px] p-5 pb-8 justify-center items-center gap-2.5 flex" >
                            <div className="w-[60px] h-[60px] relative">
                              <svg
                                width="60"
                                height="60"
                                viewBox="0 0 60 60"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="32.5"
                                  y="17.5"
                                  width="10"
                                  height="10"
                                  rx="4"
                                  stroke="#0C3F34"
                                  stroke-width="1.5"
                                />
                                <path
                                  d="M11.7952 43.0034L16.1425 38.6562C20.205 34.5937 26.7916 34.5937 30.8541 38.6562L35.2014 43.0034M35.2014 43.0034L36.9622 41.2425C40.2063 37.9984 45.5358 38.2402 48.4728 41.7647L49.5051 43.0034M35.2014 43.0034L41.7031 49.5051M8.38219 37.6239C7.20594 32.6094 7.20594 27.3906 8.38219 22.3761C10.0109 15.4325 15.4325 10.0109 22.3761 8.38219C27.3906 7.20594 32.6094 7.20594 37.6239 8.38219C44.5675 10.0109 49.9891 15.4325 51.6178 22.3761C52.7941 27.3906 52.7941 32.6094 51.6178 37.6239C49.9891 44.5675 44.5675 49.9891 37.6239 51.6178C32.6094 52.7941 27.3906 52.7941 22.3761 51.6178C15.4325 49.9891 10.0109 44.5675 8.38219 37.6239Z"
                                  stroke="#0C3F34"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </div>
                            <div className="text-black text-[22px] font-normal leading-relaxed">
                              Logo
                              <br />
                              Ekle
                            </div>
                            <div className="absolute bottom-1 left-[50%] translate-x-[-50%] text-gray-700 text-[10px]">Tıkla veya sürükle bırak</div>
                          </label>
                          {dragActive && (
                            <div
                              className="absolute w-[100%] h-[100%] rounded-[10px] top-0 left-0 right-0 bottom-0"
                              id="drag-file-element"
                              onDragEnter={handleDrag}
                              onDragLeave={handleDrag}
                              onDragOver={handleDrag}
                              onDrop={handleDrop}
                            ></div>
                          )}
                        </form>
                        <div className="text-stone-500 text-[15px] font-medium leading-tight mb-[25px] px-[25px]">
                          Marka Adı Belirle
                        </div>
                        <input
                          className="w-[100%] text-black text-[37px] font-normal leading-10 mb-[35px] px-[25px] outline-none"
                          type="text"
                          defaultValue={"BK23SR25"}
                        />
                        <div className="mx-[20px] h-[1px] border border-gray-400 mb-7"></div>
                        <FormControl fullWidth className="step-2-group-select">
                          <Select
                            defaultValue={selectGroup}
                            value={selectGroup}
                            onChange={selectGroupHandleChange}
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
                            <MenuItem value={1}>Ana Grup Belirle</MenuItem>
                            <MenuItem value={2}>Buraya Grup Gelecek</MenuItem>
                            <MenuItem value={3}>Buraya Grup Gelecek</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                      <div className="w-[100%] cursor-pointer px-2.5 py-[20px] mt-1 bg-green-600 rounded-2xl shadow flex-col justify-start items-center gap-5 inline-flex text-white text-[22px] font-normal leading-relaxed">
                        Kaydet
                      </div>
                    </div>
                  )}
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
                <div className="cursor-pointer flex items-center gap-[8px]">
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

                <div className="cursor-pointer flex items-center gap-[8px]">
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
              <img src={excel.src} alt="Excel" />

              <div className="flex flex-col">
                <div className="text-black font-bold text-[15px] flex items-center gap-[5px]">
                  Excel
                  <svg
                    width="14"
                    height="6"
                    viewBox="0 0 14 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      y1="-0.5"
                      x2="12.7279"
                      y2="-0.5"
                      transform="matrix(-0.965926 -0.258819 -0.258819 0.965926 13.104 5.14453)"
                      stroke="black"
                    />
                    <line
                      x1="0.680405"
                      y1="4.66157"
                      x2="12.9746"
                      y2="1.36734"
                      stroke="black"
                    />
                  </svg>
                  Csv
                </div>

                <div className="text-black font-normal text-[15px]">
                  Dosya İle Aktar
                </div>
              </div>
            </div>

            <div className="cursor-pointer">
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

      <div className="fixed bottom-[50px] left-[460px] right-0">
        <div className="flex items-center justify-center">
          <div
            className="bg-white/80 backdrop-blur-[5px] p-[15px] rounded-full flex items-center gap-[5px] shadow-2xl shadow-red-10/40"
            style={{ boxShadow: "0px 24px 54px -13px rgba(177, 109, 92, 0.3)" }}
          >
            <Link href={"/oge-ekle/step-1"}>
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
            </Link>

            <Link href={"/oge-ekle/step-3"}>
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
