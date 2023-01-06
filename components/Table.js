import React from 'react';

const Table = () => {
  return (
    <>
      <div className="flex items-center justify-center py-8">
        <div className="max-w-3xl rounded shadow overflow-x-auto">
          <table className="w-full">
            <thead className="dark:bg-gray-900 bg-gray-100">
              <tr>
                <td className="text-xs font-semibold text-gray-800 dark:text-gray-100 uppercase sm:py-8 py-4 sm:pl-6 pl-4">
                  <div className="flex items-center">
                    Company
                    <div className="pl-24 relative cursor-pointer">
                      <svg
                        onClick={() => setShow1(!show1)}
                        className="text-gray-300"
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={25}
                        viewBox="0 0 14 25"
                        fill="none"
                      >
                        <path
                          d="M10.9083 9.15817C10.7916 9.27484 10.675 9.33317 10.5 9.33317C10.325 9.33317 10.2083 9.27484 10.0916 9.15817L6.99996 6.0665L3.90829 9.15817C3.67496 9.3915 3.32496 9.3915 3.09163 9.15817C2.85829 8.92484 2.85829 8.57484 3.09163 8.3415L6.59163 4.8415C6.82496 4.60817 7.17496 4.60817 7.40829 4.8415L10.9083 8.3415C11.1416 8.57484 11.1416 8.92484 10.9083 9.15817Z"
                          fill="currentColor"
                        />
                        <path
                          d="M10.9083 16.6582L7.40829 20.1582C7.29163 20.2748 7.17496 20.3332 6.99996 20.3332C6.82496 20.3332 6.70829 20.2748 6.59163 20.1582L3.09163 16.6582C2.85829 16.4248 2.85829 16.0748 3.09163 15.8415C3.32496 15.6082 3.67496 15.6082 3.90829 15.8415L6.99996 18.9332L10.0916 15.8415C10.325 15.6082 10.675 15.6082 10.9083 15.8415C11.1416 16.0748 11.1416 16.4248 10.9083 16.6582Z"
                          fill="currentColor"
                        />
                      </svg>
                      {show1 && (
                        <ul className=" mt-1 absolute -ml-12 bg-white rounded shadow ">
                          <li className="text-xs text-gray-800 dark:text-gray-100 hover:text-white hover:bg-indigo-700 py-2 px-4">
                            edit
                          </li>
                          <li className="text-xs text-gray-800 dark:text-gray-100 hover:text-white hover:bg-indigo-700 py-2 px-4">
                            add
                          </li>
                          <li className="text-xs text-gray-800 dark:text-gray-100 hover:text-white hover:bg-indigo-700 py-2 px-4">
                            Select
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                </td>
                <td className="text-xs font-semibold text-gray-800 dark:text-gray-100 pl-6 uppercase">
                  <div className="flex items-center">
                    Category
                    <div className="pl-16 relative cursor-pointer">
                      <svg
                        onClick={() => setShow2(!show2)}
                        className="text-gray-300"
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={25}
                        viewBox="0 0 14 25"
                        fill="none"
                      >
                        <path
                          d="M10.9083 9.15817C10.7916 9.27484 10.675 9.33317 10.5 9.33317C10.325 9.33317 10.2083 9.27484 10.0916 9.15817L6.99996 6.0665L3.90829 9.15817C3.67496 9.3915 3.32496 9.3915 3.09163 9.15817C2.85829 8.92484 2.85829 8.57484 3.09163 8.3415L6.59163 4.8415C6.82496 4.60817 7.17496 4.60817 7.40829 4.8415L10.9083 8.3415C11.1416 8.57484 11.1416 8.92484 10.9083 9.15817Z"
                          fill="currentColor"
                        />
                        <path
                          d="M10.9083 16.6582L7.40829 20.1582C7.29163 20.2748 7.17496 20.3332 6.99996 20.3332C6.82496 20.3332 6.70829 20.2748 6.59163 20.1582L3.09163 16.6582C2.85829 16.4248 2.85829 16.0748 3.09163 15.8415C3.32496 15.6082 3.67496 15.6082 3.90829 15.8415L6.99996 18.9332L10.0916 15.8415C10.325 15.6082 10.675 15.6082 10.9083 15.8415C11.1416 16.0748 11.1416 16.4248 10.9083 16.6582Z"
                          fill="currentColor"
                        />
                      </svg>
                      {show2 && (
                        <ul className=" mt-1 absolute -ml-12 bg-white rounded shadow ">
                          <li className="text-xs text-gray-800 dark:text-gray-100 hover:text-white hover:bg-indigo-700 py-2 px-4">
                            edit
                          </li>
                          <li className="text-xs text-gray-800 dark:text-gray-100 hover:text-white hover:bg-indigo-700 py-2 px-4">
                            add
                          </li>
                          <li className="text-xs text-gray-800 dark:text-gray-100 hover:text-white hover:bg-indigo-700 py-2 px-4">
                            Select
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                </td>
                <td className="text-xs font-semibold text-gray-800 dark:text-gray-100 pl-6 uppercase">
                  <div className="flex items-center">
                    View
                    <div className="pl-10 relative cursor-pointer">
                      <svg
                        onClick={() => setShow3(!show3)}
                        className="text-gray-300"
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={25}
                        viewBox="0 0 14 25"
                        fill="none"
                      >
                        <path
                          d="M10.9083 9.15817C10.7916 9.27484 10.675 9.33317 10.5 9.33317C10.325 9.33317 10.2083 9.27484 10.0916 9.15817L6.99996 6.0665L3.90829 9.15817C3.67496 9.3915 3.32496 9.3915 3.09163 9.15817C2.85829 8.92484 2.85829 8.57484 3.09163 8.3415L6.59163 4.8415C6.82496 4.60817 7.17496 4.60817 7.40829 4.8415L10.9083 8.3415C11.1416 8.57484 11.1416 8.92484 10.9083 9.15817Z"
                          fill="currentColor"
                        />
                        <path
                          d="M10.9083 16.6582L7.40829 20.1582C7.29163 20.2748 7.17496 20.3332 6.99996 20.3332C6.82496 20.3332 6.70829 20.2748 6.59163 20.1582L3.09163 16.6582C2.85829 16.4248 2.85829 16.0748 3.09163 15.8415C3.32496 15.6082 3.67496 15.6082 3.90829 15.8415L6.99996 18.9332L10.0916 15.8415C10.325 15.6082 10.675 15.6082 10.9083 15.8415C11.1416 16.0748 11.1416 16.4248 10.9083 16.6582Z"
                          fill="currentColor"
                        />
                      </svg>
                      {show3 && (
                        <ul className=" mt-1 absolute -ml-12 bg-white rounded shadow ">
                          <li className="text-xs text-gray-800 dark:text-gray-100 hover:text-white hover:bg-indigo-700 py-2 px-4">
                            edit
                          </li>
                          <li className="text-xs text-gray-800 dark:text-gray-100 hover:text-white hover:bg-indigo-700 py-2 px-4">
                            add
                          </li>
                          <li className="text-xs text-gray-800 dark:text-gray-100 hover:text-white hover:bg-indigo-700 py-2 px-4">
                            Select
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                </td>
                <td className="text-xs font-semibold text-gray-800 dark:text-gray-100 pl-6 uppercase">
                  <div className="flex items-center">
                    Revenue
                    <div className="pl-6 relative cursor-pointer">
                      <svg
                        onClick={() => setShow4(!show4)}
                        className="text-gray-300"
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={25}
                        viewBox="0 0 14 25"
                        fill="none"
                      >
                        <path
                          d="M10.9083 9.15817C10.7916 9.27484 10.675 9.33317 10.5 9.33317C10.325 9.33317 10.2083 9.27484 10.0916 9.15817L6.99996 6.0665L3.90829 9.15817C3.67496 9.3915 3.32496 9.3915 3.09163 9.15817C2.85829 8.92484 2.85829 8.57484 3.09163 8.3415L6.59163 4.8415C6.82496 4.60817 7.17496 4.60817 7.40829 4.8415L10.9083 8.3415C11.1416 8.57484 11.1416 8.92484 10.9083 9.15817Z"
                          fill="currentColor"
                        />
                        <path
                          d="M10.9083 16.6582L7.40829 20.1582C7.29163 20.2748 7.17496 20.3332 6.99996 20.3332C6.82496 20.3332 6.70829 20.2748 6.59163 20.1582L3.09163 16.6582C2.85829 16.4248 2.85829 16.0748 3.09163 15.8415C3.32496 15.6082 3.67496 15.6082 3.90829 15.8415L6.99996 18.9332L10.0916 15.8415C10.325 15.6082 10.675 15.6082 10.9083 15.8415C11.1416 16.0748 11.1416 16.4248 10.9083 16.6582Z"
                          fill="currentColor"
                        />
                      </svg>
                      {show4 && (
                        <ul className=" mt-1 absolute -ml-12 bg-white rounded shadow ">
                          <li className="text-xs text-gray-800 dark:text-gray-100 hover:text-white hover:bg-indigo-700 py-2 px-4">
                            edit
                          </li>
                          <li className="text-xs text-gray-800 dark:text-gray-100 hover:text-white hover:bg-indigo-700 py-2 px-4">
                            add
                          </li>
                          <li className="text-xs text-gray-800 dark:text-gray-100 hover:text-white hover:bg-indigo-700 py-2 px-4">
                            Select
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                </td>
                <td className="text-xs font-semibold text-gray-800 dark:text-gray-100 pl-6 uppercase sm:pr-6 pr-4">
                  <div className="flex items-center">
                    Sales
                    <div className="pl-6 relative cursor-pointer">
                      <svg
                        onClick={() => setShow5(!show5)}
                        className="text-gray-300"
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={25}
                        viewBox="0 0 14 25"
                        fill="none"
                      >
                        <path
                          d="M10.9083 9.15817C10.7916 9.27484 10.675 9.33317 10.5 9.33317C10.325 9.33317 10.2083 9.27484 10.0916 9.15817L6.99996 6.0665L3.90829 9.15817C3.67496 9.3915 3.32496 9.3915 3.09163 9.15817C2.85829 8.92484 2.85829 8.57484 3.09163 8.3415L6.59163 4.8415C6.82496 4.60817 7.17496 4.60817 7.40829 4.8415L10.9083 8.3415C11.1416 8.57484 11.1416 8.92484 10.9083 9.15817Z"
                          fill="currentColor"
                        />
                        <path
                          d="M10.9083 16.6582L7.40829 20.1582C7.29163 20.2748 7.17496 20.3332 6.99996 20.3332C6.82496 20.3332 6.70829 20.2748 6.59163 20.1582L3.09163 16.6582C2.85829 16.4248 2.85829 16.0748 3.09163 15.8415C3.32496 15.6082 3.67496 15.6082 3.90829 15.8415L6.99996 18.9332L10.0916 15.8415C10.325 15.6082 10.675 15.6082 10.9083 15.8415C11.1416 16.0748 11.1416 16.4248 10.9083 16.6582Z"
                          fill="currentColor"
                        />
                      </svg>
                      {show5 && (
                        <ul className=" mt-1 absolute -ml-12 bg-white rounded shadow ">
                          <li className="text-xs text-gray-800 dark:text-gray-100 hover:text-white hover:bg-indigo-700 py-2 px-4">
                            edit
                          </li>
                          <li className="text-xs text-gray-800 dark:text-gray-100 hover:text-white hover:bg-indigo-700 py-2 px-4">
                            add
                          </li>
                          <li className="text-xs text-gray-800 dark:text-gray-100 hover:text-white hover:bg-indigo-700 py-2 px-4">
                            Select
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                </td>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800">
              <tr className="border-b border-gray-200 dark:border-gray-900">
                <td className="py-4 sm:pl-6 pl-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width={22} height={19} viewBox="0 0 22 19" fill="none">
                        <g opacity="0.2">
                          <path
                            d="M22 16.8462C22 18.0356 21.0149 19 19.8 19H2.2C0.98505 19 0 18.0356 0 16.8462V7.15385C0 5.96438 0.98505 5 2.2 5H19.8C21.0149 5 22 5.96438 22 7.15385V16.8462Z"
                            fill="#231F20"
                          />
                        </g>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.8 2.14286V12.8571H7.2V2.14286H13.8ZM13.8 0H7.2C5.98505 0 5 0.959464 5 2.14286V12.8571C5 14.0405 5.98505 15 7.2 15H13.8C15.0149 15 16 14.0405 16 12.8571V2.14286C16 0.959464 15.0149 0 13.8 0Z"
                          fill="#4B4B4B"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 8V15.6471C0 16.9465 0.98505 18 2.2 18H19.8C21.0149 18 22 16.9465 22 15.6471V8H0Z"
                          fill="#F96E6F"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.5 8.54545V10.4545H8.5V8.54545H13.5ZM13.5 6H8.5C7.11937 6 6 7.13973 6 8.54545V10.4545C6 11.8603 7.11937 13 8.5 13H13.5C14.8806 13 16 11.8603 16 10.4545V8.54545C16 7.13973 14.8806 6 13.5 6Z"
                          fill="white"
                        />
                        <g opacity="0.2">
                          <path
                            d="M22 8.22222C22 6.995 21.0149 6 19.8 6H2.2C0.98505 6 0 6.995 0 8.22222V11H22V8.22222Z"
                            fill="#231F20"
                          />
                        </g>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22 6.22222C22 4.995 21.0149 4 19.8 4H2.2C0.98505 4 0 4.995 0 6.22222V9H22V6.22222Z"
                          fill="#F96E6F"
                        />
                      </svg>
                    </div>
                    <div className="pl-5">
                      <p className="text-sm font-semibold leading-none text-gray-800 dark:text-gray-100 pb-2">Dixons</p>
                      <p className="text-xs leading-3 text-gray-500 dark:text-gray-400">meguc@ruj.io</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 sm:pl-6 pl-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
                        <mask
                          id="mask0"
                          mask-type="alpha"
                          maskUnits="userSpaceOnUse"
                          x={0}
                          y={1}
                          width={18}
                          height={16}
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3 1.5H15C16.275 1.5 17.25 2.475 17.25 3.75V11.25C17.25 12.525 16.275 13.5 15 13.5H9.75V15H12C12.45 15 12.75 15.3 12.75 15.75C12.75 16.2 12.45 16.5 12 16.5H6C5.55 16.5 5.25 16.2 5.25 15.75C5.25 15.3 5.55 15 6 15H8.25V13.5H3C1.725 13.5 0.75 12.525 0.75 11.25V3.75C0.75 2.475 1.725 1.5 3 1.5ZM15 12C15.45 12 15.75 11.7 15.75 11.25V3.75C15.75 3.3 15.45 3 15 3H3C2.55 3 2.25 3.3 2.25 3.75V11.25C2.25 11.7 2.55 12 3 12H15Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0)">
                          <rect width={18} height={18} fill="#1D4ED8" />
                        </g>
                      </svg>
                    </div>
                    <p className="text-sm leading-tight text-gray-500 dark:text-gray-400 pl-3">Technology</p>
                  </div>
                </td>
                <td className="py-4 sm:pl-6 pl-4">
                  <p className="text-sm font-semibold leading-none text-gray-800 dark:text-gray-100">23.4k</p>
                  <p className="text-xs leading-3 text-gray-500 dark:text-gray-400 pt-2">in 24 hours</p>
                </td>
                <td className="py-4 sm:pl-6 pl-4">
                  <p className="text-sm leading-none text-gray-800 dark:text-gray-100">$891.2</p>
                </td>
                <td className="py-4 sm:px-6 px-4">
                  <div className="flex items-center">
                    <p className="text-sm font-semibold pr-3 leading-none text-gray-800 dark:text-gray-100">68%</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                      <path
                        d="M16 12.0002C16 12.0668 16 12.2002 15.9333 12.2668C15.8667 12.4002 15.7333 12.5335 15.6 12.6002C15.5333 12.6668 15.4 12.6668 15.3333 12.6668H11.3333C10.9333 12.6668 10.6667 12.4002 10.6667 12.0002C10.6667 11.6002 10.9333 11.3335 11.3333 11.3335H13.7333L9 6.60016L6.13333 9.46683C5.86667 9.7335 5.46667 9.7335 5.2 9.46683L0.2 4.46683C-0.0666667 4.20016 -0.0666667 3.80016 0.2 3.5335C0.466667 3.26683 0.866667 3.26683 1.13333 3.5335L5.66667 8.06683L8.53333 5.20016C8.8 4.9335 9.2 4.9335 9.46667 5.20016L14.6667 10.4002V8.00016C14.6667 7.60016 14.9333 7.3335 15.3333 7.3335C15.7333 7.3335 16 7.60016 16 8.00016V12.0002Z"
                        fill="#EA5455"
                      />
                    </svg>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-900">
                <td className="py-4 sm:pl-6 pl-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width={21} height={22} viewBox="0 0 21 22" fill="none">
                        <path
                          opacity="0.2"
                          d="M10 20.0688C9.83958 20.0688 9.68708 20.0068 9.57042 19.8942L0 10.2472L1.66667 9.39738L10 18.554L19.4029 9.77386C19.4762 9.86819 19.3292 8.92401 19.4029 9.08803C19.5079 9.32259 19.8692 10.0573 20 10.2472L10.4292 19.8946C10.3129 20.0068 10.1604 20.0688 10 20.0688Z"
                          fill="#231F20"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 20.0688C9.83958 20.0688 9.68708 20.0026 9.57042 19.8822L0 10.3074L1.7875 10.2956L10 18.4503L19.4029 9.06885C19.4762 9.16964 19.5821 9.42162 19.6558 9.59687C19.7613 9.84749 19.8692 10.1045 20 10.3074L10.4292 19.8827C10.3129 20.0026 10.1604 20.0688 10 20.0688Z"
                          fill="#838E9E"
                        />
                        <g opacity="0.2">
                          <path
                            d="M16.1516 9.29131C16.1227 9.08435 15.8546 8.9495 15.7273 8.8839C15.6336 8.83542 15.197 9.69872 15.0918 9.69872C14.8563 9.69872 14.8283 9.91872 14.7172 10.1171L10.2122 17.7471L5.70713 10.1171C5.59598 9.91872 5.78095 8.8839 5.54549 8.8839C5.43986 8.8839 5.21501 8.42801 5.12125 8.4765C4.9944 8.54209 4.72586 8.26953 4.69701 8.4765C4.66774 8.68427 3.33561 8.3172 3.42428 8.4765L9.34246 18.7904C9.93598 18.6743 10.549 18.6658 11.1633 18.6535L16.5758 9.29131C16.6645 9.13201 16.1808 9.49909 16.1516 9.29131Z"
                            fill="#231F20"
                          />
                        </g>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.5 20.0688C10.2668 20.0688 10.0538 19.9324 9.9435 19.7127L5.02757 10.3873C4.93959 10.2113 5.08776 9.85283 5.11681 9.62317C5.14544 9.39442 5.23426 9.22195 5.36054 9.14945C5.45358 9.09587 5.55376 9.06885 5.65858 9.06885C5.89221 9.06885 5.92 9.31201 6.03029 9.53131L10.5 17.965L14.9701 9.53176C15.0804 9.31201 15.1086 9.0693 15.3418 9.0693C15.4467 9.0693 15.5464 9.09632 15.6395 9.1499C15.7657 9.2224 15.8546 9.39487 15.8832 9.62362C15.9122 9.85283 16.0604 10.2113 15.9724 10.3873L11.0565 19.7127C10.9462 19.9324 10.7332 20.0688 10.5 20.0688Z"
                          fill="#838E9E"
                        />
                        <g opacity="0.2">
                          <path
                            d="M15.6094 11.0688H19.3312L20.25 10.2355C19.8214 5.1026 15.4326 1.06885 10.125 1.06885C13.1541 1.06885 15.6094 5.54593 15.6094 11.0688Z"
                            fill="#231F20"
                          />
                          <path
                            d="M10.125 1.06885C4.88278 1.06885 0.518484 5.19301 0 10.2355L0.918844 11.0688H4.64062C4.64062 5.54593 7.09594 1.06885 10.125 1.06885Z"
                            fill="#231F20"
                          />
                          <path
                            d="M4.64062 11.0688H15.6094C15.6094 5.54593 13.1541 1.06885 10.125 1.06885C7.09594 1.06885 4.64062 5.54593 4.64062 11.0688Z"
                            fill="#231F20"
                          />
                        </g>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.4167 10.0688H20C20 4.54593 15.5229 0.0688477 10 0.0688477C12.9917 0.0688477 15.4167 4.54593 15.4167 10.0688Z"
                          fill="#F96E6F"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 0.0688477C4.47708 0.0688477 0 4.54593 0 10.0688H4.58333C4.58333 4.54593 7.00833 0.0688477 10 0.0688477Z"
                          fill="#F96E6F"
                        />
                        <path
                          d="M4.58337 10.0688H15.4167C15.4167 4.54593 12.9917 0.0688477 10 0.0688477C7.00837 0.0688477 4.58337 4.54593 4.58337 10.0688Z"
                          fill="white"
                        />
                        <circle cx={10} cy="19.0688" r={2} fill="#717171" />
                      </svg>
                    </div>
                    <div className="pl-5">
                      <p className="text-sm font-semibold leading-none text-gray-800 dark:text-gray-100 pb-2">Motels</p>
                      <p className="text-xs leading-3 text-gray-500 dark:text-gray-400">meguc@ruj.io</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 sm:pl-6 pl-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.75 1.5C3.75 1.08579 4.08579 0.75 4.5 0.75C4.91421 0.75 5.25 1.08579 5.25 1.5V3.75C5.25 4.16421 4.91421 4.5 4.5 4.5C4.08579 4.5 3.75 4.16421 3.75 3.75V1.5ZM14.25 11.9731V7.49083C14.7492 7.53768 15.3997 7.70517 15.8838 8.20969C16.7865 9.15039 16.4114 10.4086 16.4114 10.4086C16.4114 10.4086 16.0315 11.5002 15.0108 11.8914C14.686 11.9289 14.4382 11.955 14.25 11.9731ZM14.2425 13.4965C14.1152 15.5908 12.3764 17.25 10.25 17.25H4.75C2.54086 17.25 0.75 15.4591 0.75 13.25V6H13.5H14.25H14.3097C14.5469 6 14.6892 6.02594 14.8778 6.06033C14.9485 6.07322 15.0257 6.0873 15.1169 6.10165C16.9014 6.38365 17.7631 8.26759 17.9281 9C18.093 9.73241 18 11.0348 17.0427 12.2477C16.1987 13.3171 14.6073 13.4743 14.2425 13.4965ZM12.75 7.5H2.25V12.75C2.25 14.4069 3.59315 15.75 5.25 15.75H9.75C11.4069 15.75 12.75 14.4069 12.75 12.75V7.5ZM7.5 0.75C7.08579 0.75 6.75 1.08579 6.75 1.5V3.75C6.75 4.16421 7.08579 4.5 7.5 4.5C7.91421 4.5 8.25 4.16421 8.25 3.75V1.5C8.25 1.08579 7.91421 0.75 7.5 0.75ZM9.75 1.5C9.75 1.08579 10.0858 0.75 10.5 0.75C10.9142 0.75 11.25 1.08579 11.25 1.5V3.75C11.25 4.16421 10.9142 4.5 10.5 4.5C10.0858 4.5 9.75 4.16421 9.75 3.75V1.5Z"
                          fill="#047857"
                        />
                      </svg>
                    </div>
                    <p className="text-sm leading-tight text-gray-500 dark:text-gray-400 pl-3">Grocery</p>
                  </div>
                </td>
                <td className="py-4 sm:pl-6 pl-4">
                  <p className="text-sm font-semibold leading-none text-gray-800 dark:text-gray-100">78k</p>
                  <p className="text-xs leading-3 text-gray-500 dark:text-gray-400 pt-2">in 24 hours</p>
                </td>
                <td className="py-4 sm:pl-6 pl-4">
                  <p className="text-sm leading-none text-gray-800 dark:text-gray-100">$668</p>
                </td>
                <td className="py-4 sm:px-6 px-4">
                  <div className="flex items-center">
                    <p className="text-sm font-semibold pr-3 leading-none text-gray-800 dark:text-gray-100">97%</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                      <path
                        d="M16 3.99984C16 3.93317 16 3.79984 15.9333 3.73317C15.8667 3.59984 15.7333 3.4665 15.6 3.39984C15.5333 3.33317 15.4 3.33317 15.3333 3.33317H11.3333C10.9333 3.33317 10.6667 3.59984 10.6667 3.99984C10.6667 4.39984 10.9333 4.6665 11.3333 4.6665H13.7333L9 9.39984L6.13333 6.53317C5.86667 6.2665 5.46667 6.2665 5.2 6.53317L0.2 11.5332C-0.0666667 11.7998 -0.0666667 12.1998 0.2 12.4665C0.466667 12.7332 0.866667 12.7332 1.13333 12.4665L5.66667 7.93317L8.53333 10.7998C8.8 11.0665 9.2 11.0665 9.46667 10.7998L14.6667 5.59984V7.99984C14.6667 8.39984 14.9333 8.6665 15.3333 8.6665C15.7333 8.6665 16 8.39984 16 7.99984V3.99984Z"
                        fill="#15803D"
                      />
                    </svg>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="container mx-auto w-5/6 sm:w-2/3 h-full">
        {/* Code block starts */}
        <div className="w-full bg-white dark:bg-gray-800 py-5 flex flex-col xl:flex-row items-start xl:items-center justify-between px-5 xl:px-10 shadow rounded-t">
          <div className="mb-4 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 lg:w-1/2">
            <h2 className="text-gray-800 dark:text-gray-100 text-lg font-bold">Job Postings</h2>
            <p className="font-normal text-sm text-gray-600 dark:text-gray-400 mt-1">
              Come work in an environment that allows you to learn alongside accomplished developers.
            </p>
          </div>
          <div className="lg:hidden w-full relative mt-2 md:mt-4">
            <div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-selector"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#a0aec0"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="8 9 12 5 16 9" />
                <polyline points="16 15 12 19 8 15" />
              </svg>
            </div>
            <select
              aria-label="Selected tab"
              className="focus:outline-none form-select block w-full p-3 border border-gray-300 rounded text-gray-600 dark:text-gray-400 appearance-none bg-transparent relative z-10"
            >
              <option className="text-sm text-gray-600 dark:text-gray-400">Inactive</option>
              <option className="text-sm text-gray-600 dark:text-gray-400">Inactive</option>
              <option selected className="text-sm text-indigo-700 dark:text-indigo-600">
                Active
              </option>
              <option className="text-sm text-gray-600 dark:text-gray-400">Inactive</option>
              <option className="text-sm text-gray-600 dark:text-gray-400">Inactive</option>
            </select>
          </div>
          <ul className="hidden lg:flex items-center lg:mt-6 xl:mt-0">
            <li className="font-normal flex justify-center items-center py-2 px-4 rounded mr-4 xl:mr-0 xl:ml-0 bg-gray-200 dark:bg-gray-700 text-indigo-700 dark:text-indigo-600 text-sm">
              Active
            </li>
            <li className="cursor-pointer font-normal flex justify-center items-center py-2 px-4 rounded mr-4 sm:mr-0 md:mr-0 lg:mr-0 xl:mr-0 sm:ml-4 md:ml-4 lg:ml-4 xl:ml-4 hover:bg-gray-200 text-gray-500 dark:hover:bg-gray-700 dark:text-gray-400 text-sm">
              Inactive
            </li>
            <li className="cursor-pointer font-normal flex justify-center items-center py-2 px-4 rounded mr-4 sm:mr-0 md:mr-0 lg:mr-0 xl:mr-0 sm:ml-4 md:ml-4 lg:ml-4 xl:ml-4 hover:bg-gray-200 text-gray-500 dark:hover:bg-gray-700 dark:text-gray-400 text-sm">
              Inactive
            </li>
            <li className="cursor-pointer font-normal flex justify-center items-center py-2 px-4 rounded mr-4 sm:mr-0 md:mr-0 lg:mr-0 xl:mr-0 sm:ml-4 md:ml-4 lg:ml-4 xl:ml-4 hover:bg-gray-200 text-gray-500 dark:hover:bg-gray-700 dark:text-gray-400 text-sm">
              Inactive
            </li>
          </ul>
        </div>
        {/* Code block ends */}
      </div>
    </>
  );
};

export default Table;
