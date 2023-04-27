import Head from "next/head";
import React, { FC } from "react";
import scss from "@/components/pages/Style.module.scss";
import Tabs from "@/components/tabs/Tabs";

const HomePage: FC = () => {
	return (
		<>
			<Head>
				<title>Tab + Slider</title>
			</Head>
			<div className={scss.home__page}>
				<div className="container">
					<Tabs />
				</div>
			</div>
		</>
	);
};
export default HomePage;
