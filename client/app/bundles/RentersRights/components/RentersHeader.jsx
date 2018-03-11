import classNames from 'classnames';
{/* locale set up. Remove comment when app is translated 
  import { FormattedMessage } from 'react-intl';
  */} 
import React from 'react';


export default function RentersHeader({ className }) {	
{/* locale set up. Remove comment when app is translated  

export default function RentersHeader({ className, locale }) {	
    const availableLocales = ['en', 'es'];
    const availableLocales = ['en'];
  */}

  	
	return (
		<header
			className={classNames('pt-4', className)}
		>
			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="container-fluid">
				{/* Brand and toggle get grouped for better mobile display */}
				<div className="navbar-header">
					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
				  {/* locale set up. Remove comment when app is translated. 
          	<a className="navbar-brand" href={`/${locale}`}><strong><FormattedMessage defaultMessage="Renter's Rights Guide" id="header.title" /></strong></a>
            */}
              
          	<a className="navbar-brand" href="/"><strong>Renter's Rights Guide</strong></a>
				</div>

				{/* Collect the nav links, forms, and other content for toggling */}
				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul className="nav navbar-nav navbar-right">
				
        {/* locale set up. Remove comment when app is translated.  		
          				<li><a href={`/${locale}/rent-calculator`}><strong><FormattedMessage defaultMessage="Rent Calculator" id="header.rent-calculator" /></strong></a></li>
          				<li><a href={`/${locale}/resources`}><strong><FormattedMessage defaultMessage="Resources" id="header.resources" /></strong></a></li>
						<li><a href={`/${locale}/faq`}><strong><FormattedMessage defaultMessage="FAQ" id="header.faq" /></strong></a></li> 
		          */}		        		
		        		<li><a href="/email"><strong>Email us</strong></a></li> 
		        		<li><a href="/report-issue"><strong>Report Rental Issue</strong></a></li> 
					    <li><a href="/resources"><strong>Resources</strong></a></li>
						<li><a href="/about"><strong>About</strong></a></li> 
        
        {/* locale set up. Remove comment when app is translated.  		
						<li className="dropdown">
							<a 
								className="dropdown-toggle"
								data-toggle="dropdown" 
								href="#" 
							>
								{locale} <span className="caret" />
							</a>
							<ul className="dropdown-menu">
								{availableLocales.map(l => (
									<li
										className={l === locale ? 'active' : null}
										key={l}
									>
										<a href={`/${l}`}>
											{l}
										</a>
									</li>
								))}
							</ul>
						</li>
        */}
					</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}
