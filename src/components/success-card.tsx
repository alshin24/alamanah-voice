import React from "react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { Check } from "lucide-react";

export default function SuccessCard() {
    return (
        <Card className="w-[22rem] shadow-active neu neu-pressed ">
            <CardHeader>
                <CardTitle className="text-2xl text-center">
                    Pesan Terkirim!
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="w-full flex items-center flex-col gap-4">
                    <div className="w-fit aspect-square rounded-full bg-green-400 p-4 border-4 border-black">
                        <Check size={70} strokeWidth={2.6} color="white" />
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                    <Button asChild variant="neu" className="w-full mt-3 font-bold">
                        <Link href="/" className="font-bold">
                            Kirim Pesan Lagi
                        </Link>
                    </Button>
            </CardFooter>
        </Card>
    );
}
