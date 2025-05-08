import * as React from "react";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import FormBuilder from "./form-builder";

export default function FormCard() {
    return (
        <Card className="max-w-[22rem] shadow-active neu neu-pressed">
            <CardHeader>
                <CardTitle className="text-2xl">Kotak Aspirasi</CardTitle>
                <CardDescription>
                    Lorem, ipsum dolor sit amet consectetur adipisicing{" "}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <FormBuilder />
            </CardContent>
        </Card>
    );
}
