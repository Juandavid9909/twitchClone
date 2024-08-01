"use client";

import { useIsClient } from "usehooks-ts";

import { cn } from "@/lib/utils";
import { FollowingSkeleton } from "./following";
import { RecommendedSkeleton } from "./recommended";
import { ToggleSkeleton } from "./toggle";
import { useSidebar } from "@/store/use-sidebar";

interface WrapperProps {
    children: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
    const isClient = useIsClient();

    const { collapsed } = useSidebar((state) => state);

    if(!isClient) {
        return (
            <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-60">
                <ToggleSkeleton />

                <FollowingSkeleton />
    
                <RecommendedSkeleton />
            </aside>
        );
    }

    return (
        <aside
            className={ cn(
                "fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35] z-60",
                collapsed && "w-[70px]"
            ) }
        >
            { children }
        </aside>
    );
}