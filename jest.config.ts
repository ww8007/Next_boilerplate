/* eslint-disable @typescript-eslint/no-var-requires */

import { pathsToModuleNameMapper } from 'ts-jest'
import { compilerOptions } from './tsconfig.json'

const nextJest = require('next/jest')

const createJestConfig = nextJest({
    dir: '.',
})

const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleDirectories: ['node_modules', '<rootDir>/src', '<rootDir>'],
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: pathsToModuleNameMapper(
        compilerOptions.paths /* , { prefix: '<rootDir>/' } */,
    ),
    snapshotSerializers: [
        '@emotion/jest/serializer' /* if needed other snapshotSerializers should go here */,
    ],
}

export default createJestConfig(customJestConfig)
