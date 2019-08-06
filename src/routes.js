import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Wizard from './components/Wizard/Wizard'
import StepTwo from './components/Wizard/StepTwo';
import StepThree from './components/Wizard/StepThree';

export default (
    <Switch>
        <Route component={Dashboard} exact path='/'/>
        <Route component={Wizard} path='/wizard/step1'/>
        <Route component={StepTwo} path='/wizard/step2'/>
        <Route component={StepThree} path='/wizard/step3'/>
    </Switch>
)