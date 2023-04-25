import Head from "next/head";
import React, { FC } from "react";
import scss from "@/components/pages/Style.module.scss";
import SwiperPage from "@/components/swiper/SwiperPage";
import Tabs from "@/components/tabs/Tabs";

const HomePage: FC = () => {
	return (
		<>
			<Head>
				<title>Tab + Slider</title>
			</Head>
			<div className={scss.home__page}>
				<div className="container">
					<div className={scss.contant}>
						<h4>lorem ipsum dolor sit amet, consectetur adip</h4>
						{/*<SwiperPage />*/}
						<Tabs />
					</div>
				</div>
			</div>
		</>
	);
};
export default HomePage;
