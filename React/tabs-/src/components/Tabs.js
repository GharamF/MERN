import React from 'react';

class Tabs extends React.Component {
    render() {
        return (
            <div style={{ width: '30%' }}>
                <ul className='nav justify-content-center'>
                    {
                        this.props.tabs.map(tab => {
                            const active = (tab === this.props.selected ? 'active' : '')
                            return (
                                <li className='nav-items' key={tab}>
                                    <a className={'nav-link ' + active} onClick={() => this.props.setSelected(tab)} >
                                        {tab}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
                {this.props.children}
            </div>
        )
    }
}

export default Tabs;