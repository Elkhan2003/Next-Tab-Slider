import React, { FC, useState } from "react";

const HoverButton: FC = () => {
	const [isShownHoverContent, setIsShownHoverContent] = useState(false);

	return (
		<>
			<button
				onMouseEnter={() => setIsShownHoverContent(true)}
				onMouseLeave={() => setIsShownHoverContent(false)}
			>
				Hover!
			</button>
			{isShownHoverContent && <div>It works..!</div>}
		</>
	);
};
export default HoverButton;
