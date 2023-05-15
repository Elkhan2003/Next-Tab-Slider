import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import scss from "./Tabs.module.scss";
import TabFeedBack from "@/components/tabs/tab__pages/TabFeedBack";
import TabCalendar from "@/components/tabs/tab__pages/TabCalendar";
import TabStaff from "@/components/tabs/tab__pages/TabStaff";
import TabPhoto from "@/components/tabs/tab__pages/TabPhoto";
import TabVideo from "@/components/tabs/tab__pages/TabVideo";
import TabСertificate from "@/components/tabs/tab__pages/TabСertificate";
import {
	FeedBackIcon,
	StaffIcon,
	PhotoIcon,
	VideoIcon,
	CertificateIcon,
	CalendarIcon
} from "@/components/svgs";

interface tabsProps {
	icon: any;
	label: string;
	page?: any;
}

const tabs: tabsProps[] = [
	{
		icon: <FeedBackIcon />,
		label: "Отзывы",
		page: <TabFeedBack />
	},
	{
		icon: <CalendarIcon />,
		label: "Расписание",
		page: <TabCalendar />
	},
	{
		icon: <StaffIcon />,
		label: "Сотрудники",
		page: <TabStaff />
	},
	{
		icon: <PhotoIcon />,
		label: "Фото",
		page: <TabPhoto />
	},
	{
		icon: <VideoIcon />,
		label: "Видео",
		page: <TabVideo />
	},
	{
		icon: <CertificateIcon />,
		label: "Сертификат",
		page: <TabСertificate />
	}
];

const Tabs: FC = () => {
	const [activeTab, setActiveTab] = useState<string>(tabs[0].label);

	return (
		<>
			<div className={scss.tabs__container}>
				<div className={scss.content}>
					<div className={scss.buttons}>
						{tabs.map((tab, index) => (
							<button
								key={index + 1}
								onClick={() => {
									setActiveTab(tab.label);
								}}
								className={
									activeTab === tab.label
										? `${scss.button} ${scss.active}`
										: `${scss.button}`
								}
							>
								{activeTab === tab.label && (
									<motion.div
										layoutId="active-pill"
										className={scss.active}
										style={{
											borderRadius: 12
										}}
										transition={{ type: "spring", duration: 0.6 }}
									/>
								)}
								<span className={scss.icon}>{tab.icon}</span>
								<span className={scss.label}>{tab.label}</span>
							</button>
						))}
					</div>
					{tabs.map((tab, index) =>
						activeTab === tab.label ? (
							<div key={index + 1} className={scss.tabs__content}>
								{tab.page}
							</div>
						) : null
					)}
				</div>
			</div>
		</>
	);
};
export default Tabs;
