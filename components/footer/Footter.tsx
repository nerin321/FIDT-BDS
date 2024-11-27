import { Logo } from "@/public";
import {
  faFacebook,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footter = () => {
  return (
    <footer className="p-4 space-y-4 lg:space-y-0 lg:px-10 lg:grid grid-cols-5 gap-28">
      <section className="col-span-2 space-y-5">
        <div className="space-y-3 py-5 lg:py-0">
          <img src={Logo.src} alt="" className="h-[50px]" />
          <p className="uppercase font-semibold text-[#042656]">
            CÔNG TY CP TƯ VẤN ĐẦU TƯ VÀ QUẢN LÝ TÀI SẢN FIDT
          </p>
        </div>
        <div className="space-y-3">
          <p>
            <b>Trụ sở:</b> 39/3 Trần Nhật Duật, Phường Tân Định, Quận 1, Hồ Chí
            Minh
          </p>
          <p>
            <b>Chi nhánh:</b> 56 Bùi Thiện Ngộ (B4), KĐT VCN Phước Hải, P. Phước
            Hải, TP. Nha Trang
          </p>
          <p>
            <b>Email:</b> supporth@fidt.vn
          </p>
          <p>
            <b>Kênh hỗ trợ khách hàng:</b>{" "}
            <a href="" className="text-blue-500 font-semibold">
              OA FIDT
            </a>
          </p>
        </div>
      </section>
      <section className="space-y-5 col-span-3">
        <div className="lg:grid grid-cols-3 gap-4">
          <div className="space-y-5">
            <h3 className="text-[#032657] font-bold">Dịch vụ FIDT</h3>
            <div>
              <b className="text-gray-500">Tài chính</b>
              <ul>
                <li>Hệ thống XTrade</li>
                <li>Tư vấn tài chính cá nhân trọn gói</li>
                <li>Tư vấn tài chính cá nhân theo nhu cầu</li>
                <li>Báo cáo chuyên sâu theo nhu cầu</li>
              </ul>
            </div>
            <div>
              <b className="text-gray-500">Đào tạo</b>
              <ul>
                <li>Tài chính cá nhân toàn diện</li>
                <li>Đầu tư chứng khoán chuyên nghiệp</li>
                <li>360 độ về tiền</li>
                <li>Tài chính cá nhân cơ bản</li>
              </ul>
            </div>
            <div>
              <b className="text-gray-500">Bất động sản</b>
              <ul>
                <li>Trang tin BĐS</li>
                <li>Ký gửi bán BĐS</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-[#032657] font-bold">Chính sách</h3>
            <ul>
              <li>Điều kiện huỷ giao dịch và đổi/trả hàng</li>
              <li>Chính sách hoàn tiền</li>
              <li>Chính sách giao hàng</li>
              <li>Chính sách bảo mật thông tin</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-[#032657] font-bold">Về FIDT</h3>
              <ul>
                <li>Về chúng tôi</li>
                <li>Đối tác của chúng tôi</li>
                <li>Tin tức</li>
                <li>Liên hệ</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#032657] font-bold">
                Theo dõi chúng tôi tại
              </h3>
              <div className="flex items-center gap-5">
                <a href="">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="size-6 text-blue-700"
                  />
                </a>
                <a href="">
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="size-6 text-red-700"
                  />
                </a>
                <a href="">
                  <FontAwesomeIcon
                    icon={faTiktok}
                    className="size-6 text-[background: #032657;
          ]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footter;
