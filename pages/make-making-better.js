import React from "react";
import initDoodles from "../src/make-make-making-better-look-better";

class Manifesto extends React.Component {
	render() {
		return <div className="Manifesto">
			<style jsx>{`
				.multi-medium-input {
					background: white;
					color: #444;
					font-family: sans-serif;
					max-width: 70em;
					margin: 0 auto;
					height: 150px;
					position: fixed;
					z-index: 2;
					left: 0;
					right: 0;
					bottom: 0;
					margin-bottom: 0.4cm;
					box-shadow: 0 0 50px #fff;
					border: 1px dashed rgba(0, 0, 0, 0.5);
					border-radius: 8px;
				}
				.multi-medium-word:focus {
					outline: none;
					border-radius: 3px;
					box-shadow: 0 0 2px 3px #FFFFFF, 0 0 4px 5px #FFC7C7, 0 0 100px 5px #FF77BB;
					z-index: 1;
				}
				.multi-medium-word {
					text-shadow: none;
				}
			`}</style>
			<h2 className="mission big on-mission-page" style={{position: "relative"}}>
				<span className="word">MAKE</span>{" "}
				<strong className="word">MAKING</strong>{" "}
				<span className="word">BETTER</span>{" "}
				<aside style={{fontSize: "1rem", marginTop: "2rem", opacity: 0.5}}>
					(you can select the text in this header, even tho it's a drawing)
				</aside>
			</h2>
			<div className="textual-page-content">
				<p>
					I want to <strong>improve creative software</strong>.
					I have a lot of ideas about how to do this.
				</p>
				<p>
					I'll be writing a manifesto, which I'll put here, or at least link to it (maybe I'll put it on Medium?).
					I also plan on starting a Patreon page.
					For now you can follow me on Twitter, <a href="https://twitter.com/isaiahodhner">@isaiahodhner</a>.
				</p>
			</div>
		</div>;
	}
	componentDidMount() {
		// import("../lib/multi-medium");
		this.cleanupDoodles = initDoodles();
	}
	componentWillUnmount() {
		this.cleanupDoodles();
	}
}

export default Manifesto;