const App = () => {
    return (
        <div>
            <FirstComponent/>
            <NamedComponent name="Josh"/>
        </div>
    )
    
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
)