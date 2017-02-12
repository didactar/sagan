import React, { PropTypes } from 'react'
import { Input, Topbar } from '../shared'


/*
const Frequency = () =>
    <div className='settings-input-container'> 
        <div className='settings-label'>
            Frequency
        </div>
        <div className='settings-select-container'>
            <select 
                className='settings-select' 
                onChange={props.editEmailSummary}
                defaultValue={props.settings.emailFrequency}
            >
                {Strings.frequencies.map((data, key) => {
                    return <option key={key} value={data['code']} >
                               {data[context.language]}
                           </option>
                })}
            </select>
        </div>
    </div>
*/


/*
const Language = () =>
    <div className='settings-input-container'> 
        <div className='settings-label'>
            {Strings.language[context.language]}
        </div>
        <div className='settings-select-container'>
            <select 
                onChange={props.edit}
                className='settings-select' 
                defaultValue={props.settings.timezone}
            >
                {Strings.languages.map((data, key) => {
                    return <option key={key} value={data[0]}>
                               {data[1]}
                           </option>
                })}
            </select>
        </div>
    </div>


const Timezone = (props, context) =>
    <div className='settings-input-container'> 
        <div className='settings-label'>
            {Strings.timezone[context.language]}
        </div>
        <div className='settings-select-container'>
            <select 
                onChange={props.edit}
                className='settings-select' 
                defaultValue={props.settings.timezone}
            >
                {Strings.timezones.map((data, key) => {
                    return <option key={key} value={data[0]}>
                               {data[1]}
                           </option>
                })}
            </select>
        </div>
    </div>

*/



const MailFrequency = () =>
    <Input 
        type='text'
        label='mail frequency'
        defaultValue='mail frequency'
    />


const TimeZone = () =>
    <Input 
        type='text'
        label='timezone'
        defaultValue='timezone'
    />


const Language = () =>
    <Input 
        type='text'
        label='language'
        defaultValue='language'
    />


const LoggedInSettings = props =>
    <div className='settings'>
        <div className='form-section'>
            <Language {...props} />
            <TimeZone {...props} />
            <MailFrequency {...props} />
        </div>
    </div>


const LoggedOutSettings = props =>
    <div className='settings'>
        <div className='form-section'>
            <Language {...props} />
            <TimeZone {...props} />
        </div>
    </div>


const Settings = props =>
    props.loggedIn
        ? <LoggedInSettings {...props} />
        : <LoggedOutSettings {...props} />


const SettingsWrapper = props =>
    <div>
        <Topbar theme='light' />
        <Settings />
    </div>



Settings.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
}


export default SettingsWrapper
