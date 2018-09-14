import React from 'react';
import RentersLayout from './RentersLayout'

export default class TenantProtectionOrdinance extends React.Component {

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
            <h1>Tenant Protection Ordinance (TPO)</h1>
          </div>

                  <p>The City of San José Tenant Protection Ordinance (TPO) outlines landlord responsibilities and tenant rights regarding notices to terminate for properties covered by the ordinance. </p>
                  <br/>
                  <div className="panel-group" id="accordion">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href="#collapse6">
                          Recent Policy Updates</a>
                        </h4>
                      </div>
                      <div id="collapse6" className="panel-collapse collapse">
                        <div className="panel-body">
                          <br/>
                          <p>On Tuesday, April 24, 2018, the City Council took action to amend the Ellis Act Ordinance, Tenant Protection Ordinance (TPO), and Apartment Rent Ordinance (ARO). Over the past several months, City of San Jose has worked with community and stakeholders to develop recommendations for these challenging issues. The following list the results from the City Council meeting regarding the Tenant Protection Ordinance:</p>
                          <ul>
                            <li>Prohibit landlords from disclosing or threatening to disclose tenants' immigration or citizenship status to authorities for the intent of retaliation consistent with AB 291;</li>
                            <li>Include "criminal activity" as a separate just cause basis for eviction when a tenant is "held to answer" for a serious or violent felony committed during tenancy and within a 1,000 ft. of the premises;</li>
                            <li>Include an "opportunity to cure" that would require that landlords to provide tenant households a written notice to remove the tenant who was held to answer from the apartment or from the lease agreement;</li>
                            <li>Return with a proposed ordinance after analysis to require landlords to post in the common areas a notice stating that it is illegal for a landlord to disclose immigration status of a tenant;</li>  <li>Return with proposed ordinance after analysis to require landlords to allow a right to repossession of the unit where an acquittal or dismissal of the tenant's felony charges;</li>
                            <li>Return with proposed ordinance after analysis to allow victims of domestic violence who have been residing in a unit with the leaseholder who is the alleged abuser a mechanism to take over the lease; and</li>
                            <li>Return with proposed ordinance after analysis to extend TPO to duplexes requiring a just cause for termination of tenancy.</li>
                          </ul>
                          <hr/>
                          <br/>
                          <p>On Tuesday, November 14, 2017, San Jose City Council voted to make an <strong>Amendment to the Tenant Protection Ordinance (TPO):</strong></p>
                          <ul>
                            <li>Include dependent child; foster child; minor in the tenant's care; spouse or domestic partner; or parent of a tenant under exempted categories of additional family members allowed under TPO's Just Cause reason for material or habitual rental agreement violation; and</li>
                            <li>Reduce the maximum occupancy limit for adults to the number allowed by the rental agreement or two adults per bedroom, whichever is greater.</li>
                          </ul>
                          <br/><br/>
                          <p>The second reading of the Tenant Protection Ordinance and Apartment Rent Ordinance took place Tuesday, November 28, 2017, and Council approved the changes above so the ordinances will go into effect on December 28, 2017. In the weeks following, staff will begin implementing a plan to reach out to constituents with informational materials and opportunities for additional assistance and education.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href="#collapse7">
                          What is covered by TPO?</a>
                        </h4>
                      </div>
                      <div id="collapse7" className="panel-collapse collapse">
                        <div className="panel-body">
                        <h5>Covered:</h5>
                          <ul>
                            <li>Rent stabilized apartments covered under ARO. Units within Apartments with 3+ units built on or before September 7, 1979</li>
                            <li>Multifamily dwellings with at least 3 units</li>
                            <li>Rental apartments except permitted hotels and motels</li>
                            <li>Guest rooms in any guesthouse and guesthouses</li>
                            <li>Units built without a permit</li>
                          </ul>
                        <h5>Not Covered:</h5>
                          <ul>
                            <li>Duplexes</li>
                            <li>Single-family homes</li>
                            <li>Permitted Second units</li>
                            <li>Single family Condominiums</li>
                            <li>Townhouses</li>
                          </ul>
                        <br/>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href="#collapse14">
                          What does it mean to be covered under TPO?</a>
                        </h4>
                      </div>
                      <div id="collapse14" className="panel-collapse collapse">
                        <div className="panel-body">
                          Buildings are covered by Just Cause and any 30-60-90 day notice to vacate must list one of the 13 just-cause reasons for eviction.
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href="#collapse8">
                          What is Just Cause?</a>
                        </h4>
                      </div>
                      <div id="collapse8" className="panel-collapse collapse">
                        <div className="panel-body">
                        <br/>
                        <p><h5> Under TPO, landlords must include one of the following 13 reasons for termination in any 30-60-90 notice to vacate to the tenant:</h5></p>
                        <li className="list-group-item active"><h4>Just Cause Terminations </h4> <p>The reasons for no-cause notice to vacate that signify fault on the part of the tenant are:</p></li>
                        <li className="list-group-item">1. Nonpayment of rent</li>
                        <li className="list-group-item">2. Material or habitual violation of the lease</li>
                        <li className="list-group-item">3. Damage to the apartment</li>
                        <li className="list-group-item">4. Refusal to agree to a similar or new rental agreement</li>
                        <li className="list-group-item">5. Disorderly behavior / disturbing the peace</li>
                        <li className="list-group-item">6. Refusing access to the apartment when requested in accordance with law</li>
                        <li className="list-group-item">7. Unapproved holdover subtenant</li>
                        <li className="list-group-item">8. Criminal activity</li>
                        <li className="list-group-item active"><h4>Just Cause Reasons Based on Landlord Decision or Consequence of Action </h4><p>Relocation benefits must be paid when a Tenant is being removed from an apartment for reasons #8-13.</p></li>
                        <li className="list-group-item">9. Substantial rehabilitation of the apartment</li>
                        <li className="list-group-item">10. Removal apartment from the rental market under the Ellis Act</li>
                        <li className="list-group-item">11. Owner move-in</li>
                        <li className="list-group-item">12. City enforcement actions requiring a moveout</li>
                        <li className="list-group-item">13. Convert an unpermitted apartment for permitted use</li>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href="#collapse9">
                          No-cause Notice</a>
                        </h4>
                      </div>
                      <div id="collapse9" className="panel-collapse collapse">
                        <div className="panel-body">
                        No-cause notices received after May 10, 2017 are no longer valid. If you have received this and are covered under TPO, please contact the City of San José Rental Rights & Referrals Program at (408)975-4480 to learn about your rights.
                        </div>
                      </div>
                    </div>
                    <br/>
                    <p>To learn more, refer to the <a href="http://www.sanjoseca.gov/DocumentCenter/View/70042">Tenant Protection Ordinance Fact Sheet</a> and the <a href="http://www.sanjoseca.gov/DocumentCenter/View/70490">Tenant Protection Ordinance Frequently Asked Questions</a>.</p>

                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href="#collapse10">
                          Landlord and Tenant Responsibilities</a>
                        </h4>
                      </div>
                      <div id="collapse10" className="panel-collapse collapse">
                        <div className="panel-body">
                          <strong>Landlord Responsibilities:</strong>
                          <ul>
                            <li>If giving a notice of termination, serve a written copy to the tenant with the proper amount of notice according to State law. Ensure that the applicable 13 just causes are included on the notice.</li>
                            <li>Provide a copy to the City within 3 days of service to the tenant. <a href="http://www.sanjoseca.gov/FormCenter/Housing-19/Online-Notice-of-Termination-of-Tenancy-301" target="_blank">You can submit a copy of the notice online.</a></li>
                            <li> Provide relocation benefits at the time of service to the tenant, if applicable.</li>
                            </ul>
                          <br/>
                          <strong>Tenant Responsibilities:</strong>
                          <ul>
                            <li>Ensure that if you receive a notice of termination, that it is in writing and with the proper amount of notice according to State law.</li>
                            <li>Ensure that the notice has at least one of the 12 just causes listed as the reason for the notice being served.</li>
                            <li> Contact the Rent Stabilization Program to ensure that the landlord submitted the notice to the City correctly. If not, contact the Law Foundation of Silicon Valley's Eviction Assistance Clinic at 408-280-2424.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
        </div>
      </RentersLayout>
    )
  }
}
