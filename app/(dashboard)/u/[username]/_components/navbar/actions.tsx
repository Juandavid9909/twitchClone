import { LogOut } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const Actions = () => {
    return (
        <div className="flex items-center justify-end gap-x-2">
            <Button
                asChild
                className="text-muted-foreground hover:text-primary"
                size="sm"
                variant="ghost"
            >
                <Link href="/">
                    <LogOut className="h-5 w-5 mr-2" />
                    Exit
                </Link>
            </Button>

            <UserButton
                afterSignOutUrl="/"
            />
        </div>
    );
}