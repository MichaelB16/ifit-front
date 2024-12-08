import {boot} from 'quasar/wrappers';

import AppMenuHeader from 'src/shared/components/AppMenuHeader.vue';
import AppMenuItem from 'src/shared/components/AppMenuItem.vue';
import AppSidebarLeft from 'src/shared/components/AppSidebarLeft.vue';
import AppPagination from 'src/shared/components/AppPagination.vue';
import AppTable from 'src/shared/components/AppTable.vue';
import AppTitle from 'src/shared/components/AppTitle.vue';
import AppUserAvatar from 'src/shared/components/AppUserAvatar.vue';
import AppFormProfile from 'src/shared/components/AppFormProfile.vue';
import AppBtnGoogle from 'src/shared/components/AppBtnGoogle.vue';
import AppModal from 'src/shared/components/AppModal.vue';
import AppFormFooter from 'src/shared/components/AppFormFooter.vue';
import AppInput from 'src/shared/components/AppInput.vue';
import AppSelect from 'src/shared/components/AppSelect.vue';
import AppNoData from 'src/shared/components/AppNoData.vue';
import AppBtnActions from 'src/shared/components/AppBtnActions.vue';
import { Money3Directive } from 'v-money3';
import AppInputMoney from 'src/shared/components/AppInputMoney.vue';
export default boot(({app}) => {
  app.directive('money', Money3Directive);
  app.component('AppMenuHeader', AppMenuHeader);
  app.component('AppInputMoney', AppInputMoney);
  app.component('AppSidebarLeft', AppSidebarLeft);
  app.component('AppMenuItem', AppMenuItem);
  app.component('AppTable', AppTable);
  app.component('AppTitle', AppTitle);
  app.component('AppUserAvatar', AppUserAvatar);
  app.component('AppFormProfile', AppFormProfile);
  app.component('AppPagination', AppPagination);
  app.component('AppBtnGoogle', AppBtnGoogle);
  app.component('AppModal', AppModal);
  app.component('AppFormFooter', AppFormFooter);
  app.component('AppInput', AppInput);
  app.component('AppSelect', AppSelect);
  app.component('AppNoData', AppNoData);
  app.component('AppBtnActions', AppBtnActions);
});
