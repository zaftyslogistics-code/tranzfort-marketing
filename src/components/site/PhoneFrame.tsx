type Props = {
  src: string;
  alt: string;
  className?: string;
  fetchPriority?: "high" | "low" | "auto";
};
export function PhoneFrame({ src, alt, className = "", fetchPriority = "auto" }: Props) {
  return (
    <div className={`relative mx-auto w-[260px] aspect-[9/19] ${className}`}>
      <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-neutral-800 to-neutral-950 p-2 shadow-2xl">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-2xl z-10" />
        <img
          src={src}
          alt={alt}
          loading="lazy"
          width={512}
          height={1024}
          fetchPriority={fetchPriority}
          className="w-full h-full object-cover rounded-[2rem]"
        />
      </div>
    </div>
  );
}
