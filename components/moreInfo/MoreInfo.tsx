import React from "react";

const MoreInfo = () => {
  return (
    <div className="bg-banner text-white px-4 py-14 ">
      <div className="w-9/10 mx-auto lg:grid grid-cols-2">
        <div className="py-7">
          <h1 className="text-[40px] font-extrabold">
            Nhận thêm rổ hàng <br />
            <span className="text-primary">Bất động sản</span>
          </h1>
          <p>
            Hãy để chuyên gia FIDT tư vấn BĐS phù hợp <br /> với nhu cầu cá nhân
            của quý khách ngay
          </p>
        </div>
        <form
          action="#"
          method="post"
          className="space-y-8 lg:w-4/5 lg:mx-auto"
        >
          <div>
            <p className="text-sm">Loại hình Bất động sản</p>
            <div className="grid grid-cols-2 gap-y-3">
              <div className="flex items-center gap-1.5">
                <input
                  type="checkbox"
                  name="house"
                  id="house"
                  className="size-5"
                />
                <label htmlFor="house">Căn hộ</label>
              </div>
              <div className="flex items-center gap-1.5">
                <input
                  type="checkbox"
                  name="ResidentialLand"
                  id="ResidentialLand"
                  className="size-5"
                />
                <label htmlFor="ResidentialLand">Đất dân sinh</label>
              </div>
              <div className="flex items-center gap-1.5">
                <input
                  type="checkbox"
                  name="Townhouse"
                  id="Townhouse"
                  className="size-5"
                />
                <label htmlFor="Townhouse">Nhà phố</label>
              </div>
              <div className="flex items-center gap-1.5">
                <input
                  type="checkbox"
                  name="Land"
                  id="Land"
                  className="size-5"
                />
                <label htmlFor="Land">Đất nền</label>
              </div>
              <div className="flex items-center gap-1.5">
                <input
                  type="checkbox"
                  name="AgriculturalLand"
                  id="AgriculturalLand"
                  className="size-5"
                />
                <label htmlFor="AgriculturalLand">Đất nông nghiệp</label>
              </div>
            </div>
          </div>
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="">
                <label htmlFor="name" className="text-sm">
                  Họ tên
                </label>
                <div className="">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Nhập họ tên"
                    className="h-12 w-full rounded-lg px-3 text-black"
                  />
                </div>
              </div>
              <div className="">
                <label htmlFor="phone" className="text-sm">
                  Số điện thoại
                </label>
                <div className="">
                  <input
                    id="phone"
                    name="phone"
                    type="number"
                    required
                    placeholder="Nhập số điện thoại"
                    className="h-12 w-full rounded-lg px-3 text-black"
                  />
                </div>
              </div>
              <div className="">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <div className="">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Nhập email"
                    className="h-12 w-full rounded-lg px-3 text-black"
                  />
                </div>
              </div>
            </div>
            <button className="w-full h-12 text-center bg-[#F58A07] rounded-lg">
              Gửi thông tin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MoreInfo;
