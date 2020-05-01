# Authorization

Playing around with [Open Policy Agent](https://www.openpolicyagent.org)

## Prerequisites

You need the OPA server running for the test to work. The
easiest way to get something up is with [Docker](https://www.docker.com/).

Make sure you have Docker installed and then run the following
command in your terminal:

```
docker run -p 8181:8181 openpolicyagent/opa run --server --log-level debug
```

## Installation

I don't have a package up for this just yet, so you will need to clone the
repo and run it locally.

```
git clone https://github.com/jdmorlan/authorization

npm install
```

## Getting Started

There is currently only a single file that builds a policy, publishes it to OPA
and then validates against the policy.

- Run `npm test`
