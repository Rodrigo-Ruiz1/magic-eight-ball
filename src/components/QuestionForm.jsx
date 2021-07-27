import {React, Component} from 'react';
import Answer from './Answer';

class QuestionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            answer: 'Ask a question'
        }
    }

    _fetchAnswer = async (question) => {
        const response = await fetch(
            `https://8ball.delegator.com/magic/JSON/${question}`
        ).then(response => response.json());
        this.setState({
            answer: response.magic.answer
        })
        console.log('Response from API: ', response);
    }

    _handleChange(field, val) {
        this.setState({
            [field]: val
        })
    }

    _handleSubmit = (event) => {
        event.preventDefault();
        this._fetchAnswer(this.state.question);
    }

    render() {
        return(
            <>
            <form onSubmit={this._handleSubmit}>
                <input type="text" value={this.state.question} onChange={(event) => {
                    this._handleChange('question', event.target.value)
                }}></input>
                <button type="submit">Receive Answer</button>
            </form>
            {/* {!!this.state.answer ? (<Answer answer={this.state.answer}/>) : (<p>waiting for answer</p>)} */}
            <Answer answer={this.state.answer} />
            </>
        )
    }
}

export default QuestionForm;