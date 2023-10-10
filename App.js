const heading = React.createElement("h1", {id: "heading"},[React.createElement("h1", {id: "heading1"}, "React1")]);
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);

        const child1 = React.createElement("h1", {id: "heading1"}, "My React1");
        const child2 = React.createElement("h3", {id: "heading2"}, "My React2");