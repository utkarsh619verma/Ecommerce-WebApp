import { navData } from "../../Data";
export function CategoryBanner() {
  return (
    <div className="flex overflow-scroll xl:mx-[40px]  my-3 justify-between ">
      {navData.map((element, index) => (
        <div className="xl:w-[104px] mx-5 " key={index}>
          <img
            className="mx-auto h-[5vh]  lg:h-[9vh] "
            src={element.url}
            alt={element.text}
          />
          <p className="text-center w-[inherit] font-semibold ">
            {element.text}
          </p>
        </div>
      ))}
    </div>
  );
}
