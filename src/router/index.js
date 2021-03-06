import ControlledComponent from '../pages/ControlledComponent';
import ThirdPartyControlledComponent from '../pages/ThirdPartyControlledComponent';
import ClosingOnEscape from '../pages/ClosingOnEscape';
import BackgroundScrolling from '../pages/BackgroundScrolling';
import VuePortals from '../pages/VuePortals';
import ReuseVuePortals from '../pages/ReuseVuePortals';
import UsingSlots from '../pages/UsingSlots';
import ModalComposition from '../pages/ModalComposition';
import StartingRenderlessComponents from '../pages/StartingRenderlessComponents';
import ElementQueries from '../pages/ElementQueries';
import ProvideInjectComponetComponents from '../pages/ProvideInjectComponetComponents';
import SortableListComponent from '../pages/SortableListComponent';
import SearchSelectComponent from '../pages/SearchSelectComponent';

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
  {
    component: UsingSlots,
    path: '/using-slots',
    name: 'UsingSlots',
  },
  {
    component: ModalComposition,
    path: '/modal-composition',
    name: 'ModalComposition',
  },
  {
    component: StartingRenderlessComponents,
    path: '/starting-renderless-components',
    name: 'StartingRenderlessComponents',
  },
  {
    component: ElementQueries,
    path: '/element-queries',
    name: 'ElementQueries',
  },
  {
    component: ProvideInjectComponetComponents,
    path: '/provide-inject-componet-components',
    name: 'ProvideInjectComponetComponents',
  },
  {
    component: SortableListComponent,
    path: '/sortable-list-component',
    name: 'SortableListComponent',
  },
  {
    component: SearchSelectComponent,
    path: '/search-select-component',
    name: 'SearchSelectComponent',
  },
];
