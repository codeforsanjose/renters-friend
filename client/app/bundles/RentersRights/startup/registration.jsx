import ReactOnRails from 'react-on-rails';
import Home from '../components/Home';
import Eviction from '../components/Eviction';
import About from '../components/About';
import RentCalculator from '../components/RentCalculator';
import Shelter from '../components/Shelter';
import LegalAid from '../components/LegalAid';
import Resources from '../components/Resources';
import ReportIssue from '../components/ReportIssue';
import FindJurisdiction from '../components/FindJurisdiction';
import RentIncrease from '../components/RentIncrease';
import Email from '../components/Email';

//import { addLocaleData } from 'react-intl';
//import esLocaleData from 'react-intl/locale-data/es';

//addLocaleData(esLocaleData);

// This is how react_on_rails can see the components in the browser.
ReactOnRails.register({
  Home,
  About,
  ReportIssue,
  Eviction,
  Shelter,
  LegalAid,
  RentCalculator,
  RentIncrease,
  Resources,
  FindJurisdiction,
  Email
});
