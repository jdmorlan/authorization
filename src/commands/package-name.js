module.exports = () => ({ policy, writer }) => {
  const org = policy.organization;
  const packageName = `${org.name}.${org.project}.${org.policy}`;

  writer.write(`package ${packageName}`);
};
