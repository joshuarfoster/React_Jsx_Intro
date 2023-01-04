const App = () => {
    return(
        <div>
            <Tweet
            name='Josh'
            username='joshman'
            date={new Date().toString}
            message="love this app"
            />
            <Tweet
            name='Jim'
            username='jimmy'
            date={new Date().toString}
            message="so much fun"
            />
            <Tweet
            name='Sarah'
            username='sarrraahhh'
            date={new Date().toString}
            message="just signed up"
            />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));