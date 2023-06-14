import { useState, useEffect } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  FormControl,
  Select,
  MenuItem,
  Pagination,
  TableSortLabel,
} from "@mui/material";

// Resize
const useWidth = () => {
  const [width, setWidth] = useState(0);
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);
  return width;
};

export default function CustomerMessagesTable() {
  // Responsive for table col
  const [width, setWidth] = useState(false);
  const windowWidth = useWidth();

  useEffect(() => {
    if (1199 <= windowWidth) {
      setWidth(false);
    } else {
      setWidth(true);
    }
  }, []);

  // Filter
  const [filterEl, setFilterEl] = useState(null);
  const filterOpen = Boolean(filterEl);

  const filterMenuOpen = (event) => {
    setFilterEl(event.currentTarget);
  };

  const filterMenuClose = () => {
    setFilterEl(null);
  };

  //--

  const [tagFilter1, setTagFilter1] = useState(null);
  const openTagFilter1 = Boolean(tagFilter1);

  const tagFilterOpen1 = (event) => {
    setTagFilter1(event.currentTarget);
  };

  const tagFilterClose1 = () => {
    setTagFilter1(null);
  };

  // Table data
  const data = [
    {
      ogeTanimi: {
        img: "/table-product.png",
        text: "Ürün Adı Buraya Gelecek Ürün Adı Buraya Gelecek",
      },
      urunKodu: "B342309SC00",
      kategori: "Üst Giyim",
      statuler: {
        type: "warning",
        text: "Beklemede",
      },
      eklemeTarihi: "15 Mayıs / 20:30",
    },
    {
      ogeTanimi: {
        img: "/table-product.png",
        text: "Ürün Adı Buraya Gelecek Ürün Adı Buraya Gelecek",
      },
      urunKodu: "B342309SC00",
      kategori: "Üst Giyim",
      statuler: {
        type: "success",
        text: "İşlemde",
      },
      eklemeTarihi: "15 Mayıs / 20:30",
    },
    {
      ogeTanimi: {
        img: "/table-product.png",
        text: "Ürün Adı Buraya Gelecek Ürün Adı Buraya Gelecek",
      },
      urunKodu: "B342309SC00",
      kategori: "Üst Giyim",
      statuler: {
        type: "danger",
        text: "Takıldı",
      },
      eklemeTarihi: "15 Mayıs / 20:30",
    },
    {
      ogeTanimi: {
        img: "/table-product.png",
        text: "Ürün Adı Buraya Gelecek Ürün Adı Buraya Gelecek",
      },
      urunKodu: "B342309SC00",
      kategori: "Üst Giyim",
      statuler: {
        type: "info",
        text: "İnceleniyor",
      },
      eklemeTarihi: "15 Mayıs / 20:30",
    },
  ];

  // Table head
  const headCells = [
    {
      id: "ogeTanimi",
      label: "Öğe Tanımı",
      width: 200,
    },
    {
      id: "urunKodu",
      label: "Ürün Kodu",
      width: 130,
    },
    {
      id: "kategori",
      label: "Kategori",
      width: 130,
      count: 5,
    },
    {
      id: "statuler",
      label: "Statüler",
      width: 150,
    },
    {
      id: "eklemeTarihi",
      label: "Ekleme Tarihi",
      width: 130,
    },
    {
      id: "islemler",
      label: "İşlemler",
      width: 200,
    },
  ];

  // Table events
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === "desc" ? "asc" : "desc");
    } else {
      setSortColumn(column);
      setSortOrder("desc");
    }
  };

  const sortedData = data.sort((a, b) => {
    if (sortColumn) {
      const valueA = a[sortColumn];
      const valueB = b[sortColumn];
      if (valueA < valueB) {
        return sortOrder === "asc" ? -1 : 1;
      }
      if (valueA > valueB) {
        return sortOrder === "asc" ? 1 : -1;
      }
    }
    return 0;
  });

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const displayedData = sortedData.slice(startIndex, endIndex);

  return (
    <div>
      <TableContainer className="mt-4 shadow-none bg-transparent">
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {headCells.map((headCell, index) => (
                <TableCell
                  key={index}
                  className="pl-0"
                  style={{ minWidth: headCell.width, width: headCell.width }}
                >
                  {index === 0 ? (
                    <TableSortLabel
                      active={true}
                      direction={sortColumn === headCell.id ? sortOrder : "asc"}
                      onClick={() => handleSort(headCell.id)}
                      IconComponent={() => (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          fill="none"
                          className="opacity-50"
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
                      <span className="text-[12px] font-bold text-black/50">
                        {headCell.label}
                      </span>
                    </TableSortLabel>
                  ) : (
                    <span className="text-[12px] font-bold text-black/50 flex items-center">
                      {headCell.label}
                      {headCell.count && (
                        <span className="inline-flex items-center justify-center ml-[5px] min-w-[15px] h-[15px] rounded-full bg-black/50 text-[12px] text-white">
                          {headCell.count}
                        </span>
                      )}
                    </span>
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {displayedData.map((row, index) => (
              <TableRow key={index}>
                <TableCell className="pl-0">
                  <span className="flex items-center overflow-hidden">
                    <img
                      src={row.ogeTanimi.img}
                      alt={row.ogeTanimi.text}
                      className="rounded-full w-[42px] mr-[18px]"
                    />
                    <span className="text-[15px] text-black font-medium truncate w-[70%]">
                      {row.ogeTanimi.text}
                    </span>
                  </span>
                </TableCell>
                <TableCell className="text-[15px] text-black font-medium">
                  {row.urunKodu}
                </TableCell>
                <TableCell className="text-[15px] text-black font-medium">
                  {row.kategori}
                </TableCell>
                <TableCell>
                  {row.statuler.type === "warning" && (
                    <span className="text-yellow-700 bg-yellow-100 rounded-[10px] text-[15px] font-medium py-[12px] px-[20px] inline-flex items-center justify-center gap-[10px] w-[100%]">
                      {row.statuler.text}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={10}
                        height={7}
                        fill="none"
                      >
                        <path
                          stroke="#B58D21"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit={10}
                          strokeWidth={1.5}
                          d="m9.127 1.726-3.26 3.26a.993.993 0 0 1-1.4 0l-3.26-3.26"
                        />
                      </svg>
                    </span>
                  )}
                  {row.statuler.type === "success" && (
                    <span className="text-green-500 bg-green-100 rounded-[10px] text-[15px] font-medium py-[12px] px-[20px] inline-flex items-center justify-center gap-[10px] w-[100%]">
                      {row.statuler.text}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={10}
                        height={7}
                        fill="none"
                      >
                        <path
                          stroke="#1C957B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit={10}
                          strokeWidth={1.5}
                          d="m9.127 1.726-3.26 3.26a.993.993 0 0 1-1.4 0l-3.26-3.26"
                        />
                      </svg>
                    </span>
                  )}
                  {row.statuler.type === "danger" && (
                    <span className="text-red-500 bg-red-100 rounded-[10px] text-[15px] font-medium py-[12px] px-[20px] inline-flex items-center justify-center gap-[10px] w-[100%]">
                      {row.statuler.text}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={10}
                        height={7}
                        fill="none"
                      >
                        <path
                          stroke="#F34A53"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit={10}
                          strokeWidth={1.5}
                          d="m9.127 1.726-3.26 3.26a.993.993 0 0 1-1.4 0l-3.26-3.26"
                        />
                      </svg>
                    </span>
                  )}
                  {row.statuler.type === "info" && (
                    <span className="text-blue-500 bg-blue-100 rounded-[10px] text-[15px] font-medium py-[12px] px-[20px] inline-flex items-center justify-center gap-[10px] w-[100%]">
                      {row.statuler.text}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={10}
                        height={7}
                        fill="none"
                      >
                        <path
                          stroke="#5499C7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit={10}
                          strokeWidth={1.5}
                          d="m9.127 1.726-3.26 3.26a.993.993 0 0 1-1.4 0l-3.26-3.26"
                        />
                      </svg>
                    </span>
                  )}
                </TableCell>
                <TableCell className="text-[15px] text-black font-medium whitespace-nowrap">
                  {row.eklemeTarihi}
                </TableCell>
                <TableCell>
                  <span className="flex items-center">
                    <span className="inline-block cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={25}
                        fill="none"
                      >
                        <path
                          stroke="#000"
                          strokeWidth={1.5}
                          d="M20.445 7.389c-1.667.555-3.89-1.667-3.334-3.333m-.134.134-3.59 3.59a12.18 12.18 0 0 0-3.204 5.659l-.174.694a.295.295 0 0 0 .358.358l.694-.174a12.18 12.18 0 0 0 5.658-3.203l3.59-3.59a2.357 2.357 0 1 0-3.332-3.334Z"
                        />
                        <path
                          stroke="#000"
                          strokeLinecap="round"
                          strokeWidth={1.5}
                          d="M12 3.5c-1.023 0-2.047.118-3.05.353A7.511 7.511 0 0 0 3.353 9.45a13.354 13.354 0 0 0 0 6.1 7.511 7.511 0 0 0 5.597 5.597c2.006.47 4.094.47 6.1 0a7.511 7.511 0 0 0 5.597-5.597c.235-1.003.353-2.027.353-3.05"
                        />
                      </svg>
                    </span>

                    <span className="inline-block cursor-pointer ml-[14px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={25}
                        fill="none"
                      >
                        <path
                          stroke="#000"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M21 4.5H8l-7 8 7 8h13a2 2 0 0 0 2-2v-12a2 2 0 0 0-2-2ZM18 9.5l-6 6"
                        />
                        <path
                          stroke="#292D32"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="m12 9.5 6 6"
                        />
                      </svg>
                    </span>

                    <span className="inline-block cursor-pointer text-[15px] font-medium text-black border border-gray-700 rounded-[10px] py-[10px] px-[17px] ml-[30px]">
                      Görüntüle
                    </span>
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* <div className="max-sm:flex-col max-sm:gap-6 flex items-center justify-between mt-6">
        <div className="flex items-center">
          <span className="text-{14px} text-[#273142] mr-2">Show</span>
          <FormControl className="select-item">
            <Select value={rowsPerPage} onChange={handleChangeRowsPerPage}>
              <MenuItem value={10}>10 Messages</MenuItem>
              <MenuItem value={50}>50 Messages</MenuItem>
              <MenuItem value={100}>100 Messages</MenuItem>
              <MenuItem value={150}>150 Messages</MenuItem>
            </Select>
          </FormControl>
        </div>

        <Pagination
          count={Math.ceil(data.length / rowsPerPage)}
          page={page + 1}
          onChange={(event, newPage) => handleChangePage(event, newPage - 1)}
        />

        <span className="text-[14px] text-gray">{`Showing ${displayedData.length} - ${rowsPerPage} of ${data.length} results`}</span>
      </div> */}
    </div>
  );
}
