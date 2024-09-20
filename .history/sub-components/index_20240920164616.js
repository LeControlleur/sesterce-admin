/**
 * The folder sub-components contains sub component of all the pages,
 * so here you will find folder names which are listed in root pages.
 */

// sub components for /pages/dashboard
import LatestSignals from 'sub-components/dashboard/LatestSignals';
import TasksPerformance from 'sub-components/dashboard/TasksPerformance';
import BotActions from 'sub-components/dashboard/BotActions';

// sub components for /pages/settings
import DeleteAccount from 'sub-components/settings/DeleteAccount';
import PasswordSetting from 'sub-components/settings/PasswordSetting';
import UserSetting from 'sub-components/settings/UserSetting';
import GeneralSetting from 'sub-components/settings/GeneralSetting';

import SignalsHistory from 'sub-components/signals-history/SignalsHistory';

export {
   LatestSignals,
   TasksPerformance,
   BotActions,
   
   DeleteAccount, 
   PasswordSetting,  
   GeneralSetting,
   UserSetting, 

   SignalsHistory
};
