import '../../css/home.css'

function Home() {
    return (
        <>
            <main className="crt">
                <div className="wrapper blinking">
                    <pre style={{ backgroundColor: 'transparent', color: 'inherit', border: 'none' }}>
                        <span className="pink">import</span> <span className="brightyellow">{"{"}</span> <span className="lightblue">{"HashRouter as router, routes , route"}</span> <span className="brightyellow">{"}"}</span> from <span className="coral">'react-router-dom'</span>;<br />
                        <span className="pink">import</span> <span className="brightyellow">{"{"}</span> <span className="lightblue">{"Init"}</span> <span className="brightyellow">{"}"}</span> from <a href="https://codepen.io/thisanimus/pen/OJpaqWz" target="_blank"><span className="coral">'./_site/init.jsx'</span></a>;<br />
                        <span className="pink">import</span> <span className="brightyellow">{"{"}</span> <span className="lightblue">{"Home"}</span> <span className="brightyellow">{"}"}</span> from <a href="/home.jsx"><span className="coral">'./_site/home.jsx'</span></a>;<br />
                        <span className="pink">import</span> <span className="brightyellow">{"{"}</span> <span className="lightblue">{"GitHub"}</span> <span className="brightyellow">{"}"}</span> from <a href="https://github.com/hexagonny31" target="_blank"><span className="coral">'./_site/github.jsx'</span></a>;<br />
                        <span className="pink">import</span> <span className="brightyellow">{"{"}</span> <span className="lightblue">{"YouTube"}</span> <span className="brightyellow">{"}"}</span> from <a href="https://www.youtube.com/@hexagonny" target="_blank"><span className="coral">'./_site/youtube.jsx'</span></a>;<br />
                        <span className="pink">import</span> <span className="brightyellow">{"{"}</span> <span className="lightblue">{"MAL"}</span> <span className="brightyellow">{"}"}</span> from <a href="https://myanimelist.net/profile/-hex" target="_blank"><span className="coral">'./_site/mal.jsx'</span></a>;<br />
                        <br />
                        <span className="blue">function</span> <span className="yellow">App</span><span className="brightyellow">() {"{"}</span><br />
                        <span className="pink" style={{ paddingLeft: "2em" }}>return (</span><br />
                        <span style={{ paddingLeft: "4em" }}>{"<"}</span><span className="green">router</span>{">"}<br />
                        <span style={{ paddingLeft: "6em" }}>{"<"}</span><span className="green">routes</span>{">"}<br />
                        <span style={{ paddingLeft: "8em" }}>{"<"}</span><span className="green">route</span> <span className="lightblue">path</span>=<a href="/"><span className="coral">"/"</span></a> <span className="lightblue">element</span>=<span className="blue">{"{"}</span>{"<"}<span className="green">{"Init"}</span>{"/>"}<span className="blue">{"}"}</span> /&gt;<br />
                        <span style={{ paddingLeft: "8em" }}>{"<"}</span><span className="green">route</span> <span className="lightblue">path</span>=<a href="/home.jsx"><span className="coral">"/home"</span></a> <span className="lightblue">element</span>=<span className="blue">{"{"}</span>{"<"}<span className="green">{"Home"}</span>{"/>"}<span className="blue">{"}"}</span> /&gt;<br />
                        <span style={{ paddingLeft: "8em" }}>{"<"}</span><span className="green">route</span> <span className="lightblue">path</span>=<a href="https://github.com/hexagonny31"><span className="coral">"/github"</span></a> <span className="lightblue">element</span>=<span className="blue">{"{"}</span>{"<"}<span className="green">{"GitHub"}</span>{"/>"}<span className="blue">{"}"}</span> /&gt;<br />
                        <span style={{ paddingLeft: "8em" }}>{"<"}</span><span className="green">route</span> <span className="lightblue">path</span>=<a href="https://www.youtube.com/@hexagonny"><span className="coral">"/youtube"</span></a> <span className="lightblue">element</span>=<span className="blue">{"{"}</span>{"<"}<span className="green">{"YouTube"}</span>{"/>"}<span className="blue">{"}"}</span> /&gt;<br />
                        <span style={{ paddingLeft: "8em" }}>{"<"}</span><span className="green">route</span> <span className="lightblue">path</span>=<a href="https://myanimelist.net/profile/-hex"><span className="coral">"/mal"</span></a> <span className="lightblue">element</span>=<span className="blue">{"{"}</span>{"<"}<span className="green">{"MAL"}</span>{"/>"}<span className="blue">{"}"}</span> /&gt;<br />
                        <span style={{ paddingLeft: "4em" }}>{"</"}</span><span className="green">router</span>{">"}<br />
                        <span className="pink" style={{ paddingLeft: "2em" }}>)</span>{";"}<br />
                        <span className="brightyellow">{"}"}</span><br />
                        <br />
                        <span className="pink">export default</span> <span className="yellow">App</span><span className="cursor">_</span>
                    </pre>
                </div>
            </main>
        </>
    );
}

export default Home;