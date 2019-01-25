import Vue from 'vue'
import Router from 'vue-router'
import HelloEthics from '@/components/HelloEthics'
import MedicalAdventure from '@/components/medical/MedicalAdventure';
import MedicalAdventureGame from '@/components/medical/MedicalAdventureGame';
import ProgramAdventure from '@/components/program/ProgramAdventure';
import CarAdventure from '@/components/car/CarAdventure';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloEthics',
      component: HelloEthics
    },
    {
      path: '/stageone',
      name: 'MedicalAdventure',
      component: MedicalAdventure,
    },
    {
      path: '/stageone/game',
      name: 'MedicalAdventureGame',
      component: MedicalAdventureGame,
    },
    {
      path: '/stagetwo',
      name: 'CarAdventure',
      component: CarAdventure
    },
    {
      path: '/stagethree',
      name: 'ProgramAdventure',
      component: ProgramAdventure
    }
  ]
})
