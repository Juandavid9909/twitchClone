"use client";

import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Hint } from "@/components/hint";
import { useCreatorSidebar } from "@/store/use-creator-sidebar";

export const Toggle = () => {
    const { collapsed, onExpand, onCollapse } = useCreatorSidebar((state) => state);

    const label = collapsed ? "Expand": "Collapse";

    return (
        <>
            { collapsed && (
                <div className="w-full hidden lg:flex items-center justify-center pt-4 mb-4">
                    <Hint
                        asChild
                        label={ label }
                        side="right"
                    >
                        <Button
                            className="h-auto p-2"
                            onClick={ onExpand }
                            variant="ghost"
                        >
                            <ArrowRightFromLine className="h-4 w-4" />
                        </Button>
                    </Hint>
                </div>
            ) }

            { !collapsed && (
                <div className="p-3 pl-6 mb-2 hidden lg:flex items-center w-full">
                    <p className="font-semibold text-primary">
                        Dashboard
                    </p>

                    <Hint
                        asChild
                        label={ label }
                        side="right"
                    >
                        <Button
                            className="h-auto p-2 ml-auto"
                            onClick={ onCollapse }
                            variant="ghost"
                        >
                            <ArrowLeftFromLine className="h-4 w-4" />
                        </Button>
                    </Hint>
                </div>
            ) }
        </>
    );
}