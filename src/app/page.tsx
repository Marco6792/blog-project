import BlogPost from "@/components/BlogPost";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import pic from "@/images/Screenshot from 2024-03-07 08-39-32.png";

export default function Home() {
	// connect();
	return (
		<main className="font-san">
			<Navbar />
			<div className="flex justify-between items-center max-w-md mx-auto p-1 ">
				<Card className="p-4 font-sans dark:bg-gray-900  bg-gray-100 text-sm -mt-5">
					<p>Founder:</p>
					<p className="font-bold">SONKEY BELTA</p>
					<p>Co-Founder:</p>
					<p className="font-bold">LEONARD WENCESLAUS</p>
				</Card>
				<Card className="dark:bg-gray-900  bg-gray-100 mr-4">
					<p className="h-[7.3rem] w-[7.3rem] bg-blue-700 rounded-md rotate-[25deg]">
						<Image src={pic} alt="logo" className="rounded-md h-full object-cover"></Image>
					</p>
				</Card>
			</div>
			<Separator
				orientation="vertical"
				className="mx-auto flex h-[9.8rem] absolute left-0 right-0 top-[6.4rem]"></Separator>
			<BlogPost />
		</main>
	);
}
