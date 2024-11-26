import NavWhite from "@/components/Nav/NavWhite";
import TabNew from "@/components/tabNav/TabNew";
import TabOutstanding from "@/components/tabNav/TabOutstanding";
import {
  faCaretDown,
  faCertificate,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  const suggests = [
    "Hà Nội",
    "Hồ Chí Minh",
    "Đất nền Đồng Nai",
    "Căn hộ Hồ Chí Minh",
    "Căn hộ",
  ];
  const resions = [
    {
      id: "1",
      title: "Rổ hàng độc quyền",
      desc: "Toàn bộ bất động sản đều được ký gửi độc quyền với FIDT, sau khi đã chọn lọc và kiểm tra từ chuyên gia",
    },
    {
      id: "2",
      title: "Nhận tư vấn BĐS đúng nhu cầu",
      desc: "Chuyên gia FIDT sẽ tư vấn tiềm năng tăng trưởng, vùng giá nên giao dịch dựa theo đặc điểm bất động sản và nhu cầu người mua",
    },
    {
      id: "3",
      title: "Kiểm tra pháp lý bởi luật sư",
      desc: "Người mua sẽ được tư vấn pháp lý từ đội ngũ luật sư FIDT và được Cung cấp Thông tin quy hoạch do Văn phòng Đăng ký biến động đất đai Quận/Huyện",
    },
  ];
  return (
    <main>
      <article className="bg-banner bg-no-repeat bg-cover">
        <NavWhite />
        <section className="w-9/10 space-y-14 pb-28 lg:w-8/10 lg:pt-12 mx-auto">
          <div className="space-y-8 text-white">
            <h1 className="text-title-1 leading-title-1 font-extrabold">
              Lựa chọn đúng <br /> vươn tới{" "}
              <span className="text-orange-400">tương lai</span>
            </h1>
            <div className="flex items-center gap-2">
              <span className="bg-banner-bg w-fit flex items-center gap-1 p-1 rounded-lg">
                <FontAwesomeIcon icon={faCertificate} className="size-3" />
                <p className="text-xs">FIDT Verified</p>
              </span>
              <p className="text-sm">100% bất động sản kiểm định bởi FIDT</p>
            </div>
          </div>
          <div className="lg:flex lg:w-8/10">
            <div className="lg:rounded-none lg:rounded-s-lg grid w-full grid-cols-3 bg-white rounded-t-lg">
              <div className="p-3 border">
                <div className="flex items-center gap-2 text-sm">
                  <p>Khu vực</p>
                  <FontAwesomeIcon icon={faCaretDown} className="size-3" />
                </div>
                <p>Tất cả</p>
              </div>
              <div className="p-3 border">
                <div className="flex items-center gap-2 text-sm">
                  <p>Khu vực</p>
                  <FontAwesomeIcon icon={faCaretDown} className="size-3" />
                </div>
                <p>Tất cả</p>
              </div>
              <div className="p-3 border">
                <div className="flex items-center gap-2 text-sm">
                  <p>Khu vực</p>
                  <FontAwesomeIcon icon={faCaretDown} className="size-3" />
                </div>
                <p>Tất cả</p>
              </div>
            </div>
            <button className="text-nowrap lg:w-fit bg-primary lg:rounded-none lg:rounded-e-lg lg:px-8 flex items-center justify-center w-full gap-2 p-4 text-white rounded-b-lg">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="size-6" />
              Tìm kiếm
            </button>
          </div>
          <div className="flex gap-2 text-sm text-white">
            <p className="text-nowrap py-1">Gợi ý:</p>
            <div className="flex flex-wrap gap-2">
              {suggests.map((suggest, index) => (
                <div
                  key={index}
                  className=" px-2 py-1 border border-white rounded-md"
                >
                  <p>{suggest}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>
      <article className=" px-4 py-10 space-y-14">
        <section className="lg:grid-cols-2 gap-7 grid">
          <img
            src="https://plus.unsplash.com/premium_photo-1661281211518-7bc99840fe64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="object-cover rounded-lg"
          />
          <div>
            <h2 className="mb-8 text-3xl font-bold">
              Giao dịch bất động sản An toàn, Dễ dàng với FIDT
            </h2>
            <div className="space-y-7">
              {resions.map((item, index) => (
                <div className="flex gap-2" key={index}>
                  <p className="text-primary text-xl font-semibold">
                    {item.id}.
                  </p>
                  <div className="space-y-4">
                    <p className="text-title text-xl font-semibold">
                      {item.title}
                    </p>
                    <p className="text-desc text-base">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div>
            <h2 className="text-3xl font-bold">Bất động sản nổi bật</h2>
            <p className="text-sm text-desc">
              Lựa chọn bất động sản ứng ý nhất với bạn
            </p>
          </div>
          <TabOutstanding />
        </section>
      </article>
      <article className="bg-section-bg px-4 py-8">
        <section>
          <h2 className="text-3xl font-bold">Nhà đất mới nhất</h2>
          <TabNew />
        </section>
        <section>
          <h2 className="text-3xl font-bold">Căn hộ mới nhất</h2>
          <TabNew />
        </section>
        <section>
          <h2 className="text-3xl font-bold">Đất nền mới nhất</h2>
          <TabNew />
        </section>
      </article>
    </main>
  );
}
