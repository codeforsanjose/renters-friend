import React from 'react';
import RentersLayout from './RentersLayout';
import Flowchart from 'react-simple-flowchart';

export default class Eviction extends React.Component {

    constructor(props) {
      super(props);
      const code =

        `st=>start: Tenant receives 3-Day, 30-Day, 60-Day or 90-Day Notice to move out
        e=>end: END
        op1=>operation: Tenant is served "Summons" and "Complain-Unlawful Detainer"
        cond=>condition: 5 Days to Respond
        cond2=>condition: Trial held within 20 Days
        op6=>operation: Tenant files motion(s) within 5 days
        op5=>operation: Discovery
        op8=>operation: Landlord files "Request to Enter Default"
        op2=>operation: Landlord files "Request/Counter-Request to Set Case for Trial"
        op3=>operation: Notice of Hearing
        op15=>operation: Judgement entered in favor of Landlord
        op7=>operation: Judgment for Landlord
        op4=>operation: send email
        op9=>operation: Judgment for Tenant
        op10=>operation: Tenant Stays
        op11=>operation: Tenant receives Sheriff's 5-Day Eviction Notice
        op12=>operation: Optional: Tenant files: "Motion for Stay of Execution" (to buy more days to stay)
        op13=>operation: Sheriff evicts Tenant(s)
        op14=>operation: Optional: Tenant files "Motion to Set Aside Default and Default Judgment"

        st->op1->cond
        cond(yes)->op6->op5->op2->op3->cond2
        cond(no)->op8->op15
        cond2(right)->op7->op11
        cond2(left)->op9->op10
        op15->op14->op11->op12->op13
        `;

      const opt = {
        x: 0,
        y: 0,
        'line-width': 3,
        'line-length': 10,
        'text-margin': 20,
        'font-size': 12,
        'font-family': 'Open Sans',
        'font-color': 'black',
        'line-color': 'black',
        'element-color': 'black',
        fill: 'white',
        'yes-text': 'Tenant files motions',
        'no-text': 'Tenant does nothing',
        'arrow-end': 'block',
        scale: 1,
        symbols: {
          start: {
            'font-color': 'black',
            'element-color': 'skyblue',
            'font-weight': 'bold',
          },
          end: {
            'font-color': 'black',
            'element-color': 'orange',
            'font-weight': 'bold',
          },
        },
        flowstate: {
          department1: { fill: 'pink' },
          department2: { fill: 'yellow' },
          external: { fill: 'green' },
        },
      };

      // const tree = {
      //   type: 'info',
      //   title: 'Tenant receives 3-day, 30-day, 60-day, or 90-day notice to move out.',
      //   nextStep: {
      //     type: 'info',
      //     title: 'Tenant is served "Summons" and "Complaint - Unlawful Detainer".',
      //     nextStep: {
      //       type: 'question',
      //       title: 'Does the tenant file a motion within 5 days?',
      //       options: [
      //         {
      //           title: 'Tenant files motion(s) within 5 days',
      //           nextStep: {
      //             type: 'info',
      //             title: 'Tenant files "Answer" within 5 days',
      //           },
      //         },
      //         {
      //           title: 'Tenant does nothing within 5 days',
      //         },
      //       ],
      //     },
      //   },
      // };

      const allSteps = {
        events: [
          'Tenant receives 3-day, 30-day, 60-day, or 90-day notice to move out.',
          'Tenant is served "Summons" and "Complaint - Unlawful Detainer".',
        ],
        question: 'Does the tenant file a motion within 5 days?',
        answers: [
          {
            title: 'Tenant files motion(s) within 5 days',
            nextStep: {
              events: [
                'Tenant files "Answer" within 5 days',
                'Discovery',
                'Landlord files "Request/Counter-Request to Set Case for Trial"',
                'Notice of Hearing',
              ],
              question: 'Is the trial held within 20 days?',
              answers: [
                {
                  title: 'Judgement for Tenant',
                  nextStep: {
                    events: [
                      'Tenant Stays',
                    ],
                  },
                },
                {
                  title: 'Judgement for Landlord',
                  nextStep: {
                    events: [
                      'Tenant receives Sheriff\'s 5-day eviction notice',
                      'Optional: Tenant files "Motion for Stay of Execution" (to buy more days to stay)',
                      'Sheriff evicts tenant(s)',
                    ],
                  },
                },
              ],
            },
          },
          {
            title: 'Tenant does nothing within 5 days',
            nextStep: {
              events: [
                'Landlord files "Request to Enter Default"',
                'Judgement entered in favor of Landlord',
                'Optional: Tenant files "Motion to Set Aside Default and Default Judgement"',
                'Tenant receives Sheriff\'s 5-day eviction notice',
                'Optional: Tenant files "Motion for Stay of Execution" (to buy more days to stay)',
                'Sheriff evicts tenant(s)',
              ],
            },
          },
        ],
      };

      this.state = {
        code,
        opt,
        elementText: 'none',
        allSteps,
        currentStep: allSteps,
        events: allSteps.events,
      }
    }

    handleCodeChange(e) {
      this.setState({
        code: e.target.value,
      });

    }

    handleNext(answer) {
      this.setState({
        currentStep: answer.nextStep,
        events: [
          ...this.state.events,
          // this.state.currentStep.question,
          answer.title,
          ...answer.nextStep.events,
        ],
      });
    }
    
    handleOptChange(e) {
      this.setState({
        opt: JSON.parse(e.target.value),
      });
    }

    handleReset() {
      this.setState({
        currentStep: this.state.allSteps,
        events: this.state.allSteps.events,
      });
    }

    render() {
      const { code, currentStep, events, opt, elementText } = this.state;
      return (
        <RentersLayout>
          <div className="container">
            <h3>Tenant Eviction</h3>
            <p>
              Click "Next" to walk through the eviction process. You can see the timeline of events on the right.
            </p>

            <div className="row">
              <div className="col-md-6">
                {currentStep.question && <form>
                  <h4>{currentStep.question}</h4>
                  {currentStep.answers.map((answer, i) => (
                    <div
                      className="form-group"
                      key={i}
                    >
                      <button
                        className="btn btn-default"
                        onClick={() => this.handleNext(answer)}
                        type="button"
                      >
                        {answer.title}
                      </button>
                    </div>
                  ))}
                </form>}
                {!currentStep.question && <div>
                  <p>
                    See the Eviction Process Timeline on the right. 
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => this.handleReset()}
                    type="button"
                  >
                    Reset
                  </button>
                </div>}
              </div>
              <div className="col-md-6">
                <h4>Timeline</h4>
                <table className="table">
                  <tbody>
                    {events.map((event, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{event}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/*<h3>Tenant Eviction</h3>

            <br/>
            <h4>Eviction Process for California Residents</h4>
            <p>The following chart provides general instructions that apply to most tenants. Learn more about <a href="http://www.courts.ca.gov/27953.htm" target="_blank">special situations</a> and <a href="/renters">local San José ordinances</a>.</p>
            <Flowchart
              chartCode={code}
              options={opt}
              onClick={elementText => this.setState({elementText})}
            />*/}

            <h4> Find Help </h4>
            <ul>
              <li>Find a <a href="https://lawhelpca.org/issues/housing/landlord-and-tenant-issues" target="_blank">legal aid program</a></li>
              <li>Find help from your <a href="http://www.courts.ca.gov/selfhelp-courtresources.htm" target="_blank">court</a></li>
              <li>Refer to our list of <a href="/resources">resources</a> for more information.</li>
            </ul>

            <br/>
            <p> To learn more about the Eviction Process in the State of California, visit the <a href="http://www.courts.ca.gov/27798.htm" target="_blank">California Courts</a> website.</p>

            <button type="button" className="btn btn-default">
              <a href="http://www.courts.ca.gov/partners/documents/eviction_process_flowchart.pdf">
                <span className="glyphicon glyphicon-download-alt"></span> Download Eviction Process PDF
              </a>
            </button>
          </div>
        </RentersLayout>
      );
    }
}
