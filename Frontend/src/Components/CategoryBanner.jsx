import { navData } from "../../Data";
export function CategoryBanner() {
  return (
    <div className="flex mx-[130px] my-5 justify-between ">
      {navData.map((element, index) => (
        <div className="" key={index}>
          <img
            width={80}
            className="mx-auto"
            src={element.url}
            alt={element.text}
          />
          <p className="text-center w-full font-semibold ">{element.text}</p>
        </div>
      ))}
    </div>
  );
}
