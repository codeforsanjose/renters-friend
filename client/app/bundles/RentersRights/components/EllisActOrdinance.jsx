import React from 'react';
import RentersLayout from './RentersLayout'

export default class EllisActOrdinance extends React.Component {

 /*  render() {
    const { locale } = this.props;

    <Renters Layout locale={locale}>
  */ 
  render() {
  
  const {} = this.props;
  
  return (
      <RentersLayout>
        <div className="content-container language-paragraph">
           <div className="page-header">
            <h1>Ellis Act Ordinance</h1>
          </div>
                  <div className="panel-group" id="accordion">
                    <p>The City of San José Ellis Act Ordinance provides requirements for landlords removing apartments covered by the ordinance from the rental housing market.</p>
                    
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                          Who does this apply to?</a>
                        </h4>
                      </div>
                      <div id="collapse1" className="panel-collapse collapse">
                        <div className="panel-body">
                        <p>This ordinance applies to all apartments with 3+ units covered by the Apartment Rent Ordinance in the City of San José. </p>
                        </div>
                      </div>
                    </div>

                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
                          Removal from the Rental Market - Tenants</a>
                        </h4>
                      </div>
                      <div id="collapse2" className="panel-collapse collapse">

                        <div className="panel-body">
                        <p>
                        A property owner may recover possession of a rental unit to either demolish a rental unit or to remove the rental unit permanently from rental housing use.
                        </p>
                        <p>
                        If you receive an eviction notice from your landlord because your landlord wishes to recover possession of the rental unit, you can expect the following:
                        </p>
                        <ul>
                          <li>You will receive a Notice to Withdraw that has been filed by your landlord.</li>
                          <li>Your case will be referred to the City’s Relocation Consultant to provide you support during your relocation.</li>
                          <li>The amount of relocation fees you may be entitled to will be determined.</li>
                        </ul>
                        </div>
                      </div>
                    </div>

                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">
                          Tenant Rights and Responsibilities</a>
                        </h4>
                      </div>
                      <div id="collapse3" className="panel-collapse collapse">
                        <div className="panel-body">
                          <ul>
                            <li><h5>120-Day Notice of Eviction:</h5> You are entitled to a 120-Day Notice of Eviction.
  </li>
                            <li><h5>One-Year Extension:</h5> You may be entitled to a one-year extension from the date the landlord delivered the Notice of Intent to Withdraw if you are low-income, over the age of 62, disabled, terminally or catastrophically ill, or have school-aged children.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href="#collapse4">
                          Relocation Assistance</a>
                        </h4>
                      </div>
                      <div id="collapse4" className="panel-collapse collapse">
                        <div className="panel-body">You may be entitled to relocation assistance. The City of San José’s Relocation Consultant will determine the amount of relocation benefits you are entitled to, otherwise the determination will be based on the information provided by your Landlord.</div>
                      </div>
                    </div>

                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href="#collapse5">
                          Interested in Returning to the Unit Should it Become Available?</a>
                        </h4>
                      </div>
                      <div id="collapse5" className="panel-collapse collapse">
                        <div className="panel-body">
                        <p>
                        For units re-rented within five years, rent will be set at the rent paid when the Notice of Intent to Withdraw is given, escalated by the annual allowable rate for the number of years the unit was not occupied. </p>
                        <p>For units re-rented after 10 years, tenants will have the right to return only. </p>
                        <p>If apartments were demolished and rebuilt, tenants do not have a right to return to the newly constructed apartments.
                        </p>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href="#collapse6">
                          What to Expect for Property Owners</a>
                        </h4>
                      </div>
                      <div id="collapse6" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>The Ellis Act Ordinance allows a property owner seeking in good faith to recover possession of a rental unit and remove units from rental housing use if the property owner plans on demolishing or permanently withdrawing the units from the rental housing market.</p>
                          <p>What Property Owners Must Do (according to the City of San Jose):</p>
                          <ul>
                            <li>Noticing – All households must be provided with a minimum of 120 days’ notice. Special populations including residents over the age of 62, disabled, terminally/catastrophically ill, and residents with school-aged children must be given up to one-year notice.</li>
                            <li>Relocation Benefits – All tenants are eligible to receive relocation benefits. Special populations including low-income residents, residents over the age of 62, disabled, terminally/catastrophically ill, and residents with school-aged children are eligible for additional relocation benefits.</li>
                            <li>Right to Return – If the apartments return to the rental market within ten years, tenants have a right to return to their apartments. If the apartment is demolished and rebuilt, the right to return does not apply.</li>
                            <li>Subject to the Apartment Rent Ordinance – If a property owner demolishes existing rent controlled apartments, all new apartments built will be subject to the City’s Apartment Rent Ordinance.</li>
                          </ul>
                          <p>Additional resources for property owners:</p>
                          <ul>
                            <li><a href='http://sanjose.granicus.com/MetaViewer.php?view_id=&event_id=2680&meta_id=629076' target='_blank'>City of San Jose Housing Department staff presentation (April 2017).</a></li>
                            <li><a href='http://www.sanjoseca.gov/DocumentCenter/View/70261' target='_blank'>Ellis Act Fact Sheet for more details on the Ordinance.</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href="#collapse7">
                          Policy Updates</a>
                        </h4>
                      </div>
                      <div id="collapse7" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>On Tuesday, April 24, 2018, the City Council took action to amend the Ellis Act Ordinance, Tenant Protection Ordinance (TPO), and Apartment Rent Ordinance (ARO). Over the past several months, the City of San Jose has  worked with community and stakeholders to develop recommendations for these challenging issues. The following list the results from the City Council meeting:</p>
                          <p><a href='http://www.sanjoseca.gov/DocumentCenter/View/76752' target='_blank'>Amendment to the Ellis Act Ordinance:</a></p>
                          <ul>
                            <li>Re-control the greater of either 50% of new apartments built or the number of apartments removed from the market; </li>
                            <li>May exempt re-control requirements if 20% of the new construction is voluntarily restricted affordable rental housing built on-site. 15% would meet the Area Median Income (AMI) levels required by the Inclusionary Ordinance and the additional 5% would be restricted to 100% AMI;  </li>
                            <li>Include apartments buildings with three units under the Ellis Act; and </li>
                            <li>Allow apartments built after 1979 to use the Ellis Act procedures to permanently remove a building from the rental market after providing 120-day notification and providing relocation services to impacted tenants; and</li>
                            <li>Return with proposed ordinance after analysis to extend Ellis Act to apply to duplexes.  </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <br/>
                    <p>View the <a href="http://www.sanjoseca.gov/index.aspx?NID=5517" target="blank">Ellis Act Ordinance Fact Sheet</a> for more information.</p>
                  </div>
        </div>
      </RentersLayout>
    )
  }
}
