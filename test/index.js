const buildContainer = require("./container");
const core = require("../src");

const { Policy, Organization } = core.entities;

const container = buildContainer();
const publisher = container.resolve("publisher");
const checker = container.resolve("checker");

const organization = Organization.from({
  name: "eog",
  project: "ihaul",
  policy: "authz",
});

const policy = new Policy({
  id: "test-policy",
  organization: organization,
});

policy.addRule("input.method", "POST");
policy.addRule("input.url", "/users");

const run = async () => {
  await publisher.publish(policy);
  const result = await checker.check(organization, {
    method: "POST",
    url: "/users",
  });

  console.log(JSON.stringify(result, null, 2));
};

run();
