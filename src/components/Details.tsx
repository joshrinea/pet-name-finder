import type { Name } from "../interface/Name";

type DetailsProps = {
  data: Name | null;
};

const Details = ({ data }: DetailsProps) => {
  return (
    <div className="border-t border-b border-[#C9C5B9] py-6">
      <div
        className="font-light text-text-neutral-dark text-3xl leading-13.75 tracking-normal"
        dangerouslySetInnerHTML={{
          __html: data?.definition || "",
        }}
      ></div>
    </div>
  );
};

export default Details;
