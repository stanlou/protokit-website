import Image from "next/image";

export const Logo = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <div>
      <Image
        src={`${basePath}/logo-dark.svg`}
        width={120}
        height={40}
        alt="Logo Dark"
        className="hidden dark:flex"
      />
      <Image
        src={`${basePath}/logo-light.svg`}
        width={120}
        height={40}
        alt="Logo Light"
        className="flex dark:hidden"
      />
    </div>
  );
};
