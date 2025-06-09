"use client"

import * as React from "react";
import { CiGlobe } from "react-icons/ci";
import { MdOutlineArrowDropDown, MdOutlineDone } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { cn } from "@/lib/utils";
import useLang from "../hooks/useLang";

export function LanguageSelector() {
  const [open, setOpen] = React.useState(false);
  const { lang, selectEng, selectNl } = useLang();

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <div className="text-brandBlack font-bold flex items-center justify-center gap-1 text-xs w-16 cursor-pointer">
          <CiGlobe className="text-base font-bold text-textColor" /> <p className="text-textColor text-md">{lang.toUpperCase()}</p> <MdOutlineArrowDropDown className="text-2xl text-textColor font-bold" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-36 bg-textColor text-white text-brandColor">
        <DropdownMenuLabel className="text-white">Select Language</DropdownMenuLabel>
        <div className="my-1 w-full bg-brandGray rounded-full h-[1px]" />
        <div className="w-full flex flex-col divide-y divide-brandGray/50">
          <div onClick={() => { selectEng(); setOpen(false); }} className="flex items-center gap-2 py-1 cursor-pointer">
            <MdOutlineDone className={cn(lang === 'eng' ? 'opacity-100 text-white' : 'opacity-0 text-white')} />
            <p className="text-white">English</p>
          </div>
          <div onClick={() => { selectNl(); setOpen(false); }} className="flex items-center gap-2 py-1 cursor-pointer">
            <MdOutlineDone className={cn(lang === 'nl' ? 'opacity-100 text-white' : 'opacity-0 text-white')} />
            <p className="text-white">Dutch</p>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
