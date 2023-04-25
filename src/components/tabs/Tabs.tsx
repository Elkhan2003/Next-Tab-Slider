import React, { FC } from "react";
import scss from "./Tabs.module.scss";
import FeedBack from "@/components/tabs/pages/FeedBack";
import Calendar from "@/components/tabs/pages/Calendar";
import Staff from "@/components/tabs/pages/Staff";
import Photo from "@/components/tabs/pages/Photo";
import Video from "@/components/tabs/pages/Video";
import Certificate from "@/components/tabs/pages/Сertificate";
import {
	FeedBackIcon,
	CalendarIcon,
	StaffIcon,
	PhotoIcon,
	VideoIcon,
	CertificateIcon
} from "@/components/svgs";

const Tabs: FC = () => {
	return (
		<>
			<div>
				<div className={scss.tabs__container}>
					<div className={scss.content}>
						{/* ? feed__back */}
						<input
							className={`${scss.input__feed__back} ${scss.input}`}
							type="radio"
							name="slider"
							defaultChecked
							id="feed__back"
						/>

						{/* ? calendar */}
						<input
							className={`${scss.input__calendar} ${scss.input}`}
							type="radio"
							name="slider"
							id="calendar"
						/>

						{/* ? staff */}
						<input
							className={`${scss.input__staff} ${scss.input}`}
							type="radio"
							name="slider"
							id="staff"
						/>

						{/* ? photo */}
						<input
							className={`${scss.input__photo} ${scss.input}`}
							type="radio"
							name="slider"
							id="photo"
						/>

						{/* ? video */}
						<input
							className={`${scss.input__video} ${scss.input}`}
							type="radio"
							name="slider"
							id="video"
						/>

						{/* ? certificate */}
						<input
							className={`${scss.input__certificate} ${scss.input}`}
							type="radio"
							name="slider"
							id="certificate"
						/>

						{/* ! buttons */}
						<div className={scss.list}>
							{/* ? feed__back */}
							<label htmlFor="feed__back" className={scss.feed__back}>
								<span className={scss.icon}>
									<FeedBackIcon />
								</span>
								<span className={scss.title}>
									<pre>Отзывы</pre>
								</span>
							</label>

							{/* ? calendar */}
							<label htmlFor="calendar" className={scss.calendar}>
								<span className={scss.icon}>
									<CalendarIcon />
								</span>
								<span className={scss.title}>
									<pre>Расписание</pre>
								</span>
							</label>

							{/* ? staff */}
							<label htmlFor="staff" className={scss.staff}>
								<span className={scss.icon}>
									<StaffIcon />
								</span>
								<span className={scss.title}>
									<pre>Сотрудники</pre>
								</span>
							</label>

							{/* ? photo */}
							<label htmlFor="photo" className={scss.photo}>
								<span className={scss.icon}>
									<PhotoIcon />
								</span>
								<span className={scss.title}>
									<pre>Фото</pre>
								</span>
							</label>

							{/* ? video */}
							<label htmlFor="video" className={scss.video}>
								<span className={scss.icon}>
									<VideoIcon />
								</span>
								<span className={scss.title}>
									<pre>Видео</pre>
								</span>
							</label>

							{/* ? certificate */}
							<label htmlFor="certificate" className={scss.certificate}>
								<span className={scss.icon}>
									<CertificateIcon />
								</span>
								<span className={scss.title}>
									<pre>Сертификат</pre>
								</span>
							</label>
							<div className={scss.slider}></div>
						</div>

						{/* ! content */}
						<div className={scss.text__content}>
							{/* ? feed__back */}
							<div className={`${scss.feed__back} ${scss.left__block__text}`}>
								<FeedBack title={scss.title} text={scss.text} />
							</div>

							{/* ? calendar */}
							<div className={`${scss.calendar} ${scss.left__block__text}`}>
								<Calendar title={scss.title} text={scss.text} />
							</div>

							{/* ? staff */}
							<div className={`${scss.staff} ${scss.left__block__text}`}>
								<Staff title={scss.title} text={scss.text} />
							</div>

							{/* ? photo */}
							<div className={`${scss.photo} ${scss.left__block__text}`}>
								<Photo title={scss.title} text={scss.text} />
							</div>

							{/* ? video */}
							<div className={`${scss.video} ${scss.left__block__text}`}>
								<Video title={scss.title} text={scss.text} />
							</div>

							{/* ? certificate */}
							<div className={`${scss.certificate} ${scss.left__block__text}`}>
								<Certificate title={scss.title} text={scss.text} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Tabs;
