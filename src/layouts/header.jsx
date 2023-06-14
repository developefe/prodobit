import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="pt-[70px] px-[100px] flex items-center absolute top-0 left-0 right-0 z-[1]">
      <div className="flex items-center gap-[20px]">
        <Link href={"#"} className="text-[25px] text-gray-800">
          Öğeler
        </Link>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            d="M8.28099 3.24399C8.59652 3.41601 8.85987 3.66987 9.04336 3.97888C9.22684 4.28788 9.32367 4.64062 9.32367 4.99999C9.32367 5.35937 9.22684 5.7121 9.04336 6.02111C8.85987 6.33011 8.59652 6.58397 8.28099 6.75599L3.45799 9.38699C3.15337 9.55322 2.81074 9.63732 2.46377 9.63103C2.11681 9.62475 1.77745 9.5283 1.47905 9.35115C1.18064 9.17401 0.93347 8.92227 0.761813 8.62068C0.590157 8.31908 0.499927 7.97801 0.49999 7.63099V2.36899C0.499927 2.02197 0.590157 1.6809 0.761813 1.37931C0.93347 1.07772 1.18064 0.825978 1.47905 0.648833C1.77745 0.471688 2.11681 0.375234 2.46377 0.36895C2.81074 0.362666 3.15337 0.446769 3.45799 0.612992L8.28099 3.24399Z"
            fill="#101324"
          />
        </svg>
        <Link href={"#"} className="text-[25px] text-gray-800">
          Öğe Listesi
        </Link>
      </div>

      <div className="flex-1 h-[1px] bg-black/10 mx-[20px]"></div>

      <span className="text-[20px] text-gray-1000">
        <span className="font-bold">2500</span> Öğe Bulundu
      </span>

      <div className="flex-1 h-[1px] bg-black/10 mx-[20px]"></div>

      <div className="flex items-center gap-[18px]">
        <div className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            height={24}
            fill="none"
          >
            <path
              fill="#242529"
              d="M11.692 21.75c-5.65 0-10.25-4.6-10.25-10.25s4.6-10.25 10.25-10.25 10.25 4.6 10.25 10.25-4.6 10.25-10.25 10.25Zm0-19c-4.83 0-8.75 3.93-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.93 8.75-8.75-3.92-8.75-8.75-8.75ZM22.192 22.75c-.19 0-.38-.07-.53-.22l-2-2a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z"
            />
          </svg>
        </div>

        <div className="cursor-pointer">
          <svg
            width="30"
            height="28"
            viewBox="0 0 30 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.82403 17.7899L5.55375 17.6167L4.82403 17.7899ZM4.82403 10.9121L5.55375 11.0853L4.82403 10.9121ZM24.5603 10.9121L23.8306 11.0853L24.5603 10.9121ZM24.5603 17.7899L23.8306 17.6167L24.5603 17.7899ZM18.1723 24.1021L18.3417 24.8327L18.1723 24.1021ZM11.212 24.1021L11.3813 23.3714L11.212 24.1021ZM11.212 4.59993L11.3813 5.33056L11.212 4.59993ZM18.1723 4.59993L18.3417 3.8693L18.1723 4.59993ZM10.6935 3.5C10.6935 3.08579 10.3577 2.75 9.94351 2.75C9.52929 2.75 9.19351 3.08579 9.19351 3.5H10.6935ZM9.19351 6.4327C9.19351 6.84692 9.52929 7.1827 9.94351 7.1827C10.3577 7.1827 10.6935 6.84692 10.6935 6.4327H9.19351ZM20.1908 3.5C20.1908 3.08579 19.855 2.75 19.4408 2.75C19.0266 2.75 18.6908 3.08579 18.6908 3.5H20.1908ZM18.6908 6.4327C18.6908 6.84692 19.0266 7.1827 19.4408 7.1827C19.855 7.1827 20.1908 6.84692 20.1908 6.4327H18.6908ZM5.55375 17.6167C5.04385 15.4687 5.04385 13.2333 5.55375 11.0853L4.09431 10.7389C3.53033 13.1147 3.53033 15.5873 4.09431 17.9631L5.55375 17.6167ZM23.8306 11.0853C24.3405 13.2333 24.3405 15.4687 23.8306 17.6167L25.29 17.9631C25.854 15.5873 25.854 13.1147 25.29 10.7389L23.8306 11.0853ZM18.003 23.3714C15.8254 23.8762 13.559 23.8762 11.3813 23.3714L11.0426 24.8327C13.4431 25.3891 15.9412 25.3891 18.3417 24.8327L18.003 23.3714ZM11.3813 5.33056C13.559 4.82581 15.8254 4.82581 18.003 5.33056L18.3417 3.8693C15.9412 3.3129 13.4431 3.3129 11.0426 3.8693L11.3813 5.33056ZM11.3813 23.3714C8.4854 22.7002 6.23056 20.4678 5.55375 17.6167L4.09431 17.9631C4.90449 21.3761 7.59935 24.0346 11.0426 24.8327L11.3813 23.3714ZM18.3417 24.8327C21.785 24.0346 24.4798 21.3761 25.29 17.9631L23.8306 17.6167C23.1538 20.4678 20.8989 22.7002 18.003 23.3714L18.3417 24.8327ZM18.003 5.33056C20.8989 6.00179 23.1538 8.23424 23.8306 11.0853L25.29 10.7389C24.4798 7.32595 21.785 4.6674 18.3417 3.8693L18.003 5.33056ZM11.0426 3.8693C7.59935 4.6674 4.90449 7.32595 4.09431 10.7389L5.55375 11.0853C6.23056 8.23424 8.4854 6.00179 11.3813 5.33056L11.0426 3.8693ZM5.19485 10.4087H24.1895V8.90868H5.19485V10.4087ZM9.19351 3.5V6.4327H10.6935V3.5H9.19351ZM18.6908 3.5V6.4327H20.1908V3.5H18.6908Z"
              fill="#363853"
            />
            <path
              d="M16.4345 16.2447C16.9239 15.9087 17.2284 15.4047 17.2284 14.7222C17.2284 13.3047 16.0974 12.5697 14.7598 12.5697C13.4222 12.5697 12.2803 13.3047 12.2803 14.7222C12.2803 15.4047 12.5957 15.9087 13.0742 16.2447C12.4108 16.6332 12.0302 17.2737 12.0302 18.0192C12.0302 19.3737 13.0633 20.2137 14.7598 20.2137C16.4454 20.2137 17.4894 19.3737 17.4894 18.0192C17.4894 17.2737 17.1088 16.6332 16.4345 16.2447ZM14.7598 13.9347C15.3253 13.9347 15.7385 14.2497 15.7385 14.7957C15.7385 15.3312 15.3253 15.6672 14.7598 15.6672C14.1943 15.6672 13.781 15.3312 13.781 14.7957C13.781 14.2497 14.1943 13.9347 14.7598 13.9347ZM14.7598 18.8487C14.042 18.8487 13.52 18.4917 13.52 17.8302C13.52 17.1792 14.042 16.8222 14.7598 16.8222C15.4775 16.8222 15.9995 17.1792 15.9995 17.8302C15.9995 18.4917 15.4775 18.8487 14.7598 18.8487Z"
              fill="#363853"
            />
          </svg>
        </div>

        <div className="cursor-pointer">
          <svg
            width="23"
            height="24"
            viewBox="0 0 23 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.8624 14.9316C19.6395 16.6201 18.9609 18.2159 17.8994 19.5478C16.8379 20.8797 15.4337 21.8973 13.8375 22.4913C12.2413 23.0853 10.5135 23.2333 8.83956 22.9194C7.16562 22.6055 5.6088 21.8416 4.33628 20.7096C3.06377 19.5776 2.12364 18.1204 1.61684 16.4945C1.11005 14.8685 1.05573 13.1352 1.45973 11.4807C1.86374 9.82614 2.71079 8.31293 3.90994 7.10351C5.10908 5.8941 6.61502 5.03417 8.26603 4.61608L8.34447 4.92584C6.74973 5.32968 5.29512 6.1603 4.13684 7.32849C2.97857 8.49669 2.16038 9.95833 1.77015 11.5565C1.37991 13.1546 1.43238 14.8288 1.9219 16.3994C2.41142 17.9699 3.31952 19.3775 4.54866 20.4709C5.7778 21.5642 7.28156 22.3022 8.89846 22.6054C10.5154 22.9086 12.1843 22.7656 13.7261 22.1918C15.2679 21.6181 16.6242 20.6352 17.6495 19.3487C18.6748 18.0622 19.3303 16.5207 19.5456 14.8898L19.8624 14.9316Z"
              stroke="black"
              strokeLinejoin="round"
            />
            <circle cx="16.5337" cy="6.88613" r="5.96618" fill="#F34A53" />
          </svg>
        </div>
      </div>
    </header>
  );
}
