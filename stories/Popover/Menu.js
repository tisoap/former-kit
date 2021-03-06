import React, { Fragment } from 'react'
import { action } from '@storybook/addon-actions'
import { PopoverMenu, PopoverContent } from '../../src/Popover'

const items = [
  {
    action: () => action('account'),
    title: 'Minha Conta',
  },
  {
    action: () => action('logout'),
    title: 'Logout',
  },
]

const Menu = () => (
  <Fragment>
    <PopoverContent>
      test@email.com
      <small>Admin</small>
    </PopoverContent>
    <PopoverMenu items={items} />
  </Fragment>
)

export default Menu
