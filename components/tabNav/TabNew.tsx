import {
  faArrowRight,
  faBath,
  faBed,
  faChevronLeft,
  faChevronRight,
  faCircleChevronLeft,
  faCircleChevronRight,
  faCompass,
  faSquare,
  faViruses,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import React, { Fragment } from "react";
const tabList = {
  categories: [
    {
      id: "hcm",
      name: "Hồ Chí Minh",
      featured: [
        {
          type: "Nhà đất",
          status: "Mới đăng",
          discount: "-10%",
          price: "3,9 tỷ",
          title: "Bán nhà riêng Q4 - Khu dân cư an ninh",
          address: "39 Bến Vân Đồn, Street, Quận 4, Thành phố Hồ Chí Minh",
          img: "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fHww",
          unitPrice: "59,2 triệu",
          acreage: "70",
          room: 2,
          bath: 2,
          direction: "Đông Nam",
          area: "Bến Vân Đồn, Quận 4, Hồ Chí Minh",
        },
        {
          type: "Nhà đất",
          status: "Mới đăng",
          discount: "-10%",
          price: "3,9 tỷ",
          title: "Bán nhà riêng Q4 - Khu dân cư an ninh",
          address: "39 Bến Vân Đồn, Street, Quận 4, Thành phố Hồ Chí Minh",
          img: "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fHww",
          unitPrice: "59,2 triệu",
          acreage: "70",
          room: 2,
          bath: 2,
          direction: "Đông Nam",
          area: "Bến Vân Đồn, Quận 4, Hồ Chí Minh",
        },
        {
          type: "Nhà đất",
          status: "Mới đăng",
          discount: "-10%",
          price: "3,9 tỷ",
          title: "Bán nhà riêng Q4 - Khu dân cư an ninh",
          address: "39 Bến Vân Đồn, Street, Quận 4, Thành phố Hồ Chí Minh",
          img: "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fHww",
          unitPrice: "59,2 triệu",
          acreage: "70",
          room: 2,
          bath: 2,
          direction: "Đông Nam",
          area: "Bến Vân Đồn, Quận 4, Hồ Chí Minh",
        },
        {
          type: "Nhà đất",
          status: "Mới đăng",
          discount: "-10%",
          price: "3,9 tỷ",
          title: "Bán nhà riêng Q4 - Khu dân cư an ninh",
          address: "39 Bến Vân Đồn, Street, Quận 4, Thành phố Hồ Chí Minh",
          img: "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fHww",
          unitPrice: "59,2 triệu",
          acreage: "70",
          room: 2,
          bath: 2,
          direction: "Đông Nam",
          area: "Bến Vân Đồn, Quận 4, Hồ Chí Minh",
        },
      ],
    },
    {
      id: "nt",
      name: "Nha Trang",
      featured: [
        {
          type: "Nhà đất",
          status: "Mới đăng",
          discount: "-10%",
          price: "3,9 tỷ",
          title: "Bán nhà riêng Q4 - Khu dân cư an ninh",
          address: "39 Bến Vân Đồn, Street, Quận 4, Thành phố Hồ Chí Minh",
          img: "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fHww",
          unitPrice: "59,2 triệu",
          acreage: "70",
          room: 2,
          bath: 2,
          direction: "Đông Nam",
          area: "Bến Vân Đồn, Quận 4, Hồ Chí Minh",
        },
        {
          type: "Nhà đất",
          status: "Mới đăng",
          discount: "-10%",
          price: "3,9 tỷ",
          title: "Bán nhà riêng Q4 - Khu dân cư an ninh",
          address: "39 Bến Vân Đồn, Street, Quận 4, Thành phố Hồ Chí Minh",
          img: "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fHww",
          unitPrice: "59,2 triệu",
          acreage: "70",
          room: 2,
          bath: 2,
          direction: "Đông Nam",
          area: "Bến Vân Đồn, Quận 4, Hồ Chí Minh",
        },
        {
          type: "Nhà đất",
          status: "Mới đăng",
          discount: "-10%",
          price: "3,9 tỷ",
          title: "Bán nhà riêng Q4 - Khu dân cư an ninh",
          address: "39 Bến Vân Đồn, Street, Quận 4, Thành phố Hồ Chí Minh",
          img: "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fHww",
          unitPrice: "59,2 triệu",
          acreage: "70",
          room: 2,
          bath: 2,
          direction: "Đông Nam",
          area: "Bến Vân Đồn, Quận 4, Hồ Chí Minh",
        },
        {
          type: "Nhà đất",
          status: "Mới đăng",
          discount: "-10%",
          price: "3,9 tỷ",
          title: "Bán nhà riêng Q4 - Khu dân cư an ninh",
          address: "39 Bến Vân Đồn, Street, Quận 4, Thành phố Hồ Chí Minh",
          img: "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fHww",
          unitPrice: "59,2 triệu",
          acreage: "70",
          room: 2,
          bath: 2,
          direction: "Đông Nam",
          area: "Bến Vân Đồn, Quận 4, Hồ Chí Minh",
        },
        {
          type: "Nhà đất",
          status: "Mới đăng",
          discount: "-10%",
          price: "3,9 tỷ",
          title: "Bán nhà riêng Q4 - Khu dân cư an ninh",
          address: "39 Bến Vân Đồn, Street, Quận 4, Thành phố Hồ Chí Minh",
          img: "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fHww",
          unitPrice: "59,2 triệu",
          acreage: "70",
          room: 2,
          bath: 2,
          direction: "Đông Nam",
          area: "Bến Vân Đồn, Quận 4, Hồ Chí Minh",
        },
      ],
    },
    {
      id: "hn",
      name: "Hà Nội",
      featured: [
        {
          type: "Nhà đất",
          status: "Mới đăng",
          discount: "-10%",
          price: "3,9 tỷ",
          title: "Bán nhà riêng Q4 - Khu dân cư an ninh",
          address: "39 Bến Vân Đồn, Street, Quận 4, Thành phố Hồ Chí Minh",
          img: "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fHww",
          unitPrice: "59,2 triệu",
          acreage: "70",
          room: 2,
          bath: 2,
          direction: "Đông Nam",
          area: "Bến Vân Đồn, Quận 4, Hồ Chí Minh",
        },
        {
          type: "Nhà đất",
          status: "Mới đăng",
          discount: "-10%",
          price: "3,9 tỷ",
          title: "Bán nhà riêng Q4 - Khu dân cư an ninh",
          address: "39 Bến Vân Đồn, Street, Quận 4, Thành phố Hồ Chí Minh",
          img: "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fHww",
          unitPrice: "59,2 triệu",
          acreage: "70",
          room: 2,
          bath: 2,
          direction: "Đông Nam",
          area: "Bến Vân Đồn, Quận 4, Hồ Chí Minh",
        },
        {
          type: "Nhà đất",
          status: "Mới đăng",
          discount: "-10%",
          price: "3,9 tỷ",
          title: "Bán nhà riêng Q4 - Khu dân cư an ninh",
          address: "39 Bến Vân Đồn, Street, Quận 4, Thành phố Hồ Chí Minh",
          img: "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fHww",
          unitPrice: "59,2 triệu",
          acreage: "70",
          room: 2,
          bath: 2,
          direction: "Đông Nam",
          area: "Bến Vân Đồn, Quận 4, Hồ Chí Minh",
        },
        {
          type: "Nhà đất",
          status: "Mới đăng",
          discount: "-10%",
          price: "3,9 tỷ",
          title: "Bán nhà riêng Q4 - Khu dân cư an ninh",
          address: "39 Bến Vân Đồn, Street, Quận 4, Thành phố Hồ Chí Minh",
          img: "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fHww",
          unitPrice: "59,2 triệu",
          acreage: "70",
          room: 2,
          bath: 2,
          direction: "Đông Nam",
          area: "Bến Vân Đồn, Quận 4, Hồ Chí Minh",
        },
        {
          type: "Nhà đất",
          status: "Mới đăng",
          discount: "-10%",
          price: "3,9 tỷ",
          title: "Bán nhà riêng Q4 - Khu dân cư an ninh",
          address: "39 Bến Vân Đồn, Street, Quận 4, Thành phố Hồ Chí Minh",
          img: "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fHww",
          unitPrice: "59,2 triệu",
          acreage: "70",
          room: 2,
          bath: 2,
          direction: "Đông Nam",
          area: "Bến Vân Đồn, Quận 4, Hồ Chí Minh",
        },
      ],
    },
  ],
};

const TabNew = () => {
  return (
    <div>
      <TabGroup className="mt-2">
        <div className="border-b border-gray-200 flex items-center justify-between">
          <TabList className="flex -mb-px overflow-x-scroll hide-scrollbar">
            {/* categories */}
            {tabList.categories.map((category) => (
              <Tab
                key={category.name}
                className="flex w-fit whitespace-nowrap border-b-4 border-transparent p-2 text-base font-medium text-desc data-[selected]:border-indigo-600 data-[selected]:text-title data-[selected]:font-semibold"
              >
                {category.name}
              </Tab>
            ))}
          </TabList>
          <a href="" className="flex gap-2 text-sm text-primary">
            Xem chi tiết
            <FontAwesomeIcon icon={faArrowRight} className="size-4" />
          </a>
        </div>
        <TabPanels as={Fragment}>
          {/* items */}
          {tabList.categories.map((category) => (
            <TabPanel key={category.id}>
              <div className="py-9 flex gap-5 overflow-x-scroll hide-scrollbar">
                {category.featured.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-white rounded-xl"
                  >
                    <div className="relative w-[374px] h-[210px]">
                      <img
                        src={item.img}
                        alt=""
                        className="w-[374px] h-[210px]"
                      />
                      <div className="absolute top-0 left-0 w-[374px] h-[210px] flex flex-col justify-between p-3">
                        <p className="text-xs text-white px-2 py-1 bg-primary w-fit rounded-md">
                          {item.type}
                        </p>
                        <div className="flex items-center justify-between ">
                          <FontAwesomeIcon
                            icon={faCircleChevronLeft}
                            className="size-6 text-white"
                          />
                          <FontAwesomeIcon
                            icon={faCircleChevronRight}
                            className="size-6 text-white"
                          />
                        </div>
                        <div className="flex items-center px-1.5 py-1 text-blue-600 bg-white rounded-md w-fit gap-1 text-xs">
                          <FontAwesomeIcon
                            icon={faViruses}
                            className="size-3"
                          />
                          <p>{item.status}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 divide-y">
                      <div className="space-y-5 pb-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <p className="text-2xl font-semibold">
                              {item.price}
                            </p>
                            <p className="text-xs py-1 px-1.5 rounded-md bg-red-700 text-white w-fit">
                              {item.discount}
                            </p>
                          </div>
                          <p className="text-sm text-gray-500">
                            {item.unitPrice}/m<sup>2</sup>
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">{item.title}</h4>
                          <p className="text-gray-500 text-[13px]">
                            {item.address}
                          </p>
                        </div>
                        <div className="flex items-center text-gray-500 ">
                          <p className="flex items-center gap-1 px-1.5">
                            <FontAwesomeIcon
                              icon={faBed}
                              className="size-4 text-black"
                            />{" "}
                            {item.room}
                          </p>
                          <p className="flex items-center gap-1 px-1.5">
                            <FontAwesomeIcon
                              icon={faBath}
                              className="size-4 text-black"
                            />{" "}
                            {item.bath}
                          </p>
                          <p className="flex items-center gap-1 px-1.5">
                            <FontAwesomeIcon
                              icon={faSquare}
                              className="size-4 text-black"
                            />{" "}
                            {item.acreage}
                          </p>
                          <p className="flex items-center gap-1 px-1.5">
                            <FontAwesomeIcon
                              icon={faCompass}
                              className="size-4 text-black"
                            />{" "}
                            {item.direction}
                          </p>
                        </div>
                      </div>
                      <p className="text-blue-700 font-semibold py-3.5">
                        {item.area}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default TabNew;
