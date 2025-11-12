import { Background } from "./components/background";
import { Calculation } from "./components/calculation";
import { Company } from "./components/company";
import { Form } from "./components/form";
import { Guarantees } from "./components/guarantees";
import { History } from "./components/history";
import { How } from "./components/how";
import { Program } from "./components/program";
import { Stats } from "./components/stats";
import { TV } from "./components/tv";
import { Welcome } from "./components/welcome";

export const Home = () => {
	return (
		<div className="">
			<div className=" relative z-10">
				<Welcome />
				<Calculation />
				<Company />
				<History />
				<TV />
				<Stats />
				<Program />
				<How />
				<Guarantees />
				<Form />
			</div>
			<Background/>
		</div>
	);
};
