import React from 'react'

export default function AddProductSteps() {
  return (
    <div className="flex items-center  border-b border-gray-700 fixed z-10 top-0 right-0 left-[460px] backdrop-blur-xl">
    <div className="flex-1 flex items-center justify-between py-[30px] px-[40px]">
      <div className="mr-1">
        <span className="block text-[12px] font-bold text-green-600">
          Tamamlandı
        </span>
        <span className="block text-[15px] text-gray-1100">
          1. Varyasyon Seçimi
        </span>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={24}
        fill="none"
      >
        <path
          stroke="#198870"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={2}
          d="m20 6.5-9.345 11L5 10.844"
        />
      </svg>
    </div>

    <div className="flex-1 flex items-center justify-between py-[30px] px-[40px] border-l border-gray-700">
      <div className="mr-1">
        <span className="block text-[12px] font-bold text-green-600">
          Tamamlandı
        </span>
        <span className="block text-[15px] text-gray-1100">
          2. Öğe Kimliği Belirleme
        </span>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={24}
        fill="none"
      >
        <path
          stroke="#198870"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={2}
          d="m20 6.5-9.345 11L5 10.844"
        />
      </svg>
    </div>

    <div className="flex-1 flex items-center justify-between py-[30px] px-[40px] border-l border-gray-700">
      <div className="mr-1">
        <div className="flex">
          <span className="text-[12px] font-bold text-gray-800 mr-[10px]">
            İşleniyor
          </span>

          <div className="flex items-center gap-[3px]">
            <div className="cursor-pointer min-w-[8px] h-[8px] bg-gray-1100 border border-gray-1100 rounded-full"></div>
            <div className="cursor-pointer min-w-[8px] h-[8px] bg-gray-1100 border border-gray-1100 rounded-full"></div>
            <div className="cursor-pointer min-w-[8px] h-[8px] bg-green-600 border border-green-600 rounded-full"></div>
            <div className="cursor-pointer min-w-[8px] h-[8px] border border-gray-700 rounded-full"></div>
            <div className="cursor-pointer min-w-[8px] h-[8px] border border-gray-700 rounded-full"></div>
          </div>
        </div>
        <span className="block text-[15px] text-gray-1100">1. Öğe İsmi</span>
      </div>
    </div>

    <div className="flex-1 flex items-center justify-between py-[30px] px-[40px] border-l border-gray-700">
      <div className="mr-1">
        <span className="block text-[12px] font-bold text-orange-400">
          Beklemede
        </span>
        <span className="block text-[15px] text-gray-1100">1. Öğe İsmi</span>
      </div>
    </div>
  </div>
  
  )
}
