import React from "react";
import { GithubIcon, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Nav() {
  const { setTheme, themes } = useTheme();

  return (
    <>
      <div className="flex justify-between h-16 ">
        <div className="grid place-items-center select-none hover:text-gray-400 ">
          brand
        </div>
        <nav>
          <ul className="flex items-center h-full space-x-9 [&>li:hover]:text-gray-400 ">
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">info</a>
            </li>
            <li>
              <a href="#">project</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {themes.map((theme) => (
                    <DropdownMenuItem
                      key={theme}
                      onClick={() => {
                        setTheme(theme);
                      }}
                    >
                      {theme}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <a href="https://github.com/Long104" target="_blank">
                <GithubIcon />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Nav;
