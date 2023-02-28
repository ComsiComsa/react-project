import { classNames } from './classNames'

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('mainClass')).toBe('mainClass')
    })

    test('with additional class', () => {
        const expected = 'mainClass class1 class2'
        expect(classNames('mainClass', {}, ['class1', 'class2'])).toBe(expected)
    })

    test('with true mods', () => {
        const expected = 'mainClass class1 class2 hovered scrollable'
        expect(classNames(
            'mainClass',
            { hovered: true, scrollable: true },
            ['class1', 'class2'])
        ).toBe(expected)
    })

    test('with both false and true mods', () => {
        const expected = 'mainClass class1 class2 scrollable'
        expect(classNames(
            'mainClass',
            { hovered: false, scrollable: true },
            ['class1', 'class2'])
        ).toBe(expected)
    })

    test('with mods undefined', () => {
        const expected = 'mainClass class1 class2 hovered'
        expect(classNames(
            'mainClass',
            { hovered: true, scrollable: undefined },
            ['class1', 'class2'])
        ).toBe(expected)
    })
})
