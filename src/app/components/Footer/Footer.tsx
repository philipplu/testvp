import React, { StatelessComponent } from 'react'
import { version } from '../../../../package.json'

const Footer: StatelessComponent = () => <span>Version {version}</span>

export { Footer }
