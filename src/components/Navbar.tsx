'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>

            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active}
                        item="Home">
                        test
                    </MenuItem>
                </Link>

                <MenuItem setActive={setActive} active={active}
                    item="Our Courses">
                    <div className="flex flex-col space-y-4 test-sm">
                        <HoveredLink href="/coureses">All Courses</HoveredLink>
                        <HoveredLink href="/coureses">Basic Music Theory</HoveredLink>
                        <HoveredLink href="/coureses">Advanced Composition</HoveredLink>
                        <HoveredLink href="/coureses">songwriting</HoveredLink>
                        <HoveredLink href="/coureses">Music Production</HoveredLink>
                    </div>
                </MenuItem>
                <Link href={"/contact"}>
                    <MenuItem setActive={setActive} active={active}
                        item="Contact Us">

                    </MenuItem>
                </Link>
            </Menu>
        </div>
    )
}

export default Navbar
