import { Wrapper } from '../components/common'
import { SetResponse } from '../components/response'
import { LandingPage } from './index'

function HomePage() {

    return (
        <Wrapper>
            <div>
                <LandingPage />
                <SetResponse />
            </div>
        </Wrapper>

    )
}

export default HomePage