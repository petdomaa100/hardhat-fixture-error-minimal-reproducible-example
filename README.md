## Introduction

Hey, thanks for looking over my issue.

I have a few contracts in my protocol. Two of them are token contracts that have a shared interface and some unique functions. The shared functions have different implementations but the logic for testing them is the same. Because of this, I set up tests that can be ran for both tokens.

Unfortunately I ran into an odd `FixtureSnapshotError`.

## Reproducing the error

1. `pnpm i`
2. `pnpm test`

## Fixtures

`deployFixture` deploys all contracts in the protocol. All other fixtures extend from this.

`baseTokenFixture` is the base fixture for testing the shared interface of the token contracts. All other fixtures in this subdomain extend from this fixture.

`mintTokenFixture` is an example of a fixture that extends `baseTokenFixture`. Many tests need for a user to have already minted so I abstracted this scenario to a separate fixture.