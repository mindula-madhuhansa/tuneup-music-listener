import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type SidebarItemProps = {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  href: string;
};

const SidebarItem = ({ icon: Icon, label, href, active }: SidebarItemProps) => {
  return (
    <Link
      href={href}
      className={twMerge(
        "flex flex-row h-auto items-center w-full gap-x-4 font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1",
        active && "text-white"
      )}
    >
      <Icon size={26} />
      <p className="truncate w-full">{label}</p>
    </Link>
  );
};

export default SidebarItem;
