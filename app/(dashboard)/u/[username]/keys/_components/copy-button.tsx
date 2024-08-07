"use client";

import { CheckCheck, Copy } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

interface CopyButtonProps {
    value?: string;
}

export const CopyButton = ({ value }: CopyButtonProps) => {
    const [isCopied, setIsCopied] = useState(false);

    const onCopy = () => {
        if(!value) return;

        setIsCopied(true);

        navigator.clipboard.writeText(value);

        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    }

    const Icon = isCopied ? CheckCheck : Copy

    return (
        <Button
            disabled={ !value || isCopied }
            onClick={ onCopy }
            size="sm"
            variant="ghost"
        >
            <Icon className="h-4 w-4" />
        </Button>
    );
}