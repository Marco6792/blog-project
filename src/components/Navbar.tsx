import React from "react";
import { ModeToggle } from "./ModeToggle";

export default function () {
	return (
		<div className="mt-3 max-w-fit mx-auto rounded-full p-5 border from-pink-500 to-purple-600 bg-gradient-to-br">
			<div className="flex justify-center">
				<ModeToggle />
			</div>
		</div>
	);
}
