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
				excepturi ducimus sequi dignissimos expedita tempore omnis quos cum,
				possimus, aspernatur esse nihil commodi est maiores dolorum rem iusto
				atque, beatae voluptas sit eligendi architecto dolorem temporibus. Non
				magnam ipsam, voluptas quasi nam dicta ut. Ad corrupti aliquid obcaecati
				alias, nemo veritatis porro nisi eius sequi dignissimos ea repellendus
				quibusdam minima ipsum animi quae, libero quisquam a! Laudantium iste
				est sapiente, ullam itaque odio iure laborum voluptatem quaerat tempore
				doloremque quam modi, atque minima enim saepe! Dolorem rerum minima
				incidunt, officia!
			</p>
		</>
	);
};
export default Calendar;
