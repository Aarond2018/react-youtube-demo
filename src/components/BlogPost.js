import React, { useState } from "react";
import YouTube from "react-youtube";
import { useParams } from "react-router";

export default function BlogPost({ data }) {
	const [player, setPlayer] = useState(null)

	const params = useParams();
	const post = data.posts.find((dataItem) => dataItem.id === params.id);
	const youtubeID = post.url.split("v=")[1];

	const onReady = (e) => {
		setPlayer(e.target)
	};

	console.log(player)

	const onPlayHandler = e => {
		player.playVideo()
	}

	const onPauseHandler = e => {
		player.pauseVideo()
	}

	return (
		<div className="blog">
			<h3>{post.title}</h3>
			<p>{post.content}</p>
			<div className="player">
				<YouTube
					videoId={youtubeID}
					onReady={onReady}
					opts={
						{ playerVars: { 
							controls: 1,
							/* autoplay: 1 */
							/* playlist: "00AkMN9IAAY,4oCVDkb_EIs,7fPXI_MnBOY", */
							/* start: 5,
							stop: 15 */
							} }
					}
				/>
			</div>
			<button onClick={onPlayHandler} className="btn">Play</button>
			<button onClick={onPauseHandler} className="btn">Pause</button>
		</div>
	);
}
