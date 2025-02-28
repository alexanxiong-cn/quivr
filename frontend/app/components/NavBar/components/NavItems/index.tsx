"use client";
import { useSupabase } from "@/app/supabase-provider";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Dispatch, FC, HTMLAttributes, SetStateAction } from "react";
import { MdPerson, MdSettings } from "react-icons/md";
import Button from "../../../ui/Button";
import { AuthButtons } from "./components/AuthButtons";
import { DarkModeToggle } from "./components/DarkModeToggle";
import { NavLink } from "./components/NavLink";

interface NavItemsProps extends HTMLAttributes<HTMLUListElement> {
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

export const NavItems: FC<NavItemsProps> = ({
  className,
  setOpen,
  ...props
}) => {
  const { session } = useSupabase();
  const isUserLoggedIn = session?.user !== undefined;

  return (
    <ul
      className={cn(
        "flex flex-row items-center gap-4 text-sm flex-1",
        className
      )}
      {...props}
    >
      {isUserLoggedIn ? (
        <>
          <NavLink setOpen={setOpen} to="/upload">
            Upload
          </NavLink>
          <NavLink setOpen={setOpen} to="/chat">
            Chat
          </NavLink>
          <NavLink setOpen={setOpen} to="/explore">
            Explore
          </NavLink>
        </>
      ) : (
        <>

        </>
      )}
      <div className="flex sm:flex-1 sm:justify-end flex-col items-center justify-center sm:flex-row gap-5 sm:gap-2">
        {isUserLoggedIn && (
          <>
            <Link aria-label="account" className="" href={"/user"}>
              <MdPerson className="text-2xl" />
            </Link>
            <Link href={"/config"}>
              <Button
                variant={"tertiary"}
                className="focus:outline-none text-2xl"
                aria-label="Settings"
              >
                <MdSettings />
              </Button>
            </Link>
          </>
        )}
        {!isUserLoggedIn && <AuthButtons />}

        <DarkModeToggle />
      </div>
    </ul>
  );
};
