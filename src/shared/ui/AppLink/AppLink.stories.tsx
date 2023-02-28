import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { AppLink, AppLinkTheme } from './AppLink'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
    title: 'widgets/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    args: {
        to: '/'
    }
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const PrimaryLight = Template.bind({})
PrimaryLight.args = {
    children: 'text',
    theme: AppLinkTheme.PRIMARY
}
export const SecondaryLight = Template.bind({})
SecondaryLight.args = {
    children: 'text',
    theme: AppLinkTheme.SECONDARY
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    children: 'text',
    theme: AppLinkTheme.PRIMARY
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
export const SecondaryDark = Template.bind({})
SecondaryDark.args = {
    children: 'text',
    theme: AppLinkTheme.SECONDARY
}
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]
