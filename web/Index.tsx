import { createRoot } from "react-dom/client";
import { Button } from "@/components/ui/button";
import { ArrowUpIcon } from "lucide-react";

//@ts-ignore
const container = document.body;
const root = createRoot(container!);
root.render(<App />);

function App() {
	return (
		<>
			<main className="flex flex-col py-15">
				<div className="flex flex-wrap items-center gap-2 md:flex-row">
					<Button variant="outline">Button</Button>
					<Button variant="outline" size="icon" aria-label="Submit">
						<ArrowUpIcon />
					</Button>
				</div>
			</main>
		</>
	);
}
