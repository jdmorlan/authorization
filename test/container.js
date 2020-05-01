const awilix = require("awilix");
const core = require("../src");

module.exports = () => {
  const container = awilix.createContainer();

  container.register({
    opaRoot: awilix.asValue("http://localhost:8181"),
    builder: awilix.asFunction(
      core.policyBuilder(({ builder, commands }) => {
        builder.use(commands.packageName());
        builder.use(commands.imports());
        builder.use(commands.defaultAllow());
        builder.use(commands.allows());
      })
    ),
    writer: awilix.asClass(core.MemoryPolicyWriter),
    publisher: awilix.asClass(core.PolicyPublisher),
    checker: awilix.asClass(core.PolicyChecker),
  });

  return container;
};
