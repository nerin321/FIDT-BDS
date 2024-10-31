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
          <TabList className="flex px-4 -mb-px space-x-8">
            {/* categories */}
            {tabList.categories.map((category) => (
              <Tab
                key={category.name}
                className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600"
              >
                {category.name}
              </Tab>
            ))}
          </TabList>
        </div>
        <TabPanels as={Fragment}>
          {/* items */}
          {tabList.categories.map((category) => (
            <TabPanel>
              {category.featured.map((item, index) => (
                <div>
                  <div className=" w-8/10 relative">
                    <img
                      src={item.img}
                      alt=""
                      className="rounded-xl object-cover w-full"
                    />
                    <div className="absolute top-0 w-full h-full text-white">
                      <div className="flex flex-col justify-between h-full p-2">
                        <div className="flex items-center justify-between">
                          <p className="bg-primary px-2 py-1 rounded-lg">
                            {item.state}
                          </p>
                          <p className="bg-black/30 px-2 py-1 rounded-lg">
                            chiết khấu {item.discout}
                          </p>
                        </div>
                        <div>
                          <div>
                            <h2>{item.name}</h2>
                            <p>{item.adress}</p>
                          </div>
                          <p>{item.acreage}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default TabOutstanding;
