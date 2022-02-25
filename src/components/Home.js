import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Home({ data }) {
	console.log(data);
	return (
		<div className="cards">
			{data.posts.map(post => (
				<div className="card" key={post.id}>
					<div className="img-wrapper">
            <img src={`https://ytimg.googleusercontent.com/vi/${post.url.split("v=")[1]}/sddefault.jpg`} alt={post.title}></img>
          </div>
					<div>
						<h3>{post.title}</h3>
						<p>{post.content.slice(0, 100) + "..."}</p>
						<Link to="/">Learn more...</Link>
					</div>
				</div>
			))}
		</div>
	);
}