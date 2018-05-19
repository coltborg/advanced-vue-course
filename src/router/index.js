import ControlledComponent from '../pages/ControlledComponent';
import ThirdPartyControlledComponent from '../pages/ThirdPartyControlledComponent';
import ClosingOnEscape from '../pages/ClosingOnEscape';
import BackgroundScrolling from '../pages/BackgroundScrolling';
import VuePortals from '../pages/VuePortals';
import ReuseVuePortals from '../pages/ReuseVuePortals';

export default [
  {
    component: ControlledComponent,
    path: '/controlled-component',
    name: 'ControlledComponent',
  },
  {
    component: ThirdPartyControlledComponent,
    path: '/third-party-controlled-component',
    name: 'ThirdPartyControlledComponent',
  },
  {
    component: ClosingOnEscape,
    path: '/closing-on-escape',
    name: 'ClosingOnEscape',
  },
  {
    component: BackgroundScrolling,
    path: '/background-scrolling',
    name: 'BackgroundScrolling',
  },
  {
    component: VuePortals,
    path: '/vue-portals',
    name: 'VuePortals',
  },
  {
    component: ReuseVuePortals,
    path: '/reuse-vue-portals',
    name: 'ReuseVuePortals',
  },
]
