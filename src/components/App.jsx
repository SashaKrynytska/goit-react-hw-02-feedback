import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = button => {
    this.setState(prevState => ({
      [button]: prevState[button] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, num) => total + num, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback()
      ? ((this.state.good / this.countTotalFeedback()) * 100).toFixed()
      : 0;
  };

  // ==============
  // handleStateGood = () => {
  //   // this.setState({ bad: 10 }); когда не основываемся на предыдущем - объект
  //   this.setState(prevState => ({ good: prevState.good + 1 }));
  // };

  // handleStateNeutral = () => {
  //   this.setState(prevState => ({ neutral: prevState.neutral + 1 })); //стрелка возвращает выражение, внутри которого объект
  // };

  // handleStateBad = () => {
  //   this.setState(prevState => ({ bad: prevState.bad + 1 })); //стрелка возвращает выражение, внутри которого объект
  // };

  //   render() {
  //     const { good, neutral, bad } = this.state;
  //     return (
  //       <div className="Feedback">
  //         <h2>Please leave feedback</h2>
  //         <FeedbackOptions
  //           options={Object.values(this.state)}
  //           onLeaveFeedback={this.leaveFeedback}
  //           // onIncrementGood={this.handleStateGood}
  //           // onIncrementNeutral={this.handleStateNeutral}
  //           // onIncrementBad={this.handleStateBad}
  //         />
  //         {/* <h2>Statistics</h2>
  //         <p>Good: {this.state.good}</p>
  //         <p>Neutral: {this.state.neutral}</p>
  //         <p>Bad: {this.state.bad}</p> */}
  //         <Statistics />
  //       </div>
  //     );
  //   }
  // }

  render() {
    const { good, neutral, bad } = this.state;
    const TotalFeedback = this.countTotalFeedback();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.leaveFeedback}
            //           // onIncrementGood={this.handleStateGood}
            //           // onIncrementNeutral={this.handleStateNeutral}
            //           // onIncrementBad={this.handleStateBad}
          />
        </Section>

        <Section title="Statistics">
          {TotalFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
