import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import React, { Fragment } from "react";
const tabList = {
  categories: [
    {
      id: "discount",
      name: "Chiết khấu cao",
      featured: [
        {
          name: "The rivana",
          href: "#",
          adress: "Thuận an, Bình Dương",
          acreage: "35 Triệu",
          state: "Đang mở bán",
          discout: "35%",
          img: "https://images.unsplash.com/photo-1627222339149-2d40cba04740?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "The rivana",
          href: "#",
          adress: "Thuận an, Bình Dương",
          acreage: "35 Triệu",
          state: "Đang mở bán",
          discout: "35%",
          img: "https://images.unsplash.com/photo-1627222339149-2d40cba04740?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "The rivana",
          href: "#",
          adress: "Thuận an, Bình Dương",
          acreage: "35 Triệu",
          state: "Đang mở bán",
          discout: "35%",
          img: "https://images.unsplash.com/photo-1627222339149-2d40cba04740?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "The rivana",
          href: "#",
          adress: "Thuận an, Bình Dương",
          acreage: "35 Triệu",
          state: "Đang mở bán",
          discout: "35%",
          img: "https://images.unsplash.com/photo-1627222339149-2d40cba04740?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
    {
      id: "location",
      name: "Vị trí đắc địa",
      featured: [
        {
          name: "The rivana",
          href: "#",
          adress: "Thuận an, Bình Dương",
          acreage: "35 Triệu",
          state: "Đang mở bán",
          discout: "35%",
          img: "https://images.unsplash.com/photo-1585129777188-94600bc7b4b3?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "The rivana",
          href: "#",
          adress: "Thuận an, Bình Dương",
          acreage: "35 Triệu",
          state: "Đang mở bán",
          discout: "35%",
          img: "https://images.unsplash.com/photo-1627222339149-2d40cba04740?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "The rivana",
          href: "#",
          adress: "Thuận an, Bình Dương",
          acreage: "35 Triệu",
          state: "Đang mở bán",
          discout: "35%",
          img: "https://images.unsplash.com/photo-1627222339149-2d40cba04740?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "The rivana",
          href: "#",
          adress: "Thuận an, Bình Dương",
          acreage: "35 Triệu",
          state: "Đang mở bán",
          discout: "35%",
          img: "https://images.unsplash.com/photo-1627222339149-2d40cba04740?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
    {
      id: "potential",
      name: "Tiềm năng tăng trưởng cao",
      featured: [
        {
          name: "The rivana",
          href: "#",
          adress: "Thuận an, Bình Dương",
          acreage: "35 Triệu",
          state: "Đang mở bán",
          discout: "35%",
          img: "https://images.unsplash.com/photo-1627222339149-2d40cba04740?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "The rivana",
          href: "#",
          adress: "Thuận an, Bình Dương",
          acreage: "35 Triệu",
          state: "Đang mở bán",
          discout: "35%",
          img: "https://images.unsplash.com/photo-1627222339149-2d40cba04740?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "The rivana",
          href: "#",
          adress: "Thuận an, Bình Dương",
          acreage: "35 Triệu",
          state: "Đang mở bán",
          discout: "35%",
          img: "https://images.unsplash.com/photo-1627222339149-2d40cba04740?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "The rivana",
          href: "#",
          adress: "Thuận an, Bình Dương",
          acreage: "35 Triệu",
          state: "Đang mở bán",
          discout: "35%",
          img: "https://images.unsplash.com/photo-1627222339149-2d40cba04740?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
  ],
};
const TabOutstanding = () => {
  return (
    <div>
      <TabGroup className="mt-2">
        <div className="border-b border-gray-200">
          <TabList className="flex px-4 -mb-px space-x-8 overflow-x-scroll hide-scrollbar">
            {/* categories */}
            {tabList.categories.map((category) => (
              <Tab
                key={category.name}
                className="flex w-fit whitespace-nowrap border-b-4 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600"
              >
                {category.name}
              </Tab>
            ))}
          </TabList>
        </div>
        <TabPanels as={Fragment}>
          {/* items */}
          {tabList.categories.map((category) => (
            <TabPanel key={category.id}>
              <div className="py-9 flex gap-5 overflow-x-scroll hide-scrollbar">
                {category.featured.map((item, index) => (
                  <div>
                    <div className=" w-img-w relative" key={index}>
                      <img
                        src={item.img}
                        alt=""
                        className="rounded-xl h-img-h object-cover w-full"
                      />
                      <div className="absolute top-0 w-full h-full text-white">
                        <div className="flex flex-col justify-between h-full p-2">
                          <div className="flex items-center justify-between">
                            <p className="bg-primary px-2 py-1 text-xs rounded-lg">
                              {item.state}
                            </p>
                            <p className="bg-black/30 px-2 py-1 text-xs rounded-lg">
                              chiết khấu {item.discout}
                            </p>
                          </div>
                          <div className="space-y-5">
                            <div>
                              <h2 className="text-2xl font-bold">
                                {item.name}
                              </h2>
                              <p className="text-sm text-adress">
                                {item.adress}
                              </p>
                            </div>
                            <p className="font-medium">
                              {item.acreage}/m<sup>2</sup>
                            </p>
                          </div>
                        </div>
                      </div>
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

export default TabOutstanding;
