/**
 * The folder sub-components contains sub component of all the pages,
 * so here you will find folder names which are listed in root pages.
 */

// sub components for /pages/dashboard
import LatestSignals from 'sub-components/dashboard/LatestSignals';
import TasksPerformance from 'sub-components/dashboard/TasksPerformance';
import Teams from 'sub-components/dashboard/Teams';

// sub components for /pages/profile
import AboutMe from 'sub-components/profile/AboutMe';
import ActivityFeed from 'sub-components/profile/ActivityFeed';
import MyTeam from 'sub-components/profile/MyTeam';
import ProfileHeader from 'sub-components/profile/ProfileHeader';
import ProjectsContributions from 'sub-components/profile/ProjectsContributions';
import RecentFromBlog from 'sub-components/profile/RecentFromBlog';

// sub components for /pages/billing
import CurrentPlan from 'sub-components/billing/CurrentPlan';
import BillingAddress from 'sub-components/billing/BillingAddress';

// sub components for /pages/settings
import DeleteAccount from 'sub-components/settings/DeleteAccount';
import PasswordSetting from 'sub-components/settings/PasswordSetting';
import UserSetting from 'sub-components/settings/UserSetting';
import GeneralSetting from 'sub-components/settings/GeneralSetting';
import Notifications from 'sub-components/settings/Notifications';
import Preferences from 'sub-components/settings/Preferences';

import SignalsHistory from 'sub-components/signals-history/SignalsHistory';

export {
   LatestSignals,
   TasksPerformance,
   Teams,
   
   AboutMe,
   ActivityFeed,
   MyTeam,
   ProfileHeader,
   ProjectsContributions,
   RecentFromBlog,

   CurrentPlan,
   BillingAddress,

   DeleteAccount, 
   PasswordSetting,  
   GeneralSetting,
   UserSetting, 
   Notifications, 
   Preferences,

   SignalsHistory
};
