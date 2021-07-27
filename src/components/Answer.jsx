function Answer(props) {
    return (
        <>
            <div className="shadow"></div>
                <div className="eball">
                    <div className="egrad"></div>
                    <div className="ewin"></div>
                    <div className="triangle">
                    </div>
                    <div className="textbox">
                        {props.answer}
                    </div>
                </div>
        </>
    )
}

export default Answer;