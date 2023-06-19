import React, { useState } from 'react';
import SvgCrossWhiteIconSvg from '../../assets/svgs/components/cross-white-icon-svg';
import SvgMessageSendSvg from '../../assets/svgs/components/message-send-svg';
import SvgChatSvg from '../../assets/svgs/components/chat-svg';
import SvgChatbotAvtarSvg from '../../assets/svgs/components/chatbot-avtar-svg';
const ChatBot = () => {
	const [openChat, setOpenChat] = useState(false);
	const handleOpenChat = () => {
		setOpenChat(!openChat);
	};
	return (
		<div className='chat-bot'>
			<div className='bot-popup'>
				<div onClick={handleOpenChat}>
					<SvgChatSvg />
				</div>
				{openChat && (
					<div className='bot-chat'>
						<div className='bot-header'>
							<div className='chat-box-header'>
								<SvgChatbotAvtarSvg />
								<div className='chat-box-heading-wrapper'>
									<div className='chat-box-heading'>Chat Bot</div>
									<div className='chat-box-subHeading'>Online Now</div>
								</div>
							</div>

							<div onClick={handleOpenChat}>
								<SvgCrossWhiteIconSvg />
							</div>
						</div>

						<div className='bot-body'>
							<div className='msgs-scroller'>
								<div className='message-sent-wrapper'>
									<div className='msg-sent'>
										<p>Yeah sure! get him too. 1 </p>
										<div className='label-wrapper'>
											<label className='display-date'>02/12</label>
											<label className='display-time'>12:29 PM</label>
										</div>
									</div>
								</div>

								<div className='message-receive-wrapper'>
									<div className='msg-receive'>
										<div className='message-wrapper'>
											<div className='svg-wrapper'>
												<SvgChatbotAvtarSvg />
											</div>
											<p>Yeah sure! get him too. 1</p>
										</div>
										<div className='label-wrapper'>
											<label className='display-date'>02/12</label>
											<label className='display-time'>12:29 PM</label>
										</div>
									</div>
								</div>
								<div className='message-sent-wrapper'>
									<div className='msg-sent'>
										<p>Yeah sure! get him too. 2 </p>
										<div className='label-wrapper'>
											<label className='display-date'>02/12</label>
											<label className='display-time'>12:29 PM</label>
										</div>
									</div>
									<div className='msg-sent'>
										<p>Yeah sure! get him too. 3</p>
										<div className='label-wrapper'>
											<label className='display-date'>02/12</label>
											<label className='display-time'>12:29 PM</label>
										</div>
									</div>
								</div>

								<div className='message-receive-wrapper'>
									<div className='msg-receive'>
										<div className='message-wrapper'>
											<div className='svg-wrapper'>
												<SvgChatbotAvtarSvg />
											</div>
											<p>Yeah sure! get him too. 2</p>
										</div>
										<div className='label-wrapper'>
											<label className='display-date'>02/12</label>
											<label className='display-time'>12:29 PM</label>
										</div>
									</div>
									<div className='msg-receive'>
										<div className='message-wrapper'>
											<div className='svg-wrapper'>
												<SvgChatbotAvtarSvg />
											</div>
											<p>Yeah sure! get him too. 3</p>
										</div>
										<div className='label-wrapper'>
											<label className='display-date'>02/12</label>
											<label className='display-time'>12:29 PM</label>
										</div>
									</div>
									<div className='msg-receive'>
										<div className='message-wrapper'>
											<div className='svg-wrapper'>
												<SvgChatbotAvtarSvg />
											</div>
											<p>Yeah sure! get him too. 4</p>
										</div>
										<div className='label-wrapper'>
											<label className='display-date'>02/12</label>
											<label className='display-time'>12:29 PM</label>
										</div>
									</div>
								</div>
							</div>

							<div className='write-msg'>
								<input type='search' placeholder='Type Message' />
								<div className='vertical-line'></div>
								<SvgMessageSendSvg />
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
export default ChatBot;
