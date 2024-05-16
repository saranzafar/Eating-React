import { SurveyQuestion, Wrapper } from '../components/common'
import { LandingPage } from './index'

function HomePage() {
    
    return (
        <Wrapper>
            <div>
                <LandingPage />
                <SurveyQuestion />
            </div>
        </Wrapper>

    )
}

export default HomePage