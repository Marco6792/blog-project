import React from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";

export default function BlogPost() {
	return (
		<Card className="lg:max-w-6xl mx-auto  mt-8 border-0 relative max-md:w-full">
			<CardTitle className="w-fit p-5 rounded-md grid mx-auto dark:from-blue-500 dark:to-blue-400 bg-gradient-to-tr from-pink-400 to-purple-600 text-white relative">
				<span>BLOG POST</span>
				<Separator
					orientation="horizontal"
					className="w-[5.4rem] absolute bottom-5 -right-[5.4rem]"></Separator>
				<Separator
					orientation="vertical"
					className="h-[12.6rem] absolute -right-[5.5rem] top-[2.7rem]"></Separator>
			</CardTitle>

			<CardContent className="mt-[5rem]">
				<h1
					className="text-3xl font-bold dark:bg-slate-800 rounded-[50px] w-fit p-4
		bg-gray-300 border">
					TOPIC :{" "}
				</h1>
				<Separator orientation="vertical" className="h-[2rem] ml-6"></Separator>
				<Card className="text-xl p-5 max-md:text-4xl xl:text-3xl xl:max-w-md max-sm:p-3 text-slate-800 dark:text-slate-200 break-all">
					Prevention and management of Diabetic Foot Ulcer among Diabetic patients in Cameroon.{" "}
				</Card>
				<div className=" lg:max-w-5xl mx-auto lg:grid lg:grid-cols-2 xl:space-x-4 max-md:space-y-5">
					<div>
						<CardTitle className="dark:text-slate-200 mt-[6rem] ">
							<span className="dark:bg-slate-800 rounded-[50px] w-fit p-4 bg-gray-100 border">
								1.1 BACKGROUND
							</span>
						</CardTitle>
						<Separator orientation="vertical" className="h-[2rem] ml-5"></Separator>
						<main className="">
							<Card className="dark:text-slate-300 text-xl pb-4 border-b-0 p-4">
								Diabetic mellitus is a condition which affects the person's ability to
								control their own blood sugar levels, either because their body doesn't
								produce enough insulin or because of insulin resistance when cells don't
								respond to the insulin that is produce.
							</Card>
							<Card className="dark:text-slate-300 text-xl border-t-0 p-4">
								Diabetic is one of the major health problems that had increased
								substantially over the past 2-3 decades in health systems and is currently
								considered to be a global public health threat. According to the latest data
								that showed that a global prevalence of 360 million people with diabetes in
								the year 2013 and is expected to rise to more than 600 million by the year
								2035. Diabetes is broadly divided into major types subtyps: type1 and type2
								out of which type 2 diabetes accounts for the majority {">"} 85% of the
								prevalence of total diabetes.
							</Card>
						</main>
					</div>

					{/* comment */}

					<div>
						<CardTitle className="dark:text-slate-200 mt-[6rem] ">
							<span className="dark:bg-slate-800 rounded-[50px] w-fit p-4 bg-gray-100 border max-sm:line-clamp-2 leading-loose">
								1.2 STATEMENT OF THE PROBLEM
							</span>
						</CardTitle>
						<Separator orientation="vertical" className="h-[2rem] ml-7"></Separator>
						<main className="">
							<Card className="dark:text-slate-300 text-xl pb-4 border-b-0 p-4">
								The Diabetic Foot is one of the major complications of diabetes; alterations
								such as peripheral arterial disease and diabetic neuropathy, which can
								progress to ulcers and even amputations , causing mobility and independence
								limitations in older adults.
							</Card>
							<Card className="dark:text-slate-300 text-xl border-t-0 p-4">
								The purpose of this studies is to assess the prevention and management of
								Foot ulceration in Diabetic patients in Cameroon hospitals.
							</Card>
						</main>
					</div>

					{/* comment */}
					<div>
						<CardTitle className="dark:text-slate-200 mt-[6rem] ">
							<span className="dark:bg-slate-800 rounded-[50px] w-fit p-4 bg-gray-100 border max-sm:line-clamp-2 leading-loose">
								1.3 SIGNIFICANCE OF THE STUDY
							</span>
						</CardTitle>
						<Separator orientation="vertical" className="h-[2rem] ml-7"></Separator>
						<main className="relative">
							<Card className="dark:text-slate-300 text-xl pb-4 border-b-0 p-4">
								the significance lies in its potential to improve on the prevention and
								management of diabetic Foot by identifying the specific factors that affect
								Foot Ulcer prevention and management. understanding these factors can inform
								targeted intervention that addresses the unique needs and challenges of this
								study group, ultimately improving glycerin control , reducing the risk of
								complications, and enhancing patients quality of life.
							</Card>
							<Card className="dark:text-slate-300 text-xl border-t-0 p-4 border-b-0">
								Furthermore , the studies findings can contribute to health care policies
								and practices aimed at reducing the burden of diabetes on health care
								systems and improving public health outcomes.
							</Card>
							<Card className="dark:text-slate-300 text-xl border-t-0 p-4">
								By identifying effective strategies for managing diabetes in this age group
								, the study is more to promote healthy aging, reduce premature mortality,
								and improving health resource allocation.
							</Card>
							<Separator
								orientation="vertical"
								className="h-[6.6rem] -rotate-[40deg] ml-[6rem] -mt-3"></Separator>
							<Separator
								orientation="vertical"
								className="h-[6.6rem] rotate-[40deg] ml-[6rem] absolute bottom-0 right-[6rem]"></Separator>
						</main>
						<Card className="text-xl p-4 font-bold flex justify-center -mt-3 dark:bg-gray-900  bg-gray-100">
							END
						</Card>
					</div>
				</div>

				{/* comment */}
			</CardContent>
			<footer className="w-full">
				<Card className="p-10 mt-12 border-none max-w-md mx-auto flex justify-center items-center">
					<p className="text-2xl">&copy; {new Date().getFullYear()} blog.</p>
				</Card>
			</footer>
		</Card>
	);
}
