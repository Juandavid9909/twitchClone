"use client";

import { SearchIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import qs from "query-string";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Search = () => {
    const router = useRouter();

    const [value, setValue] = useState("");

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!value) return;

        const url = qs.stringifyUrl({
            url: "/search",
            query: { term: value }
        }, { skipEmptyString: true });

        router.push(url);
    }

    const onClear = () => {
        setValue("");
    }

    return (
        <form
        className="relative w-full lg:w-[400px] flex items-center"
            onSubmit={ onSubmit }
        >
            <Input
                className="rounded-r-none focus-visible:ring-0 focus-visible: ring-transparent focus-visible:ring-offset-0"
                onChange={ (e) => setValue(e.target.value) }
                placeholder="Search"
                value={ value }
            />

            { value && (
                <X
                    className="absolute top-2.5 right-14 h-5 w-5 text-muted-foreground cursor-pointer hover:opacity-75 transition"
                    onClick={ onClear }
                />
            ) }

            <Button
                className="rounded-l-none"
                size="sm"
                type="submit"
                variant="secondary"
            >
                <SearchIcon className="h-5 w-5 text-muted-foregound" />
            </Button>
        </form>
    );
}