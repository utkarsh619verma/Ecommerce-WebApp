import { imageURL } from "../../Data";

export function Midsection() {
  return (
    <div className="grid md:grid-cols-3 md:gap-x-10 px-10 gap-y-3  ">
      {imageURL.map((item, index) => (
        <img src={item} key={index} />
      ))}
    </div>
  );
}
