import './App.scss'
import FeatureCard from "./FeatureCard";

import iconCalculator from './assets/icon-calculator.svg'
import iconKarma from './assets/icon-karma.svg'
import iconSupervisor from './assets/icon-supervisor.svg'
import iconTeamBuilder from './assets/icon-team-builder.svg'

function App() {

    return (
        <div className={'app'} role="main">
            <h1 className={'text-center mt-4'}>Reliable, efficient delivery</h1>
            <h2 className={'text-center mb-1'}>Powered by Technology</h2>
            <p className={'mb-4 text-center'}>Our Artificial Intelligence powered tools use millions of project data
                points to
                ensure that your project
                is successful</p>
            <div className={'feature-card-container'}>
                <FeatureCard header={'supervisor'}
                             paragraph={'Monitors activity to identify project roadblocks'}
                             icon={iconSupervisor}/>

                <FeatureCard header={'team builder'}
                             paragraph={'Scans our talent network to create the optimal ream for your project'}
                             icon={iconTeamBuilder}/>
                <FeatureCard header={'karma'}
                             paragraph={'Regularly evaluates our talent to ensure quality'}
                             icon={iconKarma}/>
                <FeatureCard header={'calculator'}
                             paragraph={'Uses data from past projects to provide better delivery estimates'}
                             icon={iconCalculator}/>
            </div>

        </div>
    )
}

export default App
