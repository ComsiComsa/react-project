import { type ReactNode } from 'react'
import { render } from '@testing-library/react'
import i18nForTest from 'shared/config/i18n/i18nForTest'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router'

export interface componentRenderOptions {
    route?: string
}
export function componentRender (component: ReactNode, options: componentRenderOptions = { }) {
    const {
        route = '/'
    } = options

    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nForTest}>
                {component}
            </I18nextProvider>
        </MemoryRouter>
    )
}
