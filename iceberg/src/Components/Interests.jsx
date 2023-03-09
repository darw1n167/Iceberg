import './Interests.css'
import { useState } from 'react'
import TopVoices from './TopVoices'
import Companies from './Companies'
import Groups from './Groups'
import Schools from './Schools'

const Interests = () => {

    const [activeTab, setActiveTab] = useState('Top Voices')
    const [tab1Color, setTab1Color] = useState('green')
    const [tab2Color, setTab2Color] = useState('rgb(106, 106, 106)')
    const [tab3Color, setTab3Color] = useState('rgb(106, 106, 106)')
    const [tab4Color, setTab4Color] = useState('rgb(106, 106, 106)')
    const [tab1Underline, setTab1Underline] = useState('3px solid green')
    const [tab2Underline, setTab2Underline] = useState('transparent')
    const [tab3Underline, setTab3Underline] = useState('transparent')
    const [tab4Underline, setTab4Underline] = useState('transparent')

    const topVoicesClick = () => {
        setActiveTab('Top Voices')
        setTab1Color('green')
        setTab1Underline('3px solid green')
        setTab2Color('rgb(106, 106, 106)')
        setTab3Color('rgb(106, 106, 106)')
        setTab4Color('rgb(106, 106, 106)')
        setTab2Underline('transparent')
        setTab3Underline('transparent')
        setTab4Underline('transparent')
        
    }

    const companiesClick = () => {
        setActiveTab('Companies')
        setTab2Color('green')
        setTab2Underline('3px solid green')
        setTab1Color('rgb(106, 106, 106)')
        setTab3Color('rgb(106, 106, 106)')
        setTab4Color('rgb(106, 106, 106)')
        setTab1Underline('transparent')
        setTab3Underline('transparent')
        setTab4Underline('transparent')
    }

    const groupsClick = () => {
        setActiveTab('Groups')
        setTab3Color('green')
        setTab3Underline('3px solid green')
        setTab1Color('rgb(106, 106, 106)')
        setTab2Color('rgb(106, 106, 106)')
        setTab4Color('rgb(106, 106, 106)')
        setTab1Underline('transparent')
        setTab2Underline('transparent')
        setTab4Underline('transparent')
    }

    const schoolsClick = () => {
        setActiveTab('Schools')
        setTab4Color('green')
        setTab4Underline('3px solid green')
        setTab1Color('rgb(106, 106, 106)')
        setTab2Color('rgb(106, 106, 106)')
        setTab3Color('rgb(106, 106, 106)')
        setTab1Underline('transparent')
        setTab2Underline('transparent')
        setTab3Underline('transparent')
    }

    return (
        <div className='Interests-div'>
            <div className='Interests-title'>Interests</div>
                <div className='Interests-tabs'>
                    <div style={{color: tab1Color, borderBottom: tab1Underline}} className='tab-item1' onClick={topVoicesClick}>Top Voices</div>
                    <div style={{color: tab2Color, borderBottom: tab2Underline}} className='tab-item' onClick={companiesClick}>Companies</div>
                    <div style={{color: tab3Color, borderBottom: tab3Underline}} className='tab-item' onClick={groupsClick}>Groups</div>
                    <div style={{color: tab4Color, borderBottom: tab4Underline}} className='tab-item' onClick={schoolsClick}>Schools</div>
                </div>
            <div className='outlet'>
                {activeTab === 'Top Voices' ? <TopVoices />
                : activeTab === 'Companies' ? <Companies />
                : activeTab === 'Groups' ? <Groups />
                : activeTab === 'Schools' ? <Schools />
                : <TopVoices />}
                
            </div>
        </div>
    )
}

export default Interests