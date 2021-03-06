# PetroCloud Utils (pcutils) CHANGELOG

## [Unreleased] yet

## [2.0.0] - 2018-01-01
### Changed
- Removes all unused functions `existsIn`, `promisifier`, `objectToString` [@luislobo]
- Updated dependencies [@luislobo]
- Supports async/await. From now on, only compatible with Node 8+ [@luislobo]
- Replaced jshint by eslint [@luislobo]

## [1.0.21] - 2017-01-04
### Changed
- `getJSON`, `POSTJSON` and `httpRequest` now rejects when it gets a statusCode 
 between 400 and 599 [@luislobo]

## [1.0.20] - 2016-11-07
### Changed
- Links to Coveralls badges [@luislobo]

## [1.0.19] - 2016-11-07
### Added
- Posting code coverage to Coveralls [@luislobo]

## [1.0.18] - 2016-11-07
### Changed
- Upgraded modules [@luislobo]
- Updated `README.md` with documentation about `promisifier` and `objectToString` functions [@luislobo]

## [1.0.17] - 2016-11-07
### Added
- `promisifier` and `objectToString` functions [@luislobo]

## [1.0.16] - 2016-03-16
### Added
- istanbul on the test script [@luislobo]
- `CHANGELOG.md` [@luislobo]

## [1.0.15]  - 2016-05-16
### Added
- returnBody parameter to getJSON and postJSON [@luislobo]

### Changed
- Upgraded packages [@luislobo]

## [1.0.14] - 2016-03-14
### Added
- Travis badge [@luislobo]

### Fixed
- Fix unit tests [@luislobo]

## [1.0.13] - 2016-03-14
### Added
- Badges to `README.md` [@luislobo]

### Changed
- Travis config file [@luislobo]

## [1.0.12] - 2016-03-14
### Changed
- Made getJSON and postJSON return the response body instead of the request object [@luislobo]
- Updated `README.md` [@luislobo]

## [1.0.11] - 2016-03-13
---
- general cleanup [@luislobo]
- replaced Q with Bluebird [@luislobo]
- Added unit tests and coverage [@luislobo]

[@luislobo]: https://github.com/luislobo/
[Unreleased]: https://github.com/PetroCloud/pcutils/compare/v2.0.0...HEAD
[2.0.0]: https://github.com/PetroCloud/pcutils/compare/v1.0.21...v2.0.0
[1.0.21]: https://github.com/PetroCloud/pcutils/compare/v1.0.20...v1.0.21
[1.0.20]: https://github.com/PetroCloud/pcutils/compare/v1.0.19...v1.0.20
[1.0.19]: https://github.com/PetroCloud/pcutils/compare/v1.0.18...v1.0.19
[1.0.18]: https://github.com/PetroCloud/pcutils/compare/v1.0.17...v1.0.18
[1.0.17]: https://github.com/PetroCloud/pcutils/compare/v1.0.16...v1.0.17
[1.0.16]: https://github.com/PetroCloud/pcutils/compare/v1.0.15...v1.0.16
[1.0.15]: https://github.com/PetroCloud/pcutils/compare/v1.0.14...v1.0.15
[1.0.14]: https://github.com/PetroCloud/pcutils/compare/v1.0.13...v1.0.14
[1.0.13]: https://github.com/PetroCloud/pcutils/compare/v1.0.12...v1.0.13
[1.0.12]: https://github.com/PetroCloud/pcutils/compare/v1.0.11...v1.0.12
[1.0.11]: https://github.com/PetroCloud/pcutils/compare/90d32912b84b8921ad759af5ff9410cb80472822...v1.0.11
