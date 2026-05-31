import type { Name } from "../interface/Name";

type DetailsProps = {
  data: Name | null;
};

const Details = ({ data }: DetailsProps) => {
  return (
    <div
      className="font-light text-text-neutral-dark text-3xl leading-13.75 tracking-normal"
      dangerouslySetInnerHTML={{
        __html: data?.definition || "",
      }}
    ></div>
  );
};

export default Details;
