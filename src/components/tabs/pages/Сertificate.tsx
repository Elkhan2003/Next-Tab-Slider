import React, { FC } from "react";

interface TabProps {
	title?: any;
	text?: any;
}

const Calendar: FC<TabProps> = ({ title, text }) => {
	return (
		<>
			<div className={title}>Home Content</div>
			<p className={text}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
				excepturi ducimus sequi dignissimos expedita tempore omnis quos cum.
			</p>
		</>
	);
};
export default Calendar;
