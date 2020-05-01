module.exports = () => ({ policy, writer }) => {
  const { command } = policy;
  writer.write(`${command.key} {\n`);

  policy.rules.forEach((allow) => {
    writer.write(`  ${allow.path} == "${allow.value}"\n`);
  });

  writer.write("}\n");
};
