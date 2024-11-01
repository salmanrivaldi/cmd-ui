// app/form/page.tsx
import { Form1 } from "@/components/05-Pages/Pencatatan/Form1";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Form 1 Penjangkauan",
	description: "Form penjangkauan untuk sistem CMD",
};

export default function Page() {
	return <Form1 />;
}
